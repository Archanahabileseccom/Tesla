import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import insightData from "../Data/Insights.js";

const tabs = [
	{ id: "articles", label: "Articles" },
	{ id: "news", label: "News" },
	{ id: "publications", label: "Publications" },
	{ id: "case-studies", label: "Case Studies" },
	{ id: "events", label: "Events" },
];

const heroContent = {
	articles: {
		title: "Ideas that shape better decisions.",
		description: "Practical perspectives on intellectual property, technology and innovation for organizations moving what comes next forward.",
		image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=90",
	},
	news: {
		title: "The latest from Tesla Innovation.",
		description: "Updates on our work, collaborations and developments across the innovation and business landscape.",
		image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90",
	},
	publications: {
		title: "Research for a changing world.",
		description: "Explore reports, guides and considered perspectives on technology, intellectual property and global innovation.",
		image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=90",
	},
	"case-studies": {
		title: "Insight grounded in real challenges.",
		description: "See how thoughtful strategy can help organizations navigate complex intellectual property and technology questions.",
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=90",
	},
	events: {
		title: "Conversations that move ideas forward.",
		description: "Join discussions and events bringing together fresh thinking on innovation, business and intellectual property.",
		image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=90",
	},
};

const categoryImages = {
	articles: [
		"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85",
		"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
		"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
	],
	news: [
		"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
		"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
		"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
	],
	publications: [
		"https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1000&q=85",
		"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85",
		"https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85",
	],
	"case-studies": [
		"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",
		"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
		"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
	],
	events: [
		"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85",
		"https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85",
		"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=85",
	],
};

const topicDescriptions = {
	articles: "Clear, practical thinking on the developments shaping intellectual property, technology and innovation.",
	news: "Recent updates and announcements from our team and the communities we work with.",
	publications: "In-depth resources to help make sense of important business and industry developments.",
	"case-studies": "Examples of the strategic questions organizations face as they protect ideas and pursue growth.",
	events: "Opportunities to share perspectives, learn from specialists and connect with peers.",
};

