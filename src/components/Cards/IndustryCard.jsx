import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function IndustryCard({
  title,
  description,
  image,
  link = "/about/industries",
}) {
  return (
    <motion.div
      className="industry-card"
      whileHover={{
        y: -7,
      }}
    >

      <Link to={link}>

        <div className="industry-image">
          <img
            src={image}
            alt={title}
          />
        </div>

        <div className="industry-content">

          <h3>{title}</h3>

          <p>{description}</p>

          <div className="industry-arrow">
            <ArrowUpRight size={18} />
          </div>

        </div>

      </Link>

    </motion.div>
  );
}

export default IndustryCard;