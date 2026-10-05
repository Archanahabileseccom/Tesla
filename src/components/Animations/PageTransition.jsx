import { motion } from "framer-motion";

function PageTransition({ children }) {
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      {children}
    </motion.main>
  );
}

export default PageTransition;