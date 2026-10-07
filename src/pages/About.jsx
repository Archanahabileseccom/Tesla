import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
	{ id: "about", label: "About" },
	{ id: "approach", label: "Our Approach" },
	{ id: "industries", label: "Industries" },
	{ id: "values", label: "Values" },
	{ id: "careers", label: "Careers" },
];

const stats = [
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
		alt: "World map representing international markets",
	},
];

const industries = [
	{
		title: "Technology",
		text: "Support for software, digital products and technology-led businesses protecting and commercializing new ideas.",
		image:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
	},
	{
		title: "Healthcare",
		text: "Guidance for organizations working at the intersection of healthcare, research and emerging technologies.",
		image:
			"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
	},
	{
		title: "Manufacturing",
		text: "Practical counsel on products, processes and intellectual property in evolving industrial markets.",
		image:
			"https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=85",
	},
	{
		title: "Finance and emerging business",
		text: "Business-minded support for growing companies and organizations operating in regulated environments.",
		image:
			"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
	},
];

const approachSteps = [
	{
		number: "01",
		title: "Understand",
		text: "We listen first, clarifying your objectives, constraints and the decision that needs to be made.",
	},
	{
		number: "02",
		title: "Analyze",
		text: "We assess the commercial, regulatory and intellectual property context around the challenge.",
	},
	{
		number: "03",
		title: "Strategize",
		text: "We set out practical options and a focused course of action aligned with your priorities.",
	},
	{
		number: "04",
		title: "Execute",
		text: "We help move from a clear decision to coordinated next steps and meaningful progress.",
	},
];

const values = [
	{
		number: "01",
		title: "Integrity",
		text: "We build trust through transparent communication and responsible professional relationships.",
	},
	{
		number: "02",
		title: "Innovation",
		text: "We stay open to new ideas and find practical ways through complex challenges.",
	},
	{
		number: "03",
		title: "Collaboration",
		text: "We work closely with clients and partners, bringing different perspectives to the table.",
	},
	{
		number: "04",
		title: "Responsibility",
		text: "We take ownership of the quality, care and impact of the work entrusted to us.",
	},
];

const heroContent = {
	about: {
		title: "Protecting ideas. Enabling innovation.",
		description:
			"Tesla Innovation helps organizations protect ideas, navigate regulation and make important business decisions with clarity.",
		image:
			"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=90",
	},
	approach: {
		title: "A practical approach to complex challenges.",
		description:
			"We combine careful analysis with clear, business-minded advice to help turn difficult questions into confident next steps.",
		image:
			"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=90",
	},
	industries: {
		title: "Knowledge across industries.",
		description:
			"We work with organizations where technology, intellectual property and business decisions intersect.",
		image:
			"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90",
	},
	values: {
		title: "Principles that guide our work.",
		description:
			"Integrity, curiosity and collaboration shape how we work with clients, colleagues and partners.",
		image:
			"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=90",
	},
	careers: {
		title: "Build your future with us.",
		description:
			"Bring your curiosity to a team focused on innovation, thoughtful problem-solving and meaningful work.",
		image:
			"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=90",
	},
};

