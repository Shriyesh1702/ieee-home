import "./Footer.css";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="footer-top">
        {/* LEFT */}

        <div className="footer-brand">
          <h2>IEEE SB</h2>

          <p>
            The IEEE Student Branch, NIT Durgapur is a society of enthusiasts
            aimed at promoting research-related activities in the campus.
            Comprising of bright researchers, developers, speakers, and other
            contributors we are a society that welcomes in the era of better
            research prospects, on the campus.
          </p>
        </div>

        {/* CENTER */}

        <div className="footer-links">
          <h4>Navigation</h4>

          <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#membership">About IEEE</a>
          <a href="#collaborators">Collaborators</a>
        </div>

        {/* RIGHT */}

        <div className="footer-contact">
          <h4>Connect</h4>

          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>
      </div>
    </motion.footer>
  );
}
