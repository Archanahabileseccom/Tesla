import { motion } from "framer-motion";

function Stats({ stats = [] }) {
  return (
    <div className="stats-grid">

      {stats.map((stat, index) => (
        <motion.div
          className="stat-item"
          key={index}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: index * 0.1,
          }}
        >

          <strong>{stat.value}</strong>

          <span>{stat.label}</span>

        </motion.div>
      ))}

    </div>
  );
}

export default Stats;