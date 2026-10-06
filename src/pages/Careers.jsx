import React, { useState } from "react";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: "ip-associate",
    title: "IP Associate",
    department: "Intellectual Property",
    location: "Chennai",
    type: "Full Time",
    experience: "0–3 Years",
    description:
      "Work with our intellectual property team on patent, trademark, and technology-related matters.",
    responsibilities: [
      "Assist with intellectual property research.",
      "Support patent and trademark matters.",
      "Prepare legal and research documentation.",
      "Work with senior professionals on client assignments.",
    ],
    requirements: [
      "Strong research and analytical skills.",
      "Good written and verbal communication.",
      "Interest in intellectual property and technology.",
      "Ability to work effectively in a collaborative environment.",
    ],
  },
  {
    id: "technology-analyst",
    title: "Technology Analyst",
    department: "Technology & Innovation",
    location: "Bengaluru",
    type: "Full Time",
    experience: "1–4 Years",
    description:
      "Support technology-focused projects and analyze emerging technologies, innovation, and intellectual property.",
    responsibilities: [
      "Research emerging technologies.",
      "Analyze technology and innovation trends.",
      "Support technology-focused projects.",
      "Prepare reports and analytical materials.",
    ],
    requirements: [
      "Strong analytical thinking.",
      "Interest in technology and innovation.",
      "Good communication skills.",
      "Ability to analyze complex information.",
    ],
  },
  {
    id: "legal-research-associate",
    title: "Legal Research Associate",
    department: "Legal Research",
    location: "Mumbai",
    type: "Full Time",
    experience: "0–2 Years",
    description:
      "Conduct legal research and support our teams with research, documentation, and analysis.",
    responsibilities: [
      "Conduct legal and regulatory research.",
      "Analyze relevant laws and regulations.",
      "Prepare research summaries.",
      "Assist with internal knowledge resources.",
    ],
    requirements: [
      "Strong research skills.",
      "Attention to detail.",
      "Excellent written communication.",
      "Ability to work independently and collaboratively.",
    ],
  },
  {
    id: "corporate-advisory-associate",
    title: "Corporate Advisory Associate",
    department: "Corporate",
    location: "Delhi",
    type: "Full Time",
    experience: "1–3 Years",
    description:
      "Support corporate advisory projects involving governance, compliance, transactions, and business structuring.",
    responsibilities: [
      "Support corporate advisory assignments.",
      "Research corporate and regulatory requirements.",
      "Assist with transaction documentation.",
      "Coordinate with internal teams.",
    ],
    requirements: [
      "Strong analytical skills.",
      "Knowledge of corporate law and business concepts.",
      "Good documentation skills.",
      "Strong communication and teamwork.",
    ],
  },
];

const cultureValues = [
  {
    number: "01",
    title: "Innovation",
    text:
      "Work on meaningful projects at the intersection of technology, intellectual property, law, and business innovation.",
  },
  {
    number: "02",
    title: "Collaboration",
    text:
      "Work closely with experienced professionals across multidisciplinary teams.",
  },
  {
    number: "03",
    title: "Growth",
    text:
      "Develop your expertise through challenging assignments, continuous learning, and practical experience.",
  },
  {
    number: "04",
    title: "Impact",
    text:
      "Contribute to strategic projects that help organizations protect, develop, and commercialize valuable ideas.",
  },
];

const highlights = [
  "Collaborative Teams",
  "Continuous Learning",
  "Meaningful Work",
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  position: "",
  experience: "",
  message: "",
  resume: null,
};

