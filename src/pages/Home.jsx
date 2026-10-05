import { ArrowRight, ChartNoAxesCombined, ChevronLeft, ChevronRight, Pause, Play, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    eyebrow: "TESLA INNOVATION PRIVATE LIMITED",
    title: "Protect what’s next.",
    highlight: "Build with confidence.",
    text: "Practical intellectual property, corporate and dispute advisory for decisions that move business forward.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90",
    alt: "Modern office team working together",
    label: "Explore our work",
    path: "/about",
  },
  {
    eyebrow: "INTELLECTUAL PROPERTY",
    title: "Make innovation",
    highlight: "work harder.",
    text: "Build a thoughtful strategy for patents, trademarks, designs, copyright and the ideas that distinguish your business.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=90",
    alt: "Close-up of an electronic circuit board",
    label: "Explore intellectual property",
    path: "/intellectual-property",
  },
  {
    eyebrow: "CORPORATE & BUSINESS ADVISORY",
    title: "Clear decisions",
    highlight: "create momentum.",
    text: "Connect governance, compliance, risk and corporate structure with the realities of running a business.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=90",
    alt: "Colleagues discussing plans in a business meeting",
    label: "Explore corporate advisory",
    path: "/corporate",
  },
  {
    eyebrow: "TRANSACTIONS",
    title: "Move from opportunity",
    highlight: "to execution.",
    text: "Navigate mergers, investments, partnerships and agreements with a clear view of commercial objectives and risk.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=90",
    alt: "Business team reviewing transaction documents",
    label: "Explore transactions",
    path: "/transactions",
  },
  {
    eyebrow: "LITIGATION & DISPUTE RESOLUTION",
    title: "Resolve complex disputes",
    highlight: "with purpose.",
    text: "Assess the facts, understand your options and take a commercially grounded approach to resolution.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=2200&q=90",
    alt: "Legal reference books and case materials representing dispute resolution",
    label: "Explore dispute resolution",
    path: "/litigation",
  },
];

const depthCards = [
  {
    number: "01",
    title: "CREATE",
    text: "Capture and protect valuable ideas.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "PROTECT",
    text: "Strengthen rights and reduce exposure.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "GROW",
    text: "Turn legal clarity into opportunity.",
    icon: ChartNoAxesCombined,
  },
];

const capabilityCards = [
  {
    number: "01",
    category: "ABOUT TESLA INNOVATION",
    title: "About",
    text: "Learn about our practical, business-minded approach to intellectual property, corporate and innovation-led challenges.",
    path: "/about",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    alt: "Team collaborating around a table",
  },
  {
    number: "02",
    category: "INTELLECTUAL PROPERTY",
    title: "Intellectual Property",
    text: "Plan protection and management for patents, trademarks, designs, copyright and other valuable assets.",
    path: "/intellectual-property",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
    alt: "Electronic components representing technology and invention",
  },
  {
    number: "03",
    category: "DISPUTE RESOLUTION",
    title: "Litigation",
    text: "Evaluate disputes, enforcement options and resolution strategies with commercial priorities in view.",
    path: "/litigation",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1000&q=85",
    alt: "Legal reference books and case materials",
  },
  {
    number: "04",
    category: "TRANSACTIONS",
    title: "Transactions",
    text: "Support for mergers, investments, joint ventures, diligence and transaction agreements.",
    path: "/transactions",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85",
    alt: "Colleagues reviewing a transaction plan",
  },
  {
    number: "05",
    category: "CORPORATE ADVISORY",
    title: "Corporate",
    text: "Strengthen governance, compliance, risk management and business structures.",
    path: "/corporate",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
    alt: "Bright modern office interior",
  },
  {
    number: "06",
    category: "INSIGHTS",
    title: "Insights",
    text: "Explore practical perspectives on intellectual property, technology, business and innovation.",
    path: "/insights",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85",
    alt: "Library shelves representing research and publications",
  },
  {
    number: "07",
    category: "CAREERS",
    title: "Careers",
    text: "Bring your curiosity to a collaborative team focused on meaningful, thoughtful work.",
    path: "/careers",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=85",
    alt: "Team meeting in a bright collaborative workspace",
  },
];

