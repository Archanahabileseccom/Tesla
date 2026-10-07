import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "mergers", label: "M&A" },
  { id: "due-diligence", label: "Due Diligence" },
  { id: "joint-ventures", label: "Joint Ventures" },
  { id: "investments", label: "Investments" },
  { id: "contracts", label: "Contracts" },
  { id: "strategy", label: "Strategy" },
];

const heroContent = {
  overview: {
    eyebrow: "TRANSACTIONS & ADVISORY",
    title: "Structuring deals with clarity and commercial focus.",
    description:
      "We support clients through complex transactions with strategic advice, disciplined preparation, and a clear view of the business outcomes that matter most.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=90",
  },
  mergers: {
    eyebrow: "MERGERS & ACQUISITIONS",
    title: "M&A strategy shaped around business value and momentum.",
    description:
      "We help clients navigate complex transactions, commercial priorities, and deal execution with a framework designed for confidence and continuity.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=90",
  },
  "due-diligence": {
    eyebrow: "DUE DILIGENCE",
    title: "Clear insight before commitments are made.",
    description:
      "Transaction decisions are stronger when legal, commercial, and operational issues are evaluated early and with precision.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=90",
  },
  "joint-ventures": {
    eyebrow: "JOINT VENTURES",
    title: "Practical structures for collaborative growth.",
    description:
      "We help partners shape governance, risk allocation, and operational frameworks that support long-term alignment and execution.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=90",
  },
  investments: {
    eyebrow: "INVESTMENTS",
    title: "Investment support built around opportunity and risk.",
    description:
      "From early evaluation through execution, we help clients assess investment structure, commercial terms, and practical delivery requirements.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=90",
  },
  contracts: {
    eyebrow: "TRANSACTION CONTRACTS",
    title: "Strong documentation for clearer outcomes.",
    description:
      "Well-drafted transaction documents reduce ambiguity, protect interests, and help each party understand the obligations and commercial framework.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=90",
  },
  strategy: {
    eyebrow: "TRANSACTION STRATEGY",
    title: "An aligned path from idea to implementation.",
    description:
      "We help clients evaluate structure, risk, stakeholders, and execution priorities so the transaction aligns with the larger business picture.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=90",
  },
};

const transactionStats = [
  {
    number: "15+",
    title: "Years of experience",
    text: "Commercially grounded advice across transactions and strategic negotiations.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    alt: "Colleagues collaborating on a business decision",
  },
  {
    number: "25+",
    title: "Industries supported",
    text: "A cross-sector approach shaped around business realities and market factors.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
    alt: "Modern corporate workspace",
  },
  {
    number: "100+",
    title: "Projects & transactions",
    text: "A track record built on careful planning and practical execution.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
    alt: "Team reviewing transaction documents",
  },
  {
    number: "12+",
    title: "Markets & regions",
    text: "Cross-border insight for clients working across evolving business environments.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    alt: "City business district representing international markets",
  },
];

