import React, { useState } from "react";

const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV ? "http://127.0.0.1:8000" : window.location.origin);

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

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
    if (isSubmitting) return;

    setSubmitted(false);
    setSubmissionError("");

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch(`${apiBaseUrl.replace(/\/+$/, "")}/api/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          source_page: window.location.pathname,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        const fieldErrors = Object.fromEntries(
          Object.entries(data)
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
        throw new Error(data.message || `Request failed (${response.status}).`);
      }

      if (data.success !== true) {
        throw new Error("The server did not confirm your enquiry.");
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Failed to submit contact enquiry:", error);
      setSubmissionError(
        error instanceof TypeError
          ? "We couldn't connect to the contact service. Please try again later."
          : error.message || "Your enquiry could not be submitted. Please try again.",
      );
    } finally {
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
        >
          <div className="success-icon">✓</div>

          <div>
            <strong>Message sent successfully.</strong>

            <p>
              Thank you for contacting us. Our team will
              get back to you shortly.
            </p>
          </div>
        </div>
      )}

      {submissionError && (
        <p className="contact-form-error" role="alert">
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