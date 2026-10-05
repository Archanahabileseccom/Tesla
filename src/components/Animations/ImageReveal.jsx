import { motion } from "framer-motion";

function ImageReveal({
  src,
  alt = "",
  className = "",
}) {
  return (
    <motion.div
      className={`image-reveal ${className}`}
      initial={{
        opacity: 0,
        scale: 1.08,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      <img src={src} alt={alt} />
    </motion.div>
  );
}

export default ImageReveal;