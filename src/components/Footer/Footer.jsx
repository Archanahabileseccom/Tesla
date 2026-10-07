import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <style>{`
        .main-footer {
          width: 100%;
          position: relative;
          overflow: hidden;
          color: #ffffff;
          background: #061D66;
        }

        .main-footer::before {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          right: -200px;
          top: -230px;
          border-radius: 50%;
          background: rgba(80, 170, 255, 0.12);
          filter: blur(20px);
          animation: footerGlow 7s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes footerGlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }

          50% {
            transform: scale(1.2);
            opacity: 0.9;
          }
        }

        .footer-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1250px;
          margin: 0 auto;
          padding: 65px 45px 0;
          box-sizing: border-box;
        }

        .footer-grid {
          display: grid;
          grid-template-columns:
            1.8fr
            1fr
            1fr
            0.9fr;
          gap: 64px;
          padding-bottom: 50px;
        }

        /* =========================
           BRAND
        ========================= */

        .footer-brand {
          max-width: 430px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
        }

        .footer-logo-box {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          background: transparent;
          padding: 0;
          border-radius: 0;
          box-sizing: border-box;
        }

        .footer-wordmark {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          text-decoration: none;
          margin: 0;
        }

        .footer-logo {
          width: 190px;
          height: 82px;
          display: block;
          object-fit: contain;
          object-position: left center;
          background: transparent;
          margin-bottom: 20px;
        }

        .footer-description {
          margin: 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 15px;
          line-height: 1.8;
        }

        .footer-email {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #72d5ff;
          text-decoration: none;
          font-size: 15px;
          transition: 0.25s ease;
        }

        .footer-email:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .footer-email-icon {
          font-size: 18px;
        }

        /* =========================
           HEADINGS
        ========================= */

        .footer-heading {
          margin: 0 0 22px;
          color: #68d1ff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.7px;
          text-transform: uppercase;
        }

        /* =========================
           LINKS
        ========================= */

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 13px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .footer-link {
          display: inline-block;
          width: fit-content;
          color: rgba(255, 255, 255, 0.84);
          font-size: 14px;
          line-height: 1.5;
          text-decoration: none;
          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }

        .footer-link:hover {
          color: #6dd5ff;
          transform: translateX(5px);
        }

        /* =========================
           BOTTOM
        ========================= */

        .footer-bottom {
          min-height: 65px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          gap: 20px;
        }

        .footer-copyright,
        .footer-tagline {
          margin: 0;
          font-size: 13px;
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.72);
        }

        .footer-tagline {
          color: rgba(255, 255, 255, 0.5);
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1000px) {
          .footer-logo {
            width: 165px;
            height: 72px;
          }

          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 700px) {
          .footer-logo {
            width: 140px;
            height: 62px;
          }

          .footer-container {
            padding: 50px 25px 0;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px 25px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding: 20px 0;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 45px 20px 0;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .footer-brand {
            grid-column: auto;
          }

          .footer-logo {
            width: 125px;
            height: 54px;
          }
        }
      `}</style>

      <footer className="main-footer">
        <div className="footer-container">

          <div className="footer-grid">

            {/* =========================
                BRAND
            ========================= */}

            <div className="footer-brand">

              <div className="footer-logo-box">
                <Link to="/" className="footer-wordmark" aria-label="This Innovation Private Limited home">
                  <img
                    src="https://lucid-wave-craft.lovable.app/assets/tesla-logo-Ca0GV0eq.png"
                    alt="Tesla Innovation Private Limited"
                    className="footer-logo"
                    draggable="false"
                  />
                </Link>
              </div>

              <p className="footer-description">
                Tesla Innovation Private Limited helps organizations
                protect ideas, navigate regulation and execute important
                business decisions.
              </p>

              <a
                href="mailto:gsnnaren@gmail.com"
                className="footer-email"
              >
                <span className="footer-email-icon">
                  ✉
                </span>

                <span>
                  gsnnaren@gmail.com
                </span>
              </a>

            </div>

            {/* =========================
                CAPABILITIES
            ========================= */}

            <div>
              <h3 className="footer-heading">
                Capabilities
              </h3>

              <ul className="footer-links">

                <li>
                  <Link
                    to="/intellectual-property"
                    className="footer-link"
                  >
                    Intellectual Property
                  </Link>
                </li>

                <li>
                  <Link
                    to="/global-ip"
                    className="footer-link"
                  >
                    Global IP
                  </Link>
                </li>

                <li>
                  <Link
                    to="/litigation"
                    className="footer-link"
                  >
                    Litigation
                  </Link>
                </li>

                <li>
                  <Link
                    to="/corporate-laws"
                    className="footer-link"
                  >
                    Corporate Laws
                  </Link>
                </li>

                <li>
                  <Link
                    to="/transactions"
                    className="footer-link"
                  >
                    Transactions
                  </Link>
                </li>

              </ul>
            </div>

            {/* =========================
                KNOWLEDGE
            ========================= */}

            <div>
              <h3 className="footer-heading">
                Knowledge
              </h3>

              <ul className="footer-links">

                <li>
                  <Link
                    to="/insights"
                    className="footer-link"
                  >
                    Insights
                  </Link>
                </li>

                <li>
                  <Link
                    to="/faqs"
                    className="footer-link"
                  >
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link
                    to="/country-guides"
                    className="footer-link"
                  >
                    Country Guides
                  </Link>
                </li>

                <li>
                  <Link
                    to="/events"
                    className="footer-link"
                  >
                    Events
                  </Link>
                </li>

                <li>
                  <Link
                    to="/careers"
                    className="footer-link"
                  >
                    Careers
                  </Link>
                </li>

              </ul>
            </div>

            {/* =========================
                COMPANY
            ========================= */}

            <div>
              <h3 className="footer-heading">
                Company
              </h3>

              <ul className="footer-links">

                <li>
                  <Link
                    to="/about"
                    className="footer-link"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="footer-link"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to="/privacy-policy"
                    className="footer-link"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    to="/terms-of-use"
                    className="footer-link"
                  >
                    Terms of Use
                  </Link>
                </li>

                <li>
                  <Link
                    to="/disclaimer"
                    className="footer-link"
                  >
                    Disclaimer
                  </Link>
                </li>

              </ul>
            </div>

          </div>

          {/* =========================
              COPYRIGHT
          ========================= */}

          <div className="footer-bottom">

            <p className="footer-copyright">
              © 2026 Tesla Innovation Private Limited
            </p>

            <p className="footer-tagline">
              Knowledge • Protection • Growth
            </p>

          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;