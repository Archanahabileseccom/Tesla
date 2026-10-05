import React, { useState } from "react";
import { Link } from "react-router-dom";

const jobs = [
	{
		id: "ip-associate",
		title: "IP Associate",
		department: "Intellectual Property",
		location: "Chennai",
		type: "Full Time",
		experience: "0–3 Years",
		description:
			"Work with our intellectual property team on patent, trademark, and technology-related matters.",
		responsibilities: [
			"Assist with intellectual property research.",
			"Support patent and trademark matters.",
			"Prepare legal and research documentation.",
			"Work with senior professionals on client assignments.",
		],
		requirements: [
			"Strong research and analytical skills.",
			"Good written and verbal communication.",
			"Interest in intellectual property and technology.",
			"Ability to work effectively in a collaborative environment.",
		],
	},
	{
		id: "technology-analyst",
		title: "Technology Analyst",
		department: "Technology & Innovation",
		location: "Bengaluru",
		type: "Full Time",
		experience: "1–4 Years",
		description:
			"Support technology-focused projects and analyze emerging technologies, innovation, and intellectual property.",
		responsibilities: [
			"Research emerging technologies.",
			"Analyze technology and innovation trends.",
			"Support technology-focused projects.",
			"Prepare reports and analytical materials.",
		],
		requirements: [
			"Strong analytical thinking.",
			"Interest in technology and innovation.",
			"Good communication skills.",
			"Ability to analyze complex information.",
		],
	},
	{
		id: "legal-research-associate",
		title: "Legal Research Associate",
		department: "Legal Research",
		location: "Mumbai",
		type: "Full Time",
		experience: "0–2 Years",
		description:
			"Conduct legal research and support our teams with research, documentation, and analysis.",
		responsibilities: [
			"Conduct legal and regulatory research.",
			"Analyze relevant laws and regulations.",
			"Prepare research summaries.",
			"Assist with internal knowledge resources.",
		],
		requirements: [
			"Strong research skills.",
			"Attention to detail.",
			"Excellent written communication.",
			"Ability to work independently and collaboratively.",
		],
	},
	{
		id: "corporate-advisory-associate",
		title: "Corporate Advisory Associate",
		department: "Corporate",
		location: "Delhi",
		type: "Full Time",
		experience: "1–3 Years",
		description:
			"Support corporate advisory projects involving governance, compliance, transactions, and business structuring.",
		responsibilities: [
			"Support corporate advisory assignments.",
			"Research corporate and regulatory requirements.",
			"Assist with transaction documentation.",
			"Coordinate with internal teams.",
		],
		requirements: [
			"Strong analytical skills.",
			"Knowledge of corporate law and business concepts.",
			"Good documentation skills.",
			"Strong communication and teamwork.",
		],
	},
];

const cultureValues = [
	{
		number: "01",
		title: "Innovation",
		text: "Work on meaningful projects at the intersection of technology, intellectual property, law, and business innovation.",
	},
	{
		number: "02",
		title: "Collaboration",
		text: "Work closely with experienced professionals across multidisciplinary teams.",
	},
	{
		number: "03",
		title: "Growth",
		text: "Develop your expertise through challenging assignments, continuous learning, and practical experience.",
	},
	{
		number: "04",
		title: "Impact",
		text: "Contribute to strategic projects that help organizations protect, develop, and commercialize valuable ideas.",
	},
];

const highlights = ["Collaborative Teams", "Continuous Learning", "Meaningful Work"];

const initialFormData = {
	name: "",
	email: "",
	phone: "",
	position: "",
	experience: "",
	message: "",
	resume: null,
};

