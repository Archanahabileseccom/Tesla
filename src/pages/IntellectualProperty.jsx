import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import patentServices from "../Data/patentServices";
import patentTypes from "../Data/patentTypes";

const tabs = [
	{ id: "strategy", label: "IP Strategy" },
	{ id: "ip-services", label: "IP Services" },
	{ id: "patents", label: "Patents" },
	...patentTypes.map(({ id, label }) => ({ id, label })),
	{ id: "patent-services", label: "Patent Services" },
	...patentServices.map(({ id, label }) => ({ id: `patent-service-${id}`, label })),
	{ id: "trademarks", label: "Trademarks" },
	{ id: "copyright", label: "Copyright" },
	{ id: "portfolio", label: "IP Portfolio" },
	{ id: "commercialization", label: "IP Commercialization" },
	{ id: "enforcement", label: "IP Enforcement" },
];

const patentConditions = [
	{
		title: "Novelty",
		text: "The claimed invention must be new. Earlier public disclosure can affect novelty, subject to limited statutory exceptions.",
	},
	{
		title: "Inventive step",
		text: "It must involve a technical advance or economic significance and not be obvious to a person skilled in the field.",
	},
	{
		title: "Industrial applicability",
		text: "It must be capable of being made or used in an industry.",
	},
	{
		title: "Patentable subject matter",
		text: "It must be an invention within the law—not merely an abstract idea or subject matter excluded by statute.",
	},
];

const patentRights = [
	"Exclude others from making, using, offering for sale, selling or importing the claimed invention in the territory, as allowed by law.",
	"License or assign the patent to another party.",
	"Bring an infringement action where the facts and law support it.",
	"A process patent may also cover products directly obtained by the process as provided by Indian law.",
];

const patentExclusions = [
	"Ideas alone without a sufficiently disclosed, patentable invention.",
	"Abstract methods, mathematical methods, scientific theories and discoveries of natural phenomena, subject to the precise statutory provisions.",
	"Subject matter excluded under the Patents Act, including certain inventions contrary to public order or morality and traditional knowledge.",
	"Subject matter that fails the patentability requirements or falls within another statutory exclusion.",
];

