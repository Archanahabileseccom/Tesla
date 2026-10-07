import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { id: "strategy", label: "Dispute Strategy" },
  { id: "commercial", label: "Commercial Disputes" },
  { id: "arbitration", label: "Arbitration" },
  { id: "mediation", label: "Mediation" },
  { id: "ip-litigation", label: "IP Litigation" },
];

const heroContent = {
  strategy: {
    eyebrow: "LITIGATION & DISPUTE RESOLUTION",
    title: "Resolving disputes with clarity and commercial focus.",
    description:
      "We help clients assess risk, protect value, and respond to complex disputes with a strategy grounded in business realities and legal discipline.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=2000&q=90",
  },
  commercial: {
    eyebrow: "COMMERCIAL DISPUTES",
    title: "Practical guidance when business relationships turn difficult.",
    description:
      "From contract disagreements to shareholder disputes, we advise clients on risk, evidence, strategy, and resolution paths tailored to the commercial context.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=90",
  },
  arbitration: {
    eyebrow: "ARBITRATION",
    title: "Disciplined advocacy in arbitration and formal proceedings.",
    description:
      "We support clients through procedural planning, expert preparation, document review, and hearing strategy where clarity and timing matter most.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=90",
  },
  mediation: {
    eyebrow: "MEDIATION",
    title: "Finding practical routes to resolution without losing value.",
    description:
      "Negotiation and mediation can preserve relationships, reduce uncertainty, and lead to efficient outcomes when a structured path is used early.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=90",
  },
  "ip-litigation": {
    eyebrow: "IP LITIGATION",
    title: "Protecting innovation, brands, and proprietary value.",
    description:
      "We help clients respond to infringement, enforcement, trade secret, and licensing disputes while protecting long-term business interests and commercial advantage.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=90",
  },
};

const litigationStats = [
  {
    number: "15+",
    title: "Years of experience",
    text: "Practical dispute work shaped by commercial judgment and legal discipline.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    alt: "Colleagues working together in a meeting",
  },
  {
    number: "100+",
    title: "Matters supported",
    text: "Structured guidance across advisory, negotiation, and litigation matters.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
    alt: "Team reviewing documents and case materials",
  },
  {
    number: "12+",
    title: "Markets served",
    text: "Cross-border perspective for disputes involving multiple jurisdictions and stakeholders.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=900&q=85",
    alt: "World map representing cross-border markets",
  },
];

const processSteps = {
  strategy: [
    { number: "01", title: "Assess", text: "Understand the facts, commercial context, and decision that needs to be made." },
    { number: "02", title: "Analyze", text: "Review exposure, evidence, obligations, and available resolution options." },
    { number: "03", title: "Strategize", text: "Set a path that balances legal risk, timing, value, and business priorities." },
    { number: "04", title: "Act", text: "Move decisively through negotiation, mediation, arbitration, or litigation as needed." },
  ],
  commercial: [
    { number: "01", title: "Understand", text: "Clarify the commercial relationship, agreements, and underlying issue." },
    { number: "02", title: "Evaluate", text: "Identify risk, leverage, and issues that affect business continuity and value." },
    { number: "03", title: "Prepare", text: "Organize evidence, timeline, and practical options before action is taken." },
    { number: "04", title: "Resolve", text: "Pursue the most effective route toward a manageable and commercially sensible outcome." },
  ],
  arbitration: [
    { number: "01", title: "Frame", text: "Set the issues, claims, procedural path, and legal objectives clearly." },
    { number: "02", title: "Organize", text: "Align evidence, chronology, submissions, and hearing strategy." },
    { number: "03", title: "Present", text: "Support clear advocacy with disciplined preparation and persuasive execution." },
    { number: "04", title: "Defend", text: "Contribute to enforcement, award considerations, and strategic follow-through." },
  ],
  mediation: [
    { number: "01", title: "Clarify", text: "Identify interests, risk, and practical outcomes that matter to each party." },
    { number: "02", title: "Prepare", text: "Build a negotiation position that reflects scenarios and likely commercial impact." },
    { number: "03", title: "Engage", text: "Explore settlement options while protecting value and relationship sustainability." },
    { number: "04", title: "Conclude", text: "Turn a negotiated result into a workable and commercially reasonable outcome." },
  ],
  "ip-litigation": [
    { number: "01", title: "Identify", text: "Clarify rights, claims, evidence, technical context, and business impact." },
    { number: "02", title: "Assess", text: "Review infringement risk, defensibility, timing, and enforcement options." },
    { number: "03", title: "Protect", text: "Develop a strategic position for enforcement, licensing, or defensive action." },
    { number: "04", title: "Defend", text: "Support the client through claims, injunctions, or settlement discussions with clarity." },
  ],
};

