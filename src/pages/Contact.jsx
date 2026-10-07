import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-hero-overlay"></div>

        <div className="contact-container contact-hero-content">

          <div className="contact-hero-text">

            <span className="contact-eyebrow">
              CONTACT
            </span>

            <h1>
              Let’s Start
              <br />
              a Conversation
            </h1>

            <p>
              Whether you have a question, an idea, or an opportunity to
              explore, our team is ready to connect and understand how
              we can help.
            </p>

          </div>

          <div className="contact-hero-number">
            GET IN TOUCH
          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT INTRO
      ===================================================== */}

      <section className="contact-intro">

        <div className="contact-container contact-intro-grid">

          <div className="contact-intro-left">

            <span className="contact-eyebrow contact-eyebrow-dark">
              CONNECT WITH US
            </span>

            <h2>
              Tell Us What
              <br />
              You’re Building
            </h2>

          </div>

          <div className="contact-intro-right">

            <p>
              We work with organizations, businesses, innovators, and
              professionals navigating important decisions across
              intellectual property, technology, innovation, legal
              strategy, and corporate advisory.
            </p>

            <p>
              Share a little about your requirement and our team will
              connect with you to understand the opportunity.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className="contact-information">

        <div className="contact-container">

          <div className="contact-info-heading">
            <h2>How You Can Reach Us</h2>
            <p>Choose the most convenient way to connect with our team.</p>
          </div>

          <div className="contact-info-grid">

            {/* EMAIL */}

            <div className="contact-info-card">

              <div className="contact-info-number">
                01
              </div>

              <span className="contact-info-label">
                EMAIL
              </span>

              <h3>
                General Enquiries
              </h3>

              <a
                href="mailto:gsnnaren@gmail.com"
                className="contact-info-link"
              >
                gsnnaren@gmail.com
                <span>↗</span>
              </a>

              <p className="contact-info-address">
                For general enquiries and information.
              </p>

            </div>


            {/* ENQUIRIES */}

            <div className="contact-info-card">

              <div className="contact-info-number">
                02
              </div>

              <span className="contact-info-label">
                ENQUIRIES
              </span>

              <h3>
                Share Your Brief
              </h3>

              <a
                href="#contact-form"
                className="contact-info-link"
              >
                Use the contact form
                <span>↓</span>
              </a>

              <p className="contact-info-address">
                Tell us what you are working on and how we can help.
              </p>

            </div>


            {/* SERVICES */}

            <div className="contact-info-card">

              <div className="contact-info-number">
                03
              </div>

              <span className="contact-info-label">
                SERVICES
              </span>

              <h3>
                Business Enquiries
              </h3>

              <Link
                to="/intellectual-property"
                className="contact-info-link"
              >
                Explore our services
                <span>→</span>
              </Link>

              <p className="contact-info-address">
                Learn about our intellectual property and business advisory work.
              </p>

            </div>

            {/* CAREERS */}

            <div className="contact-info-card">

              <div className="contact-info-number">
                04
              </div>

              <span className="contact-info-label">
                CAREERS
              </span>

              <h3>
                Join Our Team
              </h3>

              <Link
                to="/careers"
                className="contact-info-link"
              >
                View Careers
                <span>→</span>
              </Link>

              <p className="contact-info-address">
                Explore current opportunities with our team.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM + LET'S CONNECT
      ===================================================== */}

      <section className="contact-main" id="contact-form">

        <div className="contact-container contact-main-grid">

          {/* =================================================
              FORM
          ================================================= */}

          <div className="contact-form-wrapper">

            <span className="contact-eyebrow contact-eyebrow-dark">
              SEND AN ENQUIRY
            </span>

            <h2>
              How Can We Help?
            </h2>

            <p className="contact-form-description">
              Tell us about your requirement and we’ll get back to you.
            </p>

            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                alert("Thank you. Your enquiry has been submitted.");
              }}
            >

              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="contact-name">
                    Full Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />

                </div>

                <div className="contact-field">

                  <label htmlFor="contact-email">
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />

                </div>

              </div>


              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="contact-phone">
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="+91"
                  />

                </div>

                <div className="contact-field">

                  <label htmlFor="contact-company">
                    Company
                  </label>

                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    placeholder="Company name"
                  />

                </div>

              </div>


              <div className="contact-field">

                <label htmlFor="contact-subject">
                  Area of Interest
                </label>

                <select
                  id="contact-subject"
                  name="subject"
                  defaultValue=""
                  required
                >

                  <option
                    value=""
                    disabled
                  >
                    Select an area
                  </option>

                  <option value="intellectual-property">
                    Intellectual Property
                  </option>

                  <option value="technology">
                    Technology & Innovation
                  </option>

                  <option value="corporate">
                    Corporate Advisory
                  </option>

                  <option value="litigation">
                    Litigation
                  </option>

                  <option value="transactions">
                    Transactions
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>


              <div className="contact-field">

                <label htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Tell us a little about your requirement..."
                  required
                ></textarea>

              </div>


              <button
                type="submit"
                className="contact-submit"
              >
                SEND MESSAGE
                <span>→</span>
              </button>

            </form>

          </div>


        </div>

      </section>

      {/* =====================================================
          ENQUIRY PREPARATION
      ===================================================== */}

      <section className="contact-preparation">

        <div className="contact-container contact-prep-grid">

          <article className="contact-prep-card">
            <span>01 — YOUR BUSINESS</span>
            <h2>Context</h2>
            <p>
              Tell us about your organization, product or project, and the
              decision you are considering.
            </p>
          </article>

          <article className="contact-prep-card">
            <span>02 — YOUR ENQUIRY</span>
            <h2>Area of Support</h2>
            <p>
              Select the closest enquiry type in the form and add key details
              in your message.
            </p>
          </article>

          <article className="contact-prep-card">
            <span>03 — TIMING</span>
            <h2>Important Dates</h2>
            <p>
              Include any relevant deadlines or milestones so we can understand
              the timing.
            </p>
          </article>

        </div>

      </section>

      {/* =====================================================
          FREQUENTLY ASKED QUESTIONS
      ===================================================== */}

      <section className="contact-faq">

        <div className="contact-faq-inner">

          <div className="contact-faq-heading">
            <span className="contact-eyebrow contact-eyebrow-dark">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>A few common questions about getting in touch with our team.</p>
          </div>

          <div className="contact-faq-list">

            <details>
              <summary>How can I contact your team?<span>+</span></summary>
              <p>
                Send us a message using the contact form or email
                {" "}<a href="mailto:gsnnaren@gmail.com">gsnnaren@gmail.com</a>.
                Include a short overview of your enquiry so we can direct it
                to the right team.
              </p>
            </details>

            <details>
              <summary>Can I request a consultation?<span>+</span></summary>
              <p>
                Yes. Tell us what you would like to discuss in the contact form.
                Our team will review your enquiry and follow up about suitable
                next steps.
              </p>
            </details>

            <details>
              <summary>How can I apply for a career opportunity?<span>+</span></summary>
              <p>
                Visit our <Link to="/careers">Careers page</Link> to explore
                current opportunities and submit your details.
              </p>
            </details>

            <details>
              <summary>Do you work with international clients?<span>+</span></summary>
              <p>
                We welcome enquiries from organizations across markets. Please
                include your location and a brief description of your needs so
                we can understand how best to assist.
              </p>
            </details>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCATIONS
      ===================================================== */}

      <section className="contact-location">

        <div className="contact-container contact-location-grid">

          <div>

            <span className="contact-eyebrow contact-eyebrow-dark">
              OUR PRESENCE
            </span>

            <h2>
              Connecting Ideas
              <br />
              Across Markets
            </h2>

          </div>

          <div className="contact-location-content">

            <p>
              Our multidisciplinary approach allows us to work with
              organizations across industries and markets, combining
              strategic thinking with practical execution.
            </p>

            <div className="contact-location-list">

              <div>
                <span>01</span>
                <strong>India</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Technology</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Innovation</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Intellectual Property</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-final">

        <div className="contact-container contact-final-inner">

          <div>

            <span className="contact-eyebrow">
              START HERE
            </span>

            <h2>
              Let’s Build the
              <br />
              Next Chapter Together.
            </h2>

          </div>

          <Link
            to="/careers"
            className="contact-final-button"
          >
            EXPLORE CAREERS
            <span>↗</span>
          </Link>

        </div>

      </section>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           BASE
        ===================================================== */

        .contact-page {

          --contact-navy: #061d66;
          --contact-navy-dark: #04164f;
          --contact-red: #e31b23;
          --contact-text: #111827;
          --contact-muted: #5d697a;
          --contact-line: #dce2e9;

          width: 100%;

          color: var(--contact-text);

          background: #ffffff;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          line-height: 1.6;

          overflow-x: hidden;

        }


        .contact-page *,
        .contact-page *::before,
        .contact-page *::after {

          box-sizing: border-box;

        }


        /* =====================================================
           MAIN CONTAINER
           EQUAL LEFT / RIGHT SPACING
        ===================================================== */

        .contact-container {

          width: min(
            1200px,
            calc(100% - 160px)
          );

          margin-left: auto;
          margin-right: auto;

        }


        /* =====================================================
           EYEBROW
        ===================================================== */

        .contact-eyebrow {

          display: block;

          margin-bottom: 15px;

          color: #ff7378;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 2px;

          line-height: 1.4;

        }


        .contact-eyebrow-dark {

          color: var(--contact-red);

        }


        /* =====================================================
           HERO
        ===================================================== */

        .contact-hero {

          position: relative;

          min-height: 570px;

          display: flex;

          align-items: center;

          overflow: hidden;

          background-image:
            linear-gradient(
              90deg,
              #04164f 0%,
              rgba(4, 22, 79, 0.98) 34%,
              rgba(6, 29, 102, 0.82) 49%,
              rgba(6, 29, 102, 0.22) 76%,
              rgba(6, 29, 102, 0.08) 100%
            ),
            url("/images/contact/contact-hero.png");

          background-position: center;

          background-repeat: no-repeat;

          background-size: cover;

          color: #ffffff;

        }


        .contact-hero::after {

          position: absolute;

          right: -120px;

          top: -180px;

          width: 600px;

          height: 600px;

          border: 1px solid
            rgba(255,255,255,0.10);

          border-radius: 50%;

          content: "";

        }


        .contact-hero::before {

          position: absolute;

          right: 80px;

          bottom: -280px;

          width: 620px;

          height: 620px;

          border: 1px solid
            rgba(255,255,255,0.08);

          border-radius: 50%;

          content: "";

        }


        .contact-hero-overlay {

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(2,12,42,0.45),
              transparent
            );

        }


        .contact-hero-content {

          position: relative;

          z-index: 2;

          min-height: 570px;

          display: flex;

          align-items: center;

          justify-content: space-between;

        }


        .contact-hero-text {

          max-width: 720px;

        }


        .contact-hero h1 {

          margin: 0;

          color: #ffffff;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(
            50px,
            6vw,
            78px
          );

          font-weight: 400;

          line-height: 1.05;

        }


        .contact-hero p {

          max-width: 620px;

          margin: 25px 0 0;

          color:
            rgba(255,255,255,0.88);

          font-size: 17px;

          line-height: 1.8;

        }


        .contact-hero-number {

          position: absolute;

          right: 0;

          bottom: 38px;

          color:
            rgba(255,255,255,0.62);

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 2px;

        }


        /* =====================================================
           INTRO
        ===================================================== */

        .contact-intro {

          padding: 100px 0;

          background: #ffffff;

        }


        .contact-intro-grid {

          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 80px;

          align-items: start;

        }


        .contact-intro h2,
        .contact-main h2,
        .contact-location h2 {

          margin: 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(
            38px,
            4vw,
            54px
          );

          font-weight: 400;

          line-height: 1.12;

        }


        .contact-intro-right {

          padding-top: 8px;

        }


        .contact-intro-right p {

          margin: 0 0 20px;

          color: var(--contact-muted);

          font-size: 15px;

          line-height: 1.9;

        }


        /* =====================================================
           INFORMATION
        ===================================================== */

        .contact-information {

          padding: 78px 0 96px;

          background: #f2f8f6;

        }


        .contact-info-heading {

          margin-bottom: 52px;

          text-align: center;

        }


        .contact-info-heading h2 {

          margin: 0;

          color: #173f68;

          font-size: clamp(36px, 4.5vw, 54px);

          line-height: 1.12;

        }


        .contact-info-heading p {

          margin: 18px 0 0;

          color: var(--contact-muted);

          font-size: 16px;

        }


        .contact-info-grid {

          display: grid;

          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 20px;

        }


        .contact-info-card {

          min-height: 300px;

          padding: 28px;

          border: 1px solid var(--contact-line);

          background: #ffffff;

          display: flex;

          flex-direction: column;

          align-items: flex-start;

        }


        .contact-info-number {

          color: var(--contact-red);

          font-size: 11px;

          font-weight: 800;

        }


        .contact-info-label {

          display: block;

          margin-top: 42px;

          color: #687487;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 1.5px;

        }


        .contact-info-card h3 {

          margin: 8px 0 18px;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 23px;

          font-weight: 400;

          line-height: 1.2;

        }


        .contact-info-link {

          display: inline-flex;

          align-items: center;

          gap: 10px;

          color: var(--contact-navy);

          font-size: 13px;

          font-weight: 700;

          text-decoration: none;

        }


        .contact-info-address {

          margin: 18px 0 0;

          color: var(--contact-muted);

          font-size: 13px;

          line-height: 1.7;

        }


        .contact-info-link:hover {

          color: var(--contact-red);

        }


        /* =====================================================
           MAIN CONTACT AREA
        ===================================================== */

        .contact-main {

          padding: 100px 0;

          background:
            #f2f5f9;

          border-top: 1px solid #e1e6ed;

          border-bottom: 1px solid #e1e6ed;

        }


        .contact-main-grid {

          display: grid;

          grid-template-columns: 1fr;

          gap: clamp(40px, 5vw, 72px);

          align-items: start;

          max-width: 920px;

        }


        .contact-form-wrapper {

          width: 100%;

          text-align: center;

        }


        .contact-form-wrapper h2 {

          color: #101827;

        }


        .contact-form-description {

          margin: 14px auto 35px;

          max-width: 620px;

          color: var(--contact-muted);

          font-size: 15px;

        }


        /* =====================================================
           FORM
        ===================================================== */

        .contact-form {

          width: min(100%, 760px);

          margin: 0 auto;

          display: flex;

          flex-direction: column;

          gap: 20px;

          text-align: left;

        }


        .contact-form-row {

          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 16px;

        }


        .contact-field {

          display: flex;

          flex-direction: column;

          gap: 8px;

        }


        .contact-field label {

          color: #202b3b;

          font-size: 12px;

          font-weight: 700;

        }


        .contact-field input,
        .contact-field select,
        .contact-field textarea {

          width: 100%;

          padding: 13px 14px;

          border: 1px solid #d5dce5;

          border-radius: 0;

          outline: none;

          background: #ffffff;

          color: #172033;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 14px;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;

        }


        .contact-field input {

          height: 48px;

        }


        .contact-field input:focus,
        .contact-field select:focus,
        .contact-field textarea:focus {

          border-color: var(--contact-navy);

          box-shadow:
            0 0 0 2px
            rgba(6,29,102,0.08);

        }


        .contact-field textarea {

          min-height: 140px;

          resize: vertical;

        }


        .contact-field input::placeholder,
        .contact-field textarea::placeholder {

          color: #9aa4b2;

        }


        .contact-submit {

          align-self: flex-start;

          min-height: 50px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 18px;

          margin-top: 5px;

          padding: 13px 23px;

          border: 0;

          border-radius: 0;

          background: var(--contact-red);

          color: #ffffff;

          font-size: 12px !important;

          font-weight: 800;

          letter-spacing: 0.4px;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            background 0.2s ease;

        }


        .contact-submit:hover {

          transform: translateY(-2px);

          background: #b9161c;

        }


        /* =====================================================
           LOCATION
        ===================================================== */

        .contact-location {

          padding: 100px 0;

          background: #ffffff;

        }


        .contact-location-grid {

          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 80px;

        }


        .contact-location-content > p {

          margin: 5px 0 30px;

          color: var(--contact-muted);

          font-size: 15px;

          line-height: 1.85;

        }


        .contact-location-list {

          border-top: 1px solid var(--contact-line);

        }


        .contact-location-list div {

          display: flex;

          align-items: center;

          gap: 20px;

          padding: 15px 0;

          border-bottom: 1px solid var(--contact-line);

        }


        .contact-location-list span {

          color: var(--contact-red);

          font-size: 10px;

          font-weight: 800;

        }


        .contact-location-list strong {

          color: #172033;

          font-size: 14px;

        }


        /* =====================================================
           ENQUIRY PREPARATION
        ===================================================== */

        .contact-preparation {

          padding: 30px 0 55px;

          background: #f2f8f6;

        }


        .contact-prep-grid {

          display: grid;

          grid-template-columns: repeat(3, minmax(0, 1fr));

          gap: 24px;

        }


        .contact-prep-card {

          min-height: 285px;

          padding: 38px 35px;

          border-top: 2px solid #111111;

          background: #ffffff;

        }


        .contact-prep-card > span {

          color: #687487;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 1.8px;

        }


        .contact-prep-card h2 {

          margin: 28px 0 20px;

          color: #111827;

          font-size: 30px;

          line-height: 1.2;

        }


        .contact-prep-card p {

          max-width: 300px;

          margin: 0;

          color: var(--contact-muted);

          font-size: 14px;

          line-height: 1.8;

        }


        /* =====================================================
           FREQUENTLY ASKED QUESTIONS
        ===================================================== */

        .contact-faq {

          padding: 30px 0 100px;

          background: #f2f8f6;

        }


        .contact-faq-inner {

          width: min(900px, calc(100% - 80px));

          margin: 0 auto;

        }


        .contact-faq-heading {

          margin-bottom: 58px;

          text-align: center;

        }


        .contact-faq-heading .contact-eyebrow {

          margin-bottom: 12px;

        }


        .contact-faq-heading h2 {

          margin: 0;

          color: #173f68;

          font-size: clamp(36px, 4.5vw, 54px);

          line-height: 1.12;

        }


        .contact-faq-heading p {

          margin: 18px 0 0;

          color: var(--contact-muted);

          font-size: 16px;

        }


        .contact-faq-list details {

          border-top: 1px solid #d5dfdc;

        }


        .contact-faq-list details:last-child {

          border-bottom: 1px solid #d5dfdc;

        }


        .contact-faq-list summary {

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 24px;

          padding: 24px 0;

          color: #111827;

          font-size: 16px;

          font-weight: 700;

          cursor: pointer;

          list-style: none;

        }


        .contact-faq-list summary::-webkit-details-marker {

          display: none;

        }


        .contact-faq-list summary span {

          flex: 0 0 auto;

          font-size: 22px;

          font-weight: 400;

          transition: transform 0.2s ease;

        }


        .contact-faq-list details[open] summary span {

          transform: rotate(45deg);

        }


        .contact-faq-list details p {

          max-width: 760px;

          margin: -3px 0 24px;

          color: var(--contact-muted);

          font-size: 14px;

          line-height: 1.8;

        }


        .contact-faq-list details a {

          color: var(--contact-navy);

          font-weight: 700;

          text-decoration: underline;

          text-underline-offset: 3px;

        }


        /* =====================================================
           FINAL CTA
        ===================================================== */

        .contact-final {

          width: 100%;

          margin-top: 0;

          margin-bottom: 90px;

          padding: 75px 0;

          background:
            linear-gradient(
              135deg,
              #061d66,
              #04164f
            );

          color: #ffffff;

        }


        .contact-final-inner {

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 40px;

        }


        .contact-final h2 {

          margin: 0;

          color: #ffffff;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(
            36px,
            4vw,
            52px
          );

          font-weight: 400;

          line-height: 1.12;

        }


        .contact-final-button {

          flex-shrink: 0;

          display: inline-flex;

          align-items: center;

          gap: 15px;

          padding: 15px 22px;

          background: #ffffff;

          color: var(--contact-navy);

          font-size: 12px;

          font-weight: 800;

          text-decoration: none;

          transition:
            transform 0.2s ease,
            background 0.2s ease;

        }


        .contact-final-button:hover {

          transform: translateY(-2px);

          background: var(--contact-red);

          color: #ffffff;

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .contact-container {

            width: 90%;

          }


          .contact-main-grid {

            gap: 40px;

          }


          .contact-info-grid {

            grid-template-columns: repeat(2, minmax(0, 1fr));

          }


          .contact-prep-grid {

            grid-template-columns: repeat(2, minmax(0, 1fr));

          }


          .contact-intro-grid,
          .contact-location-grid {

            gap: 50px;

          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 750px) {

          .contact-container {

            width: calc(100% - 40px);

          }


          .contact-hero {

            min-height: 520px;

          }


          .contact-hero-content {

            min-height: 520px;

          }


          .contact-hero h1 {

            font-size: 48px;

          }


          .contact-hero p {

            font-size: 15px;

          }


          .contact-hero-number {

            display: none;

          }


          .contact-intro {

            padding: 65px 0;

          }


          .contact-intro-grid {

            grid-template-columns: 1fr;

            gap: 25px;

          }


          .contact-information {

            padding: 65px 0;

          }


          .contact-info-grid {

            grid-template-columns: 1fr;

          }


          .contact-info-heading {

            margin-bottom: 35px;

          }


          .contact-info-card {

            min-height: 250px;

          }


          .contact-info-label {

            margin-top: 30px;

          }


          .contact-main {

            padding: 65px 0;

          }


          .contact-main-grid {

            grid-template-columns: 1fr;

            gap: 50px;

          }


          .contact-form-row {

            grid-template-columns: 1fr;

          }


          .contact-location {

            padding: 65px 0;

          }


          .contact-preparation {

            padding: 20px 0 35px;

          }


          .contact-prep-grid {

            grid-template-columns: 1fr;

            gap: 16px;

          }


          .contact-prep-card {

            min-height: 0;

            padding: 30px 26px;

          }


          .contact-prep-card h2 {

            margin: 22px 0 14px;

            font-size: 27px;

          }


          .contact-faq {

            padding: 25px 0 65px;

          }


          .contact-faq-inner {

            width: calc(100% - 40px);

          }


          .contact-faq-heading {

            margin-bottom: 35px;

          }


          .contact-faq-list summary {

            padding: 20px 0;

            font-size: 15px;

          }


          .contact-location-grid {

            grid-template-columns: 1fr;

            gap: 30px;

          }


          .contact-final {

            margin-bottom: 70px;

            padding: 60px 0;

          }


          .contact-final-inner {

            flex-direction: column;

            align-items: flex-start;

          }


          .contact-final-button {

            width: 100%;

            justify-content: center;

          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 430px) {

          .contact-container {

            width: calc(100% - 30px);

          }


          .contact-hero h1 {

            font-size: 42px;

          }


          .contact-intro h2,
          .contact-main h2,
          .contact-location h2 {

            font-size: 36px;

          }


        }

      `}</style>

    </div>
  );
}

export default Contact;