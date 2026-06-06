import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Stat({ value, suffix, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      animate(0, value, {
        duration: 1.5,
        onUpdate: (latest) => {
          setCount(Math.floor(latest));
        },
      });
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="stat"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h3>
        <span
          className="stat-number"
          style={{ minWidth: `${String(value).length}ch` }}
        >
          {count}
        </span>
        <span className="stat-suffix">{suffix}</span>
      </h3>

      <p>{label}</p>
    </motion.div>
  );
}
