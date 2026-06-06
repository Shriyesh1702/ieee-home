import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";

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
    <header className="navbar">
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
          >
            <span className="menu-item">
              <div className="scroll-number">{scrollProgress}%</div>
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
                  <Link to="/">Home</Link>

                  <Link to="/team">Team</Link>

                  <a href="#projects">Projects</a>

                  <a href="#events">Events</a>

                  <a href="#contact">Contact</a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <button className="contact-btn">Contact →</button>
    </header>
  );
}