function Insights() {
	const [activeTab, setActiveTab] = useState("articles");
	const location = useLocation();
	const navigate = useNavigate();
	const hero = heroContent[activeTab];
	const dataKey = activeTab === "case-studies" ? "caseStudies" : activeTab;
	const entries = insightData[dataKey] || [];

	useEffect(() => {
		const hash = location.hash.slice(1);
		const nextTab = tabs.some((tab) => tab.id === hash) ? hash : "articles";
		setActiveTab(nextTab);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [location.hash, location.pathname]);

	const handleTabChange = (tabId) => {
		setActiveTab(tabId);
		navigate(`/insights#${tabId}`);
	};

	return (
		<div className="insights-page">
			<section className="insights-hero" style={{ backgroundImage: `url("${hero.image}")` }} aria-labelledby="insights-hero-title">
				<div className="insights-hero-shade" />
				<div className="insights-hero-content" key={activeTab}>
					<span className="insights-eyebrow">TESLA INNOVATION / INSIGHTS</span>
					<h1 id="insights-hero-title">{hero.title}</h1>
					<p>{hero.description}</p>
				</div>
				<span className="insights-hero-index" aria-hidden="true">
					0{tabs.findIndex((tab) => tab.id === activeTab) + 1} — 05
				</span>
			</section>

			<main className="insights-content" key={activeTab}>
				<section className="insights-intro insights-wrap">
					<div>
						<span className="insights-eyebrow-dark">{activeTab.replace("-", " ").toUpperCase()}</span>
						<h2>{activeTab === "articles" ? "Knowledge with a point of view." : `Explore our ${tabs.find((tab) => tab.id === activeTab)?.label.toLowerCase()}.`}</h2>
					</div>
					<div className="insights-intro-copy">
						<p>{topicDescriptions[activeTab]}</p>
						<p>We connect complex developments with the decisions organizations make every day, bringing useful context to the questions that matter.</p>
					</div>
				</section>

				<section className="insights-list insights-wrap" id="insight-list" aria-labelledby="insights-list-title">
					<div className="insights-section-heading">
						<div>
							<span className="insights-eyebrow-dark">{activeTab === "articles" ? "LATEST THINKING" : "DISCOVER"}</span>
							<h2 id="insights-list-title">{tabs.find((tab) => tab.id === activeTab)?.label}</h2>
						</div>
						<p>{topicDescriptions[activeTab]}</p>
					</div>
					<div className="insights-grid">
						{entries.map((entry, index) => (
							<article className="insight-card" key={entry.id ?? entry.number ?? entry.title}>
								<div className="insight-card-image">
									<img src={categoryImages[activeTab][index % categoryImages[activeTab].length]} alt="" loading="lazy" />
									<span>{String(index + 1).padStart(2, "0")}</span>
								</div>
								<div className="insight-card-copy">
									<div className="insight-card-meta">
										<span>{entry.category || entry.type || "INSIGHT"}</span>
										<span>{entry.date || entry.year || entry.location}</span>
									</div>
									<h3>{entry.title}</h3>
									<p>{entry.description}</p>
									<a className="insight-card-link" href={entry.path || `/insights#${activeTab}`}>
										{activeTab === "events" ? "View event" : activeTab === "publications" ? "Explore resource" : "Explore insight"}
										<span aria-hidden="true">↗</span>
									</a>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className="insights-next insights-wrap" aria-label="Explore more insights">
					<div>
						<span className="insights-eyebrow-dark">EXPLORE MORE</span>
						<h2>More perspectives, one place.</h2>
					</div>
					<div className="insights-next-links">
						{tabs.filter((tab) => tab.id !== activeTab).map((tab, index) => (
							<button className="insights-next-link" key={tab.id} type="button" onClick={() => handleTabChange(tab.id)}>
								<span>0{index + 1}</span>
								<strong>{tab.label}</strong>
								<span aria-hidden="true">↗</span>
							</button>
						))}
					</div>
				</section>

				<section className="insights-contact">
					<div className="insights-wrap insights-contact-inner">
						<div>
							<span className="insights-eyebrow">LET'S CONNECT</span>
							<h2>Have a question to explore?</h2>
							<p>Talk with our team about the issues shaping your organization.</p>
						</div>
						<Link className="insights-contact-link" to="/contact">Contact our team <span aria-hidden="true">↗</span></Link>
					</div>
				</section>
			</main>

			<style>{`
				.insights-page { --insights-ink: #172526; --insights-muted: #5e6968; --insights-accent: #167d72; --insights-bright: #8dd4c2; --insights-line: #dce4e1; color: var(--insights-ink); background: linear-gradient(180deg, #eef9f6 0%, #f8faf9 100%); font-family: "DM Sans", "Segoe UI", sans-serif; font-size: 16px; line-height: 1.65; }
				.insights-page *, .insights-page *::before, .insights-page *::after { box-sizing: border-box; }
				.insights-page img { display: block; width: 100%; object-fit: cover; }
				.insights-page a, .insights-page button { font: inherit; }
				.insights-hero { position: relative; display: flex; align-items: center; min-height: 480px; overflow: hidden; background-position: center; background-size: cover; color: white; }
				.insights-hero-shade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(11,30,29,.88), rgba(11,30,29,.52) 58%, rgba(11,30,29,.12)); }
				.insights-hero-content { position: relative; z-index: 1; width: min(100% - 64px, 1180px); margin: 0 auto; padding: 96px 0 112px; animation: insights-enter .5s ease both; }
				.insights-eyebrow, .insights-eyebrow-dark { display: block; margin-bottom: 16px; color: var(--insights-bright); font-size: 12px; font-weight: 700; letter-spacing: 1.5px; line-height: 1.4; text-transform: uppercase; }
				.insights-eyebrow-dark { color: var(--insights-accent); }
				.insights-hero h1 { max-width: 780px; margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: 60px; font-weight: 400; line-height: 1.08; }
				.insights-hero p { max-width: 650px; margin: 24px 0 0; color: rgba(255,255,255,.86); font-size: 17px; line-height: 1.75; }
				.insights-hero-index { position: absolute; right: max(32px, calc((100vw - 1180px) / 2)); bottom: 32px; color: rgba(255,255,255,.75); font-size: 12px; font-weight: 600; letter-spacing: 1px; }
				.insights-wrap { width: min(100% - 64px, 1180px); margin: 0 auto; }
				.insights-intro { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: end; padding-top: 88px; padding-bottom: 78px; }
				.insights-intro h2, .insights-section-heading h2, .insights-next h2, .insights-contact h2 { max-width: 540px; margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: 40px; font-weight: 400; line-height: 1.2; }
				.insights-intro-copy p, .insights-section-heading > p { margin: 0 0 16px; color: var(--insights-muted); font-size: 16px; line-height: 1.8; }
				.insights-intro-copy p:last-child { margin-bottom: 0; }
				.insights-list { padding-top: 76px; padding-bottom: 96px; border-top: 1px solid var(--insights-line); }
				.insights-section-heading { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: end; margin-bottom: 36px; }
				.insights-section-heading .insights-eyebrow-dark { margin-bottom: 10px; }
				.insights-section-heading h2 { font-size: 36px; }
				.insights-section-heading > p { max-width: 490px; margin: 0; }
				.insights-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
				.insight-card { min-width: 0; background: rgba(255,255,255,.74); }
				.insight-card-image { position: relative; height: 220px; overflow: hidden; background: #d7e0dc; }
				.insight-card-image img { height: 100%; transition: transform .5s ease; }
				.insight-card:hover .insight-card-image img { transform: scale(1.04); }
				.insight-card-image::after { position: absolute; inset: 30% 0 0; background: linear-gradient(transparent, rgba(10,26,26,.62)); content: ""; }
				.insight-card-image > span { position: absolute; z-index: 1; bottom: 13px; left: 17px; color: white; font-family: Georgia, "Times New Roman", serif; font-size: 34px; line-height: 1; }
				.insight-card-copy { padding: 21px 20px 24px; }
				.insight-card-meta { display: flex; justify-content: space-between; gap: 12px; margin-bottom: 13px; color: var(--insights-accent); font-size: 10px; font-weight: 700; letter-spacing: .8px; text-transform: uppercase; }
				.insight-card-meta span:last-child { color: #7b8783; text-align: right; }
				.insight-card h3 { margin: 0 0 10px; font-family: Georgia, "Times New Roman", serif; font-size: 22px; font-weight: 400; line-height: 1.3; }
				.insight-card p { min-height: 78px; margin: 0; color: var(--insights-muted); font-size: 14px; line-height: 1.7; }
				.insight-card-link { display: inline-flex; align-items: center; gap: 12px; margin-top: 20px; color: var(--insights-accent); font-size: 13px; font-weight: 700; text-decoration: none; }
				.insight-card-link span, .insights-contact-link span { transition: transform .2s ease; }
				.insight-card-link:hover span, .insights-contact-link:hover span { transform: translate(3px, -3px); }
				.insights-next { display: grid; grid-template-columns: .8fr 1.2fr; gap: 64px; padding-top: 76px; padding-bottom: 88px; border-top: 1px solid var(--insights-line); }
				.insights-next h2 { font-size: 34px; }
				.insights-next-links { border-top: 1px solid var(--insights-line); }
				.insights-next-link { display: grid; grid-template-columns: 48px 1fr 24px; gap: 12px; align-items: center; width: 100%; padding: 15px 0; border: 0; border-bottom: 1px solid var(--insights-line); background: transparent; color: var(--insights-ink); text-align: left; cursor: pointer; }
				.insights-next-link > span:first-child { color: var(--insights-accent); font-size: 12px; font-weight: 700; }
				.insights-next-link strong { font-size: 16px; font-weight: 600; }
				.insights-next-link > span:last-child { justify-self: end; color: var(--insights-accent); transition: transform .2s ease; }
				.insights-next-link:hover > span:last-child { transform: translate(3px, -3px); }
				.insights-contact { padding: 55px 0; background: #173b37; color: white; }
				.insights-contact-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; }
				.insights-contact .insights-eyebrow { color: var(--insights-bright); }
				.insights-contact h2 { font-size: 34px; }
				.insights-contact p { margin: 10px 0 0; color: rgba(255,255,255,.78); }
				.insights-contact-link { display: inline-flex; align-items: center; gap: 14px; color: white; font-size: 14px; font-weight: 700; text-decoration: none; white-space: nowrap; }
				@keyframes insights-enter { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
				@media (max-width: 900px) { .insights-hero h1 { max-width: 640px; font-size: 50px; } .insights-intro, .insights-section-heading { gap: 36px; } .insights-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
				@media (max-width: 640px) {
					.insights-hero { min-height: 440px; }
					.insights-hero-content, .insights-wrap { width: calc(100% - 40px); }
					.insights-hero-content { padding: 70px 0 90px; }
					.insights-hero h1 { font-size: 42px; }
					.insights-hero p { font-size: 16px; }
					.insights-hero-index { right: 20px; bottom: 22px; }
					.insights-intro, .insights-section-heading, .insights-next { grid-template-columns: 1fr; gap: 25px; }
					.insights-intro { padding-top: 64px; padding-bottom: 58px; }
					.insights-intro h2, .insights-section-heading h2 { font-size: 32px; }
					.insights-list, .insights-next { padding-top: 60px; padding-bottom: 68px; }
					.insights-grid { grid-template-columns: 1fr; gap: 18px; }
					.insight-card-image { height: 220px; }
					.insight-card p { min-height: 0; }
					.insights-next { gap: 28px; }
					.insights-contact { padding: 42px 0; }
					.insights-contact-inner { align-items: flex-start; flex-direction: column; }
					.insights-contact h2 { font-size: 30px; }
				}
				@media (prefers-reduced-motion: reduce) { .insights-page *, .insights-page *::before, .insights-page *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; } }
			`}</style>
		</div>
	);
}

export default Insights;