const patentProcess = [
	{
		title: "File",
		text: "File a provisional or complete specification with the Indian Patent Office.",
	},
	{
		title: "Publication",
		text: "Applications are ordinarily published after 18 months from the applicable filing or priority date; early publication can be requested under the rules.",
	},
	{
		title: "Examination",
		text: "Request examination within the applicable deadline. The examiner may issue a First Examination Report.",
	},
	{
		title: "Respond",
		text: "Address examination objections and any hearing or formal requirements that apply.",
	},
	{
		title: "Grant and opposition",
		text: "A patent may be granted if requirements are met. Pre-grant and post-grant opposition procedures are available under the Act.",
	},
	{
		title: "Renew",
		text: "Pay renewal fees as required to maintain a granted patent during its term.",
	},
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

const basePages = {
	"ip-services": {
		eyebrow: "TESLA INNOVATION / INTELLECTUAL PROPERTY",
		indicator: "IP SERVICES",
		title: "Practical IP services for the ideas, brands and work you build.",
		description:
			"Protect product appearance, brand identity and original work, explore eligible startup support, and make informed decisions about your IP assets.",
		heroSlides: [
			{
				image:
					"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90",
				alt: "Bright creative workspace for a growing business",
			},
			{
				image:
					"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=90",
				alt: "Team reviewing plans and business documents",
			},
			{
				image:
					"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=90",
				alt: "Software developer working at a computer",
			},
		],
		sectionLabel: "IP SERVICES",
		statHeading: "Explore five areas of focused IP support.",
		heading: "Choose the right support for each kind of intellectual property.",
		intro:
			"From a product’s appearance and a brand’s identity to software, content and valuable know-how, each asset calls for a considered protection approach. We help identify the right service, clarify the information needed and plan practical next steps.",
		featureTitle: "One clear view of your IP services and next steps.",
		featureImage:
			"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Business team collaborating around a shared plan",
		paragraphs: [
			"Our add-on services include design registration, trademark filing, copyright registration support, Startup India facilitation and IP audits. The right route depends on the asset, ownership, intended markets and applicable rules.",
			"For eligible DPIIT-recognized startups, current government schemes may reduce certain filing costs and provide facilitator support. Benefits are subject to eligibility, scheme rules and the official fee schedule; we help clarify the applicable route before filing.",
		],
		capabilities: [
			"Product appearance protection",
			"Brand name, logo and tagline filings",
			"Software, website and content records",
			"Startup scheme and facilitator coordination",
			"IP asset and ownership review",
			"Prioritized protection roadmap",
		],
		cards: [
			{
				number: "01",
				title: "Design Registration",
				text: "Protect a product’s visual features—such as its shape, configuration, pattern or ornamentation. Design protection addresses appearance, not technical function; it can be a more direct route than patenting a product’s technical features, but timing depends on the jurisdiction and application.",
				image:
					"https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85",
				alt: "Exhibition of considered product and visual design",
			},
			{
				number: "02",
				title: "Trademark Filing",
				text: "File to protect the brand identifiers customers recognize, including a business or product name, logo and tagline. Support can cover clearance planning, relevant goods and services, filing coordination and responses to examination issues.",
				image:
					"https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85",
				alt: "Team planning a brand and marketing strategy",
			},
			{
				number: "03",
				title: "Copyright Registration",
				text: "Organize authorship, ownership and registration support for original software, website materials and content. Copyright may arise automatically in many jurisdictions; registration requirements and evidentiary benefits vary by location and work type.",
				image:
					"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
				alt: "Software developer working at a laptop",
			},
			{
				number: "04",
				title: "Startup India Facilitation",
				text: "SIPP can provide facilitators for patent, trademark and design filings, with facilitator fees borne by the government under scheme terms. Eligible startups may receive an 80% rebate on patent government filing fees and 50% on trademark government filing fees. Eligibility and current rules apply.",
				image:
					"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
				alt: "Startup team collaborating on a new venture",
			},
			{
				number: "05",
				title: "IP Audit",
				text: "Identify and review IP across your company—including inventions, brands, designs, software, content, know-how and ownership records. The outcome is a prioritized protection roadmap that highlights gaps, risks and practical next steps.",
				image:
					"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
				alt: "Business information organized in a digital dashboard",
			},
		],
		statCards: [
			{
				number: "01",
				title: "Product appearance",
				text: "Design registration for eligible visual features of a product.",
				image:
					"https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=85",
				alt: "Modern manufacturing equipment for product development",
			},
			{
				number: "02",
				title: "Brand identity",
				text: "Trademark filing for names, logos and taglines.",
				image:
					"https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=900&q=85",
				alt: "World map representing brand reach across markets",
			},
			{
				number: "03",
				title: "Original works",
				text: "Copyright support for software, websites and content.",
				image:
					"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
				alt: "Digital content being viewed on a laptop",
			},
			{
				number: "04",
				title: "Startup support",
				text: "Scheme and facilitator coordination for eligible DPIIT-recognized startups.",
				image:
					"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
				alt: "Founders discussing a business opportunity",
			},
			{
				number: "05",
				title: "Company-wide view",
				text: "An IP audit to surface assets and shape a protection roadmap.",
				image:
					"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
				alt: "Team reviewing business priorities and project documents",
			},
		],
		ipServicesOverview: true,
	},
	"patent-services": {
		eyebrow: "TESLA INNOVA IPR / PATENT SERVICES",
		indicator: "10 SPECIALIST SERVICES",
		title: "From first search to patent commercialization.",
		description:
			"Technical and patent support for inventors, startups, R&D teams and patent owners—at each stage of the invention journey.",
		heroSlides: [
			{
				image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=90",
				alt: "Engineer developing a technical prototype",
			},
			{
				image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2000&q=90",
				alt: "Research equipment used to evaluate an invention",
			},
			{
				image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=90",
				alt: "Business team discussing a technology opportunity",
			},
		],
		sectionLabel: "PATENT SERVICES",
		heading: "Choose support that matches your invention's next step.",
		intro:
			"Explore patentability searches, drafting, filing, prosecution, FTO, landscape analysis, monitoring and commercialization. Each service page explains what's included, indicative timing and who it may suit.",
		featureTitle: "Technical insight. Patent expertise. Clear next steps.",
		featureImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Technical and business team collaborating on an invention",
		paragraphs: [
			"Our patent services support inventors from an early idea through filing, examination and post-grant opportunities. Timelines are indicative and depend on complete information, technical complexity, applicant review and patent-office requirements.",
			"Patent protection and freedom to operate are different questions. A search or opinion is based on its defined scope and available information; it cannot guarantee grant, non-infringement or a commercial outcome.",
		],
		capabilities: [
			"Search and assess",
			"Draft and file",
			"Respond to examination",
			"Assess launch risk",
			"Monitor patent activity",
			"Commercialize granted rights",
		],
		cards: patentServices.map((service, index) => ({
			number: String(index + 1).padStart(2, "0"),
			title: service.label,
			text: `${service.description} Indicative timeline: ${service.duration}. Best for: ${service.audience}`,
			image: service.heroSlides[0].image,
			alt: service.heroSlides[0].alt,
			tabId: `patent-service-${service.id}`,
		})),
		statHeading: "A focused route through the patent lifecycle.",
		statCards: [
			{
				number: "10",
				title: "Patent services",
				text: "Search, filing, prosecution, monitoring and commercialization support.",
				image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
				alt: "Business team planning a patent and technology strategy",
			},
			{
				number: "₹24,999+",
				title: "Packages start at",
				text: "As provided; government fees are additional and package scope should be confirmed.",
				image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
				alt: "Business pricing and project information on a dashboard",
			},
			{
				number: "48 hrs",
				title: "Provisional filing target",
				text: "Target after complete disclosure, instructions and applicant details are ready and approved.",
				image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=85",
				alt: "Calendar used to plan a filing timeline",
			},
		],
		patentServiceOverview: true,
	},
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
		indicator: "PATENT OVERVIEW",
		title: "A patent protects a qualifying invention for a limited time.",
		description:
			"In India, patents reward qualifying inventions with time-limited, territorial rights in exchange for public disclosure of how the invention works.",
		heroSlides: [
			{
				image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=90",
				alt: "Electronic components representing a technical invention",
			},
			{
				image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=90",
				alt: "Engineer testing an invention prototype",
			},
		],
		sectionLabel: "PATENT INFORMATION",
		heading: "What a patent protects—and what it requires.",
		intro:
			"A patent is a government-granted legal right that can let its owner prevent others from making, using, offering for sale, selling or importing the claimed invention without consent, subject to the law. In India, the general patent term is 20 years from the filing date if granted, with required renewal fees.",
		featureTitle: "A limited exclusive right in exchange for public disclosure.",
		featureImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
		featureAlt: "Team reviewing technical information and an invention plan",
		paragraphs: [
			"Patent claims define the scope of the right. A patent may be licensed or assigned, and its owner may bring an infringement action where appropriate. Patent rights are territorial and do not automatically provide freedom to operate: a product may still fall within an earlier patent or be subject to other laws.",
			"An application must disclose the invention as required by law. Public disclosure before filing can affect novelty, subject to limited statutory exceptions. Patentability, term and available rights depend on the jurisdiction, application and facts.",
		],
		capabilities: [
			"Novelty",
			"Inventive step / non-obviousness",
			"Industrial applicability / utility",
			"Patentable subject matter",
		],
		cards: [
			{
				number: "01",
				title: "File",
				text: "File a provisional or complete specification with the Indian Patent Office.",
				image:
					"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
				alt: "Patent application materials prepared for filing",
			},
			{
				number: "02",
				title: "Publish",
				text: "Applications are ordinarily published after 18 months; early publication may be requested under the rules.",
				image:
					"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
				alt: "Application details reviewed before publication",
			},
			{
				number: "03",
				title: "Examine",
				text: "Request examination; respond to the First Examination Report and any further requirements.",
				image:
					"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
				alt: "Technical research material used during examination",
			},
			{
				number: "04",
				title: "Grant and maintain",
				text: "If requirements are met, the patent may be granted; renewal fees are then required to maintain it.",
				image:
					"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
				alt: "Patent portfolio information organized in a dashboard",
			},
		],
		statHeading: "Key points at a glance.",
		statCards: [
			{
				number: "20 years",
				title: "General patent term",
				text: "For an Indian patent, generally from the filing date if granted; renewals are required.",
				image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=85",
				alt: "Calendar representing patent term and renewal dates",
			},
			{
				number: "Claims",
				title: "Define the scope",
				text: "The granted claims, applicable law and territory define the right—not the idea alone.",
				image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
				alt: "Team reviewing technical claims and documents",
			},
			{
				number: "India",
				title: "Territorial protection",
				text: "An Indian patent does not automatically grant protection in other countries.",
				image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=900&q=85",
				alt: "Map representing separate national markets",
			},
		],
		patentOverview: true,
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

const patentTypePages = Object.fromEntries(
	patentTypes.map((type, index) => [
		type.id,
		{
			eyebrow: "TESLA INNOVATION / PATENT INFORMATION",
			indicator: `PATENT TYPE ${String(index + 1).padStart(2, "0")}`,
			title: type.title,
			description: type.description,
			heroSlides: type.heroSlides,
			sectionLabel: type.label.toUpperCase(),
			heading: type.heading,
			intro: type.intro,
			featureTitle: "What this route protects—and what it does not.",
			featureImage: type.featureImage,
			featureAlt: type.featureAlt,
			paragraphs: type.paragraphs,
			capabilities: [type.classification, "Patent scope is determined by the applicable law and claims"],
			cards: [
				{
					number: "01",
					title: "What it protects",
					text: type.protection,
					image: type.heroSlides[0].image,
					alt: type.heroSlides[0].alt,
				},
				{
					number: "02",
					title: "India position",
					text: type.indiaNote,
					image: type.featureImage,
					alt: type.featureAlt,
				},
				{
					number: "03",
					title: "Example",
					text: type.example,
					image: type.heroSlides[1].image,
					alt: type.heroSlides[1].alt,
				},
			],
			statHeading: "Key facts for this patent route.",
			statCards: [
				{
					number: type.term,
					title: "Term / timing",
					text: type.termNote,
					image: type.featureImage,
					alt: type.featureAlt,
				},
				{
					number: "IN",
					title: "India classification",
					text: type.classification,
					image: type.heroSlides[1].image,
					alt: type.heroSlides[1].alt,
				},
			],
		},
	]),
);

const patentServicePages = Object.fromEntries(
	patentServices.map((service) => [
		`patent-service-${service.id}`,
		{
			...service,
			eyebrow: "TESLA INNOVA IPR / PATENT SERVICES",
			statHeading: `Key details for ${service.label.toLowerCase()}.`,
			statCards: [
				{
					number: service.statNumber,
					title: "Indicative timeline",
					text: service.timelineNote,
					image: service.heroSlides[0].image,
					alt: service.heroSlides[0].alt,
				},
				{
					number: "01",
					title: "Typical output",
					text: service.deliverable,
					image: service.featureImage,
					alt: service.featureAlt,
				},
			],
		},
	]),
);

const pages = { ...basePages, ...patentTypePages, ...patentServicePages };
const discoveryTabs = tabs.filter((tab) => !tab.id.startsWith("patent-service-"));

function IntellectualProperty() {
	const [activeTab, setActiveTab] = useState("strategy");
	const [heroSlideIndex, setHeroSlideIndex] = useState(0);
	const location = useLocation();
	const navigate = useNavigate();
	const activePage = pages[activeTab];
	const heroSlides = activePage.heroSlides || [
		{ image: activePage.heroImage, alt: activePage.title },
	];
	const activeHeroSlide = heroSlides[heroSlideIndex] || heroSlides[0];

	useEffect(() => {
		const hash = location.hash.slice(1);
		const nextTab = tabs.some((tab) => tab.id === hash) ? hash : "strategy";
		setActiveTab(nextTab);
	}, [location.hash, location.pathname]);

	useEffect(() => {
		setHeroSlideIndex(0);
	}, [activeTab]);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [activeTab]);

	const changeHeroSlide = (direction) => {
		setHeroSlideIndex((current) => (current + direction + heroSlides.length) % heroSlides.length);
	};

	const handleTabChange = (tabId) => {
		setActiveTab(tabId);
		navigate(tabId === "strategy" ? "/intellectual-property" : `/intellectual-property#${tabId}`);
	};

	return (
		<div className="ip-page">
			{/* Dynamic hero */}
			<section
				className="ip-hero"
				style={{ backgroundImage: `url("${activeHeroSlide.image}")` }}
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
				{heroSlides.length > 1 && (
					<div className="ip-hero-slides" aria-label="Hero image slides">
						<button type="button" aria-label="Previous hero image" onClick={() => changeHeroSlide(-1)}>←</button>
						<span>{heroSlideIndex + 1} / {heroSlides.length}</span>
						<button type="button" aria-label="Next hero image" onClick={() => changeHeroSlide(1)}>→</button>
					</div>
				)}
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

				{activePage.patentOverview && (
					<section className="ip-patent-guide ip-wrap" aria-label="Patent information for India">
						<div className="ip-patent-guide-heading">
							<span className="ip-eyebrow">PATENTABILITY AND RIGHTS</span>
							<h2>What must qualify, and what a patent can do.</h2>
						</div>
						<div className="ip-patent-info-grid">
							<article>
								<h3>Key conditions</h3>
								<div className="ip-patent-condition-list">
									{patentConditions.map((condition) => (
										<div key={condition.title}>
											<strong>{condition.title}</strong>
											<p>{condition.text}</p>
										</div>
									))}
								</div>
							</article>
							<article>
								<h3>What a patent can give</h3>
								<ul>
									{patentRights.map((right) => <li key={right}>{right}</li>)}
								</ul>
								<h3 className="ip-patent-subheading">What it does not give</h3>
								<p>
									A patent is an exclusionary right, not automatic permission to
									practice an invention. Check for earlier rights and other
									regulatory requirements separately.
								</p>
							</article>
							<article>
								<h3>What is not patentable</h3>
								<ul>
									{patentExclusions.map((exclusion) => <li key={exclusion}>{exclusion}</li>)}
								</ul>
								<p className="ip-patent-note">
									Indian patentability exclusions are statutory and fact-specific;
									a qualified professional should assess the actual claims.
								</p>
							</article>
						</div>

						<div className="ip-patent-types">
							<div className="ip-patent-guide-heading">
								<span className="ip-eyebrow">PATENT ROUTES AND RELATED RIGHTS</span>
								<h2>Explore each type and filing route.</h2>
								<p>
									These terms describe different claim categories, application
									routes or separate rights. They are not all distinct patent
									classes in India.
								</p>
							</div>
							<div className="ip-patent-table-wrap" role="region" aria-label="Patent types and India-specific information" tabIndex="0">
								<table className="ip-patent-table">
									<thead>
										<tr>
											<th scope="col">Type / route</th>
											<th scope="col">What it protects or means</th>
											<th scope="col">Example</th>
											<th scope="col">India term or status</th>
										</tr>
									</thead>
									<tbody>
										{patentTypes.map((type) => (
											<tr key={type.id}>
												<th scope="row">
													<button type="button" onClick={() => handleTabChange(type.id)}>
														{type.label}
													</button>
													<span>{type.classification}</span>
												</th>
												<td>{type.protection}</td>
												<td>{type.example}</td>
												<td>{type.termNote}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						<div className="ip-patent-process">
							<div className="ip-patent-guide-heading">
								<span className="ip-eyebrow">PATENT PROCESS IN INDIA</span>
								<h2>From filing to grant and renewal.</h2>
							</div>
							<div className="ip-patent-process-grid">
								{patentProcess.map((step, index) => (
									<article key={step.title}>
										<span>{String(index + 1).padStart(2, "0")}</span>
										<h3>{step.title}</h3>
										<p>{step.text}</p>
									</article>
								))}
							</div>
						</div>

						<aside className="ip-patent-example">
							<span className="ip-eyebrow">A PRACTICAL EXAMPLE</span>
							<h2>A faster-heating solar cooker.</h2>
							<p>
								If a new reflector mechanism makes a solar cooker heat food
								faster, the qualifying technical mechanism may be assessed for a
								patent. The product's eligible visual appearance may be assessed
								separately for design registration. A provisional specification
								may be considered while development continues, with a complete
								specification due within 12 months. Each route protects a
								different subject and must independently meet its requirements.
							</p>
						</aside>

						<p className="ip-patent-disclaimer">
							General educational information only, not legal advice. Patentability,
							filing deadlines, term and rights depend on the applicable law, filing
							date, claims and facts. Confirm current requirements before filing.
						</p>
					</section>
				)}

				{activePage.duration && (
					<section className="ip-service-details ip-wrap" aria-label={`${activePage.sectionLabel} service details`}>
						<article>
							<span className="ip-eyebrow">INDICATIVE TIMELINE</span>
							<h3>{activePage.duration}</h3>
							<p>{activePage.timelineNote}</p>
						</article>
						<article>
							<span className="ip-eyebrow">WHO IT’S FOR</span>
							<h3>Designed around your stage</h3>
							<p>{activePage.audience}</p>
						</article>
						<article>
							<span className="ip-eyebrow">TYPICAL OUTPUT</span>
							<h3>Clear next steps</h3>
							<p>{activePage.deliverable}</p>
						</article>
					</section>
				)}

				{!activePage.patentOverview && <section className="ip-feature ip-wrap">
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
				</section>}

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
				{!activePage.patentOverview && <section className="ip-offerings ip-wrap">
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
					<div className={`ip-card-grid ${activeTab === "ip-services" ? "ip-services-card-grid" : ""}`}>
						{activePage.cards.map((card) => (
							<article className="ip-topic-card" key={card.number}>
								<div className="ip-topic-image">
									<img src={card.image} alt={card.alt} loading="lazy" />
									<span>{card.number}</span>
								</div>
								<div className="ip-topic-copy">
									<h3>{card.title}</h3>
									<p>{card.text}</p>
									{card.tabId ? (
										<button className="ip-card-link" type="button" onClick={() => handleTabChange(card.tabId)}>
											View service <span aria-hidden="true">↗</span>
										</button>
									) : (
										<span className="ip-card-arrow" aria-hidden="true">↗</span>
									)}
								</div>
							</article>
						))}
					</div>
				</section>}

				{(activePage.ipServicesOverview || activePage.patentServiceOverview) && (
					<section className="ip-patent-service-why ip-wrap">
						<div className="ip-section-heading">
							<div>
								<span className="ip-eyebrow">WHY TESLA INNOVA IPR</span>
								<h2>Technical depth, clear pricing and practical momentum.</h2>
							</div>
							<p>
								Our service model is designed around the technical detail,
								deadlines and commercial decisions involved in patent work.
							</p>
						</div>
						<div className="ip-patent-why-grid">
							<article>
								<span>01</span>
								<h3>Tech + Legal Team</h3>
								<p>Our team brings together engineers from IITs and NITs with registered patent agents, helping carry technical detail clearly into patent work.</p>
							</article>
							<article>
								<span>02</span>
								<h3>Fixed Pricing</h3>
								<p>No hourly billing. Packages start at ₹24,999; government fees are additional. Confirm the package scope and applicable charges before proceeding.</p>
							</article>
							<article>
								<span>03</span>
								<h3>Startup Focus</h3>
								<p>Eligible DPIIT-recognized startups may receive an 80% rebate on patent government filing fees and access SIPP facilitator support, subject to current scheme rules.</p>
							</article>
							<article>
								<span>04</span>
								<h3>Speed</h3>
								<p>We target provisional filing within 48 hours after the technical disclosure, filing instructions and applicant details are complete and approved. An early filing can establish a priority date for the subject matter adequately disclosed, but does not guarantee a patent grant or market exclusivity.</p>
							</article>
						</div>
						<div className="ip-patent-service-cta">
							<div>
								<span className="ip-eyebrow">NEXT STEP</span>
								<h3>Book a free 15-minute call to discuss whether your idea may be patentable.</h3>
								<p>An initial discussion can help identify whether a patentability assessment may be useful; it is not a patentability opinion.</p>
							</div>
							<a href="tel:+918870084429">Call +91 88700 84429 <span aria-hidden="true">↗</span></a>
						</div>
					</section>
				)}

				{/* Shared experience statistics */}
				<section
					className="ip-stats ip-wrap"
					aria-label={activePage.statCards ? `${activePage.sectionLabel} at a glance` : "Tesla Innovation experience"}
				>
					<div className="ip-stats-heading">
						<div>
							<span className="ip-eyebrow">{activePage.patentOverview ? "PATENT AT A GLANCE" : activePage.statCards ? "SERVICE AT A GLANCE" : "TESLA INNOVATION"}</span>
							<h2>{activePage.statHeading || (activePage.statCards ? "Key details for this patent service." : "Perspective built through meaningful work.")}</h2>
						</div>
					</div>
					<div className={`ip-stats-grid ${activePage.statCards ? "ip-service-stats-grid" : ""} ${activeTab === "ip-services" ? "ip-ip-services-stats-grid" : ""} ${activePage.patentOverview ? "ip-patent-stats-grid" : ""} ${activePage.patentServiceOverview ? "ip-patent-service-stats-grid" : ""}`}>
						{(activePage.statCards || experienceStats).map((stat, index) => (
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
						{discoveryTabs.map((tab, index) => (
							<button
								className="ip-discover-link"
								key={tab.id}
								type="button"
								aria-current={activeTab === tab.id ? "page" : undefined}
								onClick={() => handleTabChange(tab.id)}
							>
								<span>{String(index + 1).padStart(2, "0")}</span>
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
					width: 100%;
					height: calc(100vh - 83px);
					height: calc(100svh - 83px);
					display: flex;
					align-items: center;
					overflow: hidden;
					background-position: center center;
					background-size: cover;
					background-repeat: no-repeat;
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
				.ip-hero-slides { position: absolute; z-index: 1; bottom: 23px; left: max(32px, calc((100vw - 1200px) / 2)); display: flex; align-items: center; gap: 12px; color: rgba(255,255,255,.82); font-size: 12px; font-weight: 700; }
				.ip-hero-slides button { display: grid; width: 35px; height: 35px; place-items: center; border: 1px solid rgba(255,255,255,.55); border-radius: 50%; background: rgba(14,32,31,.18); color: #fff; font-size: 18px; transition: background .2s ease; }
				.ip-hero-slides button:hover, .ip-hero-slides button:focus-visible { background: rgba(255,255,255,.2); }
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
				.ip-service-details { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-bottom: 76px; border: 1px solid var(--ip-line); background: rgba(255,255,255,.68); }
				.ip-service-details article { min-width: 0; padding: 23px 25px; border-right: 1px solid var(--ip-line); }
				.ip-service-details article:last-child { border-right: 0; }
				.ip-service-details .ip-eyebrow { margin-bottom: 9px; font-size: 10px; }
				.ip-service-details h3 { margin: 0 0 7px; font-family: Georgia, "Times New Roman", serif; font-size: 21px; font-weight: 400; line-height: 1.3; }
				.ip-service-details p { margin: 0; color: var(--ip-muted); font-size: 13px; line-height: 1.65; }
				.ip-patent-guide { padding-bottom: 74px; }
				.ip-patent-guide-heading { margin-bottom: 25px; }
				.ip-patent-guide-heading h2, .ip-patent-example h2 { max-width: 720px; margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: 32px; font-weight: 400; line-height: 1.2; }
				.ip-patent-guide-heading > p { max-width: 780px; margin: 14px 0 0; color: var(--ip-muted); font-size: 14px; }
				.ip-patent-info-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
				.ip-patent-info-grid > article { min-width: 0; padding: 24px; border: 1px solid var(--ip-line); background: rgba(255,255,255,.72); }
				.ip-patent-info-grid h3 { margin: 0 0 16px; font-size: 17px; font-weight: 700; }
				.ip-patent-condition-list { display: grid; gap: 16px; }
				.ip-patent-condition-list strong { color: var(--ip-accent); font-size: 13px; }
				.ip-patent-condition-list p, .ip-patent-info-grid > article > p { margin: 4px 0 0; color: var(--ip-muted); font-size: 13px; line-height: 1.65; }
				.ip-patent-info-grid ul { display: grid; gap: 11px; margin: 0; padding-left: 18px; color: var(--ip-muted); font-size: 13px; line-height: 1.65; }
				.ip-patent-info-grid li::marker { color: var(--ip-accent); }
				.ip-patent-info-grid .ip-patent-subheading { margin-top: 24px; }
				.ip-patent-info-grid .ip-patent-note { margin-top: 15px; font-size: 12px; }
				.ip-patent-types, .ip-patent-process { margin-top: 72px; }
				.ip-patent-table-wrap { max-width: 100%; overflow-x: auto; border: 1px solid var(--ip-line); background: #fff; }
				.ip-patent-table { width: 100%; min-width: 960px; border-collapse: collapse; text-align: left; }
				.ip-patent-table th, .ip-patent-table td { padding: 15px 16px; border-bottom: 1px solid var(--ip-line); vertical-align: top; font-size: 12px; line-height: 1.6; }
				.ip-patent-table thead th { background: #edf5f2; color: var(--ip-ink); font-size: 11px; letter-spacing: .35px; }
				.ip-patent-table tbody th { width: 190px; font-weight: 600; }
				.ip-patent-table tbody th button { display: block; padding: 0; border: 0; background: transparent; color: var(--ip-accent); font-size: 13px; font-weight: 700; text-align: left; }
				.ip-patent-table tbody th button:hover, .ip-patent-table tbody th button:focus-visible { text-decoration: underline; }
				.ip-patent-table tbody th span { display: block; margin-top: 5px; color: var(--ip-muted); font-size: 11px; font-weight: 400; }
				.ip-patent-table tbody td { color: var(--ip-muted); }
				.ip-patent-table tbody tr:last-child th, .ip-patent-table tbody tr:last-child td { border-bottom: 0; }
				.ip-patent-process-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--ip-line); border-left: 1px solid var(--ip-line); }
				.ip-patent-process-grid article { min-height: 160px; padding: 20px; border-right: 1px solid var(--ip-line); border-bottom: 1px solid var(--ip-line); background: rgba(255,255,255,.55); }
				.ip-patent-process-grid article > span { color: var(--ip-accent); font-size: 11px; font-weight: 800; }
				.ip-patent-process-grid h3 { margin: 8px 0 5px; font-size: 16px; }
				.ip-patent-process-grid p { margin: 0; color: var(--ip-muted); font-size: 12px; line-height: 1.65; }
				.ip-patent-example { margin-top: 48px; padding: 30px; border-left: 3px solid var(--ip-accent); background: #f0f7f4; }
				.ip-patent-example .ip-eyebrow { margin-bottom: 9px; }
				.ip-patent-example h2 { font-size: 27px; }
				.ip-patent-example p { max-width: 950px; margin: 13px 0 0; color: var(--ip-muted); font-size: 14px; line-height: 1.75; }
				.ip-patent-disclaimer { margin: 19px 0 0; color: var(--ip-muted); font-size: 11px; line-height: 1.65; }
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
				.ip-card-grid.ip-services-card-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
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
				.ip-card-link { position: absolute; right: 17px; bottom: 13px; display: inline-flex; align-items: center; gap: 8px; border: 0; padding: 0; background: transparent; color: var(--ip-accent); font-size: 12px; font-weight: 700; }
				.ip-card-link span { transition: transform .2s ease; }
				.ip-card-link:hover span, .ip-card-link:focus-visible span { transform: translate(3px, -3px); }
				.ip-patent-service-why { padding-top: 68px; padding-bottom: 80px; border-top: 1px solid var(--ip-line); }
				.ip-patent-why-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
				.ip-patent-why-grid article { min-width: 0; padding: 22px 19px; border: 1px solid var(--ip-line); background: rgba(255,255,255,.7); }
				.ip-patent-why-grid article > span { color: var(--ip-accent); font-size: 11px; font-weight: 800; }
				.ip-patent-why-grid h3 { margin: 10px 0 7px; font-size: 16px; }
				.ip-patent-why-grid p { margin: 0; color: var(--ip-muted); font-size: 13px; line-height: 1.65; }
				.ip-patent-service-cta { display: flex; justify-content: space-between; align-items: center; gap: 30px; margin-top: 28px; padding: 25px 28px; background: #edf5f2; }
				.ip-patent-service-cta .ip-eyebrow { margin-bottom: 7px; }
				.ip-patent-service-cta h3 { margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: 23px; font-weight: 400; }
				.ip-patent-service-cta p { max-width: 720px; margin: 7px 0 0; color: var(--ip-muted); font-size: 12px; }
				.ip-patent-service-cta a { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 10px; padding: 12px 16px; background: var(--ip-accent); color: #fff; font-size: 13px; font-weight: 700; text-decoration: none; }
				.ip-patent-service-cta a:hover, .ip-patent-service-cta a:focus-visible { background: #11665d; }
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
				.ip-stats-grid.ip-service-stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); max-width: 800px; }
				.ip-stats-grid.ip-ip-services-stats-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); max-width: none; }
				.ip-stats-grid.ip-patent-stats-grid, .ip-stats-grid.ip-patent-service-stats-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); max-width: none; }
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
				.ip-discover-link strong { font-size: 18px; font-weight: 500; line-height: 1.35; }
				.ip-discover-link > span:last-child { justify-self: end; color: var(--ip-accent); transition: transform .2s ease; }
				.ip-discover-link:hover > span:last-child { transform: translate(3px, -3px); }
				.ip-discover-link[aria-current="page"] strong { color: var(--ip-accent); }
				@keyframes ip-enter { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
				@keyframes ip-content-enter { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
				@media (max-width: 1100px) {
					.ip-intro, .ip-section-heading { gap: 42px; }
					.ip-feature { gap: 46px; }
					.ip-card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
					.ip-card-grid.ip-services-card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
					.ip-topic-image { height: 220px; }
					.ip-dashboard-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
					.ip-dashboard-card:nth-child(2) { border-right: 0; }
					.ip-dashboard-card:nth-child(-n+2) { border-bottom: 1px solid var(--ip-line); }
					.ip-stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
					.ip-stats-grid.ip-service-stats-grid { max-width: 100%; }
					.ip-stats-grid.ip-ip-services-stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
					.ip-stats-grid.ip-patent-stats-grid, .ip-stats-grid.ip-patent-service-stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
					.ip-patent-why-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
					.ip-stat-image { height: 220px; }
				}
				@media (max-width: 640px) {
					.ip-page { font-size: 16px; }
					.ip-wrap { width: calc(100% - 40px); }
					.ip-hero { height: auto; min-height: 430px; }
					.ip-hero-content { width: calc(100% - 40px); padding: 70px 0 88px; }
					.ip-hero h1 { font-size: 42px; }
					.ip-hero-content p { margin-top: 20px; font-size: 15px; }
					.ip-hero-index { right: 20px; bottom: 21px; }
					.ip-hero-slides { left: 20px; bottom: 14px; }
					.ip-intro, .ip-section-heading, .ip-feature, .ip-discover { grid-template-columns: 1fr; gap: 25px; }
					.ip-service-details { grid-template-columns: 1fr; margin-bottom: 60px; }
					.ip-service-details article { padding: 19px 18px; border-right: 0; border-bottom: 1px solid var(--ip-line); }
					.ip-service-details article:last-child { border-bottom: 0; }
					.ip-intro { padding-top: 62px; padding-bottom: 52px; }
					.ip-intro h2, .ip-section-heading h2, .ip-feature-copy h2 { font-size: 32px; }
					.ip-feature { padding-bottom: 64px; }
					.ip-feature-image, .ip-feature-image img { min-height: 290px; height: 290px; }
					.ip-photo-caption { right: 10px; bottom: 14px; }
					.ip-offerings { padding-top: 58px; padding-bottom: 66px; }
					.ip-section-heading { margin-bottom: 25px; }
					.ip-card-grid { grid-template-columns: 1fr; gap: 17px; }
					.ip-card-grid.ip-services-card-grid { grid-template-columns: 1fr; }
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
					.ip-stats-grid.ip-service-stats-grid { grid-template-columns: 1fr; }
					.ip-stats-grid.ip-ip-services-stats-grid { grid-template-columns: 1fr; }
					.ip-stats-grid.ip-patent-stats-grid, .ip-stats-grid.ip-patent-service-stats-grid { grid-template-columns: 1fr; }
					.ip-patent-why-grid { grid-template-columns: 1fr; }
					.ip-patent-service-why { padding-top: 55px; padding-bottom: 60px; }
					.ip-patent-service-cta { display: block; padding: 21px 19px; }
					.ip-patent-service-cta a { margin-top: 17px; }
					.ip-stat-image { height: 210px; }
					.ip-stat-copy { min-height: 130px; }
					.ip-discover { gap: 27px; padding-top: 60px; padding-bottom: 70px; }
					.ip-discover-link strong { font-size: 16px; }
				}
				@media (prefers-reduced-motion: reduce) {
					.ip-page *, .ip-page *::before, .ip-page *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
				}
			`}</style>
		</div>
	);
}

export default IntellectualProperty;
