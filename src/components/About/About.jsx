import { motion } from "framer-motion";
import Stat from "./Stat";

import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span
            style={{
              paddingLeft: "1rem",
            }}
          >
            ABOUT US
          </span>
          <div className="about-heading">
            <div className="line-mask">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Advancing Technology
              </motion.h2>
            </div>
            <div className="line-mask">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Through Innovation
              </motion.h2>
            </div>
          </div>

          <motion.p
            style={{
              paddingTop: "2rem",
            }}
            initial={{
              y: "100%",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            maiores exercitationem dolor officiis, debitis doloremque ea quidem
            ducimus cum incidunt quisquam similique animi adipisci recusandae,
            eveniet numquam tenetur! Fuga, dolor.
          </motion.p>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        ></motion.div>
      </div>

      <div className="stats-container">
        <Stat value={50} suffix="+" label="Members" />
        <Stat value={30} suffix="+" label="Events and Workshops" />
        <Stat value={500} suffix="+" label="Participants" />
      </div>
    </section>
  );
}