const tabContent = {
  strategy: {
    introTitle: "A connected approach to litigation and dispute management.",
    introText:
      "Effective dispute strategy begins before a claim is filed. We help clients understand their position, assess options, and act with a clear view of the legal and commercial realities involved.",
    focusTitle: "Clarity before action.",
    focusText:
      "We work closely with clients to evaluate the facts, the risk profile, the likely timeline, and the wider business implications of the dispute.",
    bullets: [
      "Early risk assessment and legal review",
      "Fact and evidence planning",
      "Commercial and procedural strategy",
      "Negotiation, mediation, and litigation pathways",
    ],
  },
  commercial: {
    introTitle: "Commercial disagreements require careful, commercially aware action.",
    introText:
      "Commercial disputes can affect contracts, operations, investments, relationships, and decision-making. We help clients evaluate the issues and move toward the most appropriate path forward.",
    focusTitle: "Commercial dispute support with business context.",
    focusText:
      "Our advice considers the contractual position, the practical realities of the dispute, and the business consequences of the available options.",
    bullets: [
      "Contract and performance disputes",
      "Shareholder and partnership conflict",
      "Commercial risk analysis",
      "Strategic resolution planning",
    ],
  },
  arbitration: {
    introTitle: "Arbitration strategy needs structure, preparation, and discipline.",
    introText:
      "Arbitration can offer a structured process for dispute resolution, but it requires careful preparation, a strong understanding of the issues, and a coordinated strategy from the outset.",
    focusTitle: "Clear preparation for high-stakes process management.",
    focusText:
      "We help clients shape their position, organize evidence, and present the matter coherently through procedural steps and hearing preparation.",
    bullets: [
      "Arbitration planning and issue framing",
      "Document and witness preparation",
      "Interim or emergency relief strategy",
      "Hearing readiness and advocacy support",
    ],
  },
  mediation: {
    introTitle: "Mediation can create efficient and commercially sensible outcomes.",
    introText:
      "Mediation and negotiated resolution often offer the most practical way to reduce uncertainty, protect value, and avoid an unnecessarily prolonged dispute.",
    focusTitle: "Negotiation support that protects value and relationships.",
    focusText:
      "We help clients prepare a clear position, identify leverage, and engage constructively in a process that supports business interests.",
    bullets: [
      "Negotiation planning and leverage analysis",
      "Strategic settlement evaluation",
      "Relationship-sensitive communication",
      "Resolution without unnecessary escalation",
    ],
  },
  "ip-litigation": {
    introTitle: "Intellectual property disputes require both technical and commercial insight.",
    introText:
      "IP disputes often turn on evidence, rights, strategic leverage, and the commercial value attached to the asset in question. We help clients assess those factors clearly.",
    focusTitle: "Protecting value in contested innovation and brand landscapes.",
    focusText:
      "Whether the issue involves enforcement, defense, licensing, or trade secret risk, we help clients focus on the strategic path with the strongest commercial fit.",
    bullets: [
      "Patent and trademark enforcement",
      "Trade secret and licensing issues",
      "Commercial impact of IP disputes",
      "Defensive and strategic positioning",
    ],
  },
};

