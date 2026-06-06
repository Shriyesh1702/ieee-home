import "./Features.css";
import FeatureItem from "./FeatureItem";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

export default function Features() {
  const sectionRef = useRef(null);
  const id = "jlwmhs";

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* SECTION MOTION */

  const y = useTransform(scrollYProgress, [0, 1], [140, -120]);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.8, 1],
    [0, 1, 1, 0.7],
  );

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.97, 1]);

  /* HORIZONTAL ROW MOTION */

  const rowX = useTransform(scrollYProgress, [0, 1], [120, -40]);

  const features = [
    {
      title: "lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sed!",
      image: "/images/fabrizio-conti-kXVogATbFgA-unsplash.jpg",
    },

    {
      title: "lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sed!",
      image: "/images/fabrizio-conti-kXVogATbFgA-unsplash.jpg",
    },

    {
      title: "lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sed!",
      image: "/images/fabrizio-conti-kXVogATbFgA-unsplash.jpg",
    },

    {
      title: "lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sed!",
      image: "/images/fabrizio-conti-kXVogATbFgA-unsplash.jpg",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="features"
      style={{
        y,
        opacity,
        scale,
      }}
    >
      <div className="features-top">
        <p className="features-label">Featured Innovations</p>

        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Engineering
          <br />
          The Future
        </motion.h2>

        <p className="features-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          mollitia exercitationem adipisci expedita accusamus fugiat magnam
          deleniti quibusdam vel recusandae.
        </p>
      </div>

      <motion.div
        className="features-row"
        style={{
          x: rowX,
        }}
      >
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} delay={index * 0.1} />
        ))}
      </motion.div>
    </motion.section>
  );
}
