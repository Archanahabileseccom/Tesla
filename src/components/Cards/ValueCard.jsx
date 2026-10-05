import { motion } from "framer-motion";

function ValueCard({
  number,
  title,
  description,
}) {
  return (
    <motion.div
      className="value-card"
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -5,
      }}
    >

      {number && (
        <span className="value-number">
          {number}
        </span>
      )}

      <h3>{title}</h3>

      <p>{description}</p>

    </motion.div>
  );
}

export default ValueCard;