const processSteps = {
  overview: [
    { number: "01", title: "Assess", text: "Begin with clear objectives, commercial context and strategic intent." },
    { number: "02", title: "Structure", text: "Evaluate structure, governance and transaction design options." },
    { number: "03", title: "Prepare", text: "Coordinate diligence, documentation and stakeholder requirements." },
    { number: "04", title: "Execute", text: "Support completion and delivery with disciplined follow-through." },
  ],
  mergers: [
    { number: "01", title: "Scope", text: "Define the strategic rationale, key stakeholders and transaction objective." },
    { number: "02", title: "Evaluate", text: "Review deal structure, value drivers and business-critical considerations." },
    { number: "03", title: "Negotiate", text: "Shape terms, risk allocation and accountability across the transaction." },
    { number: "04", title: "Close", text: "Support execution and transition into the post-completion phase." },
  ],
  "due-diligence": [
    { number: "01", title: "Frame", text: "Identify the legal, operational and commercial questions that matter most." },
    { number: "02", title: "Review", text: "Assess contracts, records, obligations and areas of risk or exposure." },
    { number: "03", title: "Interpret", text: "Translate findings into clear implications for the transaction and goals." },
    { number: "04", title: "Decide", text: "Inform decision-making with practical guidance for next steps and protections." },
  ],
  "joint-ventures": [
    { number: "01", title: "Align", text: "Clarify the purpose, governance needs and partner objectives of the venture." },
    { number: "02", title: "Design", text: "Shape roles, control points, decision-making and risk allocation." },
    { number: "03", title: "Document", text: "Draft and review arrangements that reflect the shared commercial model." },
    { number: "04", title: "Support", text: "Guide implementation and longer-term operational coordination." },
  ],
  investments: [
    { number: "01", title: "Identify", text: "Review the opportunity, market context and investment objectives." },
    { number: "02", title: "Analyze", text: "Assess value, structure, downside, and key execution considerations." },
    { number: "03", title: "Negotiate", text: "Refine the terms to reflect the commercial and strategic position of the parties." },
    { number: "04", title: "Execute", text: "Move the investment forward with disciplined oversight and clear documentation." },
  ],
  contracts: [
    { number: "01", title: "Clarify", text: "Set out the commercial purpose, obligations and business intent clearly." },
    { number: "02", title: "Draft", text: "Prepare robust provisions aligned to the transaction and stakeholder needs." },
    { number: "03", title: "Negotiate", text: "Balance risk, accountability and practical execution across the parties." },
    { number: "04", title: "Finalize", text: "Ensure documentation is precise, workable and aligned to the final deal structure." },
  ],
  strategy: [
    { number: "01", title: "Frame", text: "Understand the objective, decision, and broader commercial environment." },
    { number: "02", title: "Compare", text: "Assess structural options, risks, and the most appropriate transaction paths." },
    { number: "03", title: "Plan", text: "Sequence the work needed for timing, quality, and practical execution." },
    { number: "04", title: "Deliver", text: "Support implementation with a consistent view across legal, business, and operational priorities." },
  ],
};

const tabContent = {
  overview: {
    introTitle: "A structured approach to complex deals and transaction decisions.",
    introText:
      "Successful transactions require clarity around both legal risk and commercial intent. We help clients assess the key issues early so that each decision supports a practical and sustainable outcome.",
    focusTitle: "Strategy that connects decision-making to execution.",
    focusText:
      "Whether a matter is at the start of a transaction or in the middle of a negotiation, we help clients focus on the issues that matter most and build the right path forward.",
    bullets: [
      "Commercial and legal alignment",
      "Clear transaction planning",
      "Diligence and risk review",
      "Negotiation and documentation support",
    ],
  },
  mergers: {
    introTitle: "M&A decisions need strong commercial judgment and disciplined planning.",
    introText:
      "Transactions involving combinations, acquisitions, or strategic repositioning require a clear view of value, risk, governance, and operational continuity.",
    focusTitle: "Practical support for deal execution and value creation.",
    focusText:
      "We help clients assess the structure, transaction terms, and business risks behind an opportunity so the decision reflects both legal and commercial realities.",
    bullets: [
      "Target evaluation and transaction framing",
      "Commercial and legal deal review",
      "Risk allocation and governance planning",
      "Execution support across closing and transition",
    ],
  },
  "due-diligence": {
    introTitle: "Due diligence is where informed decisions begin.",
    introText:
      "Well-planned diligence helps reveal priorities, exposures, and hidden issues before a transaction moves forward. We help clients ask the right questions and assess what the answers mean.",
    focusTitle: "Insights that reduce uncertainty and sharpen decision-making.",
    focusText:
      "Our approach combines careful review with a practical understanding of how legal and commercial findings affect transaction value and execution risk.",
    bullets: [
      "Legal and commercial review",
      "Contract and record analysis",
      "Risk and exposure assessment",
      "Action-oriented diligence conclusions",
    ],
  },
  "joint-ventures": {
    introTitle: "Joint ventures work best when the structure fits the business model.",
    introText:
      "Strong joint venture arrangements require thoughtful governance, role clarity, and a sensible approach to risk, decision-making and value sharing.",
    focusTitle: "Collaborative structures built for long-term alignment.",
    focusText:
      "We help parties design arrangements that support their business objectives while reducing ambiguity in allocation, accountability, and operational functions.",
    bullets: [
      "Governance and decision frameworks",
      "Commercial and operational alignment",
      "Risk and exit considerations",
      "Long-term implementation planning",
    ],
  },
  investments: {
    introTitle: "Investment decisions benefit from a disciplined commercial lens.",
    introText:
      "Whether assessing an opportunity or preparing to invest, clients need clear insight into value, structure, terms, and the risks that could affect the expected result.",
    focusTitle: "A stronger understanding of the opportunity and the path ahead.",
    focusText:
      "We help clients think through the commercial strategy, the legal position, and the practical steps needed to move from evaluation to execution.",
    bullets: [
      "Opportunity evaluation",
      "Investment structure and terms",
      "Risk and return analysis",
      "Execution support and review",
    ],
  },
  contracts: {
    introTitle: "Contracts are the framework that keeps business intent clear.",
    introText:
      "Clear transaction documentation reduces ambiguity, supports accountability, and gives the parties a stronger foundation for delivering on the commercial objective.",
    focusTitle: "Documentation shaped around clarity and practical outcomes.",
    focusText:
      "We support clients in drafting and negotiating terms that reflect business priorities while reducing unnecessary uncertainty or friction in implementation.",
    bullets: [
      "Transaction drafting and review",
      "Negotiation support",
      "Commercial term alignment",
      "Execution-ready contract design",
    ],
  },
  strategy: {
    introTitle: "The right strategy helps a transaction move with confidence.",
    introText:
      "Strategy is not just about legal structure; it is about sequencing, risk, stakeholder alignment, and the commercial outcome the client wants to achieve.",
    focusTitle: "Planning that connects objectives with action.",
    focusText:
      "We help clients identify the right structure, manage key variables, and align the legal and business work needed to get the deal done successfully.",
    bullets: [
      "Strategic review and framing",
      "Option comparison and risk analysis",
      "Execution sequencing and planning",
      "Commercially aligned transaction guidance",
    ],
  },
};

