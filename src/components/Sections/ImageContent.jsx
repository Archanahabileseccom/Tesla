import React from "react";
import "./Section.css";

const ImageContent = ({
  image,
  imageAlt = "Innovation",
  eyebrow,
  title,
  description,
  buttonText,
  buttonLink = "#",
  reverse = false,
  dark = false,
}) => {
  return (
    <div
      className={`image-content ${
        reverse ? "image-content-reverse" : ""
      } ${dark ? "image-content-dark" : ""}`}
    >
      {/* IMAGE */}
      <div className="image-content-image-wrapper">
        <div className="image-content-image">
          <img src={image} alt={imageAlt} />
        </div>
      </div>

      {/* CONTENT */}
      <div className="image-content-text">
        {eyebrow && (
          <span className="image-content-eyebrow">
            {eyebrow}
          </span>
        )}

        {title && (
          <h2 className="image-content-title">
            {title}
          </h2>
        )}

        {description && (
          <p className="image-content-description">
            {description}
          </p>
        )}

        {buttonText && (
          <a
            href={buttonLink}
            className="image-content-button"
          >
            {buttonText}
            <span>→</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ImageContent;