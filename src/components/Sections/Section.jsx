import React from "react";
import "./Section.css";

const Section = ({
  children,
  className = "",
  id = "",
  background = "white",
  padding = "normal",
  fullWidth = false,
}) => {
  const sectionClasses = [
    "section",
    `section-${background}`,
    `section-padding-${padding}`,
    fullWidth ? "section-full-width" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={id || undefined}
      className={sectionClasses}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="section-container">
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;