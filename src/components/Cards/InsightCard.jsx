import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function InsightCard({
  category,
  title,
  description,
  date,
  image,
  link = "/insights",
}) {
  return (
    <motion.article
      className="insight-card"
      whileHover={{
        y: -6,
      }}
    >

      <Link to={link}>

        <div className="insight-image">
          <img
            src={image}
            alt={title}
          />
        </div>

        <div className="insight-content">

          <div className="insight-meta">
            <span>{category}</span>

            {date && (
              <span>{date}</span>
            )}
          </div>

          <h3>{title}</h3>

          {description && (
            <p>{description}</p>
          )}

          <div className="insight-read">
            Read more
            <ArrowRight size={16} />
          </div>

        </div>

      </Link>

    </motion.article>
  );
}

export default InsightCard;