function Transactions() {
  const [activeTab, setActiveTab] = useState("overview");
  const location = useLocation();
  const navigate = useNavigate();

  const hero = heroContent[activeTab];
  const currentContent = tabContent[activeTab];

  useEffect(() => {
    const hash = location.hash.replace(/^#/, "");
    const requestedTab = hash === "strategic" ? "strategy" : hash;
    const nextTab = tabs.some((tab) => tab.id === requestedTab) ? requestedTab : "overview";
    setActiveTab(nextTab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.hash, location.pathname]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    navigate(tabId === "overview" ? "/transactions" : `/transactions#${tabId}`);
  };

  return (
    <div className="transactions-page">
      <section
        className="transactions-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7,15,26,0.96) 0%, rgba(7,15,26,0.82) 44%, rgba(7,15,26,0.52) 100%), url("${hero.image}")`,
        }}
        aria-labelledby="transactions-hero-title"
      >
        <div className="transactions-hero-content" key={activeTab}>
          <span className="transactions-eyebrow">{hero.eyebrow}</span>
          <h1 id="transactions-hero-title">{hero.title}</h1>
          <p>{hero.description}</p>
        </div>
      </section>

      <main className="transactions-content" key={activeTab}>
        <section className="transactions-overview">
          <div>
            <h2>{currentContent.introTitle}</h2>
          </div>
          <div>
            <p>{currentContent.introText}</p>
          </div>
        </section>

        {activeTab === "overview" && (
          <div className="transactions-stats-wrap">
            {transactionStats.map((stat) => (
              <article key={stat.title} className="transactions-stat-card">
                <div className="transactions-stat-image">
                  <img src={stat.image} alt={stat.alt} loading="lazy" />
                  <span className="transactions-stat-number">{stat.number}</span>
                </div>
                <div className="transactions-stat-copy">
                  <span className="transactions-stat-label">Experience</span>
                  <h3>{stat.title}</h3>
                  <p>{stat.text}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        <section className="transactions-feature" key={`${activeTab}-detail`}>
          <div className="transactions-feature-shell">
            <div className="transactions-feature-copy">
              <span className="transactions-kicker">Our approach</span>
              <h2>{currentContent.focusTitle}</h2>
              <p>{currentContent.focusText}</p>
              <ul className="transactions-feature-list">
                {currentContent.bullets.map((bullet) => (
                  <li key={`${activeTab}-${bullet}`}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="transactions-visual">
              <div
                className="transactions-visual-image"
                style={{ backgroundImage: `url("${hero.image}")` }}
                aria-label={activeTab}
              />
              <span className="transactions-visual-badge">{hero.eyebrow}</span>
            </div>
          </div>
        </section>

        <section className="transactions-process" key={`${activeTab}-process`}>
          <div className="transactions-process-grid">
            {processSteps[activeTab].map((step) => (
              <article className="transactions-process-card" key={`${activeTab}-${step.number}`}>
                <span className="transactions-process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="transactions-cta">
          <div className="transactions-cta-copy">
            <span className="transactions-eyebrow">START THE CONVERSATION</span>
            <h2>Need support for a transaction or strategic business decision?</h2>
            <p>
              We help clients assess the path forward with practical advice at every stage of a deal, negotiation, or strategic commitment.
            </p>
            <a href="/contact">Contact us</a>
          </div>
        </section>

        <section className="transactions-next" aria-label="Explore transaction services">
          <div>
            <span className="transactions-kicker">EXPLORE MORE</span>
            <h2>Thoughtful guidance through every deal stage.</h2>
          </div>
          <div className="transactions-next-links">
            {tabs.filter((tab) => tab.id !== activeTab).map((tab, index) => (
              <button
                className="transactions-next-link"
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
        .transactions-page {
          width: 100%;
          min-height: 100vh;
          background: #f6f7f5;
          color: #111827;
          overflow: hidden;
          font-family: "DM Sans", "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
        }

        .transactions-page *,
        .transactions-page *::before,
        .transactions-page *::after {
          box-sizing: border-box;
        }

        .transactions-page button,
        .transactions-page a {
          -webkit-tap-highlight-color: transparent;
        }

        .transactions-hero {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 83px);
          min-height: calc(100svh - 83px);
          margin: 0;
          display: flex;
          align-items: center;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          overflow: hidden;
          animation: transactionsFadeIn 0.8s ease both;
        }

        .transactions-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11, 17, 26, 0.06), rgba(11, 17, 26, 0.28));
          pointer-events: none;
        }

        .transactions-hero-content {
          position: relative;
          z-index: 1;
          width: min(100% - 64px, 1180px);
          margin: 0 auto;
          padding: 96px 0 112px;
          color: #fff;
        }

        .transactions-eyebrow {
          display: inline-block;
          margin-bottom: 16px;
          color: #fca5a5;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .transactions-hero-content h1 {
          max-width: 780px;
          margin: 0;
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 60px;
          line-height: 1.08;
          font-weight: 400;
        }

        .transactions-hero-content p {
          max-width: 650px;
          margin: 24px 0 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 17px;
          line-height: 1.75;
        }

        .transactions-content {
          width: min(100% - 64px, 1180px);
          margin: 0 auto;
          padding: 0 0 96px;
        }

        .transactions-overview {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 56px;
          align-items: center;
          animation: transactionsUp 0.7s ease both;
        }

        .transactions-overview h2,
        .transactions-feature-copy h2,
        .transactions-cta-copy h2 {
          margin: 0;
          color: #111827;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 40px;
          line-height: 1.2;
          font-weight: 400;
        }

        .transactions-overview p,
        .transactions-feature-copy p,
        .transactions-cta-copy p {
          color: #5e6977;
          font-size: 16px;
          line-height: 1.8;
        }

        .transactions-process-card p,
        .transactions-stat-copy p,
        .transactions-feature-list li {
          color: #5e6977;
          font-size: 14px;
          line-height: 1.7;
        }

        .transactions-stats-wrap {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-top: 42px;
          animation: transactionsUp 0.9s ease both;
        }

        .transactions-stat-card {
          overflow: hidden;
          background: #fff;
          border: 1px solid #e2e8f0;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .transactions-stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(17, 24, 39, 0.08);
        }

        .transactions-stat-image {
          position: relative;
          height: 190px;
          overflow: hidden;
          background: #dce3e8;
        }

        .transactions-stat-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .transactions-stat-card:hover .transactions-stat-image img {
          transform: scale(1.04);
        }

        .transactions-stat-image::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(transparent, rgba(10, 26, 26, 0.64));
        }

        .transactions-stat-number {
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

        .transactions-stat-copy {
          padding: 22px 18px 20px;
        }

        .transactions-stat-label {
          display: block;
          margin-bottom: 10px;
          color: #d9252b;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .transactions-stat-copy h3 {
          margin: 0 0 10px;
          color: #111827;
          font-size: 16px;
          line-height: 1.4;
        }

        .transactions-feature {
          padding-top: 88px;
          animation: transactionsUp 0.9s ease both;
        }

        .transactions-feature-shell {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 60px;
          align-items: center;
          padding: 34px 32px;
          background: #fff;
          border: 1px solid #e2e8f0;
        }

        .transactions-kicker {
          display: inline-block;
          margin-bottom: 18px;
          color: #d9252b;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .transactions-feature-copy h2 {
          margin-bottom: 18px;
        }

        .transactions-feature-list {
          margin: 24px 0 0;
          padding-left: 18px;
        }

        .transactions-feature-list li + li {
          margin-top: 10px;
        }

        .transactions-visual {
          position: relative;
          min-height: 420px;
          overflow: hidden;
          background: #e5e7eb;
          border: 1px solid rgba(17, 24, 39, 0.05);
          box-shadow: 0 18px 46px rgba(17, 24, 39, 0.08);
        }

        .transactions-visual-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transform: scale(1);
          transition: transform 0.7s ease;
        }

        .transactions-visual:hover .transactions-visual-image {
          transform: scale(1.06);
        }

        .transactions-visual::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(180deg, rgba(17, 24, 39, 0.08), rgba(17, 24, 39, 0.44));
        }

        .transactions-visual-badge {
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

        .transactions-process {
          padding-top: 92px;
        }

        .transactions-process-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .transactions-process-card {
          min-height: 220px;
          padding: 24px 22px;
          background: #fff;
          border: 1px solid #e2e8f0;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .transactions-process-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 38px rgba(17, 24, 39, 0.08);
        }

        .transactions-process-number {
          display: inline-block;
          margin-bottom: 26px;
          color: #d9252b;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .transactions-process-card h3 {
          margin: 0 0 14px;
          color: #111827;
          font-size: 20px;
          line-height: 1.25;
        }

        .transactions-cta {
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
          animation: transactionsUp 1s ease both;
        }

        .transactions-cta-copy {
          max-width: 760px;
        }

        .transactions-cta-copy h2 {
          color: #fff;
          margin-bottom: 12px;
        }

        .transactions-cta-copy p {
          max-width: 620px;
          margin: 0 auto 20px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 16px;
          line-height: 1.8;
        }

        .transactions-cta-copy a {
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

        .transactions-cta-copy a:hover {
          transform: translateY(-2px);
          background: #b71d27;
        }

        .transactions-next {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 56px;
          align-items: start;
          margin-top: 70px;
        }

        .transactions-next > div:first-child h2 {
          max-width: 430px;
          margin: 0;
          color: #111827;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
          font-weight: 400;
          line-height: 1.2;
        }

        .transactions-next-links {
          border-top: 1px solid #dfe4e9;
        }

        .transactions-next-link {
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

        .transactions-next-link > span:first-child {
          color: #d9252b;
          font-size: 11px;
          font-weight: 700;
        }

        .transactions-next-link strong { font-size: 15px; font-weight: 600; }
        .transactions-next-link > span:last-child { justify-self: end; color: #d9252b; transition: transform .2s ease; }
        .transactions-next-link:hover > span:last-child { transform: translate(3px, -3px); }

        @keyframes transactionsFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes transactionsUp {
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
          .transactions-overview,
          .transactions-feature-shell,
          .transactions-stats-wrap,
          .transactions-process-grid {
            grid-template-columns: 1fr 1fr;
          }

          .transactions-overview,
          .transactions-feature-shell {
            grid-template-columns: 1fr;
          }

          .transactions-content {
            padding-top: 52px;
          }

          .transactions-stat-image {
            height: 220px;
          }
        }

        @media (max-width: 900px) {
          .transactions-hero-content h1 {
            max-width: 640px;
            font-size: 50px;
          }
        }

        @media (max-width: 640px) {
          .transactions-hero {
            min-height: 440px;
          }

          .transactions-hero-content {
            width: calc(100% - 40px);
            padding: 70px 0 90px;
          }

          .transactions-hero-content h1 {
            font-size: 42px;
          }

          .transactions-hero-content p {
            font-size: 16px;
          }

          .transactions-content {
            width: calc(100% - 40px);
          }

          .transactions-overview h2,
          .transactions-feature-copy h2,
          .transactions-cta-copy h2 {
            font-size: 32px;
          }

          .transactions-stats-wrap,
          .transactions-process-grid {
            grid-template-columns: 1fr;
          }

          .transactions-feature-shell,
          .transactions-cta {
            padding: 24px 18px;
          }

          .transactions-visual {
            min-height: 300px;
          }

          .transactions-stat-image {
            height: 145px;
          }

          .transactions-stat-number {
            left: 12px;
            bottom: 11px;
            font-size: 32px;
          }

          .transactions-stat-copy p,
          .transactions-process-card p,
          .transactions-feature-list li {
            font-size: 12px;
          }

          .transactions-next {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-top: 56px;
          }

          .transactions-next > div:first-child h2 {
            font-size: 29px;
          }
        }
      `}</style>
    </div>
  );
}

export default Transactions;