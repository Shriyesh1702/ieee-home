import { motion } from "framer-motion";
export default function CollaboratorRow({ logos, direction, delay }) {
  return (
    <motion.div
      className={`logos-row ${direction}`}
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
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="logos-track">
        {[...logos, ...logos].map((logo, index) => (
          <div className="logo-card" key={index}>
            <img src={logo} alt="" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
