import "./Collaborators.css";
import { motion } from "framer-motion";

import CollaboratorRow from "./CollaboratorRow";

export default function Collaborators() {
  const logos = [
    "/logos/cisco.png",
    "/logos/gdg.png",
    "/logos/gsc.png",
    "/logos/ieeecomp.png",
    "/logos/ieekol.png",
    "/logos/intel.png",
    "/logos/townscript.png",
    "/logos/unity.png",
  ];

  return (
    <motion.section
      className="collaborators"
      id="collaborators"
      initial={{
        opacity: 0,
        y: 120,
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        className="collaborators-top"
        initial={{
          opacity: 0,
          y: 60,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <span>COLLABORATORS</span>

        <h2>
          Building
          <br />
          Together
        </h2>

        <p>
          Partnering with innovators, organizations, and technology leaders
          shaping the future.
        </p>
      </motion.div>

      <div className="logos-field">
        <CollaboratorRow logos={logos} direction="left" delay={0.2} />

        <CollaboratorRow logos={logos} direction="right" delay={0.35} />
      </div>
    </motion.section>
  );
}
