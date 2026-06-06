import SignalField from "../SignalField/SignalField";
import "./Hero.css";

import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="hero" id="home">
      <SignalField />
      <div className="hero-content">
        <motion.p
          className="hero-tag "
          initial={{
            opacity: 0,
            filter: "blur(12px)",
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          NIT DURGAPUR
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{
            opacity: 0,
            filter: "blur(12px)",
            y: 40,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ fontFamily: "Stack Sans Notch" }}
        >
          IEEE
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{
            opacity: 0,
            filter: "blur(12px)",
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          STUDENT BRANCH
        </motion.p>
      </div>
    </section>
  );
}
