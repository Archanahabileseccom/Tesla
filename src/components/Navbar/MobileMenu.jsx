import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function MobileMenu({ navigation, closeMenu }) {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (label) => {
    setOpenItem(openItem === label ? null : label);
  };

  return (
    <div className="mobile-navigation">

      <div className="mobile-navigation-inner">

        {navigation.map((item) => {

          const isOpen = openItem === item.label;

          return (
            <div
              key={item.label}
              className="mobile-nav-group"
            >

              <div className="mobile-nav-title-row">

                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className="mobile-main-link"
                >
                  {item.label}
                </Link>

                {item.items && (
                  <button
                    className="mobile-dropdown-button"
                    onClick={() => toggleItem(item.label)}
                  >
                    <ChevronDown
                      size={18}
                      className={
                        isOpen ? "rotate-arrow" : ""
                      }
                    />
                  </button>
                )}

              </div>

              {isOpen && item.items && (
                <div className="mobile-submenu">

                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      onClick={closeMenu}
                    >
                      {subItem.label}
                    </Link>
                  ))}

                </div>
              )}

            </div>
          );
        })}

        <Link
          to="/contact"
          className="mobile-contact-button"
          onClick={closeMenu}
        >
          Let's Talk
        </Link>

      </div>
    </div>
  );
}

export default MobileMenu;