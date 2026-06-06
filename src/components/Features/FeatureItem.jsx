import { motion } from "framer-motion";

export default function FeatureItem({ title, description, image, delay }) {
  return (
    <motion.div className="feature-card">
      <div className="feature-visual">
        <motion.img src={image} alt={title} loading="lazy" />
      </div>

      <div className="feature-content">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </motion.div>
  );
}
