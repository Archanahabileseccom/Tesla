import React, { useState } from "react";
import { Link } from "react-router-dom";

import Section from "../components/Sections/Section";
import SectionTitle from "../components/Sections/SectionTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
		const subject = formData.subject || "General Enquiry";
		const body = [
			`Name: ${formData.name}`,
			`Email: ${formData.email}`,
			`Phone: ${formData.phone || "Not provided"}`,
			`Company: ${formData.company || "Not provided"}`,
			`Enquiry type: ${subject}`,
			"",
			formData.message,
		].join("\n");
		window.location.href = `mailto:gsnnaren@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        /* =========================================
           CONTACT PAGE
        ========================================= */

        .contact-page {
          width: 100%;
          overflow: hidden;
          background: linear-gradient(180deg, #eef9f6 0%, #f8faf9 100%);
          color: #111111;
          font-family: "DM Sans", "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
        }

        .contact-page *,
        .contact-page *::before,
        .contact-page *::after {
          box-sizing: border-box;
        }

        /* =========================================
           HERO
        ========================================= */

        .contact-hero {
          position: relative;
          min-height: 480px;
          display: flex;
          align-items: center;
          background:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.88) 0%,
              rgba(0, 0, 0, 0.68) 45%,
              rgba(0, 0, 0, 0.25) 100%
            ),
            url("/images/contact/hero.svg") center / cover no-repeat;
        }

        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.12),
            rgba(0, 0, 0, 0.35)
          );
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
          width: min(100% - 64px, 1180px);
          margin: 0 auto;
          padding: 96px 0 112px;
          color: #ffffff;
        }

        .contact-hero-eyebrow {
          display: inline-block;
          margin-bottom: 16px;
          color: #e82127;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .contact-hero h1 {
          max-width: 780px;
          margin: 0;
          color: #ffffff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 60px;
          line-height: 1.08;
          font-weight: 400;
        }

        .contact-hero p {
          max-width: 650px;
          margin: 24px 0 26px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 17px;
          line-height: 1.75;
        }

        .contact-hero-button {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          padding: 16px 24px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: 0.3s ease;
        }

        .contact-hero-button span {
          font-size: 18px;
        }

        .contact-hero-button:hover {
          background: #ffffff;
          color: #111111;
        }

        /* =========================================
           INTRO
        ========================================= */

        .contact-intro {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }

        .contact-intro-text {
          border-left: 1px solid #dddddd;
          padding-left: 50px;
        }

        .contact-intro-text p {
          margin: 0 0 22px;
          color: #555555;
          font-size: 16px;
          line-height: 1.8;
        }

        .contact-intro-text p:last-child {
          margin-bottom: 0;
        }

        /* =========================================
           CONTACT INFORMATION
        ========================================= */

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 60px;
        }

        .contact-info-card {
          position: relative;
          min-height: 280px;
          padding: 35px 28px;
          border: 1px solid #e4e4e4;
          background: #ffffff;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-8px);
          border-color: #111111;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.08);
        }

        .contact-info-number {
          margin-bottom: 45px;
          color: #e82127;
          font-size: 13px;
          font-weight: 700;
        }

        .contact-info-label {
          display: block;
          margin-bottom: 12px;
          color: #888888;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .contact-info-card h3 {
          margin: 0 0 18px;
          color: #111111;
          font-size: 21px;
          line-height: 1.25;
        }

        .contact-info-card a {
          display: inline-block;
          margin-bottom: 18px;
          color: #111111;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          word-break: break-word;
        }

        .contact-info-card a:hover {
          color: #e82127;
        }

        .contact-info-card p {
          margin: 0;
          color: #777777;
          font-size: 14px;
          line-height: 1.6;
        }

        /* =========================================
           CONTACT FORM
        ========================================= */

        .contact-form-section {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 100px;
          align-items: start;
        }

        .contact-form-heading {
          color: #ffffff;
        }

        .contact-form-heading > span {
          display: block;
          margin-bottom: 25px;
          color: #e82127;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .contact-form-heading h2 {
          margin: 0 0 25px;
          color: #ffffff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 40px;
          font-weight: 400;
          line-height: 1.2;
        }

        .contact-form-heading p {
          max-width: 480px;
          margin: 0;
          color: rgba(255, 255, 255, 0.65);
          font-size: 16px;
          line-height: 1.8;
        }

        .contact-form-wrapper {
          width: 100%;
        }

        .contact-success-message {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 25px;
          padding: 18px 20px;
          border-left: 3px solid #e82127;
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
        }

        .contact-success-message strong {
          font-size: 15px;
        }

        .contact-success-message span {
          color: rgba(255, 255, 255, 0.65);
          font-size: 13px;
        }

        .contact-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .contact-form-group {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .contact-form-full {
          grid-column: 1 / -1;
        }

        .contact-form-group label {
          margin-bottom: 10px;
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .contact-form-group input,
        .contact-form-group select,
        .contact-form-group textarea {
          width: 100%;
          padding: 15px 16px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          outline: none;
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          font-family: inherit;
          font-size: 14px;
          transition: 0.3s ease;
        }

        .contact-form-group input::placeholder,
        .contact-form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .contact-form-group select {
          color: #ffffff;
          cursor: pointer;
        }

        .contact-form-group select option {
          background: #111111;
          color: #ffffff;
        }

        .contact-form-group input:focus,
        .contact-form-group select:focus,
        .contact-form-group textarea:focus {
          border-color: #e82127;
          background: rgba(255, 255, 255, 0.08);
        }

        .contact-form-group textarea {
          min-height: 170px;
          resize: vertical;
        }

        .contact-form-submit {
          grid-column: 1 / -1;
          margin-top: 5px;
        }

        .contact-submit-button {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          padding: 17px 28px;
          border: 1px solid #e82127;
          background: #e82127;
          color: #ffffff;
          cursor: pointer;
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: 0.3s ease;
        }

        .contact-submit-button span {
          font-size: 18px;
        }

        .contact-submit-button:hover {
          background: transparent;
          color: #ffffff;
        }

        /* =========================================
           OFFICE
        ========================================= */

        .contact-prep-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 60px;
        }

        .contact-prep-card {
          padding: 40px 35px;
          border-top: 1px solid #111111;
          background: #ffffff;
        }

        .contact-prep-card > span {
          display: block;
          margin-bottom: 30px;
          color: #888888;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .contact-prep-card h3 {
          margin: 0 0 20px;
          color: #111111;
          font-size: 32px;
          letter-spacing: -1px;
        }

        .contact-prep-card p {
          margin: 0 0 25px;
          color: #666666;
          font-size: 14px;
          line-height: 1.8;
        }

        .contact-prep-card a {
          color: #111111;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .contact-prep-card a:hover {
          color: #e82127;
        }

        /* =========================================
           FAQ
        ========================================= */

        .contact-faq {
          max-width: 900px;
          margin: 60px auto 0;
        }

        .contact-faq details {
          border-top: 1px solid #dcdcdc;
        }

        .contact-faq details:last-child {
          border-bottom: 1px solid #dcdcdc;
        }

        .contact-faq summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 25px 0;
          cursor: pointer;
          list-style: none;
          color: #111111;
          font-size: 17px;
          font-weight: 600;
        }

        .contact-faq summary::-webkit-details-marker {
          display: none;
        }

        .contact-faq summary span {
          flex-shrink: 0;
          font-size: 25px;
          font-weight: 300;
          transition: transform 0.3s ease;
        }

        .contact-faq details[open] summary span {
          transform: rotate(45deg);
        }

        .contact-faq details p {
          max-width: 750px;
          margin: -5px 0 25px;
          padding-right: 60px;
          color: #666666;
          font-size: 15px;
          line-height: 1.8;
        }

        /* =========================================
           CAREERS CTA
        ========================================= */

        .contact-careers-cta {
          position: relative;
          min-height: 580px;
          display: flex;
          align-items: center;
          background:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.92),
              rgba(0, 0, 0, 0.62)
            ),
            url("/images/careers/hero.svg") center / cover no-repeat;
        }

        .contact-careers-content {
          width: min(100% - 64px, 1180px);
          margin: 0 auto;
          padding: 100px 0;
          color: #ffffff;
        }

        .contact-careers-content > span {
          display: block;
          margin-bottom: 25px;
          color: #e82127;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .contact-careers-content h2 {
          margin: 0 0 25px;
          color: #ffffff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 60px;
          line-height: 1.08;
          font-weight: 400;
        }

        .contact-careers-content p {
          max-width: 550px;
          margin: 0 0 35px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 16px;
          line-height: 1.75;
        }

        .contact-careers-button {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          padding: 16px 25px;
          background: #ffffff;
          color: #111111;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: 0.3s ease;
        }

        .contact-careers-button:hover {
          background: #e82127;
          color: #ffffff;
        }

        /* =========================================
           FINAL CTA
        ========================================= */

        .contact-final-cta {
          padding: 120px 20px;
          background: #e82127;
          color: #ffffff;
          text-align: center;
        }

        .contact-final-content {
          max-width: 850px;
          margin: 0 auto;
        }

        .contact-final-content > span {
          display: block;
          margin-bottom: 25px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .contact-final-content h2 {
          margin: 0 0 20px;
          color: #ffffff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 60px;
          line-height: 1.08;
          font-weight: 400;
        }

        .contact-final-content p {
          max-width: 600px;
          margin: 0 auto 35px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 16px;
          line-height: 1.75;
        }

        .contact-final-button {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          padding: 16px 25px;
          background: #ffffff;
          color: #111111;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: 0.3s ease;
        }

        .contact-final-button:hover {
          background: #111111;
          color: #ffffff;
        }

        /* =========================================
           RESPONSIVE
        ========================================= */

        @media (max-width: 1050px) {
          .contact-info-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .contact-form-section {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .contact-form-heading p {
            max-width: 700px;
          }
        }

        @media (max-width: 800px) {
          .contact-hero {
            min-height: 480px;
          }

          .contact-hero h1 {
            font-size: 50px;
          }

          .contact-intro {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .contact-intro-text {
            padding-left: 25px;
          }

          .contact-prep-grid {
            grid-template-columns: 1fr;
          }

          .contact-careers-cta {
            min-height: 500px;
          }
        }

        @media (max-width: 600px) {
          .contact-hero {
            min-height: 440px;
          }

          .contact-hero-content {
            width: calc(100% - 40px);
            padding: 70px 0 90px;
          }

          .contact-hero h1 {
            font-size: 42px;
          }

          .contact-hero p {
            font-size: 15px;
          }

          .contact-info-grid {
            grid-template-columns: 1fr;
          }

          .contact-form {
            grid-template-columns: 1fr;
          }

          .contact-form-full,
          .contact-form-submit {
            grid-column: auto;
          }

          .contact-form-heading h2 {
            font-size: 32px;
          }

          .contact-faq summary {
            font-size: 15px;
          }

          .contact-faq details p {
            padding-right: 20px;
          }

          .contact-careers-content h2 {
            font-size: 42px;
          }

          .contact-final-cta {
            padding: 90px 20px;
          }

          .contact-final-content h2 {
            font-size: 42px;
          }
        }
      `}</style>

      <main className="contact-page">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="contact-hero">
          <div className="contact-hero-overlay"></div>

          <div className="contact-hero-content">
            <span className="contact-hero-eyebrow">
              CONTACT
            </span>

            <h1>
              Let's Start
              <br />
              a Conversation
            </h1>

            <p>
              Connect with our team to discuss your
              intellectual property, technology, corporate,
              and business requirements.
            </p>

            <a
              href="#contact-form"
              className="contact-hero-button"
            >
              Get in Touch
              <span>↓</span>
            </a>
          </div>
        </section>

        {/* =========================================
            INTRO
        ========================================= */}

        <Section background="white" padding="large">
          <div className="contact-intro">

            <SectionTitle
              eyebrow="GET IN TOUCH"
              title="We're Here to Help"
              description="Whether you have a specific requirement or simply want to explore how we can work together, our team is ready to connect."
            />

            <div className="contact-intro-text">
              <p>
                We work with businesses, innovators,
                technology companies, and organizations
                across a wide range of industries.
              </p>

              <p>
                Tell us about your requirements and a
                member of our team will get in touch with you.
              </p>
            </div>

          </div>
        </Section>

        {/* =========================================
            CONTACT INFORMATION
        ========================================= */}

        <Section background="light" padding="large">

          <SectionTitle
            eyebrow="CONTACT INFORMATION"
            title="How You Can Reach Us"
            description="Choose the most convenient way to connect with our team."
            align="center"
          />

          <div className="contact-info-grid">

            <div className="contact-info-card">
              <div className="contact-info-number">
                01
              </div>

              <span className="contact-info-label">
                EMAIL
              </span>

              <h3>General Enquiries</h3>

              <a href="mailto:gsnnaren@gmail.com">
                gsnnaren@gmail.com
              </a>

              <p>
                For general enquiries and information.
              </p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-number">
                02
              </div>

              <span className="contact-info-label">ENQUIRIES</span>
              <h3>Share Your Brief</h3>
              <a href="#contact-form">Use the contact form ↓</a>
              <p>Tell us what you are working on and how we can help.</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-number">
                03
              </div>

              <span className="contact-info-label">SERVICES</span>

              <h3>Business Enquiries</h3>

              <Link to="/intellectual-property">Explore our services →</Link>

              <p>Learn about our intellectual property and business advisory work.</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-number">
                04
              </div>

              <span className="contact-info-label">
                CAREERS
              </span>

              <h3>Join Our Team</h3>

              <Link to="/careers">
                View Careers →
              </Link>

              <p>
                Explore current opportunities with our team.
              </p>
            </div>

          </div>
        </Section>

        {/* =========================================
            CONTACT FORM
        ========================================= */}

        <Section
          id="contact-form"
          background="dark"
          padding="large"
        >

          <div className="contact-form-section">

            <div className="contact-form-heading">

              <span>SEND US A MESSAGE</span>

              <h2>
                Tell Us How
                <br />
                We Can Help.
              </h2>

              <p>
                Complete the form and provide a few details
                about your requirement. Our team will review
                your message and get back to you.
              </p>

            </div>

            <div className="contact-form-wrapper">

              {submitted && (
                <div className="contact-success-message">
                  <strong>
                    Thank you for contacting us.
                  </strong>

                  <span>
                    Your email app should open with your message prepared.
                  </span>
                </div>
              )}

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form-group">
                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="company">
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-form-group contact-form-full">
                  <label htmlFor="subject">
                    Subject
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select an enquiry type
                    </option>

                    <option value="Intellectual Property">
                      Intellectual Property
                    </option>

                    <option value="Global IP">
                      Global IP
                    </option>

                    <option value="Litigation">
                      Litigation
                    </option>

                    <option value="Corporate">
                      Corporate Advisory
                    </option>

                    <option value="Transactions">
                      Transactions
                    </option>

                    <option value="Technology">
                      Technology & Innovation
                    </option>

                    <option value="General Enquiry">
                      General Enquiry
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="contact-form-group contact-form-full">
                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="7"
                    placeholder="Tell us about your requirement..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form-submit">
                  <button
                    type="submit"
                    className="contact-submit-button"
                  >
                    Send Message
                    <span>→</span>
                  </button>
                </div>

              </form>

            </div>

          </div>

        </Section>

        <Section background="white" padding="large">

          <SectionTitle
            eyebrow="MAKE YOUR ENQUIRY CLEAR"
            title="What to Include"
            description="A few details help us understand your priorities and direct your enquiry."
            align="center"
          />

          <div className="contact-prep-grid">

            <div className="contact-prep-card">
              <span>01 — YOUR BUSINESS</span>
              <h3>Context</h3>
              <p>
                Tell us about your organization,
                <br />
                product or project,
                <br />
                and the decision you are considering.
              </p>
            </div>

            <div className="contact-prep-card">
              <span>02 — YOUR ENQUIRY</span>
              <h3>Area of Support</h3>
              <p>
                Select the closest enquiry type
                <br />
                in the form. Add key details
                <br />
                in your message.
              </p>
            </div>

            <div className="contact-prep-card">
              <span>03 — TIMING</span>
              <h3>Important Dates</h3>
              <p>
                Include any relevant deadlines
                <br />
                or milestones so we can
                <br />
                understand the timing.
              </p>
            </div>

          </div>

        </Section>

        {/* =========================================
            FAQ
        ========================================= */}

        <Section background="light" padding="large">

          <SectionTitle
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="A few common questions about getting in touch with our team."
            align="center"
          />

          <div className="contact-faq">

            <details>
              <summary>
                How can I contact your team?
                <span>+</span>
              </summary>

              <p>
                Use the form above to prepare an email to
                gsnnaren@gmail.com. Your default email app
                will open so you can review and send it.
              </p>
            </details>

            <details>
              <summary>
                Can I request a consultation?
                <span>+</span>
              </summary>

              <p>
                Send a brief description of your requirements
                using the form. We can discuss next steps after
                reviewing your enquiry.
              </p>
            </details>

            <details>
              <summary>
                How can I apply for a career opportunity?
                <span>+</span>
              </summary>

              <p>
                Visit our Careers page to view available
                positions and submit an application.
              </p>
            </details>

            <details>
              <summary>
                Do you work with international clients?
                <span>+</span>
              </summary>

              <p>
                Our services can support organizations
                with domestic and international requirements.
                Contact our team to discuss your specific needs.
              </p>
            </details>

          </div>

        </Section>

        {/* =========================================
            CAREERS CTA
        ========================================= */}

        <section className="contact-careers-cta">

          <div className="contact-careers-content">

            <span>CAREERS</span>

            <h2>
              Want to Work
              <br />
              With Us?
            </h2>

            <p>
              Explore opportunities and become part of a
              team focused on technology, innovation, and
              intellectual property.
            </p>

            <Link
              to="/careers"
              className="contact-careers-button"
            >
              Explore Careers
              <span>→</span>
            </Link>

          </div>

        </section>

        {/* =========================================
            FINAL CTA
        ========================================= */}

        <section className="contact-final-cta">

          <div className="contact-final-content">

            <span>LET'S CONNECT</span>

            <h2>
              Have an Idea?
            </h2>

            <p>
              Let's discuss how we can help turn your
              ideas and challenges into practical solutions.
            </p>

            <a
              href="#contact-form"
              className="contact-final-button"
            >
              Start a Conversation
              <span>↑</span>
            </a>

          </div>

        </section>

      </main>
    </>
  );
};

export default Contact;