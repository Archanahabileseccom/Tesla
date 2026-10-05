import { motion } from "framer-motion";

function ProcessStep({
  number,
  title,
  description,
}) {
  return (
    <motion.div
      className="process-step"
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
      transition={{
        duration: 0.6,
      }}
    >

      <div className="process-number">
        {number}
      </div>

      <div className="process-content">

        <h3>{title}</h3>

        <p>{description}</p>

      </div>

    </motion.div>
  );
}

export default ProcessStep;