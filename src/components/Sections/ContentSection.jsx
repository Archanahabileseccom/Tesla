import React from "react";
import "./Section.css";

const ContentSection = ({
  eyebrow,
  title,
  description,
  children,
  buttonText,
  buttonLink = "#",
  align = "left",
  dark = false,
}) => {
  return (
    <div
      className={`content-section ${
        align === "center" ? "content-section-center" : ""
      } ${dark ? "content-section-dark" : ""}`}
    >
      {eyebrow && (
        <span className="content-section-eyebrow">
          {eyebrow}
        </span>
      )}

      {title && (
        <h2 className="content-section-title">
          {title}
        </h2>
      )}

      {description && (
        <p className="content-section-description">
          {description}
        </p>
      )}

      {children && (
        <div className="content-section-body">
          {children}
        </div>
      )}

      {buttonText && (
        <a href={buttonLink} className="content-section-button">
          {buttonText}
          <span className="button-arrow">→</span>
        </a>
      )}
    </div>
  );
};

export default ContentSection;