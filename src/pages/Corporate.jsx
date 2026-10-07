import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "governance", label: "Governance" },
  { id: "compliance", label: "Compliance" },
  { id: "operations", label: "Risk Management" },
  { id: "leadership", label: "Corporate Structuring" },
];

const stats = [
  {
    number: "15+",
    title: "Years of experience",
    text: "Strategic insight for evolving businesses and important decisions.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    alt: "Colleagues collaborating in a meeting",
  },
  {
    number: "25+",
    title: "Industries served",
    text: "Commercial and legal guidance across diverse sectors and markets.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
    alt: "Bright modern corporate workspace",
  },
  {
    number: "100+",
    title: "Projects delivered",
    text: "A practical track record shaped by execution and accountability.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
    alt: "Team reviewing a business plan",
  },
  {
    number: "12+",
    title: "Markets engaged",
    text: "Cross-border capability with a clear commercial perspective.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    alt: "Modern office buildings in a business district",
  },
];

const priorities = [
  {
    number: "01",
    title: "Governance",
    text: "Clear structures that support accountability, performance and sound decision-making.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "Business-focused direction aligned with commercial opportunities and risk realities.",
  },
  {
    number: "03",
    title: "Operations",
    text: "Disciplined processes that help teams move from planning to execution with confidence.",
  },
  {
    number: "04",
    title: "Growth",
    text: "Support for sustainable growth, market readiness, and long-term business value.",
  },
];

const values = [
  {
    title: "Integrity",
    text: "We act with transparency, care and responsibility in every relationship and decision.",
  },
  {
    title: "Accountability",
    text: "We take ownership of outcomes and provide clear, practical guidance to our clients.",
  },
  {
    title: "Collaboration",
    text: "We work closely with clients and stakeholders to align strategy with execution.",
  },
  {
    title: "Innovation",
    text: "We remain open to new thinking and practical opportunities that create long-term value.",
  },
];

const leadership = [
  {
    name: "Aadya Mehta",
    role: "Managing Director",
    text: "Leads strategic direction with a focus on sustainable growth, governance and commercially sensitive decisions.",
  },
  {
    name: "Rohan Kapoor",
    role: "Operations Lead",
    text: "Oversees execution frameworks, operational capability and cross-functional business coordination.",
  },
  {
    name: "Ishita Sen",
    role: "Risk & Compliance Advisor",
    text: "Supports disciplined decision making through monitoring, governance and regulatory alignment.",
  },
];

const heroContent = {
  overview: {
    eyebrow: "CORPORATE & BUSINESS ADVISORY",
    title: "Building stronger businesses through practical leadership.",
    description:
      "We help organizations navigate change, strengthen governance, and make strategic decisions with confidence and clarity.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90",
  },
  governance: {
    eyebrow: "GOVERNANCE",
    title: "Strong governance creates clarity, accountability and momentum.",
    description:
      "Good governance aligns decision rights, stakeholder expectations and operational discipline with the realities of running a modern business.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=90",
  },
  compliance: {
    eyebrow: "COMPLIANCE",
    title: "A disciplined framework for better risk management.",
    description:
      "We help organizations evaluate internal controls, obligations and operational practices in a way that supports sustainable performance.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=90",
  },
  operations: {
    eyebrow: "RISK MANAGEMENT",
    title: "A disciplined framework for better risk management.",
    description:
      "We help organizations identify material risks, strengthen controls and support business continuity with practical, proportionate frameworks.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=90",
  },
  leadership: {
    eyebrow: "CORPORATE STRUCTURING",
    title: "Clear structures support stronger business decisions.",
    description:
      "Thoughtful corporate structuring aligns ownership, governance and operations with an organization's plans for growth and change.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=90",
  },
};