function About() {
	const [activeTab, setActiveTab] = useState("approach");
	const location = useLocation();
	const navigate = useNavigate();
	const hero = heroContent[activeTab];

	useEffect(() => {
		const hash = location.hash.slice(1);
		const nextTab = tabs.some((tab) => tab.id === hash) ? hash : "approach";
		setActiveTab(nextTab);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [location.hash, location.pathname]);

	const handleTabChange = (tabId) => {
		setActiveTab(tabId);
		navigate(tabId === "about" || tabId === "approach" ? "/about" : `/about#${tabId}`);
	};

	return (
		<div className="about-page">
			<section
				className="about-hero"
				style={{ backgroundImage: `url("${hero.image}")` }}
				aria-labelledby="about-hero-title"
			>
				<div className="hero-shade" />
				<div className="hero-content" key={activeTab}>
					<span className="eyebrow hero-eyebrow">TESLA INNOVATION</span>
					<h1 id="about-hero-title">{hero.title}</h1>
					<p>{hero.description}</p>
				</div>
				<span className="hero-index" aria-hidden="true">
					01 — 05
				</span>
			</section>

			<main className="about-content">
				{activeTab === "about" && (
					<>
						<section className="intro-section section-wrap">
							<div>
								<span className="eyebrow">ABOUT US</span>
								<h2>Sound guidance for ideas with a future.</h2>
							</div>
							<div className="intro-copy">
								<p>
									Tesla Innovation Private Limited helps organizations protect
									ideas, navigate regulation and execute important business
									decisions.
								</p>
								<p>
									We bring professional knowledge, practical experience and
									thoughtful analysis to intellectual property, corporate and
									innovation-led business challenges.
								</p>
							</div>
						</section>

						<section className="feature-section section-wrap">
							<div className="feature-photo">
								<img
									src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85"
									alt="A team working together around a table"
								/>
								<span className="photo-caption">Ideas into action</span>
							</div>
							<div className="feature-copy">
								<span className="eyebrow">01 / WHO WE ARE</span>
								<h2>Practical knowledge for important decisions.</h2>
								<p>
									We focus on clear, business-oriented guidance that helps
									organizations understand their options and move forward with
									purpose.
								</p>
								<p>
									Our work connects intellectual property, regulatory
									considerations and corporate priorities to the realities of
									building a business.
								</p>
								<button
									className="inline-action"
									type="button"
									onClick={() => handleTabChange("approach")}
								>
									Explore our approach <span aria-hidden="true">→</span>
								</button>
							</div>
						</section>

						<section className="stats-section section-wrap" aria-label="Our experience">
							<div className="stats-heading">
								<span className="eyebrow">OUR EXPERIENCE</span>
								<h2>Perspective built through meaningful work.</h2>
							</div>
							<div className="stats-grid">
								{stats.map((stat, index) => (
									<article className="stat-card" key={stat.title}>
										<div className="stat-image">
											<img src={stat.image} alt={stat.alt} loading="lazy" />
											<span className="stat-count">{stat.number}</span>
										</div>
										<div className="stat-copy">
											<span className="stat-index">0{index + 1}</span>
											<h3>{stat.title}</h3>
											<p>{stat.text}</p>
										</div>
									</article>
								))}
							</div>
						</section>

						<section className="next-section section-wrap" aria-label="Discover more">
							<div>
								<span className="eyebrow">DISCOVER MORE</span>
								<h2>How we work, and what guides us.</h2>
							</div>
							<div className="next-links">
								{tabs.slice(1).map((tab, index) => (
									<button
										className="next-link"
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
					</>
				)}

				{activeTab === "approach" && (
					<section className="section-wrap content-panel">
						<div className="section-heading">
							<div>
								<span className="eyebrow">OUR APPROACH</span>
								<h2>Clear thinking, from first question to next step.</h2>
							</div>
							<p>
								Each organization is different. We start by understanding the
								context, then shape a focused response around your goals.
							</p>
						</div>
						<div className="approach-list">
							{approachSteps.map((step) => (
								<article className="approach-step" key={step.number}>
									<span className="approach-number">{step.number}</span>
									<h3>{step.title}</h3>
									<p>{step.text}</p>
									<span className="step-arrow" aria-hidden="true">↗</span>
								</article>
							))}
						</div>
					</section>
				)}

				{activeTab === "industries" && (
					<section className="section-wrap content-panel">
						<div className="section-heading">
							<div>
								<span className="eyebrow">INDUSTRIES</span>
								<h2>Insight shaped around your world.</h2>
							</div>
							<p>
								Sector knowledge helps connect legal and strategic decisions to
								the pace, pressures and opportunities of your market.
							</p>
						</div>
						<div className="industry-grid">
							{industries.map((industry, index) => (
								<article className="industry-card" key={industry.title}>
									<div className="industry-photo">
										<img src={industry.image} alt="" loading="lazy" />
										<span>0{index + 1}</span>
									</div>
									<div className="industry-copy">
										<h3>{industry.title}</h3>
										<p>{industry.text}</p>
									</div>
								</article>
							))}
						</div>
					</section>
				)}

				{activeTab === "values" && (
					<section className="section-wrap content-panel">
						<div className="section-heading">
							<div>
								<span className="eyebrow">OUR VALUES</span>
								<h2>Principles that show up in the work.</h2>
							</div>
							<p>
								Strong working relationships are built through trust, thoughtful
								collaboration and consistent delivery.
							</p>
						</div>
						<div className="values-layout">
							<div className="values-photo">
								<img
									src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85"
									alt="Colleagues sharing ideas in a collaborative setting"
									loading="lazy"
								/>
							</div>
							<div className="values-list">
								{values.map((value) => (
									<article className="value-row" key={value.number}>
										<span>{value.number}</span>
										<div>
											<h3>{value.title}</h3>
											<p>{value.text}</p>
										</div>
									</article>
								))}
							</div>
						</div>
					</section>
				)}

				{activeTab === "careers" && (
					<section className="section-wrap content-panel">
						<div className="section-heading">
							<div>
								<span className="eyebrow">CAREERS</span>
								<h2>Curiosity belongs here.</h2>
							</div>
							<p>
								We welcome people who are motivated to learn, think carefully
								and contribute to work that helps organizations move forward.
							</p>
						</div>
						<div className="careers-feature">
							<img
								src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=85"
								alt="A team collaborating in a bright workspace"
								loading="lazy"
							/>
							<div className="careers-overlay">
								<span className="eyebrow">JOIN TESLA INNOVATION</span>
								<h3>Bring your perspective. Build what comes next.</h3>
								<a className="light-action" href="mailto:gsnnaren@gmail.com">
									Contact our team <span aria-hidden="true">↗</span>
								</a>
							</div>
						</div>
						<div className="career-pillars">
							<article><span>01</span><h3>Learn</h3><p>Build practical knowledge alongside experienced professionals.</p></article>
							<article><span>02</span><h3>Collaborate</h3><p>Work with thoughtful people across disciplines and industries.</p></article>
							<article><span>03</span><h3>Grow</h3><p>Take on meaningful work and keep developing your capabilities.</p></article>
						</div>
					</section>
				)}
			</main>

			<style>{`
				.about-page {
					--ink: #172526;
					--muted: #5e6968;
					--accent: #167d72;
					--accent-bright: #8dd4c2;
					--line: #dce4e1;
					--paper: #f7f8f5;
					--page-bg: #edf7f5;
					color: var(--ink);
					background: linear-gradient(180deg, #eef9f6 0%, #f8faf9 100%);
					font-family: "DM Sans", "Segoe UI", sans-serif;
					font-size: 16px;
					line-height: 1.65;
				}

				.about-page *, .about-page *::before, .about-page *::after { box-sizing: border-box; }
				.about-page img { display: block; width: 100%; object-fit: cover; }
				.about-page button, .about-page a { font: inherit; }
				.about-page button { cursor: pointer; }
				.about-hero {
					position: relative;
					width: 100%;
					height: calc(100vh - 83px);
					height: calc(100svh - 83px);
					display: flex;
					align-items: center;
					overflow: hidden;
					background-position: center center;
					background-size: cover;
					background-repeat: no-repeat;
					color: white;
				}
				.hero-shade {
					position: absolute;
					inset: 0;
					background: linear-gradient(90deg, rgba(11,30,29,.88), rgba(11,30,29,.52) 58%, rgba(11,30,29,.12));
				}
				.hero-content {
					position: relative;
					z-index: 1;
					width: min(100% - 64px, 1180px);
					margin: 0 auto;
					padding: 96px 0 112px;
					animation: about-enter .5s ease both;
				}
				.eyebrow {
					display: block;
					margin-bottom: 16px;
					color: var(--accent);
					font-size: 12px;
					font-weight: 700;
					letter-spacing: 1.5px;
					line-height: 1.4;
				}
				.hero-eyebrow { color: var(--accent-bright); }
				.hero-content h1 {
					max-width: 780px;
					margin: 0;
					font-family: Georgia, "Times New Roman", serif;
					font-size: 60px;
					font-weight: 400;
					line-height: 1.08;
				}
				.hero-content p {
					max-width: 650px;
					margin: 24px 0 0;
					color: rgba(255,255,255,.86);
					font-size: 17px;
					line-height: 1.75;
				}
				.hero-index {
					position: absolute;
					right: max(32px, calc((100vw - 1180px) / 2));
					bottom: 32px;
					color: rgba(255,255,255,.75);
					font-size: 12px;
					font-weight: 600;
					letter-spacing: 1px;
				}
				.section-wrap { width: min(100% - 64px, 1180px); margin: 0 auto; }
				.intro-section, .feature-section, .stats-section, .content-panel, .next-section { background: rgba(255,255,255,0.5); }
				.intro-section, .section-heading {
					display: grid;
					grid-template-columns: 1fr 1fr;
					gap: 72px;
					align-items: end;
				}
				.intro-section { padding-top: 96px; padding-bottom: 76px; }
				.intro-section h2, .stats-heading h2, .next-section h2,
				.section-heading h2, .feature-copy h2 {
					max-width: 520px;
					margin: 0;
					font-family: Georgia, "Times New Roman", serif;
					font-size: 40px;
					font-weight: 400;
					line-height: 1.2;
				}
				.intro-copy p, .section-heading > p, .feature-copy p {
					margin: 0 0 16px;
					color: var(--muted);
					font-size: 16px;
					line-height: 1.8;
				}
				.intro-copy p:last-child, .feature-copy p:last-of-type { margin-bottom: 0; }
				.feature-section {
					display: grid;
					grid-template-columns: 1.08fr .92fr;
					gap: 76px;
					align-items: center;
					padding-bottom: 100px;
				}
				.feature-photo { position: relative; min-height: 430px; }
				.feature-photo img { height: 430px; }
				.photo-caption {
					position: absolute;
					right: -18px;
					bottom: 24px;
					padding: 17px 23px;
					background: var(--accent);
					color: white;
					font-size: 14px;
					font-weight: 600;
				}
				.feature-copy h2 { margin-bottom: 22px; font-size: 36px; }
				.feature-copy .eyebrow { margin-bottom: 20px; }
				.inline-action, .light-action {
					display: inline-flex;
					align-items: center;
					gap: 14px;
					margin-top: 26px;
					border: 0;
					padding: 0;
					background: transparent;
					color: var(--accent);
					font-size: 14px;
					font-weight: 700;
					text-decoration: none;
				}
				.inline-action span, .light-action span { transition: transform .2s ease; }
				.inline-action:hover span, .light-action:hover span { transform: translateX(4px); }
				.stats-section {
					padding-top: 78px;
					padding-bottom: 94px;
					border-top: 1px solid var(--line);
				}
				.stats-heading { display: flex; justify-content: space-between; gap: 32px; align-items: end; margin-bottom: 30px; }
				.stats-heading .eyebrow { margin-bottom: 10px; }
				.stats-heading h2 { max-width: 560px; font-size: 32px; }
				.stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
				.stat-card { min-width: 0; background: var(--paper); }
				.stat-image { position: relative; height: 190px; overflow: hidden; background: #d7e0dc; }
				.stat-image img { height: 100%; transition: transform .5s ease; }
				.stat-card:hover .stat-image img { transform: scale(1.04); }
				.stat-image::after { position: absolute; inset: 30% 0 0; background: linear-gradient(transparent, rgba(10,26,26,.64)); content: ""; }
				.stat-count { position: absolute; z-index: 1; bottom: 13px; left: 17px; color: white; font-family: Georgia, "Times New Roman", serif; font-size: 38px; line-height: 1; }
				.stat-copy { position: relative; min-height: 146px; padding: 20px 18px 22px; }
				.stat-index { position: absolute; top: 22px; right: 18px; color: #8a9692; font-size: 11px; font-weight: 700; }
				.stat-copy h3 { max-width: 190px; margin: 0 18px 8px 0; font-size: 16px; font-weight: 700; line-height: 1.4; }
				.stat-copy p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.6; }
				.next-section { display: grid; grid-template-columns: .8fr 1.2fr; gap: 64px; padding-top: 78px; padding-bottom: 100px; border-top: 1px solid var(--line); }
				.next-section h2 { font-size: 34px; }
				.next-links { border-top: 1px solid var(--line); }
				.next-link { display: grid; grid-template-columns: 48px 1fr 24px; gap: 12px; align-items: center; width: 100%; padding: 17px 0; border: 0; border-bottom: 1px solid var(--line); background: transparent; color: var(--ink); text-align: left; }
				.next-link > span:first-child { color: var(--accent); font-size: 12px; font-weight: 700; }
				.next-link strong { font-size: 16px; font-weight: 600; }
				.next-link > span:last-child { justify-self: end; color: var(--accent); transition: transform .2s ease; }
				.next-link:hover > span:last-child { transform: translate(3px, -3px); }
				.content-panel { padding-top: 88px; padding-bottom: 100px; }
				.section-heading { margin-bottom: 54px; }
				.section-heading h2 { font-size: 40px; }
				.section-heading > p { max-width: 490px; margin: 0; }
				.approach-list { border-top: 1px solid var(--line); }
				.approach-step { display: grid; grid-template-columns: 70px minmax(150px, .7fr) 1.3fr 24px; gap: 22px; align-items: center; padding: 27px 0; border-bottom: 1px solid var(--line); }
				.approach-number, .industry-photo > span { color: var(--accent); font-size: 13px; font-weight: 700; }
				.approach-step h3, .industry-copy h3, .value-row h3, .career-pillars h3 { margin: 0; font-size: 20px; font-weight: 600; }
				.approach-step p, .industry-copy p, .value-row p, .career-pillars p { margin: 0; color: var(--muted); font-size: 15px; line-height: 1.7; }
				.step-arrow { justify-self: end; color: var(--accent); font-size: 20px; }
				.industry-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 30px 22px; }
				.industry-card { min-width: 0; }
				.industry-photo { position: relative; height: 260px; overflow: hidden; background: var(--paper); }
				.industry-photo img { height: 100%; transition: transform .5s ease; }
				.industry-card:hover .industry-photo img { transform: scale(1.035); }
				.industry-photo > span { position: absolute; top: 15px; left: 15px; padding: 7px 10px; background: white; }
				.industry-copy { padding-top: 20px; }
				.industry-copy h3 { margin-bottom: 7px; }
				.values-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: stretch; }
				.values-photo { min-height: 420px; }
				.values-photo img { height: 100%; min-height: 420px; }
				.values-list { border-top: 1px solid var(--line); }
				.value-row { display: grid; grid-template-columns: 42px 1fr; gap: 14px; padding: 19px 0; border-bottom: 1px solid var(--line); }
				.value-row > span, .career-pillars article > span { color: var(--accent); font-size: 12px; font-weight: 700; }
				.value-row h3 { margin-bottom: 5px; }
				.careers-feature { position: relative; min-height: 420px; overflow: hidden; background: #243b38; }
				.careers-feature > img { position: absolute; inset: 0; height: 100%; }
				.careers-feature::after { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(8,25,24,.82), rgba(8,25,24,.28)); content: ""; }
				.careers-overlay { position: relative; z-index: 1; max-width: 620px; padding: 66px 58px; color: white; }
				.careers-overlay .eyebrow { color: var(--accent-bright); }
				.careers-overlay h3 { margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: 36px; font-weight: 400; line-height: 1.2; }
				.light-action { color: white; }
				.career-pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; padding-top: 35px; }
				.career-pillars h3 { margin: 17px 0 8px; }
				@keyframes about-enter { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
				@media (max-width: 900px) {
					.hero-content h1 { max-width: 640px; font-size: 50px; }
					.intro-section, .section-heading { gap: 36px; }
					.feature-section { gap: 42px; }
					.stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
					.stat-image { height: 220px; }
					.approach-step { grid-template-columns: 48px minmax(130px, .7fr) 1.3fr 20px; gap: 14px; }
				}
				@media (max-width: 640px) {
					.about-page { font-size: 16px; }
					.about-hero { height: auto; min-height: 440px; }
					.hero-content, .section-wrap { width: calc(100% - 40px); }
					.hero-content { padding: 70px 0 90px; }
					.hero-content h1 { font-size: 42px; }
					.hero-content p { font-size: 16px; }
					.hero-index { right: 20px; bottom: 22px; }
					.intro-section, .section-heading, .feature-section, .next-section, .values-layout { grid-template-columns: 1fr; gap: 25px; }
					.intro-section { padding-top: 64px; padding-bottom: 52px; }
					.intro-section h2, .section-heading h2, .feature-copy h2 { font-size: 32px; }
					.feature-section { padding-bottom: 65px; }
					.feature-photo, .feature-photo img { min-height: 300px; height: 300px; }
					.photo-caption { right: 10px; bottom: 14px; }
					.stats-section { padding-top: 58px; padding-bottom: 65px; }
					.stats-heading { display: block; margin-bottom: 22px; }
					.stats-heading h2, .next-section h2 { font-size: 29px; }
					.stats-grid { gap: 12px; }
					.stat-image { height: 145px; }
					.stat-count { left: 12px; bottom: 11px; font-size: 32px; }
					.stat-copy { min-height: 150px; padding: 15px 12px; }
					.stat-index { top: 16px; right: 12px; }
					.stat-copy h3 { margin-right: 0; font-size: 15px; }
					.stat-copy p { font-size: 12px; }
					.next-section, .content-panel { padding-top: 60px; padding-bottom: 68px; }
					.next-section { gap: 28px; }
					.approach-step { grid-template-columns: 36px 1fr 20px; gap: 10px; align-items: start; padding: 20px 0; }
					.approach-step h3 { font-size: 18px; }
					.approach-step p { grid-column: 2 / 3; font-size: 14px; }
					.step-arrow { grid-column: 3; grid-row: 1; }
					.industry-grid { grid-template-columns: 1fr; gap: 25px; }
					.industry-photo { height: 220px; }
					.values-photo, .values-photo img { min-height: 280px; height: 280px; }
					.careers-feature { min-height: 400px; }
					.careers-overlay { padding: 46px 25px; }
					.careers-overlay h3 { font-size: 30px; }
					.career-pillars { grid-template-columns: 1fr; gap: 20px; }
					.career-pillars article { padding-bottom: 18px; border-bottom: 1px solid var(--line); }
					.career-pillars h3 { margin-top: 9px; }
				}
				@media (prefers-reduced-motion: reduce) {
					.about-page *, .about-page *::before, .about-page *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
				}
			`}</style>
		</div>
	);
}

export default About;
