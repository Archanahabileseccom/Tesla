import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ title, items = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="dropdown-button"
        onClick={() => setOpen((prev) => !prev)}
      >
        {title}
        <span className={`dropdown-arrow ${open ? "open" : ""}`}>
          ▾
        </span>
      </button>

      {open && items.length > 0 && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <Link
              key={item.path || index}
              to={item.path}
              className="dropdown-item"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;