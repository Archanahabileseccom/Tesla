import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
	{ id: "strategy", label: "IP Strategy" },
	{ id: "patents", label: "Patents" },
	{ id: "trademarks", label: "Trademarks" },
	{ id: "copyright", label: "Copyright" },
	{ id: "portfolio", label: "IP Portfolio" },
	{ id: "commercialization", label: "IP Commercialization" },
	{ id: "enforcement", label: "IP Enforcement" },
];

const experienceStats = [
	{
		number: "15+",
		title: "Years of experience",
		text: "Practical perspective for complex business and IP decisions.",
		image:
			"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
		alt: "Colleagues collaborating around a table",
	},
	{
		number: "25+",
		title: "Industries supported",
		text: "Advice shaped around the realities of different sectors.",
		image:
			"https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=85",
		alt: "Modern industrial manufacturing equipment",
	},
	{
		number: "100+",
		title: "Projects and engagements",
		text: "Focused support from early ideas through execution.",
		image:
			"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
		alt: "Team reviewing plans and project documents",
	},
	{
		number: "12+",
		title: "Markets and regions",
		text: "A broad outlook for organizations working across borders.",
		image:
			"https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=900&q=85",
		alt: "Map representing international markets",
	},
];

const pages = {
	strategy: {
		eyebrow: "TESLA INNOVATION / INTELLECTUAL PROPERTY",
		indicator: "01 — 07",
		title: "Building an IP strategy around business ambition.",
		description:
			"Connect innovation, protection and commercial priorities with a clear intellectual property strategy built around your organization.",
		heroImage:
			"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=90",
		sectionLabel: "IP STRATEGY",
		heading: "Building an IP strategy around business ambition.",
		intro:
			"An effective IP strategy begins with understanding what makes your organization distinct. We help bring business goals and intellectual property decisions into the same conversation, so priorities are clear and resources are directed with purpose.",
		featureTitle: "See the whole picture before choosing the next move.",
		featureImage:
			"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Team planning a business strategy around a table",
		paragraphs: [
			"Our work can include IP audits, landscape analysis and competitive intelligence to help identify existing assets, emerging opportunities and potential exposure. The result is a practical view of where protection may support the business and where further assessment is needed.",
			"From risk identification to protection planning, we help organizations make informed choices about what to protect, how to manage it and when to revisit those choices as the business changes.",
		],
		capabilities: [
			"IP strategy planning",
			"IP audits",
			"IP landscape analysis",
			"Competitive intelligence",
			"Risk identification",
			"Protection planning",
		],
		cards: [
			{
				number: "01",
				title: "Identify",
				text: "Map inventions, brands, designs, know-how and ownership across your organization.",
				image:
					"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
				alt: "Business team identifying priorities in a project review",
			},
			{
				number: "02",
				title: "Protect",
				text: "Select appropriate protection options in context of use, timing and market plans.",
				image:
					"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
				alt: "Documents being reviewed as part of a protection plan",
			},
			{
				number: "03",
				title: "Manage",
				text: "Establish clear processes for ownership, records, decisions and ongoing review.",
				image:
					"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
				alt: "Digital dashboard used to organize business information",
			},
			{
				number: "04",
				title: "Grow",
				text: "Revisit the portfolio as products, partnerships and commercial ambitions evolve.",
				image:
					"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
				alt: "Modern buildings representing business growth",
			},
		],
	},
	patents: {
		eyebrow: "TESLA INNOVATION / INTELLECTUAL PROPERTY",
		indicator: "02 — 07",
		title: "Turning innovation into protectable intellectual property.",
		description:
			"A considered patent approach can help align technical innovation, protection options and the markets where your business intends to operate.",
		heroImage:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=90",
		sectionLabel: "PATENT STRATEGY",
		heading: "Give technical ideas a clear path to protection.",
		intro:
			"Patent decisions are most useful when made with a clear view of the technology, its development timeline and its role in the business. We help organizations structure those decisions from early assessment through portfolio management.",
		featureTitle: "Plan around the invention and the markets ahead.",
		featureImage:
			"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Engineer working with a technical prototype",
		paragraphs: [
			"Support may include patent strategy, prior-art assessment and preparation for drafting with qualified patent professionals. Filing choices can then be considered against business timing, available information and intended jurisdictions.",
			"For organizations with active patent portfolios, ongoing review can help keep records, deadlines and international coordination visible as technologies and markets develop.",
		],
		capabilities: [
			"Patent strategy",
			"Prior-art assessment",
			"Patent drafting support",
			"Filing strategy",
			"Patent portfolio management",
			"International patent coordination",
		],
		cards: [
			{
				number: "01",
				title: "Patent Strategy",
				text: "Connect invention priorities with product roadmaps and commercial objectives.",
				image:
					"https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=85",
				alt: "Interactive technology installation representing innovation",
			},
			{
				number: "02",
				title: "Prior Art",
				text: "Consider available technical information before committing to a protection route.",
				image:
					"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
				alt: "Scientific research equipment in a laboratory",
			},
			{
				number: "03",
				title: "Filing Support",
				text: "Organize information and coordinate steps toward a suitable filing plan.",
				image:
					"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
				alt: "Patent-related paperwork prepared for review",
			},
			{
				number: "04",
				title: "Portfolio Management",
				text: "Track patent assets and revisit their relevance as technology and strategy change.",
				image:
					"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
				alt: "Portfolio information organized in a digital dashboard",
			},
		],
	},
	trademarks: {
		eyebrow: "TESLA INNOVATION / INTELLECTUAL PROPERTY",
		indicator: "03 — 07",
		title: "Protecting the identity behind your business.",
		description:
			"Build a thoughtful trademark approach for the names, symbols and distinctive elements that connect your brand with its customers.",
		heroImage:
			"https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=2000&q=90",
		sectionLabel: "TRADEMARKS",
		heading: "Build a recognizable brand on a considered foundation.",
		intro:
			"A brand can become one of an organization's most recognizable assets. Thoughtful trademark planning helps businesses assess names and identifiers, consider protection options and maintain a consistent approach as they enter new markets.",
		featureTitle: "From first search to long-term brand stewardship.",
		featureImage:
			"https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Brand colors and visual identity references",
		paragraphs: [
			"Our trademark work can include search planning, brand protection, filing and registration coordination, portfolio management and enforcement considerations. Each step is assessed in the context of your brand use and commercial plans.",
			"For international expansion, coordination across jurisdictions can help keep ownership details, local requirements and business priorities aligned. Availability and registrability depend on the relevant facts and local law.",
		],
		capabilities: [
			"Trademark strategy",
			"Trademark searches",
			"Brand protection",
			"Filing and registration",
			"Portfolio management",
			"Trademark enforcement",
		],
		cards: [
			{
				number: "01",
				title: "Search",
				text: "Review relevant brand identifiers and potential conflicts before launch decisions.",
				image:
					"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
				alt: "Brand review documents being assessed",
			},
			{
				number: "02",
				title: "Protect",
				text: "Prioritize the names and signs that matter most to your brand and business.",
				image:
					"https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85",
				alt: "Brand colors and visual identity references",
			},
			{
				number: "03",
				title: "Register",
				text: "Coordinate filing steps and ownership details with the appropriate professionals.",
				image:
					"https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=85",
				alt: "Calendar and planning materials on a desk",
			},
			{
				number: "04",
				title: "Enforce",
				text: "Assess potential conflicts and consider proportionate, business-aware responses.",
				image:
					"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=85",
				alt: "Legal books and a balance scale in a law office",
			},
		],
	},
	copyright: {
		eyebrow: "TESLA INNOVATION / INTELLECTUAL PROPERTY",
		indicator: "04 — 07",
		title: "Protecting original content, software and creative assets.",
		description:
			"Understand how copyright considerations may apply to the original works and digital materials your organization creates and uses.",
		heroImage:
			"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=90",
		sectionLabel: "COPYRIGHT",
		heading: "Protect the creative work that powers your organization.",
		intro:
			"Original content and digital assets are woven into modern products, services and communications. A considered copyright approach helps organizations understand ownership, permitted use and the steps that support responsible management.",
		featureTitle: "Bring clarity to ownership, use and licensing.",
		featureImage:
			"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Team reviewing content and project documents",
		paragraphs: [
			"We help organizations review software, websites, digital content, creative works and documentation as part of a broader IP picture. This can include considering creator and contractor arrangements, records, licensing and internal practices.",
			"Where potential misuse or a licensing concern arises, we help assess the issue and consider practical next steps. The scope of copyright protection and available remedies varies by jurisdiction and circumstance.",
		],
		capabilities: [
			"Software protection",
			"Website and digital content",
			"Creative works",
			"Documentation",
			"Licensing",
			"Copyright enforcement",
		],
		cards: [
			{
				number: "01",
				title: "Software",
				text: "Clarify software ownership, development records and licensing considerations.",
				image:
					"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
				alt: "Software developer working at a laptop",
			},
			{
				number: "02",
				title: "Content",
				text: "Review the original written, visual and digital content used by your business.",
				image:
					"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
				alt: "Team reviewing content and project documents",
			},
			{
				number: "03",
				title: "Creative Works",
				text: "Consider ownership and permitted use for creative materials and commissioned work.",
				image:
					"https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
				alt: "Artist's paint palette and creative materials",
			},
			{
				number: "04",
				title: "Digital Assets",
				text: "Organize websites, online resources and the licenses that govern their use.",
				image:
					"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
				alt: "Digital business analytics displayed on a screen",
			},
		],
	},
	portfolio: {
		eyebrow: "TESLA INNOVATION / INTELLECTUAL PROPERTY",
		indicator: "05 — 07",
		title: "Managing intellectual property as a strategic asset.",
		description:
			"A well-organized portfolio helps decision-makers see what they own, where attention is needed and how assets support the business.",
		heroImage:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=90",
		sectionLabel: "IP PORTFOLIO",
		heading: "Make your portfolio easier to understand and act on.",
		intro:
			"Intellectual property portfolios can grow across teams, products and jurisdictions. Bringing the information together gives organizations a stronger basis for reviewing coverage, exposure and strategic relevance.",
		featureTitle: "A practical view of assets, gaps and priorities.",
		featureImage:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Business analytics dashboard displayed on a screen",
		paragraphs: [
			"Portfolio review may include asset mapping, gap analysis, valuation considerations, portfolio optimization, renewal management and risk monitoring. The appropriate scope depends on the organization's objectives and available information.",
			"Clear records and regular review help teams understand ownership, status and potential next steps, while keeping IP decisions connected to broader business activity.",
		],
		capabilities: [
			"Portfolio review",
			"IP valuation",
			"Gap analysis",
			"Portfolio optimization",
			"Renewal management",
			"Risk monitoring",
		],
		cards: [
			{
				number: "01",
				title: "Portfolio Review",
				text: "Bring status, ownership and business relevance into one structured review.",
				image:
					"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
				alt: "Charts and metrics organized in a business dashboard",
			},
			{
				number: "02",
				title: "Asset Mapping",
				text: "Create a clearer view of intellectual assets across teams and markets.",
				image:
					"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
				alt: "Team mapping workstreams and priorities",
			},
			{
				number: "03",
				title: "Risk Analysis",
				text: "Surface records, ownership, coverage and timing issues that may need attention.",
				image:
					"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
				alt: "Business documents reviewed for risks and next steps",
			},
			{
				number: "04",
				title: "Optimization",
				text: "Prioritize actions that keep portfolio decisions aligned with business needs.",
				image:
					"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
				alt: "City buildings representing an evolving business portfolio",
			},
		],
		dashboard: true,
	},
	commercialization: {
		eyebrow: "TESLA INNOVATION / INTELLECTUAL PROPERTY",
		indicator: "06 — 07",
		title: "Turning intellectual property into business opportunity.",
		description:
			"Explore how licensing, collaboration and technology transfer may help connect valuable IP with commercial objectives.",
		heroImage:
			"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=90",
		sectionLabel: "IP COMMERCIALIZATION",
		heading: "Create a route from protected asset to practical value.",
		intro:
			"Intellectual property can support growth through partnerships, licensing and other commercial arrangements. A good starting point is to understand the asset, the rights available and the outcomes each party is seeking.",
		featureTitle: "Structure opportunities around clear commercial goals.",
		featureImage:
			"https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Business partners meeting to discuss a collaboration",
		paragraphs: [
			"We support organizations considering licensing strategy, technology transfer, commercial partnerships, IP valuation, monetization opportunities and strategic transactions.",
			"Thoughtful planning can help clarify scope, ownership, permitted use, responsibilities and commercial terms before a relationship moves forward. Each opportunity should be assessed in its legal and business context.",
		],
		capabilities: [
			"Licensing strategy",
			"Technology transfer",
			"Commercial partnerships",
			"IP valuation",
			"Monetization opportunities",
			"Strategic transactions",
		],
		cards: [
			{
				number: "01",
				title: "License",
				text: "Consider suitable scope, rights, terms and oversight for an IP license.",
				image:
					"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
				alt: "Agreement documents prepared for a licensing discussion",
			},
			{
				number: "02",
				title: "Partner",
				text: "Align IP contributions and responsibilities in commercial collaborations.",
				image:
					"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
				alt: "Business partners collaborating on a shared project",
			},
			{
				number: "03",
				title: "Transfer",
				text: "Plan technology transfer with attention to rights, know-how and implementation.",
				image:
					"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85",
				alt: "Technical team demonstrating a new technology",
			},
			{
				number: "04",
				title: "Monetize",
				text: "Explore commercial pathways that reflect the asset and market opportunity.",
				image:
					"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
				alt: "Commercial data used to evaluate business opportunities",
			},
		],
	},
	enforcement: {
		eyebrow: "TESLA INNOVATION / INTELLECTUAL PROPERTY",
		indicator: "07 — 07",
		title: "Protecting valuable rights when challenges arise.",
		description:
			"When an IP concern emerges, a measured response starts with the facts, the available rights and the business outcome you want to achieve.",
		heroImage:
			"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=90",
		sectionLabel: "IP ENFORCEMENT",
		heading: "Respond to IP challenges with clarity and purpose.",
		intro:
			"Potential infringement and disputes can affect commercial relationships, product plans and reputation. Understanding the circumstances and available options helps organizations decide how best to respond.",
		featureTitle: "Start with evidence. Choose a proportionate response.",
		featureImage:
			"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Legal and business documents being carefully reviewed",
		paragraphs: [
			"Our support can include infringement analysis, enforcement strategy, dispute support, negotiation, licensing disputes and coordination with litigation counsel where appropriate.",
			"The right path depends on the rights, evidence, jurisdiction, commercial relationships and desired outcome. We help organize those considerations so decisions are informed and responsive to business priorities.",
		],
		capabilities: [
			"Infringement analysis",
			"Enforcement strategy",
			"Dispute support",
			"Negotiation",
			"Licensing disputes",
			"Litigation coordination",
		],
		cards: [
			{
				number: "01",
				title: "Analyze",
				text: "Review the rights, available evidence and practical context of the concern.",
				image:
					"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
				alt: "Documents reviewed as part of a legal analysis",
			},
			{
				number: "02",
				title: "Respond",
				text: "Develop a considered response that reflects business objectives and risk.",
				image:
					"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
				alt: "Team discussing a coordinated response",
			},
			{
				number: "03",
				title: "Resolve",
				text: "Consider negotiation, licensing or dispute pathways based on the circumstances.",
				image:
					"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
				alt: "Business discussion focused on reaching an agreement",
			},
			{
				number: "04",
				title: "Protect",
				text: "Coordinate next steps with appropriate legal professionals and stakeholders.",
				image:
					"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=85",
				alt: "Legal reference books in a professional office",
			},
		],
	},
};

