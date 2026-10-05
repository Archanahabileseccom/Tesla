import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ServiceCard({
  title,
  description,
  image,
  link,
}) {
  return (
    <motion.div
      className="service-card"
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
    >

      <Link to={link}>

        <div className="service-card-image">
          <img
            src={image}
            alt={title}
          />
        </div>

        <div className="service-card-content">

          <h3>{title}</h3>

          <p>{description}</p>

          <span className="card-link">
            Explore
            <ArrowUpRight size={17} />
          </span>

        </div>

      </Link>

    </motion.div>
  );
}

export default ServiceCard;