const tabContent = {
  overview: {
    introTitle: "Building a stronger business foundation for long-term value.",
    introText:
      "Corporate advisory is most effective when it connects governance, operational discipline, strategic focus and commercial judgment. We help organizations create the clarity needed to make sound decisions.",
    focusTitle: "A practical, business-led approach to decision-making.",
    focusText:
      "Our work is shaped around the realities of how companies grow, manage risk and operate in competitive environments. We help leaders identify priorities and act with purpose.",
    bullets: [
      "Governance and leadership alignment",
      "Operational review and accountability",
      "Strategic planning and business structure",
      "Risk-aware execution and growth support",
    ],
  },
  governance: {
    introTitle: "Governance gives an organization direction and accountability.",
    introText:
      "Strong governance improves decision quality, stakeholder confidence and the ability to act consistently as the business evolves.",
    focusTitle: "Clear structures for better decisions.",
    focusText:
      "We help organizations evaluate board-level priorities, reporting lines, accountability frameworks and the mechanisms that support sound business activity.",
    bullets: [
      "Board and leadership support",
      "Ownership and accountability frameworks",
      "Governance review and improvement",
      "Decision-making clarity",
    ],
  },
  compliance: {
    introTitle: "Compliance needs to be clear, practical and sustainable.",
    introText:
      "A strong compliance culture protects the business, supports confidence in decision-making and helps teams address legal and operational obligations proactively.",
    focusTitle: "Risk-aware frameworks that support business continuity.",
    focusText:
      "We work with organizations to strengthen internal controls, operational routines and governance practices that reduce avoidable risk while supporting growth.",
    bullets: [
      "Regulatory and process review",
      "Internal control evaluation",
      "Operational accountability design",
      "Risk mapping and improvement planning",
    ],
  },
  operations: {
    introTitle: "Risk management should protect value and support business continuity.",
    introText:
      "A practical risk program helps organizations identify material exposures, understand their potential impact and focus attention where it matters most.",
    focusTitle: "Risk-aware frameworks for resilient operations.",
    focusText:
      "We help clients review controls, clarify responsibilities and plan proportionate improvements that support continuity without losing sight of business goals.",
    bullets: [
      "Risk identification and mapping",
      "Internal control review",
      "Business continuity planning",
      "Accountability and mitigation planning",
    ],
  },
  leadership: {
    introTitle: "Corporate structure should support ownership, governance and growth.",
    introText:
      "An organization's structure shapes how it is owned, governed and operated. Periodic review can help ensure that structure continues to support its activities and plans.",
    focusTitle: "Structures aligned with business strategy and stakeholder needs.",
    focusText:
      "We help organizations assess structural options, clarify responsibilities and consider how governance arrangements support current operations and future growth.",
    bullets: [
      "Corporate structure review",
      "Ownership and entity considerations",
      "Governance alignment",
      "Restructuring and growth planning",
    ],
  },
};