function IntellectualProperty() {
	const [activeTab, setActiveTab] = useState("strategy");
	const location = useLocation();
	const navigate = useNavigate();
	const activePage = pages[activeTab];
	const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

	useEffect(() => {
		const hash = location.hash.slice(1);
		const nextTab = tabs.some((tab) => tab.id === hash) ? hash : "strategy";
		setActiveTab(nextTab);
	}, [location.hash, location.pathname]);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [activeTab]);

	const handleTabChange = (tabId) => {
		setActiveTab(tabId);
		navigate(tabId === "strategy" ? "/intellectual-property" : `/intellectual-property#${tabId}`);
	};

	return (
		<div className="ip-page">
			{/* Dynamic hero */}
			<section
				className="ip-hero"
				style={{ backgroundImage: `url("${activePage.heroImage}")` }}
				aria-labelledby="ip-hero-title"
			>
				<div className="ip-hero-shade" />
				<div className="ip-hero-content" key={activeTab}>
					<span className="ip-eyebrow ip-hero-eyebrow">{activePage.eyebrow}</span>
					<h1 id="ip-hero-title">{activePage.title}</h1>
					<p>{activePage.description}</p>
				</div>
				<span className="ip-hero-index" aria-hidden="true">
					{activePage.indicator}
				</span>
			</section>

			<main className="ip-content" key={activeTab}>
				{/* Introduction and feature */}
				<section className="ip-intro ip-wrap">
					<div>
						<span className="ip-eyebrow">{activePage.sectionLabel}</span>
						<h2>{activePage.heading}</h2>
					</div>
					<p>{activePage.intro}</p>
				</section>

				<section className="ip-feature ip-wrap">
					<div className="ip-feature-image">
						<img src={activePage.featureImage} alt={activePage.featureAlt} />
						<span className="ip-photo-caption">{activePage.sectionLabel}</span>
					</div>
					<div className="ip-feature-copy">
						<span className="ip-eyebrow">{activePage.indicator} / OUR WORK</span>
						<h2>{activePage.featureTitle}</h2>
						{activePage.paragraphs.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
						<div className="ip-capability-list" aria-label="Areas of support">
							{activePage.capabilities.map((capability) => (
								<span key={capability}>{capability}</span>
							))}
						</div>
					</div>
				</section>

				{/* Portfolio dashboard visual */}
				{activePage.dashboard && (
					<section className="ip-dashboard ip-wrap" aria-label="Portfolio management dashboard">
						<div className="ip-dashboard-heading">
							<div>
								<span className="ip-eyebrow">PORTFOLIO OVERVIEW</span>
								<h2>A useful portfolio view starts with the right questions.</h2>
							</div>
							<span className="ip-dashboard-status"><i /> Review framework</span>
						</div>
						<div className="ip-dashboard-grid">
							{activePage.cards.map((card) => (
								<article className="ip-dashboard-card" key={card.title}>
									<span>{card.number}</span>
									<h3>{card.title}</h3>
									<p>{card.text}</p>
									<div className="ip-dashboard-rule"><i /></div>
								</article>
							))}
						</div>
					</section>
				)}

				{/* Topic cards */}
				<section className="ip-offerings ip-wrap">
					<div className="ip-section-heading">
						<div>
							<span className="ip-eyebrow">HOW WE CAN HELP</span>
							<h2>Focused support at every stage.</h2>
						</div>
						<p>
							We tailor the work to your assets, timing and business context. These areas
							can be considered individually or as part of a coordinated IP plan.
						</p>
					</div>
					<div className="ip-card-grid">
						{activePage.cards.map((card) => (
							<article className="ip-topic-card" key={card.number}>
								<div className="ip-topic-image">
									<img src={card.image} alt={card.alt} loading="lazy" />
									<span>{card.number}</span>
								</div>
								<div className="ip-topic-copy">
									<h3>{card.title}</h3>
									<p>{card.text}</p>
									<span className="ip-card-arrow" aria-hidden="true">↗</span>
								</div>
							</article>
						))}
					</div>
				</section>

				{/* Shared experience statistics */}
				<section className="ip-stats ip-wrap" aria-label="Tesla Innovation experience">
					<div className="ip-stats-heading">
						<div>
							<span className="ip-eyebrow">TESLA INNOVATION</span>
							<h2>Perspective built through meaningful work.</h2>
						</div>
					</div>
					<div className="ip-stats-grid">
						{experienceStats.map((stat, index) => (
							<article className="ip-stat-card" key={stat.title}>
								<div className="ip-stat-image">
									<img src={stat.image} alt={stat.alt} loading="lazy" />
									<span>{stat.number}</span>
								</div>
								<div className="ip-stat-copy">
									<span className="ip-stat-index">0{index + 1}</span>
									<h3>{stat.title}</h3>
									<p>{stat.text}</p>
								</div>
							</article>
						))}
					</div>
				</section>

				{/* Tab navigation links */}
				<section className="ip-discover ip-wrap" aria-label="Discover more intellectual property services">
					<div>
						<span className="ip-eyebrow">DISCOVER MORE</span>
						<h2>Explore our IP capabilities.</h2>
					</div>
					<div className="ip-discover-links">
						{tabs.map((tab, index) => (
							<button
								className="ip-discover-link"
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
				.ip-page {
					--ip-ink: #172526;
					--ip-muted: #5e6968;
					--ip-accent: #167d72;
					--ip-accent-light: #8dd4c2;
					--ip-line: #dce4e1;
					--ip-paper: #f7f8f5;
					width: 100%;
					overflow: hidden;
					background: linear-gradient(180deg, #eef9f6 0%, #f8faf9 100%);
					color: var(--ip-ink);
					font-family: "DM Sans", "Segoe UI", sans-serif;
					font-size: 16px;
					line-height: 1.65;
				}
				.ip-page *, .ip-page *::before, .ip-page *::after { box-sizing: border-box; }
				.ip-page img { display: block; width: 100%; object-fit: cover; }
				.ip-page button, .ip-page a { font: inherit; }
				.ip-page button { cursor: pointer; }
				.ip-wrap { width: min(100% - 64px, 1200px); margin-inline: auto; }
				.ip-hero {
					position: relative;
					display: flex;
					align-items: center;
					min-height: 490px;
					overflow: hidden;
					background-position: center;
					background-size: cover;
					color: #ffffff;
				}
				.ip-hero-shade {
					position: absolute;
					inset: 0;
					background: linear-gradient(100deg, rgba(11,30,29,.88), rgba(11,30,29,.52) 58%, rgba(11,30,29,.12));
				}
				.ip-hero-content {
					position: relative;
					z-index: 1;
					width: min(100% - 64px, 1200px);
					margin: 0 auto;
					padding: 95px 0 112px;
					animation: ip-enter .55s ease both;
				}
				.ip-eyebrow {
					display: block;
					margin: 0 0 15px;
					color: var(--ip-accent);
					font-size: 12px;
					font-weight: 800;
					letter-spacing: 1.7px;
					line-height: 1.45;
				}
				.ip-hero-eyebrow { color: var(--ip-accent-light); }
				.ip-hero h1 {
					max-width: 820px;
					margin: 0;
					font-family: Georgia, "Times New Roman", serif;
					font-size: 60px;
					font-weight: 400;
					line-height: 1.08;
				}
				.ip-hero-content p {
					max-width: 680px;
					margin: 24px 0 0;
					color: rgba(255,255,255,.84);
					font-size: 17px;
					line-height: 1.8;
				}
				.ip-hero-index {
					position: absolute;
					right: max(32px, calc((100vw - 1200px) / 2));
					bottom: 30px;
					color: rgba(255,255,255,.76);
					font-size: 12px;
					font-weight: 700;
					letter-spacing: 1px;
				}
				.ip-content { animation: ip-content-enter .45s ease both; }
				.ip-intro, .ip-section-heading {
					display: grid;
					grid-template-columns: 1fr 1fr;
					gap: 76px;
					align-items: end;
				}
				.ip-intro { padding-top: 88px; padding-bottom: 68px; }
				.ip-intro h2, .ip-section-heading h2, .ip-dashboard-heading h2,
				.ip-stats-heading h2, .ip-discover h2, .ip-feature-copy h2 {
					max-width: 570px;
					margin: 0;
					font-family: Georgia, "Times New Roman", serif;
					font-size: 40px;
					font-weight: 400;
					line-height: 1.2;
				}
				.ip-intro > p, .ip-section-heading > p, .ip-feature-copy > p {
					margin: 0 0 16px;
					color: var(--ip-muted);
					font-size: 16px;
					line-height: 1.8;
				}
				.ip-feature {
					display: grid;
					grid-template-columns: 1.05fr .95fr;
					gap: 70px;
					align-items: center;
					padding-bottom: 94px;
				}
				.ip-feature-image { position: relative; min-height: 420px; overflow: visible; }
				.ip-feature-image img { height: 420px; }
				.ip-photo-caption {
					position: absolute;
					right: -18px;
					bottom: 24px;
					padding: 16px 21px;
					background: var(--ip-accent);
					color: #ffffff;
					font-size: 12px;
					font-weight: 700;
					letter-spacing: .7px;
				}
				.ip-feature-copy h2 { margin-bottom: 19px; font-size: 35px; }
				.ip-feature-copy > p:last-of-type { margin-bottom: 0; }
				.ip-capability-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 23px; }
				.ip-capability-list span { padding: 7px 10px; border: 1px solid var(--ip-line); color: #4f5269; font-size: 12px; line-height: 1.35; }
				.ip-offerings { padding-top: 72px; padding-bottom: 84px; border-top: 1px solid var(--ip-line); }
				.ip-section-heading { margin-bottom: 32px; }
				.ip-section-heading > p { max-width: 500px; margin-bottom: 0; }
				.ip-card-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
				.ip-topic-card { min-width: 0; background: var(--ip-paper); transition: transform .35s ease, box-shadow .35s ease; }
				.ip-topic-card:hover { transform: translateY(-5px); box-shadow: 0 18px 38px rgba(23,25,77,.11); }
				.ip-topic-image { position: relative; height: 185px; overflow: hidden; background: #e4e5ed; }
				.ip-topic-image img { height: 100%; transition: transform .55s ease; }
				.ip-topic-card:hover .ip-topic-image img { transform: scale(1.05); }
				.ip-topic-image > span { position: absolute; top: 13px; left: 13px; display: grid; width: 31px; height: 31px; place-items: center; background: #ffffff; color: var(--ip-accent); font-size: 11px; font-weight: 800; }
				.ip-topic-copy { position: relative; min-height: 170px; padding: 19px 18px 38px; }
				.ip-topic-copy h3 { margin: 0 0 8px; color: var(--ip-ink); font-size: 17px; font-weight: 700; line-height: 1.4; }
				.ip-topic-copy p { margin: 0; color: var(--ip-muted); font-size: 13px; line-height: 1.65; }
				.ip-card-arrow { position: absolute; right: 17px; bottom: 13px; color: var(--ip-accent); font-size: 17px; transition: transform .2s ease; }
				.ip-topic-card:hover .ip-card-arrow { transform: translate(3px, -3px); }
				.ip-dashboard { margin-bottom: 80px; padding: 34px; border: 1px solid var(--ip-line); background: #fbfbfd; }
				.ip-dashboard-heading { display: flex; justify-content: space-between; gap: 30px; align-items: end; margin-bottom: 25px; }
				.ip-dashboard-heading h2 { max-width: 640px; font-size: 30px; }
				.ip-dashboard-status { display: inline-flex; align-items: center; gap: 8px; flex: 0 0 auto; color: #55576d; font-size: 12px; font-weight: 600; }
				.ip-dashboard-status i { width: 8px; height: 8px; border-radius: 50%; background: #5b9c7a; }
				.ip-dashboard-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border: 1px solid var(--ip-line); background: #ffffff; }
				.ip-dashboard-card { min-height: 155px; padding: 19px 17px; border-right: 1px solid var(--ip-line); }
				.ip-dashboard-card:last-child { border-right: 0; }
				.ip-dashboard-card > span { color: var(--ip-accent); font-size: 11px; font-weight: 800; }
				.ip-dashboard-card h3 { margin: 12px 0 5px; font-size: 15px; line-height: 1.4; }
				.ip-dashboard-card p { min-height: 44px; margin: 0; color: var(--ip-muted); font-size: 12px; line-height: 1.55; }
				.ip-dashboard-rule { height: 3px; margin-top: 14px; background: #e8e8f0; }
				.ip-dashboard-rule i { display: block; width: 72%; height: 100%; background: var(--ip-accent); opacity: .72; }
				.ip-stats { padding-top: 72px; padding-bottom: 90px; border-top: 1px solid var(--ip-line); }
				.ip-stats-heading { margin-bottom: 28px; }
				.ip-stats-heading .ip-eyebrow { margin-bottom: 10px; }
				.ip-stats-heading h2 { max-width: 600px; font-size: 32px; }
				.ip-stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
				.ip-stat-card { min-width: 0; background: var(--ip-paper); }
				.ip-stat-image { position: relative; height: 190px; overflow: hidden; background: #e1e1ea; }
				.ip-stat-image::after { position: absolute; inset: 30% 0 0; background: linear-gradient(transparent, rgba(5,8,48,.7)); content: ""; }
				.ip-stat-image img { height: 100%; transition: transform .55s ease; }
				.ip-stat-card:hover .ip-stat-image img { transform: scale(1.05); }
				.ip-stat-image > span { position: absolute; z-index: 1; bottom: 13px; left: 17px; color: #ffffff; font-family: Georgia, "Times New Roman", serif; font-size: 38px; line-height: 1; }
				.ip-stat-copy { position: relative; min-height: 147px; padding: 20px 18px 22px; }
				.ip-stat-index { position: absolute; top: 21px; right: 17px; color: #858598; font-size: 11px; font-weight: 700; }
				.ip-stat-copy h3 { max-width: 190px; margin: 0 18px 8px 0; color: var(--ip-ink); font-size: 16px; line-height: 1.4; }
				.ip-stat-copy p { margin: 0; color: var(--ip-muted); font-size: 13px; line-height: 1.6; }
				.ip-discover { display: grid; grid-template-columns: .8fr 1.2fr; gap: 64px; padding-top: 76px; padding-bottom: 96px; border-top: 1px solid var(--ip-line); }
				.ip-discover h2 { max-width: 420px; font-size: 34px; }
				.ip-discover-links { border-top: 1px solid var(--ip-line); }
				.ip-discover-link { display: grid; grid-template-columns: 46px 1fr 24px; gap: 12px; align-items: center; width: 100%; padding: 14px 0; border: 0; border-bottom: 1px solid var(--ip-line); background: transparent; color: var(--ip-ink); text-align: left; }
				.ip-discover-link > span:first-child { color: var(--ip-accent); font-size: 11px; font-weight: 800; }
				.ip-discover-link strong { font-size: 15px; font-weight: 600; }
				.ip-discover-link > span:last-child { justify-self: end; color: var(--ip-accent); transition: transform .2s ease; }
				.ip-discover-link:hover > span:last-child { transform: translate(3px, -3px); }
				.ip-discover-link[aria-current="page"] strong { color: var(--ip-accent); }
				@keyframes ip-enter { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
				@keyframes ip-content-enter { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
				@media (max-width: 1100px) {
					.ip-intro, .ip-section-heading { gap: 42px; }
					.ip-feature { gap: 46px; }
					.ip-card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
					.ip-topic-image { height: 220px; }
					.ip-dashboard-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
					.ip-dashboard-card:nth-child(2) { border-right: 0; }
					.ip-dashboard-card:nth-child(-n+2) { border-bottom: 1px solid var(--ip-line); }
					.ip-stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
					.ip-stat-image { height: 220px; }
				}
				@media (max-width: 640px) {
					.ip-page { font-size: 16px; }
					.ip-wrap { width: calc(100% - 40px); }
					.ip-hero { min-height: 430px; }
					.ip-hero-content { width: calc(100% - 40px); padding: 70px 0 88px; }
					.ip-hero h1 { font-size: 42px; }
					.ip-hero-content p { margin-top: 20px; font-size: 15px; }
					.ip-hero-index { right: 20px; bottom: 21px; }
					.ip-intro, .ip-section-heading, .ip-feature, .ip-discover { grid-template-columns: 1fr; gap: 25px; }
					.ip-intro { padding-top: 62px; padding-bottom: 52px; }
					.ip-intro h2, .ip-section-heading h2, .ip-feature-copy h2 { font-size: 32px; }
					.ip-feature { padding-bottom: 64px; }
					.ip-feature-image, .ip-feature-image img { min-height: 290px; height: 290px; }
					.ip-photo-caption { right: 10px; bottom: 14px; }
					.ip-offerings { padding-top: 58px; padding-bottom: 66px; }
					.ip-section-heading { margin-bottom: 25px; }
					.ip-card-grid { grid-template-columns: 1fr; gap: 17px; }
					.ip-topic-image { height: 215px; }
					.ip-topic-copy { min-height: auto; padding-bottom: 42px; }
					.ip-dashboard { width: calc(100% - 40px); margin-bottom: 60px; padding: 23px 16px; }
					.ip-dashboard-heading { display: block; }
					.ip-dashboard-heading h2 { font-size: 27px; }
					.ip-dashboard-status { margin-top: 15px; }
					.ip-dashboard-grid { grid-template-columns: 1fr 1fr; }
					.ip-dashboard-card { min-height: 160px; padding: 15px 12px; }
					.ip-dashboard-card:nth-child(2) { border-right: 0; }
					.ip-dashboard-card:nth-child(3) { border-bottom: 0; border-right: 1px solid var(--ip-line); }
					.ip-dashboard-card:nth-child(4) { border-bottom: 0; }
					.ip-stats { padding-top: 58px; padding-bottom: 66px; }
					.ip-stats-heading h2, .ip-discover h2 { font-size: 29px; }
					.ip-stats-grid { grid-template-columns: 1fr; gap: 14px; }
					.ip-stat-image { height: 210px; }
					.ip-stat-copy { min-height: 130px; }
					.ip-discover { gap: 27px; padding-top: 60px; padding-bottom: 70px; }
				}
				@media (prefers-reduced-motion: reduce) {
					.ip-page *, .ip-page *::before, .ip-page *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
				}
			`}</style>
		</div>
	);
}

export default IntellectualProperty;