function Careers() {
	const [selectedJob, setSelectedJob] = useState(null);
	const [formData, setFormData] = useState(initialFormData);

	const scrollToSection = (sectionId) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
	};

	const handleJobClick = (job) => {
		setSelectedJob(job);
		setFormData((previous) => ({
			...previous,
			position: job.title,
		}));

		window.setTimeout(() => {
			document.getElementById("job-details")?.scrollIntoView({
				behavior: "smooth",
			});
		}, 100);
	};

	const handleInputChange = (event) => {
		const { name, value, files } = event.target;

		setFormData((previous) => ({
			...previous,
			[name]: files ? files[0] : value,
		}));
	};

	const handleApplyClick = () => {
		scrollToSection("apply");
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		window.alert("Application submitted successfully!");
		setFormData(initialFormData);

		const resumeInput = document.getElementById("resume");
		if (resumeInput) {
			resumeInput.value = "";
		}
	};

	return (
		<div className="careers-page">
			{/* Careers hero */}
			<section className="careers-hero" aria-labelledby="careers-title">
				<div className="careers-hero-inner">
					<div className="careers-hero-copy">
						<span className="careers-eyebrow">CAREERS</span>
						<h1 id="careers-title">Build Your Future With Us</h1>
						<p>
							Join a team working at the intersection of intellectual property,
							technology, legal strategy, innovation, and business.
						</p>
						<div className="careers-hero-actions">
							<button type="button" className="careers-button careers-button-red" onClick={() => scrollToSection("open-positions")}>
								Explore Opportunities <span aria-hidden="true">↓</span>
							</button>
							<button type="button" className="careers-button careers-button-outline" onClick={() => scrollToSection("apply")}>
								Join Our Team <span aria-hidden="true">↗</span>
							</button>
						</div>
					</div>
					<span className="careers-hero-index" aria-hidden="true">PEOPLE / IDEAS / IMPACT</span>
				</div>
			</section>

			<main>
				{/* Introduction */}
				<section className="careers-intro careers-wrap">
					<div className="careers-intro-copy">
						<span className="careers-eyebrow careers-eyebrow-dark">OUR COMPANY</span>
						<h2>Careers at Tesla Innovation</h2>
						<p>
							We bring together intellectual property, technology, innovation,
							legal research, corporate advisory, and strategic thinking to help
							organizations navigate important decisions.
						</p>
						<p>
							Our team values curiosity, sound judgment, clear communication, and
							careful collaboration. We welcome people who want to build practical
							expertise while contributing to thoughtful, high-quality work.
						</p>
					</div>
					<div className="careers-intro-visual" role="img" aria-label="Professionals collaborating in a modern workplace">
						<div className="careers-intro-visual-caption">
							<span>TESLA INNOVATION</span>
							<strong>Ideas move forward together.</strong>
						</div>
					</div>
				</section>

				{/* Culture */}
				<section className="careers-culture">
					<div className="careers-wrap">
						<div className="careers-section-heading">
							<div>
								<span className="careers-eyebrow careers-eyebrow-dark">WHAT MATTERS HERE</span>
								<h2>Why Work With Us</h2>
							</div>
							<p>
								A focused environment for people who enjoy solving complex
								problems and learning from different disciplines.
							</p>
						</div>
						<div className="careers-values-grid">
							{cultureValues.map((value) => (
								<article className="careers-value-card" key={value.number}>
									<div className="careers-value-top">
										<span>{value.number}</span>
										<i aria-hidden="true" />
									</div>
									<h3>{value.title}</h3>
									<p>{value.text}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* Employee experience */}
				<section className="careers-experience careers-wrap">
					<div className="careers-team-visual" role="img" aria-label="A team sharing ideas in a collaborative workspace">
						<span>CURIOUS MINDS. PRACTICAL THINKING.</span>
					</div>
					<div className="careers-experience-copy">
						<span className="careers-eyebrow careers-eyebrow-dark">THE EXPERIENCE</span>
						<h2>A Place to Learn, Create and Grow</h2>
						<p>
							We encourage curiosity, ownership, collaboration, and continuous
							development. Our teams work across disciplines to solve complex
							problems and create meaningful outcomes for clients.
						</p>
						<ul className="careers-highlights">
							{highlights.map((highlight, index) => (
								<li key={highlight}>
									<span>0{index + 1}</span>{highlight}
								</li>
							))}
						</ul>
					</div>
				</section>

				{/* Open positions */}
				<section className="careers-positions" id="open-positions">
					<div className="careers-wrap">
						<div className="careers-section-heading">
							<div>
								<span className="careers-eyebrow careers-eyebrow-dark">OPPORTUNITIES</span>
								<h2>Open Positions</h2>
							</div>
							<p>
								Explore opportunities across intellectual property, technology,
								legal research, and corporate advisory.
							</p>
						</div>
						<div className="careers-job-grid">
							{jobs.map((job) => (
								<article className={selectedJob?.id === job.id ? "careers-job-card active" : "careers-job-card"} key={job.id}>
									<div className="careers-job-card-top">
										<span className="careers-job-department">{job.department}</span>
										<span className="careers-job-type">{job.type}</span>
									</div>
									<h3>{job.title}</h3>
									<p className="careers-job-description">{job.description}</p>
									<div className="careers-job-meta">
										<span>{job.location}</span>
										<span>{job.experience}</span>
									</div>
									<button className="careers-text-button" type="button" onClick={() => handleJobClick(job)}>
										View Position <span aria-hidden="true">→</span>
									</button>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* Selected position details */}
				<section className="careers-details careers-wrap" id="job-details" aria-live="polite">
					{selectedJob ? (
						<div className="careers-detail-panel" key={selectedJob.id}>
							<div className="careers-detail-heading">
								<div>
									<span className="careers-eyebrow careers-eyebrow-dark">POSITION DETAILS</span>
									<h2>{selectedJob.title}</h2>
								</div>
								<button className="careers-button careers-button-red" type="button" onClick={handleApplyClick}>
									Apply for this Position <span aria-hidden="true">↓</span>
								</button>
							</div>
							<div className="careers-detail-meta">
								<div><span>Position</span><strong>{selectedJob.title}</strong></div>
								<div><span>Department</span><strong>{selectedJob.department}</strong></div>
								<div><span>Location</span><strong>{selectedJob.location}</strong></div>
								<div><span>Experience</span><strong>{selectedJob.experience}</strong></div>
							</div>
							<p className="careers-detail-description">{selectedJob.description}</p>
							<div className="careers-detail-lists">
								<div>
									<h3>Responsibilities</h3>
									<ul>{selectedJob.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
								</div>
								<div>
									<h3>Requirements</h3>
									<ul>{selectedJob.requirements.map((item) => <li key={item}>{item}</li>)}</ul>
								</div>
							</div>
						</div>
					) : (
						<div className="careers-detail-empty">
							<span className="careers-eyebrow careers-eyebrow-dark">POSITION DETAILS</span>
							<p>Select a position above to view the role details.</p>
						</div>
					)}
				</section>

				{/* Application form */}
				<section className="careers-application" id="apply">
					<div className="careers-wrap careers-application-layout">
						<div className="careers-application-intro">
							<span className="careers-eyebrow">YOUR NEXT CHAPTER</span>
							<h2>Start Your Journey With Us</h2>
							<p>
								Interested in joining our team? Submit your details and our team
								will review your application.
							</p>
							<span className="careers-application-note">We welcome thoughtful applications from curious, committed people.</span>
						</div>
						<form className="careers-form" onSubmit={handleSubmit}>
							<div className="careers-form-grid">
								<div className="careers-field">
									<label htmlFor="career-name">Full Name</label>
									<input id="career-name" name="name" type="text" autoComplete="name" value={formData.name} onChange={handleInputChange} required />
								</div>
								<div className="careers-field">
									<label htmlFor="career-email">Email</label>
									<input id="career-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleInputChange} required />
								</div>
								<div className="careers-field">
									<label htmlFor="career-phone">Phone</label>
									<input id="career-phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleInputChange} required />
								</div>
								<div className="careers-field">
									<label htmlFor="career-position">Position</label>
									<select id="career-position" name="position" value={formData.position} onChange={handleInputChange} required>
										<option value="" disabled>Select a position</option>
										{jobs.map((job) => <option key={job.id} value={job.title}>{job.title}</option>)}
									</select>
								</div>
								<div className="careers-field">
									<label htmlFor="career-experience">Experience</label>
									<input id="career-experience" name="experience" type="text" value={formData.experience} onChange={handleInputChange} placeholder="e.g. 2 years" required />
								</div>
								<div className="careers-field careers-field-file">
									<label htmlFor="resume">Resume <span>(optional)</span></label>
									<input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleInputChange} />
								</div>
								<div className="careers-field careers-field-wide">
									<label htmlFor="career-message">Message</label>
									<textarea id="career-message" name="message" rows="4" value={formData.message} onChange={handleInputChange} required />
								</div>
							</div>
							<button className="careers-button careers-button-red careers-submit" type="submit">
								Submit Application <span aria-hidden="true">→</span>
							</button>
						</form>
					</div>
				</section>

				{/* Careers CTA */}
				<section className="careers-cta careers-wrap">
					<div>
						<span className="careers-eyebrow">MAKE YOUR NEXT MOVE</span>
						<h2>Ready to Build What Comes Next?</h2>
						<p>
							Explore opportunities to work with a multidisciplinary team focused
							on innovation, technology, intellectual property, and strategic advisory.
						</p>
					</div>
					<button className="careers-button careers-button-light" type="button" onClick={() => scrollToSection("open-positions")}>
						Explore Opportunities <span aria-hidden="true">↑</span>
					</button>
				</section>

				{/* Contact CTA */}
				<section className="careers-contact">
					<div className="careers-wrap careers-contact-inner">
						<div>
							<span className="careers-eyebrow careers-eyebrow-dark">GET IN TOUCH</span>
							<h2>Have Questions About Careers?</h2>
						</div>
						<div>
							<p>
								If you would like to learn more about opportunities at Tesla
								Innovation Private Limited, get in touch with our team.
							</p>
							<Link className="careers-contact-link" to="/contact">Contact Us <span aria-hidden="true">↗</span></Link>
						</div>
					</div>
				</section>
			</main>

			<style>{`
				.careers-page {
					--career-red: #e31b23;
					--career-navy: #101a2d;
					--career-ink: #171b24;
					--career-muted: #626a75;
					--career-line: #e0e3e8;
					--career-paper: #f6f7f8;
					color: var(--career-ink);
					background: #ffffff;
					font-family: "DM Sans", Arial, Helvetica, sans-serif;
					font-size: 16px;
					line-height: 1.65;
					overflow: hidden;
				}
				.careers-page *, .careers-page *::before, .careers-page *::after { box-sizing: border-box; }
				.careers-page button, .careers-page input, .careers-page select, .careers-page textarea { font: inherit; }
				.careers-page button { cursor: pointer; }
				.careers-wrap { width: min(100% - 48px, 1200px); margin-inline: auto; }
				.careers-hero {
					position: relative;
					min-height: 620px;
					display: flex;
					align-items: center;
					color: #ffffff;
					background-color: #172235;
					background-image: linear-gradient(90deg, rgba(8,14,25,.84), rgba(9,18,32,.54) 58%, rgba(9,18,32,.18)), url("/images/careers/hero.jpg");
					background-position: center;
					background-size: cover;
				}
				.careers-hero-inner { position: relative; width: min(100% - 48px, 1200px); min-height: 620px; margin: 0 auto; display: flex; align-items: center; padding: 80px 0 100px; }
				.careers-hero-copy { max-width: 760px; animation: career-fade-up .65s ease both; }
				.careers-eyebrow { display: block; margin: 0 0 15px; color: #ff7378; font-size: 12px; font-weight: 800; letter-spacing: 1.8px; line-height: 1.45; }
				.careers-eyebrow-dark { color: var(--career-red); }
				.careers-hero h1, .careers-intro h2, .careers-section-heading h2, .careers-experience h2, .careers-detail-heading h2, .careers-application h2, .careers-cta h2, .careers-contact h2 {
					margin: 0;
					font-family: Georgia, "Times New Roman", serif;
					font-weight: 400;
					line-height: 1.12;
				}
				.careers-hero h1 { max-width: 750px; font-size: clamp(48px, 7vw, 78px); }
				.careers-hero-copy > p { max-width: 640px; margin: 23px 0 0; color: rgba(255,255,255,.84); font-size: 17px; line-height: 1.8; }
				.careers-hero-actions { display: flex; flex-wrap: wrap; gap: 13px; margin-top: 31px; }
				.careers-button { min-height: 48px; display: inline-flex; justify-content: center; align-items: center; gap: 16px; border: 1px solid transparent; padding: 12px 19px; font-size: 13px !important; font-weight: 700; text-decoration: none; transition: background .2s ease, color .2s ease, border-color .2s ease, transform .2s ease; }
				.careers-button:hover { transform: translateY(-2px); }
				.careers-button-red { background: var(--career-red); color: #ffffff; }
				.careers-button-red:hover { background: #bd151b; }
				.careers-button-outline { border-color: rgba(255,255,255,.66); background: transparent; color: #ffffff; }
				.careers-button-outline:hover { border-color: #ffffff; background: #ffffff; color: var(--career-navy); }
				.careers-hero-index { position: absolute; right: 0; bottom: 26px; color: rgba(255,255,255,.7); font-size: 10px; font-weight: 700; letter-spacing: 1.5px; }
				.careers-intro { display: grid; grid-template-columns: .9fr 1.1fr; gap: 72px; align-items: center; padding-top: 96px; padding-bottom: 96px; }
				.careers-intro-copy h2, .careers-section-heading h2, .careers-experience h2, .careers-detail-heading h2, .careers-application h2, .careers-cta h2, .careers-contact h2 { font-size: clamp(34px, 4vw, 48px); }
				.careers-intro-copy p, .careers-section-heading > p, .careers-experience-copy > p, .careers-cta p, .careers-contact-inner p { color: var(--career-muted); font-size: 16px; line-height: 1.8; }
				.careers-intro-copy p { margin-top: 18px; }
				.careers-intro-visual { position: relative; min-height: 390px; overflow: hidden; background: #dce2e7 url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85") center / cover no-repeat; }
				.careers-intro-visual::after { position: absolute; inset: 45% 0 0; background: linear-gradient(transparent, rgba(8,15,27,.75)); content: ""; }
				.careers-intro-visual-caption { position: absolute; z-index: 1; right: 22px; bottom: 22px; left: 22px; display: flex; flex-direction: column; gap: 6px; color: #ffffff; }
				.careers-intro-visual-caption span { color: #ff8589; font-size: 10px; font-weight: 800; letter-spacing: 1.5px; }
				.careers-intro-visual-caption strong { font-family: Georgia, "Times New Roman", serif; font-size: 24px; font-weight: 400; }
				.careers-culture { padding: 82px 0 92px; background: var(--career-paper); }
				.careers-section-heading { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: end; margin-bottom: 34px; }
				.careers-section-heading > p { max-width: 500px; margin: 0; }
				.careers-values-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
				.careers-value-card { min-height: 232px; padding: 24px 22px; border: 1px solid var(--career-line); background: #ffffff; transition: transform .25s ease, border-color .25s ease; }
				.careers-value-card:hover { transform: translateY(-4px); border-color: #c4c8cf; }
				.careers-value-top { display: flex; justify-content: space-between; align-items: center; }
				.careers-value-top > span { color: var(--career-red); font-size: 11px; font-weight: 800; }
				.careers-value-top i { width: 27px; height: 2px; background: var(--career-red); }
				.careers-value-card h3 { margin: 35px 0 9px; font-size: 20px; font-weight: 650; }
				.careers-value-card p { margin: 0; color: var(--career-muted); font-size: 14px; line-height: 1.7; }
				.careers-experience { display: grid; grid-template-columns: 1.05fr .95fr; gap: 72px; align-items: center; padding-top: 96px; padding-bottom: 96px; }
				.careers-team-visual { position: relative; display: flex; align-items: end; min-height: 430px; overflow: hidden; padding: 24px; background-color: #263341; background-image: linear-gradient(0deg, rgba(7,13,23,.63), transparent 45%), url("/images/careers/team.jpg"), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85"); background-position: center; background-size: cover; color: #ffffff; }
				.careers-team-visual > span { position: relative; z-index: 1; font-size: 10px; font-weight: 800; letter-spacing: 1.5px; }
				.careers-experience h2 { max-width: 500px; }
				.careers-experience-copy > p { margin-top: 19px; }
				.careers-highlights { display: grid; gap: 0; margin: 27px 0 0; padding: 0; list-style: none; border-top: 1px solid var(--career-line); }
				.careers-highlights li { display: flex; gap: 17px; align-items: center; padding: 13px 0; border-bottom: 1px solid var(--career-line); font-size: 14px; font-weight: 600; }
				.careers-highlights li span { color: var(--career-red); font-size: 10px; font-weight: 800; }
				.careers-positions { padding: 84px 0 90px; background: var(--career-paper); scroll-margin-top: 20px; }
				.careers-job-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 17px; }
				.careers-job-card { padding: 25px; border: 1px solid var(--career-line); background: #ffffff; transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease; }
				.careers-job-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(16,26,45,.07); }
				.careers-job-card.active { border-color: var(--career-red); box-shadow: inset 3px 0 var(--career-red); }
				.careers-job-card-top { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 9px; align-items: center; }
				.careers-job-department { color: var(--career-red); font-size: 11px; font-weight: 800; letter-spacing: .4px; }
				.careers-job-type { padding: 4px 8px; border: 1px solid var(--career-line); color: #5d6570; font-size: 10px; font-weight: 700; }
				.careers-job-card h3 { margin: 16px 0 8px; font-family: Georgia, "Times New Roman", serif; font-size: 25px; font-weight: 400; line-height: 1.25; }
				.careers-job-description { min-height: 54px; margin: 0; color: var(--career-muted); font-size: 14px; line-height: 1.65; }
				.careers-job-meta { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 17px; padding: 12px 0; border-top: 1px solid var(--career-line); color: #545d68; font-size: 12px; }
				.careers-text-button { display: inline-flex; gap: 10px; align-items: center; margin-top: 10px; padding: 0; background: none; color: var(--career-ink); font-size: 13px !important; font-weight: 800; }
				.careers-text-button span { color: var(--career-red); transition: transform .2s ease; }
				.careers-text-button:hover span { transform: translateX(4px); }
				.careers-details { min-height: 260px; padding-top: 66px; padding-bottom: 72px; scroll-margin-top: 20px; }
				.careers-detail-panel { animation: career-fade-up .4s ease both; }
				.careers-detail-heading { display: flex; justify-content: space-between; gap: 30px; align-items: end; padding-bottom: 26px; border-bottom: 1px solid var(--career-line); }
				.careers-detail-meta { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; padding: 23px 0; border-bottom: 1px solid var(--career-line); }
				.careers-detail-meta div { display: flex; flex-direction: column; gap: 5px; }
				.careers-detail-meta span { color: var(--career-muted); font-size: 11px; }
				.careers-detail-meta strong { font-size: 14px; font-weight: 700; }
				.careers-detail-description { margin: 22px 0; color: var(--career-muted); font-size: 15px; }
				.careers-detail-lists { display: grid; grid-template-columns: 1fr 1fr; gap: 45px; }
				.careers-detail-lists h3 { margin: 0 0 12px; font-size: 16px; }
				.careers-detail-lists ul { display: grid; gap: 9px; margin: 0; padding: 0; list-style: none; }
				.careers-detail-lists li { position: relative; padding-left: 17px; color: var(--career-muted); font-size: 14px; line-height: 1.6; }
				.careers-detail-lists li::before { position: absolute; top: .68em; left: 0; width: 6px; height: 2px; background: var(--career-red); content: ""; }
				.careers-detail-empty { padding: 25px 0; border-bottom: 1px solid var(--career-line); }
				.careers-detail-empty p { margin: 0; color: var(--career-muted); font-size: 15px; }
				.careers-application { padding: 86px 0 92px; background: var(--career-navy); color: #ffffff; scroll-margin-top: 20px; }
				.careers-application-layout { display: grid; grid-template-columns: .75fr 1.25fr; gap: 74px; align-items: start; }
				.careers-application .careers-eyebrow { color: #ff777d; }
				.careers-application h2 { max-width: 390px; }
				.careers-application-intro > p { max-width: 390px; margin: 19px 0; color: rgba(255,255,255,.75); font-size: 15px; line-height: 1.8; }
				.careers-application-note { display: block; max-width: 360px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,.22); color: rgba(255,255,255,.57); font-size: 12px; }
				.careers-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px 16px; }
				.careers-field { display: flex; flex-direction: column; gap: 7px; min-width: 0; }
				.careers-field label { color: rgba(255,255,255,.86); font-size: 12px; font-weight: 600; }
				.careers-field label span { color: rgba(255,255,255,.55); font-weight: 400; }
				.careers-field input, .careers-field select, .careers-field textarea { width: 100%; min-height: 45px; border: 1px solid rgba(255,255,255,.24); border-radius: 0; padding: 10px 12px; outline: none; background: rgba(255,255,255,.06); color: #ffffff; font-size: 14px; }
				.careers-field input:focus, .careers-field select:focus, .careers-field textarea:focus { border-color: #ff6c73; box-shadow: 0 0 0 2px rgba(227,27,35,.2); }
				.careers-field input::placeholder, .careers-field textarea::placeholder { color: rgba(255,255,255,.45); }
				.careers-field select option { background: var(--career-navy); color: white; }
				.careers-field input[type="file"] { padding: 7px; color: rgba(255,255,255,.72); font-size: 12px; }
				.careers-field input[type="file"]::file-selector-button { margin-right: 10px; border: 0; padding: 6px 9px; background: #ffffff; color: var(--career-navy); font-size: 11px; font-weight: 700; cursor: pointer; }
				.careers-field textarea { min-height: 112px; resize: vertical; }
				.careers-field-wide { grid-column: 1 / -1; }
				.careers-submit { margin-top: 20px; }
				.careers-cta { display: flex; justify-content: space-between; gap: 35px; align-items: center; margin-top: 84px; margin-bottom: 84px; padding: 38px; background: var(--career-red); color: #ffffff; }
				.careers-cta .careers-eyebrow { color: rgba(255,255,255,.75); }
				.careers-cta h2 { max-width: 650px; font-size: 36px; }
				.careers-cta p { max-width: 680px; margin: 12px 0 0; color: rgba(255,255,255,.84); font-size: 14px; }
				.careers-button-light { flex: 0 0 auto; background: #ffffff; color: var(--career-ink); }
				.careers-button-light:hover { background: var(--career-navy); color: #ffffff; }
				.careers-contact { padding: 58px 0 66px; border-top: 1px solid var(--career-line); }
				.careers-contact-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
				.careers-contact-inner h2 { max-width: 500px; }
				.careers-contact-inner p { margin: 0 0 16px; }
				.careers-contact-link { display: inline-flex; align-items: center; gap: 12px; color: var(--career-red); font-size: 14px; font-weight: 800; text-decoration: none; }
				.careers-contact-link span { transition: transform .2s ease; }
				.careers-contact-link:hover span { transform: translate(3px, -3px); }
				@keyframes career-fade-up { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
				@media (max-width: 1100px) {
					.careers-values-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
					.careers-intro, .careers-experience { gap: 42px; }
					.careers-application-layout { gap: 40px; }
				}
				@media (max-width: 800px) {
					.careers-hero, .careers-hero-inner { min-height: 560px; }
					.careers-intro, .careers-experience { grid-template-columns: 1fr; }
					.careers-intro { padding-top: 70px; padding-bottom: 72px; }
					.careers-intro-visual { min-height: 340px; }
					.careers-section-heading { gap: 28px; }
					.careers-experience { padding-top: 70px; padding-bottom: 72px; }
					.careers-team-visual { min-height: 350px; }
					.careers-job-grid { grid-template-columns: 1fr 1fr; }
					.careers-application-layout { grid-template-columns: 1fr; gap: 36px; }
					.careers-application-intro > p { max-width: 560px; }
					.careers-cta { align-items: flex-start; flex-direction: column; }
				}
				@media (max-width: 550px) {
					.careers-wrap, .careers-hero-inner { width: calc(100% - 40px); }
					.careers-hero, .careers-hero-inner { min-height: 520px; }
					.careers-hero-inner { padding: 65px 0 90px; }
					.careers-hero h1 { font-size: 46px; }
					.careers-hero-copy > p { font-size: 15px; }
					.careers-hero-actions { flex-direction: column; align-items: stretch; }
					.careers-hero-actions .careers-button { width: 100%; }
					.careers-hero-index { right: 0; bottom: 22px; }
					.careers-intro-copy h2, .careers-section-heading h2, .careers-experience h2, .careers-detail-heading h2, .careers-application h2, .careers-contact h2 { font-size: 34px; }
					.careers-intro { padding-top: 59px; padding-bottom: 60px; }
					.careers-intro-visual { min-height: 280px; }
					.careers-culture { padding: 62px 0; }
					.careers-section-heading { grid-template-columns: 1fr; gap: 18px; margin-bottom: 25px; }
					.careers-values-grid, .careers-job-grid, .careers-detail-lists { grid-template-columns: 1fr; }
					.careers-value-card { min-height: 0; padding: 21px; }
					.careers-value-card h3 { margin-top: 23px; }
					.careers-experience { padding-top: 62px; padding-bottom: 63px; }
					.careers-team-visual { min-height: 280px; padding: 17px; }
					.careers-positions { padding: 63px 0; }
					.careers-job-card { padding: 21px; }
					.careers-job-description { min-height: 0; }
					.careers-details { padding-top: 54px; padding-bottom: 58px; }
					.careers-detail-heading { align-items: flex-start; flex-direction: column; }
					.careers-detail-heading .careers-button { width: 100%; }
					.careers-detail-meta { grid-template-columns: 1fr 1fr; gap: 18px 12px; }
					.careers-detail-lists { gap: 25px; }
					.careers-application { padding: 63px 0; }
					.careers-form-grid { grid-template-columns: 1fr; }
					.careers-field-wide { grid-column: auto; }
					.careers-submit { width: 100%; }
					.careers-cta { margin-top: 58px; margin-bottom: 58px; padding: 27px 22px; }
					.careers-cta h2 { font-size: 32px; }
					.careers-cta .careers-button { width: 100%; }
					.careers-contact { padding: 48px 0; }
					.careers-contact-inner { grid-template-columns: 1fr; gap: 20px; }
				}
				@media (prefers-reduced-motion: reduce) {
					.careers-page *, .careers-page *::before, .careers-page *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
				}
			`}</style>
		</div>
	);
}

export default Careers;
