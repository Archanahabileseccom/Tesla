import React from "react";
import { Link } from "react-router-dom";

const Hero = ({
  eyebrow = "",
  title = "Innovation that moves the future.",
  description = "",
  image = "",
  primaryButtonText = "",
  primaryButtonLink = "/contact",
  secondaryButtonText = "",
  secondaryButtonLink = "",
  align = "left",
  overlay = true,
  dark = true,
  fullScreen = false,
  showScroll = true,
  children,
}) => {
  const heroStyle = image
    ? {
        backgroundImage: `url("${image}")`,
      }
    : undefined;

  return (
    <section
      className={[
        "hero",
        dark ? "hero-dark" : "hero-light",
        fullScreen ? "hero-fullscreen" : "hero-normal",
        align === "center" ? "hero-center" : "hero-left",
      ].join(" ")}
      style={heroStyle}
    >
      {/* Background overlay */}
      {image && overlay && <div className="hero-overlay" />}

      {/* Decorative background element */}
      <div className="hero-grid" />

      <div className="hero-container">
        <div className="hero-content">
          {eyebrow && (
            <span className="hero-eyebrow">
              {eyebrow}
            </span>
          )}

          {title && (
            <h1 className="hero-title">
              {title}
            </h1>
          )}

          {description && (
            <p className="hero-description">
              {description}
            </p>
          )}

          {children && (
            <div className="hero-custom-content">
              {children}
            </div>
          )}

          {(primaryButtonText || secondaryButtonText) && (
            <div className="hero-actions">
              {primaryButtonText && (
                <Link
                  to={primaryButtonLink}
                  className="hero-button hero-button-primary"
                >
                  <span>{primaryButtonText}</span>
                  <span className="hero-button-arrow">
                    →
                  </span>
                </Link>
              )}

              {secondaryButtonText && secondaryButtonLink && (
                <Link
                  to={secondaryButtonLink}
                  className="hero-button hero-button-secondary"
                >
                  <span>{secondaryButtonText}</span>
                  <span className="hero-button-arrow">
                    →
                  </span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {showScroll && (
        <div className="hero-scroll">
          <span className="hero-scroll-line" />
          <span className="hero-scroll-text">
            Scroll to explore
          </span>
        </div>
      )}

      <style>{`
        /* =========================================
           HERO
        ========================================= */

        .hero {
          width: 100%;
          min-height: 620px;

          position: relative;
          overflow: hidden;

          display: flex;
          align-items: center;

          background-color: #000000;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .hero-normal {
          min-height: 620px;
        }

        .hero-fullscreen {
          min-height: calc(100vh - 80px);
        }

        /* =========================================
           DARK / LIGHT
        ========================================= */

        .hero-dark {
          color: #ffffff;
          background-color: #000000;
        }

        .hero-light {
          color: #111111;
          background-color: #f5f5f5;
        }

        /* =========================================
           OVERLAY
        ========================================= */

        .hero-overlay {
          position: absolute;
          inset: 0;

          z-index: 1;

          background:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.82) 0%,
              rgba(0, 0, 0, 0.58) 42%,
              rgba(0, 0, 0, 0.20) 75%,
              rgba(0, 0, 0, 0.08) 100%
            );
        }

        .hero-light .hero-overlay {
          background:
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.92) 0%,
              rgba(255, 255, 255, 0.70) 45%,
              rgba(255, 255, 255, 0.20) 100%
            );
        }

        /* =========================================
           GRID EFFECT
        ========================================= */

        .hero-grid {
          position: absolute;
          inset: 0;

          z-index: 1;

          pointer-events: none;

          opacity: 0.12;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.08) 1px,
              transparent 1px
            );

          background-size: 80px 80px;

          mask-image: linear-gradient(
            to right,
            black,
            transparent 80%
          );
        }

        .hero-light .hero-grid {
          opacity: 0.06;

          background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.08) 1px,
              transparent 1px
            );
        }

        /* =========================================
           CONTAINER
        ========================================= */

        .hero-container {
          width: 100%;
          max-width: 1400px;

          margin: 0 auto;

          padding: 120px 40px;

          position: relative;
          z-index: 2;
        }

        /* =========================================
           CONTENT
        ========================================= */

        .hero-content {
          width: 100%;
          max-width: 850px;
        }

        .hero-center .hero-content {
          margin: 0 auto;
          text-align: center;
        }

        /* =========================================
           EYEBROW
        ========================================= */

        .hero-eyebrow {
          display: inline-block;

          margin-bottom: 22px;

          color: #e82127;

          font-size: 12px;
          font-weight: 600;

          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        /* =========================================
           TITLE
        ========================================= */

        .hero-title {
          margin: 0;

          max-width: 900px;

          font-size: clamp(48px, 7vw, 96px);
          font-weight: 600;

          line-height: 0.98;
          letter-spacing: -0.055em;

          color: inherit;
        }

        .hero-center .hero-title {
          margin-left: auto;
          margin-right: auto;
        }

        /* =========================================
           DESCRIPTION
        ========================================= */

        .hero-description {
          max-width: 680px;

          margin-top: 30px;

          font-size: 17px;
          line-height: 1.75;

          color: inherit;

          opacity: 0.78;
        }

        .hero-center .hero-description {
          margin-left: auto;
          margin-right: auto;
        }

        /* =========================================
           CUSTOM CONTENT
        ========================================= */

        .hero-custom-content {
          margin-top: 28px;
        }

        /* =========================================
           BUTTONS
        ========================================= */

        .hero-actions {
          display: flex;
          align-items: center;

          flex-wrap: wrap;

          gap: 14px;

          margin-top: 40px;
        }

        .hero-center .hero-actions {
          justify-content: center;
        }

        .hero-button {
          min-height: 52px;

          padding: 0 24px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 14px;

          border: 1px solid transparent;

          font-size: 13px;
          font-weight: 600;

          letter-spacing: 0.04em;
          text-transform: uppercase;

          text-decoration: none;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease;
        }

        .hero-button:hover {
          transform: translateY(-3px);
        }

        .hero-button-primary {
          background: #e82127;
          border-color: #e82127;
          color: #ffffff;
        }

        .hero-button-primary:hover {
          background: #c9181e;
          border-color: #c9181e;
        }

        .hero-button-secondary {
          background: transparent;
          border-color: rgba(255, 255, 255, 0.65);
          color: #ffffff;
        }

        .hero-button-secondary:hover {
          background: #ffffff;
          border-color: #ffffff;
          color: #111111;
        }

        .hero-light .hero-button-secondary {
          border-color: rgba(0, 0, 0, 0.45);
          color: #111111;
        }

        .hero-light .hero-button-secondary:hover {
          background: #111111;
          border-color: #111111;
          color: #ffffff;
        }

        .hero-button-arrow {
          font-size: 18px;
          line-height: 1;

          transition: transform 0.25s ease;
        }

        .hero-button:hover .hero-button-arrow {
          transform: translateX(4px);
        }

        /* =========================================
           SCROLL INDICATOR
        ========================================= */

        .hero-scroll {
          position: absolute;

          left: 40px;
          bottom: 35px;

          z-index: 3;

          display: flex;
          align-items: center;

          gap: 12px;
        }

        .hero-scroll-line {
          width: 42px;
          height: 1px;

          background: currentColor;

          opacity: 0.55;
        }

        .hero-scroll-text {
          font-size: 10px;
          font-weight: 500;

          letter-spacing: 0.12em;
          text-transform: uppercase;

          opacity: 0.55;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1024px) {
          .hero-container {
            padding: 100px 30px;
          }

          .hero-title {
            font-size: clamp(46px, 8vw, 76px);
          }

          .hero-scroll {
            left: 30px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 768px) {
          .hero {
            min-height: 560px;
          }

          .hero-normal {
            min-height: 560px;
          }

          .hero-fullscreen {
            min-height: calc(100vh - 70px);
          }

          .hero-container {
            padding: 90px 20px 110px;
          }

          .hero-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.86),
                rgba(0, 0, 0, 0.55)
              );
          }

          .hero-light .hero-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.90),
                rgba(255, 255, 255, 0.50)
              );
          }

          .hero-title {
            font-size: clamp(42px, 11vw, 62px);
            line-height: 1;
          }

          .hero-description {
            margin-top: 24px;
            font-size: 15px;
            line-height: 1.7;
          }

          .hero-actions {
            margin-top: 32px;
          }

          .hero-button {
            min-height: 50px;
          }

          .hero-scroll {
            left: 20px;
            bottom: 25px;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {
          .hero-container {
            padding: 80px 16px 100px;
          }

          .hero-title {
            font-size: 40px;
          }

          .hero-eyebrow {
            font-size: 10px;
            letter-spacing: 0.15em;
          }

          .hero-description {
            font-size: 14px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-button {
            width: 100%;
          }

          .hero-scroll {
            left: 16px;
          }

          .hero-scroll-text {
            font-size: 9px;
          }
        }

        /* =========================================
           ACCESSIBILITY
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .hero-button,
          .hero-button-arrow {
            transition: none;
          }

          .hero-button:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;