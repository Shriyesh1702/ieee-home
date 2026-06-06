import { easeOut, motion } from "framer-motion";
import { useRef } from "react";
import "./MembershipSocities.css";

export default function MembershipSocieties() {
  return (
    <section className="showcase-section" id="membership">
      <div className="showcase-grid">
        {/* LEFT CARD */}

        <motion.article
          className="showcase-card"
          initial={{
            opacity: 0,
            y: 120,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            amount: 0.15,
          }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="media-wrapper membership">
            <video autoPlay muted loop playsInline className="showcase-media">
              <source src="/videos/back.mp4" type="video/mp4" />
            </video>

            <div className="media-overlay" />
          </div>

          <div className="showcase-content">
            <motion.span
              initial={{ y: "100%", opacity: 0, filter: "blur(12px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="showcase-content-top"
            >
              GLOBAL COMMUNITY
            </motion.span>

            <h2>
              <motion.span
                initial={{ y: "100%", opacity: 0, filter: "blur(12px)" }}
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                IEEE
                <br />
                Membership
              </motion.span>
            </h2>

            <p>
              <motion.span
                initial={{ y: "100%", opacity: 0, filter: "blur(12px)" }}
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                To join this community of over 425,000 technology and
                engineering professionals united by a common desire to
                continuously learn, interact, collaborate, and innovate visit
                ieee/membership and obtain your membership at the earliest
              </motion.span>
            </p>
          </div>
        </motion.article>

        {/* RIGHT CARD */}

        <motion.article
          className="showcase-card"
          initial={{
            opacity: 0,
            y: 120,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            amount: 0.15,
          }}
          transition={{
            duration: 1.4,

            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="media-wrapper societies">
            <video autoPlay muted loop playsInline className="showcase-media">
              <source src="/videos/back.mp4" type="video/mp4" />
            </video>

            <div className="media-overlay societies-overlay" />
          </div>

          <div className="showcase-content">
            <motion.span
              initial={{ y: "100%", opacity: 0, filter: "blur(12px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="showcase-content-top"
            >
              TECHNICAL EXCELLENCE
            </motion.span>

            <h2>
              <motion.span
                initial={{ y: "100%", opacity: 0, filter: "blur(12px)" }}
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                IEEE
                <br />
                Societies
              </motion.span>
            </h2>

            <p>
              <motion.span
                initial={{ y: "100%", opacity: 0, filter: "blur(12px)" }}
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                IEEE Society members stay technically current, network with
                colleagues locally and abroad, and collaborate on research and
                projects with leading experts -- all while taking advantage of
                specialized opportunities.
              </motion.span>
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
