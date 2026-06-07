import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, Users, Calendars, GraduationCap,CircleUser } from "lucide-react";
import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";

const MOBILE_TABS = [
  { label: "Home", to: "/", Icon: Home, end: true },
  { label: "Team", to: "/team", Icon: Users },
  { label: "Events", to: "/events", Icon: Calendars },
  { label: "Alumni", to: "/alumni", Icon: GraduationCap },
  { label: "Contact", to: "/contact", Icon: CircleUser }
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = Math.round((scrollTop / scrollHeight) * 100);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <>
      <header className="navbar navbar-desktop">
        <div className="nav-logo">IEEE</div>

        <div className="nav-center">
          <motion.div
            className={`menu-container ${menuOpen ? "open" : ""}`}
            animate={{
              borderRadius: menuOpen ? "24px" : "999px",
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <button
              className="menu-trigger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              <span className="menu-item scroll-number">
                <span className="scroll-number-value">{scrollProgress}</span>%
              </span>

              <span className="menu-item">Menu</span>
              <motion.span
                animate={{
                  rotate: menuOpen ? 90 : 0,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                ☰
              </motion.span>
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.div
                    className="dropdown-links"
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    exit={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {MOBILE_TABS.map(({ label, to }) => (
                      <Link
                        key={to}
                        to={to}
                        onClick={() => setMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <button className="contact-btn">Contact →</button>
      </header>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {MOBILE_TABS.map(({ label, to, Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `mobile-nav-item${isActive ? " active" : ""}`
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={22}
                  strokeWidth={isActive ? 2.25 : 1.75}
                  fill={isActive ? "currentColor" : "none"}
                />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