function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState(initialFormData);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);

    setFormData((previous) => ({
      ...previous,
      position: job.title,
    }));

    window.setTimeout(() => {
      document.getElementById("job-details")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: files ? files[0] : value,
    }));
  };

  const handleApplyClick = () => {
    scrollToSection("apply");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    window.alert("Application submitted successfully!");

    setFormData(initialFormData);

    const resumeInput = document.getElementById("resume");

    if (resumeInput) {
      resumeInput.value = "";
    }
  };

  return (
    <div className="careers-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="careers-hero">
        <div className="careers-hero-overlay"></div>

        <div className="careers-hero-inner">

          <div className="careers-hero-copy">

            <span className="careers-eyebrow">
              CAREERS
            </span>

            <h1>
              Build What Matters.
              <br />
              Grow With Purpose.
            </h1>

            <p>
              Join a multidisciplinary team working across intellectual
              property, technology, innovation, legal strategy, and business.
            </p>

            <div className="careers-hero-actions">

              <button
                type="button"
                className="careers-button careers-button-red"
                onClick={() => scrollToSection("open-positions")}
              >
                VIEW OPEN ROLES
                <span>↓</span>
              </button>

              <button
                type="button"
                className="careers-button careers-button-outline"
                onClick={() => scrollToSection("culture")}
              >
                OUR CULTURE
                <span>↗</span>
              </button>

            </div>

          </div>

          <div className="careers-hero-label">
            PEOPLE / IDEAS / IMPACT
          </div>

        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="careers-intro careers-wrap">

        <div className="careers-intro-copy">

          <span className="careers-eyebrow careers-eyebrow-dark">
            OUR COMPANY
          </span>

          <h2>
            Careers at Tesla Innovation
          </h2>

          <p>
            We bring together intellectual property, technology, innovation,
            legal research, corporate advisory, and strategic thinking to help
            organizations navigate important decisions.
          </p>

          <p>
            Our team values curiosity, sound judgment, clear communication,
            and careful collaboration. We welcome people who want to build
            practical expertise while contributing to thoughtful,
            high-quality work.
          </p>

        </div>

        <div className="careers-intro-image">

          <div className="careers-image-overlay"></div>

          <div className="careers-image-caption">

            <span>
              TESLA INNOVATION
            </span>

            <strong>
              Ideas move forward together.
            </strong>

          </div>

        </div>

      </section>

      {/* =====================================================
          CULTURE
      ===================================================== */}

      <section
        className="careers-culture"
        id="culture"
      >

        <div className="careers-wrap">

          <div className="careers-section-heading">

            <div>

              <span className="careers-eyebrow careers-eyebrow-dark">
                WHAT MATTERS HERE
              </span>

              <h2>
                Why Work With Us
              </h2>

            </div>

            <p>
              A focused environment for people who enjoy solving complex
              problems and learning from different disciplines.
            </p>

          </div>

          <div className="careers-values-grid">

            {cultureValues.map((value) => (
              <article
                className="careers-value-card"
                key={value.number}
              >

                <div className="careers-value-number">
                  {value.number}
                </div>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.text}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section className="careers-experience careers-wrap">

        <div className="careers-experience-image">

          <div className="careers-experience-image-overlay"></div>

          <span>
            CURIOUS MINDS. PRACTICAL THINKING.
          </span>

        </div>

        <div className="careers-experience-copy">

          <span className="careers-eyebrow careers-eyebrow-dark">
            THE EXPERIENCE
          </span>

          <h2>
            A Place to Learn,
            <br />
            Create and Grow
          </h2>

          <p>
            We encourage curiosity, ownership, collaboration, and continuous
            development. Our teams work across disciplines to solve complex
            problems and create meaningful outcomes for clients.
          </p>

          <ul className="careers-highlights">

            {highlights.map((highlight, index) => (
              <li key={highlight}>

                <span>
                  0{index + 1}
                </span>

                {highlight}

              </li>
            ))}

          </ul>

        </div>

      </section>

      {/* =====================================================
          OPEN POSITIONS
      ===================================================== */}

      <section
        className="careers-positions"
        id="open-positions"
      >

        <div className="careers-wrap">

          <div className="careers-section-heading">

            <div>

              <span className="careers-eyebrow careers-eyebrow-dark">
                OPPORTUNITIES
              </span>

              <h2>
                Open Positions
              </h2>

            </div>

            <p>
              Explore opportunities across intellectual property,
              technology, legal research, and corporate advisory.
            </p>

          </div>

          <div className="careers-job-grid">

            {jobs.map((job) => (

              <article
                className={
                  selectedJob?.id === job.id
                    ? "careers-job-card active"
                    : "careers-job-card"
                }
                key={job.id}
              >

                <div className="careers-job-top">

                  <span>
                    {job.department}
                  </span>

                  <small>
                    {job.type}
                  </small>

                </div>

                <h3>
                  {job.title}
                </h3>

                <p>
                  {job.description}
                </p>

                <div className="careers-job-meta">

                  <span>
                    {job.location}
                  </span>

                  <span>
                    {job.experience}
                  </span>

                </div>

                <button
                  type="button"
                  className="careers-text-button"
                  onClick={() => handleJobClick(job)}
                >
                  View Position
                  <span>→</span>
                </button>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          POSITION DETAILS
      ===================================================== */}

      <section
        className="careers-details careers-wrap"
        id="job-details"
      >

        {selectedJob ? (

          <div className="careers-detail-panel">

            <div className="careers-detail-heading">

              <div>

                <span className="careers-eyebrow careers-eyebrow-dark">
                  POSITION DETAILS
                </span>

                <h2>
                  {selectedJob.title}
                </h2>

              </div>

              <button
                type="button"
                className="careers-button careers-button-red"
                onClick={handleApplyClick}
              >
                APPLY FOR THIS POSITION
                <span>↓</span>
              </button>

            </div>

            <div className="careers-detail-meta">

              <div>
                <span>Position</span>
                <strong>{selectedJob.title}</strong>
              </div>

              <div>
                <span>Department</span>
                <strong>{selectedJob.department}</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>{selectedJob.location}</strong>
              </div>

              <div>
                <span>Experience</span>
                <strong>{selectedJob.experience}</strong>
              </div>

            </div>

            <p className="careers-detail-description">
              {selectedJob.description}
            </p>

            <div className="careers-detail-lists">

              <div>

                <h3>
                  Responsibilities
                </h3>

                <ul>
                  {selectedJob.responsibilities.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>

              <div>

                <h3>
                  Requirements
                </h3>

                <ul>
                  {selectedJob.requirements.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>

            </div>

          </div>

        ) : (

          <div className="careers-detail-empty">

            <span className="careers-eyebrow careers-eyebrow-dark">
              POSITION DETAILS
            </span>

            <p>
              Select a position above to view the role details.
            </p>

          </div>

        )}

      </section>

      {/* =====================================================
          YOUR NEXT CHAPTER
      ===================================================== */}

      <section
        className="careers-application"
        id="apply"
      >

        <div className="careers-wrap careers-application-layout">

          <div className="careers-application-intro">

            <span className="careers-eyebrow">
              YOUR NEXT CHAPTER
            </span>

            <h2>
              Start Your Journey With Us
            </h2>

            <p>
              Interested in joining our team? Submit your details and our team
              will review your application.
            </p>

            <span className="careers-application-note">
              We welcome thoughtful applications from curious,
              committed people.
            </span>

          </div>

          <form
            className="careers-form"
            onSubmit={handleSubmit}
          >

            <div className="careers-form-grid">

              <div className="careers-field">

                <label htmlFor="career-name">
                  Full Name
                </label>

                <input
                  id="career-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />

              </div>

              <div className="careers-field">

                <label htmlFor="career-email">
                  Email
                </label>

                <input
                  id="career-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

              </div>

              <div className="careers-field">

                <label htmlFor="career-phone">
                  Phone
                </label>

                <input
                  id="career-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />

              </div>

              <div className="careers-field">

                <label htmlFor="career-position">
                  Position
                </label>

                <select
                  id="career-position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                >

                  <option value="" disabled>
                    Select a position
                  </option>

                  {jobs.map((job) => (
                    <option
                      key={job.id}
                      value={job.title}
                    >
                      {job.title}
                    </option>
                  ))}

                </select>

              </div>

              <div className="careers-field">

                <label htmlFor="career-experience">
                  Experience
                </label>

                <input
                  id="career-experience"
                  name="experience"
                  type="text"
                  placeholder="e.g. 2 years"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                />

              </div>

              <div className="careers-field">

                <label htmlFor="resume">
                  Resume <span>(optional)</span>
                </label>

                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleInputChange}
                />

              </div>

              <div className="careers-field careers-field-wide">

                <label htmlFor="career-message">
                  Message
                </label>

                <textarea
                  id="career-message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />

              </div>

            </div>

            <button
              type="submit"
              className="careers-button careers-button-red careers-submit"
            >
              SUBMIT APPLICATION
              <span>→</span>
            </button>

          </form>

        </div>

      </section>

      {/* =====================================================
          MAKE YOUR NEXT MOVE
      ===================================================== */}

      <section className="careers-cta careers-wrap">

        <div>

          <span className="careers-eyebrow">
            MAKE YOUR NEXT MOVE
          </span>

          <h2>
            Ready to Build What Comes Next?
          </h2>

          <p>
            Explore opportunities to work with a multidisciplinary team
            focused on innovation, technology, intellectual property,
            and strategic advisory.
          </p>

        </div>

        <button
          type="button"
          className="careers-button careers-button-light"
          onClick={() => scrollToSection("open-positions")}
        >
          EXPLORE OPPORTUNITIES
          <span>↑</span>
        </button>

      </section>

      {/* =====================================================
          LET'S CONNECT
      ===================================================== */}

      <section className="careers-contact">

        <div className="careers-wrap careers-contact-inner">

          <div>

            <span className="careers-eyebrow">
              LET'S CONNECT
            </span>

            <h2>
              Have Questions About Careers?
            </h2>

          </div>

          <div>

            <p>
              If you would like to learn more about opportunities at Tesla
              Innovation Private Limited, get in touch with our team.
            </p>

            <Link
              to="/contact"
              className="careers-contact-link"
            >
              CONTACT US
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .careers-page {
          --career-navy: #061d66;
          --career-navy-dark: #04164f;
          --career-red: #e31b23;
          --career-text: #111827;
          --career-muted: #5f6875;
          --career-line: #dfe3e9;
          --career-light: #f5f7fa;

          width: 100%;

          color: var(--career-text);

          background: #ffffff;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          line-height: 1.6;

          overflow: hidden;
        }

        .careers-page button,
        .careers-page input,
        .careers-page select,
        .careers-page textarea {
          font: inherit;
        }

        .careers-page button {
          cursor: pointer;
        }

        .careers-wrap {
          width: min(1200px, calc(100% - 80px));

          margin-left: auto;
          margin-right: auto;
        }

        /* =====================================================
           EYEBROW
        ===================================================== */

        .careers-eyebrow {
          display: block;

          margin-bottom: 14px;

          color: #ff6b70;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 2px;

          line-height: 1.4;
        }

        .careers-eyebrow-dark {
          color: var(--career-red);
        }

        /* =====================================================
           HERO
        ===================================================== */

        .careers-hero {
          position: relative;

          min-height: 650px;

          display: flex;

          align-items: center;

          color: #ffffff;

          background-color: var(--career-navy);

          background-image:
            url("/images/careers/team-meeting.png");

          background-position: center;

          background-repeat: no-repeat;

          background-size: cover;

          isolation: isolate;
        }

        .careers-hero-overlay {
          position: absolute;

          inset: 0;

          z-index: -1;

          background:
            linear-gradient(
              90deg,
              rgba(3, 16, 55, 0.98) 0%,
              rgba(4, 21, 72, 0.94) 27%,
              rgba(4, 21, 72, 0.72) 53%,
              rgba(4, 21, 72, 0.28) 100%
            );
        }

        .careers-hero-inner {
          position: relative;

          width: min(1200px, calc(100% - 80px));

          min-height: 650px;

          margin: 0 auto;

          display: flex;

          align-items: center;
        }

        .careers-hero-copy {
          width: 62%;

          padding: 90px 0;
        }

        .careers-hero h1 {
          max-width: 750px;

          margin: 0;

          color: #ffffff;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(48px, 6vw, 76px);

          font-weight: 400;

          line-height: 1.08;
        }

        .careers-hero-copy > p {
          max-width: 620px;

          margin: 25px 0 0;

          color: rgba(255,255,255,0.9);

          font-size: 17px;

          line-height: 1.8;
        }

        .careers-hero-actions {
          display: flex;

          flex-wrap: wrap;

          gap: 12px;

          margin-top: 32px;
        }

        .careers-button {
          min-height: 48px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 16px;

          padding: 12px 20px;

          border: 1px solid transparent;

          border-radius: 0;

          font-size: 12px !important;

          font-weight: 800;

          letter-spacing: 0.4px;

          transition:
            all 0.2s ease;
        }

        .careers-button:hover {
          transform: translateY(-2px);
        }

        .careers-button-red {
          background: var(--career-red);

          color: #ffffff;
        }

        .careers-button-red:hover {
          background: #b9151b;
        }

        .careers-button-outline {
          border-color: rgba(255,255,255,0.75);

          background: rgba(255,255,255,0.04);

          color: #ffffff;
        }

        .careers-button-outline:hover {
          background: #ffffff;

          border-color: #ffffff;

          color: var(--career-navy);
        }

        .careers-hero-label {
          position: absolute;

          right: 0;

          bottom: 30px;

          color: rgba(255,255,255,0.8);

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 2px;
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .careers-intro {
          display: grid;

          grid-template-columns: 0.9fr 1.1fr;

          gap: 70px;

          align-items: center;

          padding-top: 95px;

          padding-bottom: 95px;
        }

        .careers-intro h2,
        .careers-section-heading h2,
        .careers-experience h2,
        .careers-detail-heading h2,
        .careers-application h2,
        .careers-cta h2,
        .careers-contact h2 {
          margin: 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(35px, 4vw, 50px);

          font-weight: 400;

          line-height: 1.13;
        }

        .careers-intro-copy p {
          margin: 18px 0 0;

          color: var(--career-muted);

          font-size: 15px;

          line-height: 1.9;
        }

        /* =====================================================
           INTRO IMAGE
        ===================================================== */

        .careers-intro-image {
          position: relative;

          min-height: 390px;

          overflow: hidden;

          background-image:
            url("/images/careers/team-meeting.png");

          background-position: center;

          background-repeat: no-repeat;

          background-size: cover;
        }

        .careers-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(4,15,45,0.92),
              rgba(4,15,45,0.08) 65%
            );
        }

        .careers-image-caption {
          position: absolute;

          right: 25px;

          bottom: 25px;

          left: 25px;

          z-index: 1;

          color: #ffffff;
        }

        .careers-image-caption span {
          display: block;

          margin-bottom: 7px;

          color: #ff8589;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 1.5px;
        }

        .careers-image-caption strong {
          display: block;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 25px;

          font-weight: 400;
        }

        /* =====================================================
           CULTURE
        ===================================================== */

        .careers-culture {
          padding: 85px 0;

          background: var(--career-light);
        }

        .careers-section-heading {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 60px;

          align-items: end;

          margin-bottom: 35px;
        }

        .careers-section-heading > p {
          max-width: 520px;

          margin: 0;

          color: var(--career-muted);

          font-size: 15px;

          line-height: 1.8;
        }

        .careers-values-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 16px;
        }

        .careers-value-card {
          min-height: 235px;

          padding: 25px;

          border: 1px solid var(--career-line);

          background: #ffffff;

          transition: all 0.25s ease;
        }

        .careers-value-card:hover {
          transform: translateY(-4px);

          border-color: #bfc5ce;

          box-shadow:
            0 14px 30px
            rgba(12, 27, 58, 0.08);
        }

        .careers-value-number {
          color: var(--career-red);

          font-size: 11px;

          font-weight: 800;
        }

        .careers-value-card h3 {
          margin: 35px 0 10px;

          font-size: 20px;

          font-weight: 700;
        }

        .careers-value-card p {
          margin: 0;

          color: var(--career-muted);

          font-size: 14px;

          line-height: 1.7;
        }

        /* =====================================================
           EXPERIENCE
        ===================================================== */

        .careers-experience {
          display: grid;

          grid-template-columns: 1.05fr 0.95fr;

          gap: 70px;

          align-items: center;

          padding-top: 95px;

          padding-bottom: 95px;
        }

        .careers-experience-image {
          position: relative;

          min-height: 430px;

          display: flex;

          align-items: flex-end;

          overflow: hidden;

          padding: 25px;

          background-image:
            url("/images/careers/team-meeting.png");

          background-position: center;

          background-repeat: no-repeat;

          background-size: cover;
        }

        .careers-experience-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(4,15,45,0.88),
              rgba(4,15,45,0.1) 60%
            );
        }

        .careers-experience-image span {
          position: relative;

          z-index: 1;

          color: #ffffff;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 1.7px;
        }

        .careers-experience-copy p {
          margin: 20px 0 0;

          color: var(--career-muted);

          font-size: 15px;

          line-height: 1.85;
        }

        .careers-highlights {
          margin: 28px 0 0;

          padding: 0;

          list-style: none;

          border-top: 1px solid var(--career-line);
        }

        .careers-highlights li {
          display: flex;

          align-items: center;

          gap: 17px;

          padding: 13px 0;

          border-bottom: 1px solid var(--career-line);

          font-size: 14px;

          font-weight: 700;
        }

        .careers-highlights li span {
          color: var(--career-red);

          font-size: 10px;
        }

        /* =====================================================
           OPEN POSITIONS
        ===================================================== */

        .careers-positions {
          padding: 85px 0;

          background: var(--career-light);
        }

        .careers-job-grid {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 17px;
        }

        .careers-job-card {
          padding: 25px;

          border: 1px solid var(--career-line);

          background: #ffffff;

          transition: all 0.25s ease;
        }

        .careers-job-card:hover {
          transform: translateY(-3px);

          box-shadow:
            0 12px 28px
            rgba(10, 25, 55, 0.08);
        }

        .careers-job-card.active {
          border-color: var(--career-red);

          box-shadow:
            inset 3px 0 var(--career-red);
        }

        .careers-job-top {
          display: flex;

          justify-content: space-between;

          gap: 12px;

          align-items: center;
        }

        .careers-job-top span {
          color: var(--career-red);

          font-size: 11px;

          font-weight: 800;
        }

        .careers-job-top small {
          padding: 4px 8px;

          border: 1px solid var(--career-line);

          color: #626b78;

          font-size: 10px;
        }

        .careers-job-card h3 {
          margin: 17px 0 8px;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 25px;

          font-weight: 400;

          line-height: 1.25;
        }

        .careers-job-card > p {
          min-height: 55px;

          margin: 0;

          color: var(--career-muted);

          font-size: 14px;

          line-height: 1.7;
        }

        .careers-job-meta {
          display: flex;

          gap: 20px;

          margin-top: 17px;

          padding: 12px 0;

          border-top: 1px solid var(--career-line);

          color: #626b78;

          font-size: 12px;
        }

        .careers-text-button {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          margin-top: 10px;

          padding: 0;

          border: 0;

          background: transparent;

          color: var(--career-text);

          font-size: 13px !important;

          font-weight: 800;
        }

        .careers-text-button span {
          color: var(--career-red);

          transition: transform 0.2s ease;
        }

        .careers-text-button:hover span {
          transform: translateX(4px);
        }

        /* =====================================================
           DETAILS
        ===================================================== */

        .careers-details {
          min-height: 250px;

          padding-top: 65px;

          padding-bottom: 70px;
        }

        .careers-detail-heading {
          display: flex;

          justify-content: space-between;

          gap: 30px;

          align-items: flex-end;

          padding-bottom: 25px;

          border-bottom: 1px solid var(--career-line);
        }

        .careers-detail-meta {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 18px;

          padding: 23px 0;

          border-bottom: 1px solid var(--career-line);
        }

        .careers-detail-meta div {
          display: flex;

          flex-direction: column;

          gap: 5px;
        }

        .careers-detail-meta span {
          color: var(--career-muted);

          font-size: 11px;
        }

        .careers-detail-meta strong {
          font-size: 14px;
        }

        .careers-detail-description {
          margin: 22px 0;

          color: var(--career-muted);

          font-size: 15px;
        }

        .careers-detail-lists {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 50px;
        }

        .careers-detail-lists h3 {
          margin: 0 0 12px;

          font-size: 16px;
        }

        .careers-detail-lists ul {
          display: grid;

          gap: 9px;

          margin: 0;

          padding: 0;

          list-style: none;
        }

        .careers-detail-lists li {
          position: relative;

          padding-left: 16px;

          color: var(--career-muted);

          font-size: 14px;
        }

        .careers-detail-lists li::before {
          position: absolute;

          top: 11px;

          left: 0;

          width: 6px;

          height: 2px;

          background: var(--career-red);

          content: "";
        }

        .careers-detail-empty {
          padding: 25px 0;

          border-bottom: 1px solid var(--career-line);
        }

        .careers-detail-empty p {
          margin: 0;

          color: var(--career-muted);

          font-size: 14px;
        }

        /* =====================================================
           YOUR NEXT CHAPTER
           DARK BLUE
        ===================================================== */

        .careers-application {
          padding: 90px 0;

          background:
            linear-gradient(
              135deg,
              #061d66,
              #04164f
            );

          color: #ffffff;
        }

        .careers-application-layout {
          display: grid;

          grid-template-columns: 0.75fr 1.25fr;

          gap: 75px;

          align-items: start;
        }

        .careers-application h2 {
          color: #ffffff;
        }

        .careers-application-intro > p {
          max-width: 400px;

          margin: 20px 0;

          color: rgba(255,255,255,0.86);

          font-size: 15px;

          line-height: 1.8;
        }

        .careers-application-note {
          display: block;

          max-width: 400px;

          padding-top: 15px;

          border-top: 1px solid rgba(255,255,255,0.28);

          color: rgba(255,255,255,0.7);

          font-size: 12px;
        }

        .careers-form-grid {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 18px 16px;
        }

        .careers-field {
          display: flex;

          flex-direction: column;

          gap: 7px;
        }

        .careers-field label {
          color: rgba(255,255,255,0.95);

          font-size: 12px;

          font-weight: 700;
        }

        .careers-field label span {
          color: rgba(255,255,255,0.6);

          font-weight: 400;
        }

        .careers-field input,
        .careers-field select,
        .careers-field textarea {
          width: 100%;

          min-height: 46px;

          padding: 10px 12px;

          border: 1px solid rgba(255,255,255,0.3);

          border-radius: 0;

          outline: none;

          background: rgba(255,255,255,0.08);

          color: #ffffff;

          font-size: 14px;
        }

        .careers-field input:focus,
        .careers-field select:focus,
        .careers-field textarea:focus {
          border-color: #ffffff;

          box-shadow:
            0 0 0 2px
            rgba(255,255,255,0.12);
        }

        .careers-field input::placeholder,
        .careers-field textarea::placeholder {
          color: rgba(255,255,255,0.55);
        }

        .careers-field select option {
          background: var(--career-navy);

          color: #ffffff;
        }

        .careers-field textarea {
          min-height: 115px;

          resize: vertical;
        }

        .careers-field input[type="file"] {
          padding: 7px;

          color: rgba(255,255,255,0.8);

          font-size: 12px;
        }

        .careers-field input[type="file"]::file-selector-button {
          margin-right: 10px;

          padding: 6px 9px;

          border: 0;

          background: #ffffff;

          color: var(--career-navy);

          font-size: 11px;

          font-weight: 700;

          cursor: pointer;
        }

        .careers-field-wide {
          grid-column: 1 / -1;
        }

        .careers-submit {
          margin-top: 20px;
        }

        /* =====================================================
           MAKE YOUR NEXT MOVE
           DARK BLUE
        ===================================================== */

        .careers-cta {
          display: flex;

          justify-content: space-between;

          align-items: center;

          gap: 35px;

          margin-top: 80px;

          margin-bottom: 80px;

          padding: 45px;

          background:
            linear-gradient(
              135deg,
              #061d66,
              #04164f
            );

          color: #ffffff;

          box-shadow:
            0 18px 45px
            rgba(6,29,102,0.16);
        }

        .careers-cta h2 {
          color: #ffffff;

          font-size: 38px;
        }

        .careers-cta p {
          max-width: 650px;

          margin: 12px 0 0;

          color: rgba(255,255,255,0.84);

          font-size: 14px;

          line-height: 1.8;
        }

        .careers-button-light {
          flex-shrink: 0;

          background: #ffffff;

          color: var(--career-navy);
        }

        .careers-button-light:hover {
          background: var(--career-red);

          color: #ffffff;
        }

        /* =====================================================
           LET'S CONNECT
           FULL DARK BLUE
        ===================================================== */

        .careers-contact {
          padding: 75px 0 82px;

          background:
            linear-gradient(
              135deg,
              #061d66,
              #04164f
            );

          color: #ffffff;

          border-top:
            1px solid
            rgba(255,255,255,0.12);
        }

        .careers-contact-inner {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 65px;

          align-items: center;
        }

        .careers-contact h2 {
          color: #ffffff;
        }

        .careers-contact-inner p {
          margin: 0 0 20px;

          color: rgba(255,255,255,0.84);

          font-size: 15px;

          line-height: 1.8;
        }

        .careers-contact-link {
          display: inline-flex;

          align-items: center;

          gap: 12px;

          padding-bottom: 5px;

          border-bottom:
            1px solid
            rgba(255,255,255,0.6);

          color: #ffffff;

          font-size: 13px;

          font-weight: 800;

          text-decoration: none;
        }

        .careers-contact-link:hover {
          color: #ff8589;

          border-color: #ff8589;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 950px) {

          .careers-hero-copy {
            width: 75%;
          }

          .careers-values-grid {
            grid-template-columns: 1fr 1fr;
          }

          .careers-intro,
          .careers-experience {
            gap: 40px;
          }

          .careers-application-layout {
            gap: 45px;
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .careers-wrap,
          .careers-hero-inner {
            width: calc(100% - 40px);
          }

          .careers-hero {
            min-height: 590px;

            background-position: 62% center;
          }

          .careers-hero-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(3,16,55,0.97),
                rgba(4,21,72,0.83)
              );
          }

          .careers-hero-inner {
            min-height: 590px;
          }

          .careers-hero-copy {
            width: 100%;
          }

          .careers-hero h1 {
            font-size: 47px;
          }

          .careers-hero-copy > p {
            font-size: 15px;
          }

          .careers-hero-actions {
            flex-direction: column;
          }

          .careers-hero-actions .careers-button {
            width: 100%;
          }

          .careers-hero-label {
            right: 0;

            bottom: 25px;
          }

          .careers-intro {
            grid-template-columns: 1fr;

            padding-top: 65px;

            padding-bottom: 65px;
          }

          .careers-intro-image {
            min-height: 310px;
          }

          .careers-culture {
            padding: 65px 0;
          }

          .careers-section-heading {
            grid-template-columns: 1fr;

            gap: 20px;
          }

          .careers-values-grid {
            grid-template-columns: 1fr;
          }

          .careers-experience {
            grid-template-columns: 1fr;

            padding-top: 65px;

            padding-bottom: 65px;
          }

          .careers-experience-image {
            min-height: 300px;
          }

          .careers-job-grid {
            grid-template-columns: 1fr;
          }

          .careers-positions {
            padding: 65px 0;
          }

          .careers-detail-heading {
            flex-direction: column;

            align-items: flex-start;
          }

          .careers-detail-heading .careers-button {
            width: 100%;
          }

          .careers-detail-meta {
            grid-template-columns: 1fr 1fr;
          }

          .careers-detail-lists {
            grid-template-columns: 1fr;
          }

          .careers-application {
            padding: 65px 0;
          }

          .careers-application-layout {
            grid-template-columns: 1fr;

            gap: 40px;
          }

          .careers-form-grid {
            grid-template-columns: 1fr;
          }

          .careers-field-wide {
            grid-column: auto;
          }

          .careers-submit {
            width: 100%;
          }

          .careers-cta {
            flex-direction: column;

            align-items: flex-start;

            margin-top: 60px;

            margin-bottom: 60px;

            padding: 30px 24px;
          }

          .careers-cta h2 {
            font-size: 32px;
          }

          .careers-cta .careers-button {
            width: 100%;
          }

          .careers-contact {
            padding: 55px 0;
          }

          .careers-contact-inner {
            grid-template-columns: 1fr;

            gap: 25px;
          }

        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 430px) {

          .careers-wrap,
          .careers-hero-inner {
            width: calc(100% - 30px);
          }

          .careers-hero h1 {
            font-size: 41px;
          }

          .careers-hero {
            min-height: 560px;
          }

          .careers-hero-inner {
            min-height: 560px;
          }

          .careers-intro h2,
          .careers-section-heading h2,
          .careers-experience h2,
          .careers-detail-heading h2,
          .careers-application h2,
          .careers-contact h2 {
            font-size: 34px;
          }

          .careers-detail-meta {
            grid-template-columns: 1fr;
          }

          .careers-cta h2 {
            font-size: 30px;
          }

        }

      `}</style>

    </div>
  );
}

export default Careers;