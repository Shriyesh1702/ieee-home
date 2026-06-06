import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, Info, Users, Handshake } from "lucide-react";
import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";

const MOBILE_TABS = [
  { id: "home", label: "Home", href: "#home", Icon: Home },
  { id: "about", label: "About", href: "#about", Icon: Info },
  { id: "membership", label: "IEEE", href: "#membership", Icon: Users },
  {
    id: "collaborators",
    label: "Partners",
    href: "#collaborators",
    Icon: Handshake,
  },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  useEffect(() => {
    const elements = MOBILE_TABS.map((tab) =>
      document.getElementById(tab.id),
    ).filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.15, 0.35, 0.55], rootMargin: "-10% 0px -55% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
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
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                      Home
                    </Link>

                    <Link to="/team" onClick={() => setMenuOpen(false)}>
                      Team
                    </Link>

                    <a href="#projects" onClick={() => setMenuOpen(false)}>
                      Projects
                    </a>

                    <a href="#events" onClick={() => setMenuOpen(false)}>
                      Events
                    </a>

                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                      Contact
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <button className="contact-btn">Contact →</button>
      </header>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {MOBILE_TABS.map(({ id, label, href, Icon }) => {
          const isActive = activeSection === id;

          return (
            <a
              key={id}
              href={href}
              className={`mobile-nav-item${isActive ? " active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon
                size={22}
                strokeWidth={isActive ? 2.25 : 1.75}
                fill={isActive ? "currentColor" : "none"}
              />
              <span>{label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
