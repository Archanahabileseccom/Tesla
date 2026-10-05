import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const tabs = [
	{ id: "strategy", label: "Global IP Strategy" },
	{ id: "cross-border", label: "Cross-Border Protection" },
	{ id: "portfolio", label: "Portfolio Management" },
	{ id: "filing", label: "International Filing" },
	{ id: "enforcement", label: "Global Enforcement" },
];

const heroContent = {
	strategy: {
		title: "Protect what you create, wherever you grow.",
		description:
			"A thoughtful international IP strategy connects your innovation, brand and business plans across the markets that matter to you.",
	},
	"cross-border": {
		title: "One direction. Local context at every step.",
		description:
			"Coordinate international protection with an understanding of local procedures, deadlines and business priorities.",
	},
	portfolio: {
		title: "A clear process for a changing business.",
		description:
			"Keep international IP portfolios organized and revisit priorities as products, markets and business needs change.",
	},
	filing: {
		title: "Coordinate filings with your market plans.",
		description:
			"Plan international filing priorities around commercial timing, asset needs and the markets where protection matters.",
	},
	enforcement: {
		title: "Respond to cross-border concerns with context.",
		description:
			"Assess potential infringement and misuse with care for local context, available information and business goals.",
	},
};

const overviewCards = [
	{
		number: "360°",
		title: "Portfolio perspective",
		text: "Connect patents, trademarks, designs and know-how to business priorities.",
		image:
			"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85",
		alt: "Earth at night with illuminated international connections",
	},
	{
		number: "01",
		title: "Coordinated strategy",
		text: "Bring international protection decisions into one clear, considered plan.",
		image:
			"https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1000&q=85",
		alt: "Map and notes used to plan international markets",
	},
	{
		number: "04",
		title: "Key protection areas",
		text: "Consider patents, trademarks, designs and confidential know-how together.",
		image:
			"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85",
		alt: "Team reviewing a structured business plan",
	},
	{
		number: "End-to-end",
		title: "Lifecycle thinking",
		text: "Plan beyond filing, with attention to ownership, maintenance and use.",
		image:
			"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
		alt: "Modern high-rise buildings representing long-term growth",
	},
];

const services = [
	{
		number: "01",
		title: "International IP strategy",
		text: "Identify the assets that matter, set protection priorities and evaluate where action best supports your business plans.",
		image:
			"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
		alt: "Professionals discussing a strategy around a table",
	},
	{
		number: "02",
		title: "Patent pathways",
		text: "Assess technical innovations and consider filing routes and timing in relation to product development and intended markets.",
		image:
			"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
		alt: "Engineer working with a technical prototype",
	},
	{
		number: "03",
		title: "Trademark protection",
		text: "Build a consistent approach to brand clearance, selection, protection and portfolio oversight across jurisdictions.",
		image:
			"https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85",
		alt: "Brand identity concepts laid out on a design desk",
	},
	{
		number: "04",
		title: "Designs and know-how",
		text: "Consider how product appearance, confidential information and operational knowledge can be safeguarded appropriately.",
		image:
			"https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=85",
		alt: "Thoughtfully designed chair in a bright studio",
	},
];

const process = [
	{
		number: "01",
		title: "Map the assets",
		text: "Understand the inventions, brands, designs and know-how behind your products and services.",
	},
	{
		number: "02",
		title: "Set market priorities",
		text: "Review current and planned markets, commercial timing and relevant local requirements.",
	},
	{
		number: "03",
		title: "Coordinate protection",
		text: "Align filing decisions, ownership information and local professional input around a common plan.",
	},
	{
		number: "04",
		title: "Manage and review",
		text: "Keep portfolios organized and revisit priorities as products, markets and business needs change.",
	},
];

