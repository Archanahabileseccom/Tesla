import React from "react";
import { Link } from "react-router-dom";

const CTA = ({
  eyebrow = "LET'S CONNECT",
  title = "Build what comes next.",
  description = "Connect with our team to explore innovation, technology, intellectual property, and strategic opportunities.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
  secondaryText = "",
  secondaryLink = "",
  dark = true,
}) => {
  return (
    <>
      <section
        className={`cta-section ${
          dark ? "cta-section-dark" : "cta-section-light"
        }`}
      >
        <div className="cta-container">
          <div className="cta-content">
            {eyebrow && (
              <span className="cta-eyebrow">
                {eyebrow}
              </span>
            )}

            {title && (
              <h2 className="cta-title">
                {title}
              </h2>
            )}

            {description && (
              <p className="cta-description">
                {description}
              </p>
            )}

            <div className="cta-actions">
              {buttonText && (
                <Link
                  to={buttonLink}
                  className="cta-button cta-button-primary"
                >
                  <span>{buttonText}</span>
                  <span className="cta-arrow">→</span>
                </Link>
              )}

              {secondaryText && secondaryLink && (
                <Link
                  to={secondaryLink}
                  className="cta-button cta-button-secondary"
                >
                  <span>{secondaryText}</span>
                  <span className="cta-arrow">→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .cta-section {
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .cta-section-dark {
          background: #000000;
          color: #ffffff;
        }

        .cta-section-light {
          background: #f5f5f5;
          color: #111111;
        }

        .cta-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 120px 40px;
        }

        .cta-content {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-eyebrow {
          display: block;
          margin-bottom: 20px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #e82127;
        }

        .cta-title {
          margin: 0;
          font-size: clamp(42px, 6vw, 82px);
          font-weight: 600;
          line-height: 1.02;
          letter-spacing: -0.045em;
        }

        .cta-description {
          max-width: 680px;
          margin: 28px auto 0;
          font-size: 17px;
          line-height: 1.7;
          font-weight: 400;
          opacity: 0.75;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 42px;
        }

        .cta-button {
          min-height: 52px;
          padding: 0 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          transition:
            transform 0.25s ease,
            background 0.25s ease,
            color 0.25s ease,
            border-color 0.25s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px);
        }

        .cta-button-primary {
          background: #e82127;
          color: #ffffff;
          border: 1px solid #e82127;
        }

        .cta-button-primary:hover {
          background: #c9181e;
          border-color: #c9181e;
        }

        .cta-button-secondary {
          background: transparent;
          color: inherit;
          border: 1px solid currentColor;
        }

        .cta-button-secondary:hover {
          background: #ffffff;
          color: #111111;
        }

        .cta-section-light .cta-button-secondary:hover {
          background: #111111;
          color: #ffffff;
        }

        .cta-arrow {
          font-size: 18px;
          line-height: 1;
          transition: transform 0.25s ease;
        }

        .cta-button:hover .cta-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .cta-container {
            padding: 100px 30px;
          }

          .cta-title {
            font-size: clamp(40px, 7vw, 68px);
          }
        }

        @media (max-width: 768px) {
          .cta-container {
            padding: 80px 20px;
          }

          .cta-title {
            font-size: clamp(38px, 10vw, 58px);
          }

          .cta-description {
            font-size: 15px;
          }

          .cta-actions {
            margin-top: 32px;
          }

          .cta-button {
            width: 100%;
            max-width: 280px;
          }
        }

        @media (max-width: 480px) {
          .cta-container {
            padding: 70px 16px;
          }

          .cta-eyebrow {
            font-size: 11px;
          }

          .cta-title {
            font-size: 38px;
          }

          .cta-description {
            margin-top: 22px;
            font-size: 14px;
          }

          .cta-actions {
            flex-direction: column;
            width: 100%;
          }

          .cta-button {
            width: 100%;
            max-width: none;
          }
        }
      `}</style>
    </>
  );
};

export default CTA;