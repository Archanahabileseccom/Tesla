import { motion } from "framer-motion";
import "./Section.css";

function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <motion.div
      className={`section-title section-title-${align}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <span className="section-eyebrow">
          {eyebrow}
        </span>
      )}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

export default SectionTitle;