const stats = [
  { value: "15+", label: "Years", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85", alt: "Colleagues working together" },
  { value: "25+", label: "Industries", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85", alt: "Contemporary office workspace" },
  { value: "100+", label: "Projects", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85", alt: "Team reviewing project documents" },
  { value: "12+", label: "Markets", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85", alt: "High-rise buildings in a business district" },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const activeHero = heroSlides[activeSlide];

  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (carouselPaused || reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [carouselPaused]);

  const showSlide = (index) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="home-page">
      <section
        className={`home-hero${activeHero.path === "/litigation" ? " home-hero-disputes" : ""}`}
        style={{ "--hero-image": `url("${activeHero.image}")` }}
        aria-labelledby="home-hero-title"
      >
        <div className="home-hero-overlay" />
        <div className="home-hero-inner container" key={activeSlide}>
          <div className="home-hero-copy">
            <span className="section-kicker home-kicker">{activeHero.eyebrow}</span>
            <h1 id="home-hero-title">
              {activeHero.title}
              <span>{activeHero.highlight}</span>
            </h1>
            <p>{activeHero.text}</p>
            <div className="hero-actions">
              <Link to={activeHero.path} className="primary-btn">
                {activeHero.label} <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="secondary-btn">
                Start a conversation
              </Link>
            </div>
          </div>

          <div className="hero-controls" role="group" aria-label="Hero slides">
            <button type="button" aria-label="Previous slide" onClick={() => showSlide(activeSlide - 1)}>
              <ChevronLeft size={19} />
            </button>
            <span className="hero-slide-count">0{activeSlide + 1} / 0{heroSlides.length}</span>
            <button
              type="button"
              aria-label={carouselPaused ? "Play slides" : "Pause slides"}
              aria-pressed={carouselPaused}
              onClick={() => setCarouselPaused((paused) => !paused)}
            >
              {carouselPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>
            <button type="button" aria-label="Next slide" onClick={() => showSlide(activeSlide + 1)}>
              <ChevronRight size={19} />
            </button>
            <div className="hero-slide-dots" aria-label="Choose a slide">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
                  aria-pressed={index === activeSlide}
                  onClick={() => showSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-specialist section-shell">
        <div className="section-heading">
          <span className="section-kicker">WHAT WE DO</span>
          <div className="section-heading-row">
            <h2>
              Specialist depth.
              <span>Commercial perspective.</span>
            </h2>
            <p>
              From an invention’s first disclosure to a strategic transaction or complex dispute, we
              help teams see risk clearly and act with purpose.
            </p>
          </div>
        </div>

        <div className="depth-grid">
          {depthCards.map((card) => {
            const Icon = card.icon;
            return (
              <article className="depth-card" key={card.title}>
                <div className="depth-topline">
                  <span className="depth-number">{card.number}</span>
                  <span className="depth-icon">
                    <Icon size={18} />
                  </span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="home-capabilities section-shell">
        <div className="capacity-header">
          <div>
            <span className="section-kicker">ADVISORY</span>
            <h2>Explore how we can help</h2>
          </div>
          <Link to="/contact" className="text-link">
            Discuss your needs <ArrowRight size={16} />
          </Link>
        </div>

        <div className="service-grid">
          {capabilityCards.map((card) => (
            <article className="service-card" key={card.title}>
              <div className="service-badge-wrap">
                <span className="service-number">{card.number}</span>
                <span className="service-category">{card.category}</span>
              </div>
              <div className="service-image">
                <img src={card.image} alt={card.alt} loading="lazy" />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <Link to={card.path} className="card-link">
                Explore capability <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="home-stats section-shell">
        <div className="stats-grid">
          {stats.map((stat) => (
            <article className="stat-box" key={stat.label}>
              <div
                className="stat-visual"
                style={{ backgroundImage: `url("${stat.image}")` }}
                role="img"
                aria-label={stat.alt}
              />
              <div className="stat-copy">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta section-shell">
        <div className="cta-box">
          <div>
            <span className="section-kicker">PARTNERSHIP</span>
            <h2>Strategic support for ambitious teams.</h2>
          </div>
          <p>
            Whether you are protecting early innovation, navigating a transaction, or resolving a
            critical dispute, we help you move forward with clarity and commercial focus.
          </p>
          <Link to="/contact" className="primary-btn light-btn">
            Speak with our team <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        .home-page {
          --navy-900: #061d66;
          --navy-800: #0a2a78;
          --blue-600: #2456c7;
          --blue-100: #eaf2ff;
          --blue-50: #f4f8ff;
          --ink-900: #10234a;
          --ink-700: #475467;
          --muted: #667085;
          --line: #d9e2f0;
          --white: #ffffff;
          --shadow-soft: 0 22px 48px rgba(12, 31, 89, 0.08);
        }

        .container {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
        }

        .section-shell {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
        }

        .home-page {
          color: var(--ink-900);
          background: linear-gradient(180deg, #f7f9fe 0%, #ffffff 18%, #f3f7ff 100%);
        }

        .home-hero {
          position: relative;
          min-height: 690px;
          background:
            linear-gradient(100deg, rgba(5, 20, 38, 0.91), rgba(7, 40, 75, 0.68) 58%, rgba(7, 36, 70, 0.25)),
            var(--hero-image) center/cover no-repeat;
          overflow: hidden;
        }

        .home-hero-disputes {
          background-image:
            linear-gradient(105deg, rgba(5, 18, 31, 0.94) 0%, rgba(8, 35, 46, 0.78) 48%, rgba(7, 42, 51, 0.28) 100%),
            var(--hero-image);
          background-position: center, 58% center;
        }

        .home-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(4, 16, 31, 0.28), transparent 42%);
          pointer-events: none;
        }

        .home-hero-inner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          min-height: 690px;
        }

        .home-hero-copy {
          max-width: 790px;
          padding: 30px 0 72px;
          animation: fadeUp 0.8s ease both;
        }

        .home-kicker,
        .section-kicker {
          display: inline-block;
          margin-bottom: 18px;
          color: #b9d0ff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .home-hero-copy h1 {
          margin: 0;
          color: var(--white);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 60px;
          line-height: 1.08;
          font-weight: 400;
        }

        .home-hero-copy h1 span {
          display: block;
          color: #a2dfce;
        }

        .home-hero-copy p {
          max-width: 680px;
          margin-top: 22px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 17px;
          line-height: 1.75;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 30px;
        }

        .primary-btn,
        .secondary-btn,
        .text-link,
        .card-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
        }

        .primary-btn {
          min-height: 52px;
          padding: 0 22px;
          background: var(--blue-600);
          color: var(--white);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border-radius: 3px;
          box-shadow: 0 14px 32px rgba(36, 86, 199, 0.32);
        }

        .secondary-btn {
          min-height: 52px;
          padding: 0 22px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--white);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 3px;
        }

        .light-btn {
          background: #ffffff;
          color: var(--navy-900);
          box-shadow: none;
        }

        .primary-btn:hover,
        .secondary-btn:hover,
        .text-link:hover,
        .card-link:hover {
          transform: translateY(-2px);
        }

        .hero-controls {
          position: absolute;
          right: 0;
          bottom: 26px;
          display: flex;
          align-items: center;
          gap: 9px;
          color: #fff;
        }

        .hero-controls > button {
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.48);
          background: rgba(5, 20, 38, 0.36);
          color: #fff;
          cursor: pointer;
        }

        .hero-controls > button:hover,
        .hero-controls > button:focus-visible {
          background: #fff;
          color: var(--navy-900);
        }

        .hero-slide-count {
          min-width: 62px;
          font-size: 12px;
          font-variant-numeric: tabular-nums;
          text-align: center;
        }

        .hero-slide-dots {
          display: flex;
          gap: 6px;
          margin-left: 6px;
        }

        .hero-slide-dots button {
          position: relative;
          display: grid;
          width: 28px;
          height: 28px;
          place-items: center;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .hero-slide-dots button::before {
          width: 18px;
          height: 3px;
          background: rgba(255, 255, 255, 0.48);
          content: "";
        }

        .hero-slide-dots button[aria-pressed="true"]::before {
          background: #a2dfce;
        }

        .section-heading {
          margin-bottom: 32px;
        }

        .section-kicker {
          color: var(--blue-600);
          letter-spacing: 0.18em;
        }

        .section-heading-row {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: end;
          gap: 28px;
        }

        .section-heading h2,
        .capacity-header h2,
        .cta-box h2 {
          margin: 0;
          color: var(--ink-900);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 40px;
          font-weight: 400;
          line-height: 1.2;
        }

        .section-heading h2 span,
        .capacity-header h2,
        .cta-box h2 {
          display: block;
        }

        .section-heading p,
        .cta-box p,
        .depth-card p,
        .service-card p {
          color: var(--muted);
          font-size: 1.02rem;
          line-height: 1.8;
        }

        .home-specialist,
        .home-capabilities,
        .home-stats,
        .home-cta {
          padding-top: 88px;
          padding-bottom: 16px;
        }

        .depth-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
          overflow: hidden;
          box-shadow: var(--shadow-soft);
        }

        .depth-card {
          position: relative;
          min-height: 260px;
          padding: 28px 28px 32px;
          background: var(--white);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .depth-card:hover {
          transform: translateY(-6px);
          box-shadow: inset 0 0 0 1px rgba(36, 86, 199, 0.12);
        }

        .depth-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .depth-number {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--blue-600);
        }

        .depth-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--blue-100);
          color: var(--navy-800);
        }

        .depth-card h3 {
          margin: 0 0 14px;
          color: var(--ink-900);
          font-size: 1.5rem;
        }

        .capacity-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 32px;
        }

        .text-link {
          gap: 8px;
          color: var(--navy-800);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .service-card {
          position: relative;
          padding: 26px 24px 24px;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: 4px;
          box-shadow: 0 12px 26px rgba(16, 35, 74, 0.045);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          overflow: hidden;
        }

        .service-card::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--navy-900), var(--blue-600), #4aa2ff);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.28s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(36, 86, 199, 0.25);
          box-shadow: 0 25px 46px rgba(10, 28, 76, 0.08);
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-badge-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
          gap: 12px;
        }

        .service-image {
          height: 170px;
          margin-bottom: 20px;
          overflow: hidden;
          background: #dce3e8;
        }

        .service-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease;
        }

        .service-card:hover .service-image img {
          transform: scale(1.04);
        }

        .service-number {
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--blue-600);
        }

        .service-category {
          color: var(--navy-800);
          font-size: 0.67rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-align: right;
        }

        .service-card h3 {
          margin: 0 0 12px;
          color: var(--ink-900);
          font-size: 1.65rem;
          line-height: 1.15;
        }

        .service-card p {
          margin: 0 0 26px;
          min-height: 96px;
        }

        .card-link {
          justify-content: flex-start;
          width: fit-content;
          gap: 8px;
          color: var(--navy-800);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .home-stats {
          padding-top: 60px;
          padding-bottom: 12px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .stat-box {
          overflow: hidden;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 4px;
          box-shadow: 0 18px 38px rgba(16, 35, 74, 0.04);
        }

        .stat-visual {
          height: 190px;
          background-size: cover;
          background-position: center;
          border-bottom: 1px solid var(--line);
        }

        .stat-copy {
          padding: 22px 18px 20px;
          text-align: center;
        }

        .stat-copy strong {
          display: block;
          color: var(--navy-800);
          font-size: 38px;
          line-height: 1;
        }

        .stat-copy span {
          display: block;
          margin-top: 12px;
          color: var(--ink-700);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .home-cta {
          padding-top: 100px;
          padding-bottom: 100px;
        }

        .cta-box {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          align-items: center;
          gap: 24px;
          padding: 44px 38px;
          background:
            linear-gradient(120deg, rgba(6, 29, 102, 0.96), rgba(11, 42, 120, 0.92)),
            url("/images/home/hero.svg") center/cover no-repeat;
          border-radius: 4px;
          color: var(--white);
          box-shadow: 0 30px 58px rgba(6, 29, 102, 0.18);
        }

        .cta-box .section-kicker {
          color: #c9d9ff;
        }

        .cta-box h2 {
          color: var(--white);
        }

        .cta-box p {
          max-width: 520px;
          color: rgba(255, 255, 255, 0.8);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 980px) {
          .home-hero-inner,
          .section-heading-row,
          .cta-box {
            grid-template-columns: 1fr;
          }

          .home-hero {
            min-height: 660px;
          }

          .home-hero-inner {
            min-height: 660px;
          }

          .home-hero-copy h1 {
            font-size: 50px;
          }

          .section-heading h2,
          .capacity-header h2,
          .cta-box h2 {
            font-size: 36px;
          }

          .service-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 680px) {
          .container,
          .section-shell {
            width: min(100% - 22px, 1200px);
          }

          .home-hero-copy {
            padding-top: 16px;
          }

          .home-hero-copy h1 {
            font-size: 42px;
          }

          .home-hero-inner {
            min-height: 620px;
            align-items: flex-start;
            padding-top: 100px;
            padding-bottom: 88px;
          }

          .hero-controls {
            right: 0;
            bottom: 20px;
            gap: 6px;
          }

          .hero-controls > button {
            width: 34px;
            height: 34px;
          }

          .hero-slide-dots {
            gap: 4px;
            margin-left: 2px;
          }

          .hero-slide-dots button {
            width: 24px;
          }

          .hero-slide-dots button::before {
            width: 14px;
          }

          .stat-copy strong {
            font-size: 32px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
          }

          .section-heading h2,
          .capacity-header h2,
          .cta-box h2 {
            font-size: 32px;
          }

          .service-grid,
          .stats-grid,
          .depth-grid {
            grid-template-columns: 1fr;
          }

          .service-card p {
            min-height: 0;
          }

          .capacity-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .cta-box {
            padding: 32px 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-page *,
          .home-page *::before,
          .home-page *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
