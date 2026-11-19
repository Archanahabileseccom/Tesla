import React, { useRef, useState } from "react";
import { getContactApiUrl } from "../../api/contact";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  subject: "",
  message: "",
};
const submissionSuccessMessage =
  "Thank you for contacting Tesla Innovation Private Limited! Your enquiry has been submitted successfully. Our team will contact you soon.";
const submissionErrorMessage =
  "Unable to submit your enquiry right now. Please try again later.";

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const submissionLock = useRef(false);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    // Remove error when user starts correcting the field
    if (errors[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));
    }

    // Hide success message when user edits the form again
    if (submitted) {
      setSubmitted(false);
    }
    if (submissionError) {
      setSubmissionError("");
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const service = formData.service.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    }

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (phone && (phone.length < 7 || phone.length > 25 || !/^[0-9+().\-\s]+$/.test(phone))) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!service) {
      newErrors.service = "Please select a service.";
    }

    if (!subject) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!message) {
      newErrors.message = "Please enter your message.";
    } else if (message.length < 10) {
      newErrors.message =
        "Message must contain at least 10 characters.";
    }

    return newErrors;
  };

  // Submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submissionLock.current) return;

    setSubmitted(false);
    setSubmissionError("");

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    submissionLock.current = true;
    setIsSubmitting(true);

    try {
      const contactApiUrl = getContactApiUrl();
      if (!contactApiUrl) {
        throw new Error(submissionErrorMessage);
      }

      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          service: formData.service,
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          source_page: window.location.pathname,
        }),
      });

      const responseBody = await response.text();
      let data;
      try {
        data = responseBody.trim() ? JSON.parse(responseBody) : null;
      } catch {
        throw new Error(submissionErrorMessage);
      }

      if (!response.ok) {
        const errorData =
          data && typeof data === "object" && !Array.isArray(data) ? data : {};
        const fieldErrors = Object.fromEntries(
          Object.entries(errorData.errors || errorData)
            .filter(([field]) => field in initialFormData)
            .map(([field, messages]) => [
              field,
              Array.isArray(messages) ? messages.join(" ") : String(messages),
            ]),
        );
        if (Object.keys(fieldErrors).length > 0) {
          setErrors(fieldErrors);
          throw new Error("Please correct the highlighted fields and try again.");
        }
        throw new Error(submissionErrorMessage);
      }

      if (
        !data ||
        typeof data !== "object" ||
        Array.isArray(data) ||
        data.success !== true ||
        !data.data ||
        data.data.id == null
      ) {
        throw new Error(submissionErrorMessage);
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Failed to submit contact enquiry:", error);
      setSubmissionError(
        error instanceof TypeError
          ? submissionErrorMessage
          : error instanceof Error
            ? error.message
            : submissionErrorMessage,
      );
    } finally {
      submissionLock.current = false;
      setIsSubmitting(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitted(false);
    setSubmissionError("");
  };

  return (
    <div className="contact-form-wrapper">

      {/* Success Message */}

      {submitted && (
        <div
          className="contact-form-success"
          role="status"
          aria-live="polite"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            margin: "14px 0 0",
            padding: "14px 16px",
            border: "1px solid #a7f3d0",
            backgroundColor: "#ecfdf5",
            color: "#166534",
          }}
        >
          <div className="success-icon">✓</div>

          <div>
            <strong>{submissionSuccessMessage}</strong>
          </div>
        </div>
      )}

      {submissionError && (
        <p
          className="contact-form-error"
          role="alert"
          style={{ margin: "14px 0 0", color: "#b91c1c" }}
        >
          {submissionError}
        </p>
      )}

      {/* Form */}

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        noValidate
      >

        {/* Name + Email */}

        <div className="form-row">

          <div className="form-group">

            <label htmlFor="contact-name">
              Full Name <span>*</span>
            </label>

            <input
              id="contact-name"
              type="text"
              name="name"
              maxLength={100}
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
            />

            {errors.name && (
              <small className="form-error">
                {errors.name}
              </small>
            )}

          </div>


          <div className="form-group">

            <label htmlFor="contact-email">
              Email Address <span>*</span>
            </label>

            <input
              id="contact-email"
              type="email"
              name="email"
              maxLength={254}
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
            />

            {errors.email && (
              <small className="form-error">
                {errors.email}
              </small>
            )}

          </div>

        </div>


        {/* Phone + Company */}

        <div className="form-row">

          <div className="form-group">

            <label htmlFor="contact-phone">
              Phone Number
            </label>

            <input
              id="contact-phone"
              type="tel"
              name="phone"
              maxLength={25}
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
            />

            {errors.phone && (
              <small className="form-error">
                {errors.phone}
              </small>
            )}

          </div>


          <div className="form-group">

            <label htmlFor="contact-company">
              Company
            </label>

            <input
              id="contact-company"
              type="text"
              name="company"
              maxLength={150}
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter your company"
              autoComplete="organization"
            />

          </div>

        </div>


        {/* Service */}

        <div className="form-group">

          <label htmlFor="contact-service">
            Service Interested In <span>*</span>
          </label>

          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
          >
            <option value="">Select a service</option>
            <option value="intellectual-property">Intellectual Property</option>
            <option value="patents">Patents</option>
            <option value="trademarks">Trademarks</option>
            <option value="industrial-designs">Industrial Designs</option>
            <option value="global-ip">Global Intellectual Property</option>
            <option value="technology">Technology &amp; Innovation</option>
            <option value="corporate">Corporate Advisory</option>
            <option value="litigation">Litigation</option>
            <option value="transactions">Transactions</option>
            <option value="other">Other</option>
          </select>

          {errors.service && (
            <small className="form-error">
              {errors.service}
            </small>
          )}

        </div>


        {/* Subject */}

        <div className="form-group">

          <label htmlFor="contact-subject">
            Subject <span>*</span>
          </label>

          <input
            id="contact-subject"
            type="text"
            name="subject"
            maxLength={200}
            value={formData.subject}
            onChange={handleChange}
            placeholder="How can we help you?"
            aria-invalid={Boolean(errors.subject)}
          />

          {errors.subject && (
            <small className="form-error">
              {errors.subject}
            </small>
          )}

        </div>


        {/* Message */}

        <div className="form-group">

          <label htmlFor="contact-message">
            Message <span>*</span>
          </label>

          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            maxLength={3000}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            rows="7"
            aria-invalid={Boolean(errors.message)}
          />

          <div className="message-footer">

            {errors.message ? (
              <small className="form-error">
                {errors.message}
              </small>
            ) : (
              <span />
            )}

            <small>
              {formData.message.length}/3000
            </small>

          </div>

        </div>


        {/* Buttons */}

        <div className="form-actions">

          <button
            type="button"
            className="form-reset-button"
            onClick={handleReset}
            disabled={isSubmitting}
          >
            Clear
          </button>

          <button
            type="submit"
            className="form-submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="submit-spinner" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <span className="submit-arrow">→</span>
              </>
            )}
          </button>

        </div>

      </form>


      {/* Privacy Note */}

      <p className="contact-form-note">
        By submitting this form, you agree that we may use
        your information to respond to your enquiry.
      </p>

    </div>
  );
};

export default ContactForm;