function Corporate() {
  const [activeTab, setActiveTab] = useState("overview");
  const location = useLocation();
  const navigate = useNavigate();

  const hero = heroContent[activeTab];
  const currentContent = tabContent[activeTab];

  useEffect(() => {
    const hash = location.hash.replace(/^#/, "");
    const hashAliases = { risk: "operations", structuring: "leadership" };
    const requestedTab = hashAliases[hash] || hash;
    const nextTab = tabs.some((tab) => tab.id === requestedTab) ? requestedTab : "overview";
    setActiveTab(nextTab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.hash, location.pathname]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    navigate(tabId === "overview" ? "/corporate" : `/corporate#${tabId}`);
  };

  return (
    <div className="corporate-page">
      <section
        className="corporate-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7,15,26,0.96) 0%, rgba(7,15,26,0.82) 44%, rgba(7,15,26,0.52) 100%), url("${hero.image}")`,
        }}
        aria-labelledby="corporate-hero-title"
      >
        <div className="corporate-hero-content" key={activeTab}>
          <span className="corporate-eyebrow">{hero.eyebrow}</span>
          <h1 id="corporate-hero-title">{hero.title}</h1>
          <p>{hero.description}</p>
        </div>
      </section>

      <main className="corporate-content" key={activeTab}>
        <section className="corporate-overview">
          <div>
            <h2>{currentContent.introTitle}</h2>
          </div>
          <div>
            <p>{currentContent.introText}</p>
          </div>
        </section>

        {activeTab === "overview" && (
          <div className="corporate-stats-wrap">
            {stats.map((stat) => (
              <article key={stat.title} className="corporate-stat-card">
                <div className="corporate-stat-image">
                  <img src={stat.image} alt={stat.alt} loading="lazy" />
                  <span className="corporate-stat-number">{stat.number}</span>
                </div>
                <div className="corporate-stat-copy">
                  <span className="corporate-stat-label">Experience</span>
                  <h3>{stat.title}</h3>
                  <p>{stat.text}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        <section className="corporate-feature" key={`${activeTab}-detail`}>
          <div className="corporate-feature-shell">
            <div className="corporate-feature-copy">
              <span className="corporate-kicker">Our focus</span>
              <h2>{currentContent.focusTitle}</h2>
              <p>{currentContent.focusText}</p>
              <ul className="corporate-feature-list">
                {currentContent.bullets.map((bullet) => (
                  <li key={`${activeTab}-${bullet}`}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="corporate-visual">
              <div
                className="corporate-visual-image"
                style={{ backgroundImage: `url("${hero.image}")` }}
                aria-label={activeTab}
              />
              <span className="corporate-visual-badge">{hero.eyebrow}</span>
            </div>
          </div>
        </section>

        {activeTab === "overview" && (
          <section className="corporate-priorities">
            <div className="corporate-priority-grid">
              {priorities.map((item) => (
                <article className="corporate-priority-card" key={item.title}>
                  <span className="corporate-priority-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeTab === "overview" && (
          <section className="corporate-team">
            <div className="corporate-team-heading">
              <span className="corporate-kicker">LEADERSHIP</span>
              <h2>People who shape our direction.</h2>
            </div>
            <div className="corporate-team-grid">
              {leadership.map((person) => (
                <article className="corporate-team-card" key={person.name}>
                  <div className="corporate-team-avatar" aria-hidden="true">
                    {person.name.split(" ").map((part) => part[0]).join("")}
                  </div>
                  <h3>{person.name}</h3>
                  <span>{person.role}</span>
                  <p>{person.text}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeTab === "overview" && (
          <section className="corporate-values">
            <div className="corporate-values-grid">
              {values.map((value) => (
                <article className="corporate-value-card" key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="corporate-cta">
          <div className="corporate-cta-copy">
            <span className="corporate-eyebrow">START THE CONVERSATION</span>
            <h2>Need practical support for your next business decision?</h2>
            <p>
              We help organizations shape stronger governance, clearer operations, and more confident business decisions.
            </p>
            <a href="/contact">Contact us</a>
          </div>
        </section>

        <section className="corporate-next" aria-label="Explore corporate services">
          <div>
            <span className="corporate-kicker">EXPLORE MORE</span>
            <h2>Practical support for every stage of business.</h2>
          </div>
          <div className="corporate-next-links">
            {tabs.filter((tab) => tab.id !== activeTab).map((tab, index) => (
              <button
                className="corporate-next-link"
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
        .corporate-page {
          width: 100%;
          min-height: 100vh;
          background: #f6f7f5;
          color: #111827;
          overflow: hidden;
          font-family: "DM Sans", "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
        }

        .corporate-page *,
        .corporate-page *::before,
        .corporate-page *::after {
          box-sizing: border-box;
        }

        .corporate-page button,
        .corporate-page a {
          -webkit-tap-highlight-color: transparent;
        }

        .corporate-hero {
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
          animation: corporateFadeIn 0.8s ease both;
        }

        .corporate-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11, 17, 26, 0.08), rgba(11, 17, 26, 0.28));
          pointer-events: none;
        }

        .corporate-hero-content {
          position: relative;
          z-index: 1;
          width: min(100% - 64px, 1180px);
          margin: 0 auto;
          padding: 96px 0 112px;
          color: #fff;
        }

        .corporate-eyebrow {
          display: inline-block;
          margin-bottom: 16px;
          color: #fca5a5;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .corporate-hero-content h1 {
          max-width: 780px;
          margin: 0;
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 60px;
          line-height: 1.08;
          font-weight: 400;
        }

        .corporate-hero-content p {
          max-width: 650px;
          margin: 24px 0 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 17px;
          line-height: 1.75;
        }

        .corporate-content {
          width: min(100% - 64px, 1180px);
          margin: 0 auto;
          padding: 0 0 96px;
        }

        .corporate-overview {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 56px;
          align-items: center;
          animation: corporateUp 0.7s ease both;
        }

        .corporate-overview h2,
        .corporate-feature-copy h2,
        .corporate-cta-copy h2 {
          margin: 0;
          color: #111827;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 40px;
          line-height: 1.2;
          font-weight: 400;
        }

        .corporate-overview p,
        .corporate-feature-copy p,
        .corporate-cta-copy p {
          color: #5e6977;
          font-size: 16px;
          line-height: 1.8;
        }

        .corporate-value-card p,
        .corporate-priority-card p,
        .corporate-stat-copy p,
        .corporate-feature-list li,
        .corporate-team-card p {
          color: #5e6977;
          font-size: 14px;
          line-height: 1.7;
        }

        .corporate-stats-wrap {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-top: 42px;
          animation: corporateUp 0.9s ease both;
        }

        .corporate-stat-card {
          overflow: hidden;
          background: #fff;
          border: 1px solid #e2e8f0;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .corporate-stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(17, 24, 39, 0.08);
        }

        .corporate-stat-image {
          position: relative;
          height: 190px;
          overflow: hidden;
          background: #dce3e8;
        }

        .corporate-stat-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .corporate-stat-card:hover .corporate-stat-image img {
          transform: scale(1.04);
        }

        .corporate-stat-image::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(transparent, rgba(10, 26, 26, 0.64));
        }

        .corporate-stat-number {
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

        .corporate-stat-copy {
          padding: 22px 18px 20px;
        }

        .corporate-stat-label {
          display: block;
          margin-bottom: 10px;
          color: #d9252b;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .corporate-stat-copy h3 {
          margin: 0 0 10px;
          color: #111827;
          font-size: 16px;
          line-height: 1.4;
        }

        .corporate-feature {
          padding-top: 88px;
          animation: corporateUp 0.9s ease both;
        }

        .corporate-feature-shell {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 60px;
          align-items: center;
          padding: 34px 32px;
          background: #fff;
          border: 1px solid #e2e8f0;
        }

        .corporate-kicker {
          display: inline-block;
          margin-bottom: 18px;
          color: #d9252b;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .corporate-feature-copy h2 {
          margin-bottom: 18px;
        }

        .corporate-feature-list {
          margin: 24px 0 0;
          padding-left: 18px;
        }

        .corporate-feature-list li + li {
          margin-top: 10px;
        }

        .corporate-visual {
          position: relative;
          min-height: 420px;
          overflow: hidden;
          background: #e5e7eb;
          border: 1px solid rgba(17, 24, 39, 0.05);
          box-shadow: 0 18px 46px rgba(17, 24, 39, 0.08);
        }

        .corporate-visual-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transform: scale(1);
          transition: transform 0.7s ease;
        }

        .corporate-visual:hover .corporate-visual-image {
          transform: scale(1.06);
        }

        .corporate-visual::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(180deg, rgba(17, 24, 39, 0.08), rgba(17, 24, 39, 0.44));
        }

        .corporate-visual-badge {
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

        .corporate-priorities,
        .corporate-values,
        .corporate-team {
          padding-top: 92px;
        }

        .corporate-team-heading {
          margin-bottom: 28px;
        }

        .corporate-team-heading h2 {
          margin: 0;
          color: #111827;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 32px;
          font-weight: 400;
          line-height: 1.2;
        }

        .corporate-priority-grid,
        .corporate-values-grid,
        .corporate-team-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .corporate-priority-card,
        .corporate-value-card,
        .corporate-team-card {
          min-height: 220px;
          padding: 24px 22px;
          background: #fff;
          border: 1px solid #e2e8f0;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .corporate-priority-card:hover,
        .corporate-value-card:hover,
        .corporate-team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 38px rgba(17, 24, 39, 0.08);
        }

        .corporate-priority-number {
          display: inline-block;
          margin-bottom: 26px;
          color: #d9252b;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .corporate-priority-card h3,
        .corporate-value-card h3,
        .corporate-team-card h3 {
          margin: 0 0 14px;
          color: #111827;
          font-size: 20px;
          line-height: 1.25;
        }

        .corporate-team-card {
          min-height: 320px;
        }

        .corporate-team-avatar {
          width: 72px;
          height: 72px;
          display: grid;
          place-items: center;
          margin-bottom: 20px;
          border-radius: 50%;
          background: #e6efed;
          color: #315a56;
          font-size: 18px;
          font-weight: 700;
          border: 2px solid rgba(217, 37, 43, 0.3);
        }

        .corporate-team-card span {
          display: block;
          margin-bottom: 10px;
          color: #d9252b;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .corporate-cta {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 360px;
          margin-top: 90px;
          padding: 40px 24px;
          background:
            linear-gradient(90deg, rgba(9, 15, 28, 0.92), rgba(9, 15, 28, 0.76)),
            url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=90") center/cover no-repeat;
          color: #fff;
          text-align: center;
          animation: corporateUp 1s ease both;
        }

        .corporate-cta-copy {
          max-width: 760px;
        }

        .corporate-cta-copy h2 {
          color: #fff;
          margin-bottom: 12px;
        }

        .corporate-cta-copy p {
          max-width: 620px;
          margin: 0 auto 20px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 16px;
          line-height: 1.8;
        }

        .corporate-cta-copy a {
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

        .corporate-cta-copy a:hover {
          transform: translateY(-2px);
          background: #b71d27;
        }

        .corporate-next {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 56px;
          align-items: start;
          margin-top: 70px;
        }

        .corporate-next > div:first-child h2 {
          max-width: 430px;
          margin: 0;
          color: #111827;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
          font-weight: 400;
          line-height: 1.2;
        }

        .corporate-next-links {
          border-top: 1px solid #dfe4e9;
        }

        .corporate-next-link {
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

        .corporate-next-link > span:first-child {
          color: #d9252b;
          font-size: 11px;
          font-weight: 700;
        }

        .corporate-next-link strong { font-size: 15px; font-weight: 600; }
        .corporate-next-link > span:last-child { justify-self: end; color: #d9252b; transition: transform .2s ease; }
        .corporate-next-link:hover > span:last-child { transform: translate(3px, -3px); }

        @keyframes corporateFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes corporateUp {
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
          .corporate-overview,
          .corporate-feature-shell,
          .corporate-stats-wrap,
          .corporate-priority-grid,
          .corporate-values-grid,
          .corporate-team-grid {
            grid-template-columns: 1fr 1fr;
          }

          .corporate-overview,
          .corporate-feature-shell {
            grid-template-columns: 1fr;
          }

          .corporate-content {
            padding-top: 52px;
          }

          .corporate-stat-image {
            height: 220px;
          }
        }

        @media (max-width: 900px) {
          .corporate-hero-content h1 {
            max-width: 640px;
            font-size: 50px;
          }
        }

        @media (max-width: 640px) {
          .corporate-hero {
            height: auto;
            min-height: 440px;
          }

          .corporate-hero-content {
            width: calc(100% - 40px);
            padding: 70px 0 90px;
          }

          .corporate-hero-content h1 {
            font-size: 42px;
          }

          .corporate-hero-content p {
            font-size: 16px;
          }

          .corporate-content {
            width: calc(100% - 40px);
          }

          .corporate-overview h2,
          .corporate-feature-copy h2,
          .corporate-cta-copy h2,
          .corporate-team-heading h2 {
            font-size: 32px;
          }

          .corporate-stats-wrap,
          .corporate-priority-grid,
          .corporate-values-grid,
          .corporate-team-grid {
            grid-template-columns: 1fr;
          }

          .corporate-feature-shell,
          .corporate-cta {
            padding: 24px 18px;
          }

          .corporate-visual {
            min-height: 300px;
          }

          .corporate-stat-image {
            height: 145px;
          }

          .corporate-stat-number {
            left: 12px;
            bottom: 11px;
            font-size: 32px;
          }

          .corporate-stat-copy p,
          .corporate-priority-card p,
          .corporate-value-card p,
          .corporate-team-card p,
          .corporate-feature-list li {
            font-size: 12px;
          }

          .corporate-next {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-top: 56px;
          }

          .corporate-next > div:first-child h2 {
            font-size: 29px;
          }
        }
      `}</style>
    </div>
  );
}

export default Corporate;