function Litigation() {
  const [activeTab, setActiveTab] = useState("strategy");
  const location = useLocation();
  const navigate = useNavigate();
  const hero = heroContent[activeTab];
  const currentContent = tabContent[activeTab];

  useEffect(() => {
    const hash = location.hash.replace(/^#/, "");
    const nextTab = tabs.some((tab) => tab.id === hash) ? hash : "strategy";
    setActiveTab(nextTab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.hash, location.pathname]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === "strategy") {
      navigate("/litigation");
    } else {
      navigate(`/litigation#${tabId}`);
    }
  };

  return (
    <div className="litigation-page">
      <section
        className="litigation-hero"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(7,15,26,0.95) 0%, rgba(7,15,26,0.82) 44%, rgba(7,15,26,0.5) 100%), url("${hero.image}")` }}
        aria-labelledby="litigation-hero-title"
      >
        <div className="litigation-hero-content" key={activeTab}>
          <span className="litigation-hero-eyebrow">{hero.eyebrow}</span>
          <h1 id="litigation-hero-title">{hero.title}</h1>
          <p className="litigation-hero-description">{hero.description}</p>
        </div>
      </section>

      <main className="litigation-content">
        <section className="litigation-overview" key={`${activeTab}-intro`}>
          <div>
            <h2>{currentContent.introTitle}</h2>
          </div>
          <div>
            <p>{currentContent.introText}</p>
          </div>
        </section>

        {activeTab === "strategy" && (
          <div className="litigation-stats-wrap">
            {litigationStats.map((stat) => (
              <article className="litigation-stat-card" key={stat.title}>
                <div className="litigation-stat-image">
                  <img src={stat.image} alt={stat.alt} loading="lazy" />
                  <span className="litigation-stat-number">{stat.number}</span>
                </div>
                <div className="litigation-stat-copy">
                  <span className="litigation-stat-label">Experience</span>
                  <h3>{stat.title}</h3>
                  <p>{stat.text}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        <section className="litigation-section" key={`${activeTab}-focus`}>
          <div className="litigation-section-shell">
            <div className="litigation-section-copy">
              <span className="litigation-kicker">Our approach</span>
              <h2>{currentContent.focusTitle}</h2>
              <p>{currentContent.focusText}</p>
              <ul className="litigation-section-list">
                {currentContent.bullets.map((text) => (
                  <li key={`${activeTab}-${text}`}>{text}</li>
                ))}
              </ul>
            </div>

            <div className="litigation-visual">
              <div
                className="litigation-image"
                style={{
                  backgroundImage: `url("${hero.image}")`,
                }}
                aria-label={activeTab}
              />
              <span className="litigation-badge">{hero.eyebrow}</span>
            </div>
          </div>
        </section>

        <section className="litigation-process" key={`${activeTab}-process`}>
          <div className="litigation-process-grid">
            {processSteps[activeTab].map((step) => (
              <article className="litigation-process-card" key={`${activeTab}-${step.number}`}>
                <span className="litigation-process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="litigation-final" key={`${activeTab}-cta`}>
          <div className="litigation-final-copy">
            <h2>Need a clear strategy for a complex dispute?</h2>
            <p>
              Whether a matter is emerging, escalating, or already underway, we help clients evaluate the legal and commercial realities and decide on a focused, practical path forward.
            </p>
          </div>

          <div className="litigation-final-panel">
            <span>Start the conversation</span>
            <strong>Discuss a dispute, enforcement issue, or risk review with our team.</strong>
            <a href="/contact">Contact Us</a>
          </div>
        </section>

        <section className="litigation-next" aria-label="Explore litigation services">
          <div>
            <span className="litigation-kicker">EXPLORE MORE</span>
            <h2>Focused support for the way disputes unfold.</h2>
          </div>
          <div className="litigation-next-links">
            {tabs.filter((tab) => tab.id !== activeTab).map((tab, index) => (
              <button
                className="litigation-next-link"
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
              >
                <span>0{index + 1}</span>
                <strong>{tab.label}</strong>
                <span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        </section>
      </main>

      <style>{`
        .litigation-page {
          width: 100%;
          min-height: 100vh;
          background: #f6f7f5;
          color: #111827;
          overflow: hidden;
        }

        .litigation-page *,
        .litigation-page *::before,
        .litigation-page *::after {
          box-sizing: border-box;
        }

        .litigation-page button,
        .litigation-page a {
          -webkit-tap-highlight-color: transparent;
        }

        .litigation-hero {
          position: relative;
          width: 100%;
          height: calc(100vh - 83px);
          height: calc(100svh - 83px);
          display: flex;
          align-items: center;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          overflow: hidden;
          animation: litigationFadeIn 0.8s ease both;
        }

        .litigation-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11, 17, 26, 0.08), rgba(11, 17, 26, 0.28));
          pointer-events: none;
        }

        .litigation-hero-content {
          position: relative;
          z-index: 1;
          width: min(100% - 64px, 1180px);
          margin: 0 auto;
          padding: 96px 0 112px;
          color: #fff;
        }

        .litigation-hero-eyebrow {
          display: inline-block;
          margin-bottom: 16px;
          color: #fca5a5;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .litigation-hero-content h1 {
          max-width: 780px;
          margin: 0;
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 60px;
          line-height: 1.08;
          font-weight: 400;
        }

        .litigation-hero-description {
          max-width: 650px;
          margin: 24px 0 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 17px;
          line-height: 1.75;
        }

        .litigation-content {
          width: min(100% - 64px, 1180px);
          margin: 0 auto;
          padding: 0 0 96px;
        }

        .litigation-overview {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 56px;
          align-items: center;
          animation: litigationUp 0.7s ease both;
        }

        .litigation-overview h2,
        .litigation-section-copy h2,
        .litigation-final-copy h2 {
          margin: 0;
          color: #111827;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 40px;
          line-height: 1.2;
          font-weight: 400;
        }

        .litigation-overview p,
        .litigation-section-copy p,
        .litigation-final-copy p {
          color: #5e6977;
          font-size: 16px;
          line-height: 1.8;
        }

        .litigation-stat-copy p,
        .litigation-process-card p,
        .litigation-section-list li {
          color: #5e6977;
          font-size: 14px;
          line-height: 1.7;
        }

        .litigation-stats-wrap {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-top: 42px;
          animation: litigationUp 0.9s ease both;
        }

        .litigation-stat-card {
          overflow: hidden;
          background: #fff;
          border: 1px solid #e3e7ec;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .litigation-stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(17, 24, 39, 0.08);
        }

        .litigation-stat-image {
          position: relative;
          height: 190px;
          overflow: hidden;
          background: #dce3e8;
        }

        .litigation-stat-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .litigation-stat-card:hover .litigation-stat-image img {
          transform: scale(1.04);
        }

        .litigation-stat-image::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(transparent, rgba(10, 26, 26, 0.64));
        }

        .litigation-stat-number {
          position: absolute;
          left: 18px;
          bottom: 18px;
          z-index: 1;
          color: #fff;
          font-size: 38px;
          line-height: 1;
          font-weight: 700;
          z-index: 2;
        }

        .litigation-stat-copy {
          padding: 22px 18px 20px;
        }

        .litigation-stat-label {
          display: block;
          margin-bottom: 10px;
          color: #d9252b;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .litigation-stat-copy h3 {
          margin: 0 0 10px;
          color: #111827;
          font-size: 16px;
          line-height: 1.4;
        }

        .litigation-section {
          padding-top: 88px;
          scroll-margin-top: 150px;
          animation: litigationUp 0.9s ease both;
        }

        .litigation-section-shell {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 60px;
          align-items: center;
          padding: 34px 32px;
          background: #fff;
          border: 1px solid #e2e8f0;
        }

        .litigation-kicker {
          display: inline-block;
          margin-bottom: 18px;
          color: #d9252b;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .litigation-section-copy h2 {
          margin-bottom: 18px;
        }

        .litigation-section-list {
          margin: 24px 0 0;
          padding-left: 18px;
        }

        .litigation-section-list li + li {
          margin-top: 10px;
        }

        .litigation-visual {
          position: relative;
          min-height: 420px;
          overflow: hidden;
          background: #e5e7eb;
          border: 1px solid rgba(17, 24, 39, 0.05);
          box-shadow: 0 18px 46px rgba(17, 24, 39, 0.08);
        }

        .litigation-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transform: scale(1);
          transition: transform 0.7s ease;
        }

        .litigation-visual:hover .litigation-image {
          transform: scale(1.06);
        }

        .litigation-visual::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(180deg, rgba(17, 24, 39, 0.08), rgba(17, 24, 39, 0.44));
        }

        .litigation-badge {
          position: absolute;
          right: 20px;
          bottom: 20px;
          z-index: 2;
          padding: 12px 18px;
          background: rgba(217, 37, 43, 0.94);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .litigation-process {
          padding-top: 92px;
        }

        .litigation-process-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-top: 12px;
        }

        .litigation-process-card {
          min-height: 220px;
          padding: 24px 22px;
          background: #fff;
          border: 1px solid #e3e7ec;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .litigation-process-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 38px rgba(17, 24, 39, 0.08);
        }

        .litigation-process-number {
          display: inline-block;
          margin-bottom: 28px;
          color: #d9252b;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .litigation-process-card h3 {
          margin: 0 0 14px;
          color: #111827;
          font-size: 22px;
          line-height: 1.25;
        }

        .litigation-final {
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: 36px;
          align-items: center;
          margin-top: 90px;
          padding: 34px 30px;
          background: linear-gradient(135deg, #fafafa 0%, #f2f5f7 100%);
          border: 1px solid #e3e7eb;
          animation: litigationUp 1s ease both;
        }

        .litigation-final-copy h2 {
          margin-bottom: 18px;
        }

        .litigation-final-panel {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 26px 24px;
          background: #fff;
          border: 1px solid #e3e7eb;
          box-shadow: 0 12px 28px rgba(17, 24, 39, 0.05);
        }

        .litigation-final-panel span {
          color: #d9252b;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .litigation-final-panel strong {
          color: #111827;
          font-size: 18px;
          line-height: 1.4;
        }

        .litigation-final-panel a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 18px;
          background: #d9252b;
          color: #fff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .litigation-final-panel a:hover {
          transform: translateY(-2px);
          background: #b71d27;
        }

        .litigation-next {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 56px;
          align-items: start;
          margin-top: 70px;
        }

        .litigation-next > div:first-child h2 {
          max-width: 430px;
          margin: 0;
          color: #111827;
          font-size: 32px;
          line-height: 1.2;
        }

        .litigation-next-links {
          border-top: 1px solid #dfe4e9;
        }

        .litigation-next-link {
          display: grid;
          grid-template-columns: 42px 1fr 24px;
          gap: 12px;
          align-items: center;
          width: 100%;
          padding: 15px 0;
          border: 0;
          border-bottom: 1px solid #dfe4e9;
          background: transparent;
          color: #111827;
          text-align: left;
          cursor: pointer;
        }

        .litigation-next-link > span:first-child {
          color: #d9252b;
          font-size: 11px;
          font-weight: 700;
        }

        .litigation-next-link strong { font-size: 15px; font-weight: 600; }
        .litigation-next-link > span:last-child { justify-self: end; color: #d9252b; transition: transform .2s ease; }
        .litigation-next-link:hover > span:last-child { transform: translate(3px, -3px); }

        @keyframes litigationFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes litigationUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 960px) {
          .litigation-overview,
          .litigation-section-shell,
          .litigation-final,
          .litigation-stats-wrap {
            grid-template-columns: 1fr;
          }

          .litigation-content {
            padding-top: 50px;
          }

          .litigation-process-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .litigation-hero-content h1 {
            max-width: 640px;
            font-size: 50px;
          }

          .litigation-stat-image {
            height: 220px;
          }
        }

        @media (max-width: 640px) {
          .litigation-hero {
            height: auto;
            min-height: 440px;
          }

          .litigation-hero-content {
            width: calc(100% - 40px);
            padding: 70px 0 90px;
          }

          .litigation-hero-content h1 {
            font-size: 42px;
          }

          .litigation-hero-description {
            font-size: 16px;
          }

          .litigation-content {
            width: calc(100% - 40px);
          }

          .litigation-overview h2,
          .litigation-section-copy h2,
          .litigation-final-copy h2 {
            font-size: 32px;
          }

          .litigation-section-shell,
          .litigation-final {
            padding: 24px 18px;
          }

          .litigation-visual {
            min-height: 300px;
          }

          .litigation-process-grid {
            grid-template-columns: 1fr;
          }

          .litigation-stat-image {
            height: 145px;
          }

          .litigation-stat-number {
            left: 12px;
            bottom: 11px;
            font-size: 32px;
          }

          .litigation-stat-copy p,
          .litigation-process-card p,
          .litigation-section-list li {
            font-size: 12px;
          }

          .litigation-next {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-top: 56px;
          }

          .litigation-next > div:first-child h2 { font-size: 28px; }
        }
      `}</style>
    </div>
  );
}

export default Litigation;