function GlobalIP() {
	const [activeTab, setActiveTab] = useState("strategy");
	const location = useLocation();
	const navigate = useNavigate();
	const hero = heroContent[activeTab];

	useEffect(() => {
		const hash = location.hash.slice(1);
		const nextTab = tabs.some((tab) => tab.id === hash) ? hash : "strategy";
		setActiveTab(nextTab);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [location.hash, location.pathname]);

	const handleTabChange = (tabId) => {
		setActiveTab(tabId);
		navigate(tabId === "strategy" ? "/global-ip" : `/global-ip#${tabId}`);
	};

	return (
		<div className="global-ip-page">
			<section className="global-hero" aria-labelledby="global-hero-title">
				<div className="global-hero-shade" />
				<div className="global-hero-inner" key={activeTab}>
					<div className="global-hero-copy">
						<span className="global-eyebrow">GLOBAL INTELLECTUAL PROPERTY</span>
						<h1 id="global-hero-title">{hero.title}</h1>
						<p>{hero.description}</p>
						<Link className="global-hero-action" to="/contact">
							Discuss your plans <span aria-hidden="true">↗</span>
						</Link>
					</div>
					<div className="global-hero-note">
						<span>IDEAS</span><i /> <span>MARKETS</span><i /> <span>PROTECTION</span>
					</div>
				</div>
			</section>

			<main key={activeTab}>
				{activeTab === "strategy" && (
					<>
				<section className="global-intro global-wrap" id="strategy">
					<div className="global-intro-heading">
						<span className="global-eyebrow">A CONNECTED VIEW</span>
						<h2>Global ambition needs a considered IP plan.</h2>
					</div>
					<div className="global-intro-copy">
						<p>
							Intellectual property rights are territorial, while products,
							brands and digital services can reach customers across borders.
							Planning protection therefore means understanding both the assets
							you have and the markets in which they will be used.
						</p>
						<p>
							Tesla Innovation helps organizations structure those decisions,
							coordinate international work and keep IP considerations aligned
							with commercial priorities. Specific protection and outcomes
							depend on the facts and laws applicable in each jurisdiction.
						</p>
					</div>
				</section>

				<section className="global-overview global-wrap" aria-labelledby="overview-title">
					<div className="global-section-heading">
						<div>
							<span className="global-eyebrow">AT A GLANCE</span>
							<h2 id="overview-title">A wider lens on protection.</h2>
						</div>
						<p>
							A useful international plan looks beyond a single filing and
							considers how each asset supports the organization over time.
						</p>
					</div>
					<div className="global-stat-grid">
						{overviewCards.map((card, index) => (
							<article
								className="global-stat-card"
								key={card.title}
								style={{ "--card-order": index }}
							>
								<div className="global-stat-image">
									<img src={card.image} alt={card.alt} loading="lazy" />
									<span className="global-stat-number">{card.number}</span>
								</div>
								<div className="global-stat-copy">
									<span className="global-card-index">0{index + 1}</span>
									<h3>{card.title}</h3>
									<p>{card.text}</p>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className="global-services" aria-labelledby="services-title">
					<div className="global-wrap">
						<div className="global-section-heading">
							<div>
								<span className="global-eyebrow">PROTECTION AREAS</span>
								<h2 id="services-title">Plan around the assets that set you apart.</h2>
							</div>
							<p>
								The right mix of protection depends on your technology, identity,
								products, operating model and target markets.
							</p>
						</div>
						<div className="global-service-grid">
							{services.map((service) => (
								<article
									className="global-service-card"
									id={service.number === "02" ? "patents" : service.number === "03" ? "trademarks" : undefined}
									key={service.number}
								>
									<div className="global-service-image">
										<img src={service.image} alt={service.alt} loading="lazy" />
										<span>{service.number}</span>
									</div>
									<div className="global-service-copy">
										<h3>{service.title}</h3>
										<p>{service.text}</p>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>
					</>
				)}

				{activeTab === "cross-border" && <section className="global-cross-border" id="cross-border">
					<div className="global-cross-image">
						<img
							src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85"
							alt="Colleagues coordinating work across locations"
							loading="lazy"
						/>
					</div>
					<div className="global-cross-copy">
						<span className="global-eyebrow">CROSS-BORDER COORDINATION</span>
						<h2>One direction. Local context at every step.</h2>
						<p>
							International protection can involve different procedures,
							deadlines and legal requirements. A coordinated approach helps
							teams track decisions, share accurate information and work
							effectively with local counsel where needed.
						</p>
						<p>
							We help organize the questions and priorities so that local advice
							can be considered within the wider business picture.
						</p>
					</div>
				</section>}

				{activeTab === "portfolio" && <section className="global-process global-wrap" id="portfolio">
					<div className="global-section-heading">
						<div>
							<span className="global-eyebrow">PORTFOLIO MANAGEMENT</span>
							<h2>A clear process for a changing business.</h2>
						</div>
						<p>
							Markets evolve, products change and new ideas emerge. Regular
							portfolio review helps keep protection decisions purposeful.
						</p>
					</div>
					<div className="global-process-list">
						{process.map((step) => (
							<article className="global-process-step" key={step.number}>
								<span>{step.number}</span>
								<h3>{step.title}</h3>
								<p>{step.text}</p>
								<span className="global-process-mark" aria-hidden="true">↗</span>
							</article>
						))}
					</div>
				</section>}

				{activeTab === "filing" && <section className="global-cross-border global-added-section" id="filing">
					<div className="global-cross-image">
						<img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=85" alt="International filing documents prepared for review" loading="lazy" />
					</div>
					<div className="global-cross-copy">
						<span className="global-eyebrow">INTERNATIONAL FILING</span>
						<h2>Coordinate filings with your market plans.</h2>
						<p>Filing choices can depend on commercial timing, the nature of each asset and the markets in which protection may be valuable. We help organize priorities and coordinate the required information with qualified local professionals.</p>
						<p>A clear filing plan also makes ownership records, deadlines and next steps easier to manage across jurisdictions.</p>
					</div>
				</section>}

				{activeTab === "enforcement" && <section className="global-cross-border global-added-section" id="enforcement">
					<div className="global-cross-image">
						<img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=85" alt="Legal reference books supporting an international enforcement review" loading="lazy" />
					</div>
					<div className="global-cross-copy">
						<span className="global-eyebrow">GLOBAL ENFORCEMENT</span>
						<h2>Respond to cross-border concerns with context.</h2>
						<p>Potential infringement and misuse can call for different responses in different markets. We help organizations assess the available information, consider business priorities and coordinate a proportionate response with appropriate local counsel.</p>
						<p>Clear records and a coordinated approach can help teams understand the options before taking action.</p>
					</div>
				</section>}

				<section className="global-contact-band">
					<div className="global-wrap global-contact-inner">
						<div>
							<span className="global-eyebrow">PLAN YOUR NEXT MOVE</span>
							<h2>Building in new markets?</h2>
						</div>
						<div>
							<p>
								Talk with our team about aligning your IP priorities with your
								international business plans.
							</p>
							<Link to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
						</div>
					</div>
				</section>

				<section className="global-discover global-wrap" aria-label="Explore global IP services">
					<div>
						<span className="global-eyebrow">EXPLORE MORE</span>
						<h2>Global protection, considered from every angle.</h2>
					</div>
					<div className="global-discover-links">
						{tabs.map((tab, index) => (
							<button
								className="global-discover-link"
								key={tab.id}
								type="button"
								aria-current={activeTab === tab.id ? "page" : undefined}
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
				.global-ip-page {
					--global-ink: #182a2a;
					--global-muted: #5c6968;
					--global-green: #11796f;
					--global-mint: #a2dfce;
					--global-line: #dce5e1;
					--global-paper: #f5f7f4;
					color: var(--global-ink);
					background: #fff;
					font-family: "DM Sans", "Segoe UI", sans-serif;
					font-size: 16px;
					line-height: 1.65;
				}
				.global-ip-page *, .global-ip-page *::before, .global-ip-page *::after { box-sizing: border-box; }
				.global-ip-page img { display: block; width: 100%; object-fit: cover; }
				.global-ip-page a { color: inherit; }
				.global-wrap { width: min(100% - 64px, 1180px); margin-inline: auto; }
				.global-hero {
					position: relative;
					min-height: 540px;
					color: #fff;
					background: #183634 url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=90") center 46% / cover no-repeat;
					overflow: hidden;
				}
				.global-hero-shade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(8,30,29,.91), rgba(8,30,29,.65) 48%, rgba(8,30,29,.12)); }
				.global-hero-inner { position: relative; width: min(100% - 64px, 1180px); min-height: 540px; margin: 0 auto; display: flex; flex-direction: column; justify-content: center; padding: 82px 0 78px; animation: global-rise .65s ease both; }
				.global-hero-copy { max-width: 760px; }
				.global-eyebrow { display: block; margin: 0 0 15px; color: var(--global-green); font-size: 12px; font-weight: 700; letter-spacing: 1.5px; line-height: 1.45; }
				.global-hero .global-eyebrow { color: var(--global-mint); }
				.global-hero h1, .global-intro h2, .global-section-heading h2, .global-cross-copy h2, .global-contact-inner h2 { margin: 0; font-family: Georgia, "Times New Roman", serif; font-weight: 400; line-height: 1.13; }
				.global-hero h1 { max-width: 740px; font-size: 60px; }
				.global-hero-copy > p { max-width: 630px; margin: 22px 0 0; color: rgba(255,255,255,.86); font-size: 17px; line-height: 1.75; }
				.global-hero-action { display: inline-flex; gap: 14px; align-items: center; margin-top: 28px; color: white !important; font-size: 14px; font-weight: 700; text-decoration: none; }
				.global-hero-action span { display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid rgba(255,255,255,.56); border-radius: 50%; transition: transform .2s ease; }
				.global-hero-action:hover span { transform: translateY(3px); }
				.global-hero-note { position: absolute; right: 0; bottom: 30px; display: flex; align-items: center; gap: 12px; color: rgba(255,255,255,.8); font-size: 10px; font-weight: 700; letter-spacing: 1px; }
				.global-hero-note i { width: 20px; height: 1px; background: var(--global-mint); }
				.global-intro { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: end; padding-top: 94px; padding-bottom: 82px; scroll-margin-top: 75px; }
				.global-intro h2 { max-width: 520px; font-size: 42px; }
				.global-intro-copy p, .global-section-heading > p, .global-cross-copy p, .global-contact-inner p { margin: 0 0 15px; color: var(--global-muted); font-size: 16px; line-height: 1.8; }
				.global-intro-copy p:last-child, .global-cross-copy p:last-child { margin-bottom: 0; }
				.global-overview { padding-top: 68px; padding-bottom: 92px; border-top: 1px solid var(--global-line); }
				.global-section-heading { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items: end; margin-bottom: 31px; }
				.global-section-heading h2 { max-width: 560px; font-size: 38px; }
				.global-section-heading > p { max-width: 490px; margin: 0; }
				.global-stat-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 17px; }
				.global-stat-card { min-width: 0; background: var(--global-paper); animation: global-rise .55s ease both; animation-delay: calc(var(--card-order) * 90ms); }
				.global-stat-image { position: relative; height: 190px; overflow: hidden; background: #dce5e1; }
				.global-stat-image::after { position: absolute; inset: 35% 0 0; content: ""; background: linear-gradient(transparent, rgba(8,27,26,.68)); }
				.global-stat-image img { height: 100%; transition: transform .55s ease; }
				.global-stat-card:hover .global-stat-image img { transform: scale(1.05); }
				.global-stat-number { position: absolute; z-index: 1; bottom: 13px; left: 17px; color: white; font-family: Georgia, "Times New Roman", serif; font-size: 31px; line-height: 1.1; }
				.global-stat-copy { position: relative; min-height: 154px; padding: 19px 17px 21px; }
				.global-card-index { position: absolute; top: 21px; right: 17px; color: #82908c; font-size: 11px; font-weight: 700; }
				.global-stat-copy h3 { max-width: 190px; margin: 0 12px 8px 0; font-size: 16px; font-weight: 700; line-height: 1.4; }
				.global-stat-copy p, .global-service-copy p, .global-process-step p { margin: 0; color: var(--global-muted); font-size: 14px; line-height: 1.7; }
				.global-services { padding: 84px 0 96px; background: var(--global-paper); }
				.global-service-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px 22px; }
				.global-service-card { min-width: 0; scroll-margin-top: 80px; animation: global-rise .55s ease both; }
				.global-service-card:nth-child(2) { animation-delay: 80ms; }
				.global-service-card:nth-child(3) { animation-delay: 160ms; }
				.global-service-card:nth-child(4) { animation-delay: 240ms; }
				.global-service-image { position: relative; height: 260px; overflow: hidden; background: #dce5e1; }
				.global-service-image img { height: 100%; transition: transform .55s ease; }
				.global-service-card:hover .global-service-image img { transform: scale(1.04); }
				.global-service-image > span { position: absolute; top: 14px; left: 14px; display: grid; width: 34px; height: 34px; place-items: center; background: white; color: var(--global-green); font-size: 12px; font-weight: 700; }
				.global-service-copy { padding-top: 18px; }
				.global-service-copy h3, .global-process-step h3 { margin: 0 0 7px; font-size: 19px; font-weight: 650; line-height: 1.4; }
				.global-service-copy p { max-width: 550px; }
				.global-cross-border { display: grid; grid-template-columns: 1fr 1fr; min-height: 450px; scroll-margin-top: 58px; }
				.global-added-section { scroll-margin-top: 145px; }
				.global-cross-image { min-height: 450px; overflow: hidden; background: #dce5e1; }
				.global-cross-image img { height: 100%; min-height: 450px; transition: transform .8s ease; }
				.global-cross-border:hover .global-cross-image img { transform: scale(1.025); }
				.global-cross-copy { display: flex; flex-direction: column; justify-content: center; padding: 65px clamp(32px, 7vw, 105px); }
				.global-cross-copy h2 { margin-bottom: 21px; font-size: 38px; }
				.global-cross-copy .global-eyebrow { margin-bottom: 14px; }
				.global-process { padding-top: 88px; padding-bottom: 95px; scroll-margin-top: 70px; }
				.global-process-list { border-top: 1px solid var(--global-line); }
				.global-process-step { display: grid; grid-template-columns: 60px minmax(180px, .75fr) 1.25fr 22px; gap: 20px; align-items: center; padding: 24px 0; border-bottom: 1px solid var(--global-line); animation: global-rise .5s ease both; }
				.global-process-step > span:first-child { color: var(--global-green); font-size: 12px; font-weight: 700; }
				.global-process-step h3 { margin: 0; }
				.global-process-mark { justify-self: end; color: var(--global-green); font-size: 19px; }
				.global-contact-band { padding: 61px 0; background: #173b37; color: white; }
				.global-contact-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items: center; }
				.global-contact-inner .global-eyebrow { color: var(--global-mint); }
				.global-contact-inner h2 { font-size: 38px; }
				.global-contact-inner p { margin-bottom: 16px; color: rgba(255,255,255,.78); }
				.global-contact-inner a { display: inline-flex; gap: 12px; color: white; font-size: 14px; font-weight: 700; text-decoration: none; }
				.global-contact-inner a span { transition: transform .2s ease; }
				.global-contact-inner a:hover span { transform: translate(3px, -3px); }
				.global-discover { display: grid; grid-template-columns: .8fr 1.2fr; gap: 64px; padding-top: 76px; padding-bottom: 96px; }
				.global-discover h2 { max-width: 430px; margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: 34px; font-weight: 400; line-height: 1.2; }
				.global-discover-links { border-top: 1px solid var(--global-line); }
				.global-discover-link { display: grid; grid-template-columns: 46px 1fr 24px; gap: 12px; align-items: center; width: 100%; padding: 14px 0; border: 0; border-bottom: 1px solid var(--global-line); background: transparent; color: var(--global-ink); text-align: left; }
				.global-discover-link > span:first-child { color: var(--global-green); font-size: 11px; font-weight: 700; }
				.global-discover-link strong { font-size: 15px; font-weight: 600; }
				.global-discover-link > span:last-child { justify-self: end; color: var(--global-green); transition: transform .2s ease; }
				.global-discover-link:hover > span:last-child { transform: translate(3px, -3px); }
				.global-discover-link[aria-current="page"] strong { color: var(--global-green); }
				@keyframes global-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
				@media (max-width: 900px) {
					.global-hero h1 { font-size: 52px; }
					.global-intro, .global-section-heading { gap: 38px; }
					.global-stat-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
					.global-stat-image { height: 220px; }
					.global-process-step { grid-template-columns: 44px minmax(150px, .8fr) 1.2fr 20px; gap: 14px; }
					.global-cross-copy { padding-inline: 38px; }
				}
				@media (max-width: 640px) {
					.global-wrap, .global-hero-inner { width: calc(100% - 40px); }
					.global-hero, .global-hero-inner { min-height: 470px; }
					.global-hero-inner { padding: 65px 0 80px; }
					.global-hero h1 { font-size: 42px; }
					.global-hero-copy > p { font-size: 16px; }
					.global-hero-note { right: 0; gap: 8px; font-size: 9px; }
					.global-hero-note i { width: 12px; }
					.global-intro, .global-section-heading, .global-contact-inner, .global-discover { grid-template-columns: 1fr; gap: 22px; }
					.global-intro { padding-top: 62px; padding-bottom: 56px; }
					.global-intro h2, .global-section-heading h2, .global-cross-copy h2, .global-contact-inner h2 { font-size: 32px; }
					.global-overview, .global-process { padding-top: 60px; padding-bottom: 66px; }
					.global-stat-grid { gap: 12px; }
					.global-stat-image { height: 145px; }
					.global-stat-number { left: 12px; bottom: 10px; font-size: 26px; }
					.global-stat-copy { min-height: 165px; padding: 15px 12px; }
					.global-card-index { top: 17px; right: 12px; }
					.global-stat-copy h3 { margin-right: 0; font-size: 15px; }
					.global-stat-copy p { font-size: 12px; }
					.global-services { padding: 62px 0 68px; }
					.global-service-grid { grid-template-columns: 1fr; gap: 24px; }
					.global-service-image { height: 220px; }
					.global-cross-border { grid-template-columns: 1fr; }
					.global-cross-image, .global-cross-image img { min-height: 270px; height: 270px; }
					.global-cross-copy { padding: 42px 20px 48px; }
					.global-process-step { grid-template-columns: 36px 1fr 20px; gap: 10px; align-items: start; padding: 19px 0; }
					.global-process-step h3 { font-size: 17px; }
					.global-process-step p { grid-column: 2 / 3; font-size: 14px; }
					.global-process-mark { grid-column: 3; grid-row: 1; }
					.global-contact-band { padding: 46px 0; }
					.global-contact-inner { gap: 21px; }
					.global-discover { gap: 27px; padding-top: 60px; padding-bottom: 70px; }
				}
				@media (prefers-reduced-motion: reduce) {
					.global-ip-page *, .global-ip-page *::before, .global-ip-page *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
				}
			`}</style>
		</div>
	);
}

export default GlobalIP;
