import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clients from "../Data/clients";
import "./OurClients.css";

function ClientsHero({ category, heading, subtitle, source, eyebrow }) {
  const activeIndex = category ? clients.findIndex((item) => item.slug === category.slug) : -1;
  const previous = activeIndex >= 0 ? clients[(activeIndex + clients.length - 1) % clients.length] : null;
  const next = activeIndex >= 0 ? clients[(activeIndex + 1) % clients.length] : null;

  return (
    <header className="clients-hero">
      {category && (
        <img
          className="clients-hero-photo"
          src={category.heroImage}
          srcSet={`${category.heroImageSmall} 800w, ${category.heroImage} 2000w`}
          sizes="100vw"
          alt={category.heroAlt}
          style={{ objectPosition: category.heroPosition || "center" }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      )}
      <div className="clients-hero-overlay" aria-hidden="true" />
      <div className="clients-container clients-hero-content">
        <p className="clients-eyebrow">{eyebrow}</p>
        <h1>{heading}</h1>
        <p className="clients-subtitle">{subtitle}</p>
        {source && <p className="clients-source">{source}</p>}
      </div>
      {category && (
        <>
          <div className="clients-hero-controls">
            <Link className="clients-hero-arrow" to={`/our-clients/${previous.slug}`} aria-label={`Previous category: ${previous.label}`}>
              <ChevronLeft size={23} aria-hidden="true" />
            </Link>
            <nav className="clients-hero-pagination" aria-label="Client category slides">
              {clients.map((item, index) => (
                <Link
                  className={`clients-hero-dot${index === activeIndex ? " is-active" : ""}`}
                  key={item.slug}
                  to={`/our-clients/${item.slug}`}
                  aria-label={`Slide ${index + 1}: ${item.label}`}
                  aria-current={index === activeIndex ? "page" : undefined}
                />
              ))}
            </nav>
            <Link className="clients-hero-arrow" to={`/our-clients/${next.slug}`} aria-label={`Next category: ${next.label}`}>
              <ChevronRight size={23} aria-hidden="true" />
            </Link>
          </div>
        </>
      )}
    </header>
  );
}

function ClientCategory({ category }) {
  return (
    <>
      <ClientsHero
        key={category.slug}
        category={category}
        heading={category.heading}
        subtitle={category.heroSubtitle}
        source={category.source}
        eyebrow={`TESLA INNOVATION / OUR CLIENTS / ${category.label.toUpperCase()}`}
      />

      <section className="clients-content clients-container" aria-label={`${category.label} details`}>
        <div className="clients-stats" aria-label={`${category.label} highlights`}>
          {category.stats.map((stat) => (
            <article className="clients-stat-card" key={stat.label}>
              {stat.value && <strong>{stat.value}</strong>}
              <span>{stat.label}</span>
            </article>
          ))}
        </div>

        <div className="clients-list-heading">
          <div>
            <p className="clients-eyebrow">REFERENCE LIST</p>
            <h2>{category.label}</h2>
          </div>
          <span>{category.entries.length} entries</span>
        </div>

        <div className="clients-grid">
          {category.entries.map((entry) => (
            <article className="clients-card" key={`${entry.rank}-${entry.name}`}>
              {entry.logo && (
                <div className="clients-card-logos">
                  {(Array.isArray(entry.logo) ? entry.logo : [entry.logo]).map((logo) => (
                    <img className="clients-card-logo" key={logo} src={logo} alt="" loading="lazy" decoding="async" />
                  ))}
                </div>
              )}
              <div className="clients-card-copy">
                <h3>{entry.name}</h3>
                {entry.location && <p className="clients-location">{entry.location}</p>}
                {entry.detail && <p className="clients-detail">{entry.detail}</p>}
              </div>
            </article>
          ))}
        </div>

        {category.guide && (
          <aside className="clients-guide">
            <h2>Quick guide</h2>
            <div className="clients-guide-grid">
              {category.guide.map((item) => (
                <p key={item.title}><strong>{item.title}:</strong> {item.text}</p>
              ))}
            </div>
          </aside>
        )}

        <p className="clients-disclaimer">
          This directory presents reference information supplied for this page. Listing an organization here does not indicate a client, partnership, or affiliation with Tesla Innovation. Logos and website links were not supplied.
        </p>
      </section>
    </>
  );
}

function OurClients() {
  const { category: categorySlug } = useParams();
  const category = clients.find((item) => item.slug === categorySlug);

  if (category) {
    return (
      <div className="clients-page">
        <ClientCategory category={category} />
        <nav className="clients-category-nav clients-container" aria-label="Other client categories">
          <h2>Explore other categories</h2>
          <div>
            {clients.filter((item) => item.slug !== category.slug).map((item) => (
              <Link key={item.slug} to={`/our-clients/${item.slug}`}>{item.label}</Link>
            ))}
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className="clients-page">
      <ClientsHero
        heading="Explore our directory"
        subtitle="Browse the supplied university, engineering, IT, and EV reference lists."
        source="The categories below contain reference information provided for this page."
        eyebrow="TESLA INNOVATION / OUR CLIENTS"
      />
      <section className="clients-content clients-container" aria-label="Client categories">
        <div className="clients-overview-grid">
          {clients.map((item) => (
            <Link className="clients-overview-card" key={item.slug} to={`/our-clients/${item.slug}`}>
              <span>{item.stats[0].value}</span>
              <h2>{item.label}</h2>
              <p>{item.subtitle}</p>
              <strong>View category <span aria-hidden="true">→</span></strong>
            </Link>
          ))}
        </div>
        <p className="clients-disclaimer">
          This directory presents reference information supplied for this page. Listing an organization here does not indicate a client, partnership, or affiliation with Tesla Innovation. Logos and website links were not supplied.
        </p>
      </section>
    </div>
  );
}

export default OurClients;
