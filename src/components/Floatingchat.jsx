import { useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import patentTypes from "../Data/patentTypes";
import patentServices from "../Data/patentServices";
import "./Floatingchat.css";

const OFFICIAL_WEBSITE = "https://tesla-inno.netlify.app";
const PAGE_LINKS = {
	home: { label: "Tesla Innovation website", path: "/" },
	about: { label: "About", path: "/about" },
	ip: { label: "Intellectual Property", path: "/intellectual-property" },
	globalIp: { label: "Global IP", path: "/global-ip" },
	litigation: { label: "Litigation", path: "/litigation" },
	corporate: { label: "Corporate", path: "/corporate" },
	transactions: { label: "Transactions", path: "/transactions" },
	insights: { label: "Insights", path: "/insights" },
	careers: { label: "Careers", path: "/careers" },
	contact: { label: "Contact", path: "/contact" },
};

const UNRELATED_REPLY = `I'm Tesla Assistant, the official website assistant for Tesla Innovation Private Limited.

I can assist you exclusively with information about our company, Patents, Patent Services, IP Services, Global IP, Litigation, Corporate, Transactions, Insights, Careers and Contact.

Please ask a question related to the Tesla Innovation website.

Official Website: ${OFFICIAL_WEBSITE}/`;

const MISSING_REPLY = `I'm sorry, I couldn't find this specific information on the Tesla Innovation website.

Please visit our official website:
${OFFICIAL_WEBSITE}/

You can also contact our team through the Contact page for further assistance.`;

const welcomeMessage = {
	id: 1,
	from: "assistant",
	text: "Hello! Welcome to Tesla Innovation Private Limited.\n\nI'm Tesla Assistant, your official website assistant.\n\nI can help you explore:\n- About Us\n- Mission & Vision\n- Patents\n- Patent Services\n- IP Services\n- Global IP\n- Litigation\n- Corporate\n- Transactions\n- Insights\n- Careers\n- Contact\n\nYou can ask about any specific service, submenu or website section.\n\nHow can I assist you today?",
	page: PAGE_LINKS.home,
};

const suggestedQuestions = [
	"What is Utility Patent?",
	"Explain Design Registration.",
	"What is Patentability Search?",
	"Explain Patent Landscape & White Space.",
	"What is Patent Watch?",
	"What are the IP Services offered?",
	"Tell me about Tesla Innovation.",
	"What is the company's vision?",
	"What is the company's mission?",
	"What are the mission pillars?",
];

const patentTypePages = patentTypes.map((patent) => ({
	page: { label: patent.label, path: `/intellectual-property#${patent.id}` },
	keywords: [patent.label, patent.id.replaceAll("-", " ")],
	text: `${patent.description}\n\nPurpose:\n${patent.title}\n\nKey Details:\n- ${patent.heading}\n- ${patent.intro}\n- ${patent.paragraphs.join("\n- ")}\n- Scope of protection: ${patent.protection}\n- India: ${patent.indiaNote}\n- Term: ${patent.term}. ${patent.termNote}\n- Example: ${patent.example}`,
}));

const patentServicePages = patentServices.map((service) => ({
	page: { label: service.label, path: `/intellectual-property#patent-service-${service.id}` },
	keywords: [service.label, service.id.replaceAll("-", " ")],
	text: `${service.description}\n\nPurpose:\n${service.title}\n\nKey Details:\n- ${service.heading}\n- ${service.intro}\n- ${service.paragraphs.join("\n- ")}\n- Scope of work: ${service.capabilities.join(", ")}.\n- Duration: ${service.duration}. ${service.timelineNote}\n- Suitable for: ${service.audience}\n- Deliverable: ${service.deliverable}\n- Process: ${service.cards.map((card) => `${card.title}: ${card.text}`).join("\n")}`,
}));

const missionPillars = [
	{
		title: "Democratize Patenting",
		text: "Make patent filing fast, affordable and free of jargon for startups, students and R&D teams.",
	},
	{
		title: "Engineer Strong IP",
		text: "Combine deep technical insight with legal precision to prepare patent applications for rigorous examination and potential enforcement.",
	},
	{
		title: "Build Innovation Moats",
		text: "Go beyond filing with landscape analysis, Freedom to Operate reviews and IP strategy, helping clients compete with insight rather than comply alone.",
	},
	{
		title: "Accelerate Impact",
		text: "Aim to move from disclosure to filing in days rather than months when the invention information and instructions are ready. In deep tech, speed is described as a strategic advantage.",
	},
];

const explorerGroups = [
	{
		label: "About Us",
		items: [
			{ label: "About Us", question: "Tell me about Tesla Innovation" },
			{ label: "Mission & Vision", question: "What is the company vision and mission?" },
			{ label: "Mission Pillars", question: "What are the four mission pillars?" },
			{ label: "Our Approach", question: "Explain Tesla Innovation's approach" },
		],
	},
	{
		label: "Patents",
		items: patentTypes.map((patent) => ({
			label: patent.label,
			question: `What is ${patent.label}?`,
		})),
	},
	{
		label: "Patent Services",
		items: patentServices.map((service) => ({
			label: service.label,
			question: `What is ${service.label}?`,
		})),
	},
	{
		label: "IP Services",
		items: [
			{ label: "All IP Services", question: "What are all the IP Services offered?" },
			{ label: "Design Registration", question: "Explain Design Registration under IP Services" },
			{ label: "Trademark Filing", question: "Explain Trademark Filing" },
			{ label: "Copyright Registration", question: "Explain Copyright Registration" },
			{ label: "Startup India Facilitation", question: "Explain Startup India Facilitation" },
			{ label: "IP Audit", question: "Explain IP Audit" },
		],
	},
	{
		label: "Other Sections",
		items: [
			{ label: "Global IP", question: "Explain Global IP" },
			{ label: "Litigation", question: "Explain Litigation" },
			{ label: "Corporate", question: "Explain Corporate services" },
			{ label: "Transactions", question: "Explain Transactions" },
			{ label: "Insights", question: "What is available under Insights?" },
			{ label: "Careers", question: "Show the published careers and open positions" },
			{ label: "Contact", question: "How can I contact Tesla Innovation?" },
		],
	},
];

const topicPages = [
	...patentTypePages,
	...patentServicePages,
	{
		page: PAGE_LINKS.contact,
		keywords: ["contact", "reach", "team", "phone", "email", "address", "location", "enquiry", "inquiry"],
		text: "General enquiries: archanaaiswarya76@gmail.com\nPhone: 91-8870084429\nAddress: No.532, Muniyappan Kovil Street, Chinna Pudhur, Salem - 636007\n\nThe Contact page also provides an enquiry form. Required fields include name, email and message; company and phone are optional.",
	},
	{
		page: PAGE_LINKS.careers,
		keywords: ["career", "careers", "job", "jobs", "vacancy", "vacancies", "recruitment", "hiring"],
		text: "Current published positions:\n- IP Associate - Chennai - Full Time - 0 to 3 Years\n- Technology Analyst - Bengaluru - Full Time - 1 to 4 Years\n- Legal Research Associate - Mumbai - Full Time - 0 to 2 Years\n- Corporate Advisory Associate - Delhi - Full Time - 1 to 3 Years\n\nOpen the Careers page to view descriptions, responsibilities, requirements and the application form.",
	},
	{ page: { label: "IP Associate", path: "/careers" }, keywords: ["ip associate"], text: "IP Associate\nLocation: Chennai\nType: Full Time\nExperience: 0 to 3 Years\n\nDescription: Work with the intellectual property team on patent, trademark and technology-related matters.\nResponsibilities: Intellectual property research; patent and trademark support; legal and research documentation; work with senior professionals.\nRequirements: Research and analytical skills, communication, interest in intellectual property and technology, and collaborative working ability." },
	{ page: { label: "Technology Analyst", path: "/careers" }, keywords: ["technology analyst"], text: "Technology Analyst\nLocation: Bengaluru\nType: Full Time\nExperience: 1 to 4 Years\n\nDescription: Support technology-focused projects and analyze emerging technologies, innovation and intellectual property.\nResponsibilities: Emerging technology research, trend analysis, project support and analytical reports.\nRequirements: Analytical thinking, technology and innovation interest, communication and complex-information analysis." },
	{ page: { label: "Legal Research Associate", path: "/careers" }, keywords: ["legal research associate"], text: "Legal Research Associate\nLocation: Mumbai\nType: Full Time\nExperience: 0 to 2 Years\n\nDescription: Conduct legal research and support teams with research, documentation and analysis.\nResponsibilities: Legal and regulatory research, law and regulation analysis, research summaries and internal knowledge resources.\nRequirements: Research skills, attention to detail, written communication and independent/collaborative working ability." },
	{ page: { label: "Corporate Advisory Associate", path: "/careers" }, keywords: ["corporate advisory associate"], text: "Corporate Advisory Associate\nLocation: Delhi\nType: Full Time\nExperience: 1 to 3 Years\n\nDescription: Support corporate advisory projects involving governance, compliance, transactions and business structuring.\nResponsibilities: Advisory assignments, corporate and regulatory research, transaction documentation and team coordination.\nRequirements: Analytical skills, corporate law/business knowledge, documentation skills and communication/teamwork." },
	{
		page: { label: "Mission & Vision", path: "/about#mission-vision" },
		keywords: ["mission and vision", "vision and mission", "innova way"],
		text: "Vision: To become India's most trusted IP partner, empowering innovators to transform bold ideas into protected, world-class assets.\n\nMission: We combine technical expertise, legal precision and strategic IP solutions to help innovators protect and grow their ideas.\n\nShort mission: To turn breakthrough ideas into strong IP, so innovators can build with confidence.",
	},
	{
		page: { label: "Company Vision", path: "/about#mission-vision" },
		keywords: ["company vision", "tesla innovation vision", "what is the vision", "vision of tesla", "globally defensible"],
		text: "Vision Heading: Making Every Indian Invention Globally Defensible.\n\nVision: To become India's most trusted IP partner, empowering innovators to transform bold ideas into protected, world-class assets.\n\nPurpose: The published vision describes a goal of supporting Indian innovators through first-principles strategy and purposeful IP protection.",
	},
	{
		page: { label: "Company Mission", path: "/about#mission-vision" },
		keywords: ["company mission", "tesla innovation mission", "what is the mission", "mission of tesla", "turning breakthrough ideas"],
		text: "Mission Heading: Turning Breakthrough Ideas Into Strong IP.\n\nFull mission: We combine technical expertise, legal precision and strategic IP solutions to help innovators protect and grow their ideas.\n\nShort mission: To turn breakthrough ideas into “unbreakable” IP, so innovators can build without fear.\n\nThe About page explains that “unbreakable IP” is an aspirational brand statement; no IP right can eliminate every risk or guarantee an outcome.",
	},
	{
		page: { label: "Mission Pillars", path: "/about#mission-vision" },
		keywords: ["mission pillars", "four mission pillars", "four pillars", "democratize patenting", "engineer strong ip", "build innovation moats", "accelerate impact"],
		text: missionPillars.map((pillar, index) => `${index + 1}. ${pillar.title}\n${pillar.text}`).join("\n\n"),
	},
	{ page: { label: "About Us", path: "/about#about" }, keywords: ["about us", "who are you", "company profile", "tesla innovation private limited"], text: "Tesla Innovation Private Limited helps organizations protect ideas, navigate regulation and execute important business decisions. It brings professional knowledge and practical analysis to intellectual property, corporate and innovation-led challenges." },
	{ page: { label: "Our Approach", path: "/about#approach" }, keywords: ["approach", "how do you work", "process"], text: "The website describes a four-step approach: Understand the objectives and constraints; Analyze the commercial, regulatory and intellectual property context; Strategize practical options; and Execute coordinated next steps." },
	{ page: { label: "Industries", path: "/about#industries" }, keywords: ["industries", "technology industry", "healthcare", "manufacturing", "finance"], text: "Published industries include Technology, Healthcare, Manufacturing, and Finance and emerging business. The website provides sector-specific information for organizations where technology, intellectual property and business decisions intersect." },
	{ page: { label: "Values", path: "/about#values" }, keywords: ["values", "integrity", "innovation", "collaboration", "responsibility"], text: "Tesla Innovation's published values are Integrity, Innovation, Collaboration and Responsibility." },
	{
		page: PAGE_LINKS.globalIp,
		keywords: ["global ip", "international ip", "cross-border", "international patent", "international trademark"],
		text: "Global IP information covers Global IP Strategy, Cross Border Protection, Portfolio Management, International Filing and Global Enforcement.",
	},
	{ page: { label: "Global IP Strategy", path: "/global-ip" }, keywords: ["global ip strategy"], text: "Global IP strategy helps organizations align international protection decisions with markets, manufacturing locations, commercial plans, local procedures and enforcement priorities." },
	{ page: { label: "Cross Border Protection", path: "/global-ip#cross-border" }, keywords: ["cross border protection"], text: "Cross Border Protection addresses coordination of IP rights across jurisdictions, including territorial rights, filing priorities and consistent protection for international operations." },
	{ page: { label: "Portfolio Management", path: "/global-ip#portfolio" }, keywords: ["global portfolio management", "international portfolio"], text: "Portfolio Management supports review and coordination of international IP assets, jurisdiction coverage, renewal planning and alignment with commercial priorities." },
	{ page: { label: "International Filing", path: "/global-ip#filing" }, keywords: ["international filing", "pct filing", "foreign filing"], text: "International Filing covers PCT and direct foreign filing planning, priority deadlines, jurisdiction selection and coordination with local counsel. A PCT filing does not itself grant a worldwide patent." },
	{ page: { label: "Global Enforcement", path: "/global-ip#enforcement" }, keywords: ["global enforcement", "international enforcement"], text: "Global Enforcement covers planning for the enforcement of intellectual property rights across relevant markets, based on jurisdiction-specific procedure and facts." },
	{
		page: PAGE_LINKS.ip,
		keywords: ["intellectual property", "trademark", "copyright", "design", "geographical indication", "domain name", "portfolio management", "ip commercialization", "ip enforcement", "ip"],
		text: "The Intellectual Property page covers IP Strategy, Patents, Patent Services, IP Services, Trademarks, Copyright, IP Portfolio, IP Commercialization and IP Enforcement.",
	},
	{ page: { label: "IP Services", path: "/intellectual-property#ip-services" }, keywords: ["ip services", "design registration", "trademark filing", "copyright registration", "startup india", "ip audit"], text: "Published IP Services include Design Registration, Trademark Filing, Copyright Registration support, Startup India Facilitation and IP Audit.\n\n- Design Registration protects eligible visual features of a product.\n- Trademark Filing covers brand names, logos and taglines.\n- Copyright Registration support covers authorship and ownership records for software, website materials and content.\n- Startup India facilitation and current government rebates depend on eligibility and scheme rules.\n- An IP Audit identifies IP assets, ownership and protection gaps." },
	{ page: { label: "Design Registration", path: "/intellectual-property#ip-services" }, keywords: ["design registration under ip services", "design registration ip service", "ip design registration"], text: "Design Registration\n\nPurpose: Protect a product's eligible visual features, including shape, configuration, pattern or ornamentation.\n\nKey Details:\n- Design protection addresses appearance, not technical function.\n- The appropriate route depends on the jurisdiction and application timing.\n- A design and patent can address different aspects of the same product.\n- The exact filing requirements, term and scope depend on the applicable design law." },
	{ page: { label: "Trademark Filing", path: "/intellectual-property#ip-services" }, keywords: ["trademark filing", "brand trademark filing"], text: "Trademark Filing\n\nPurpose: Protect brand identifiers such as a business or product name, logo and tagline.\n\nKey Details:\n- Support can include clearance planning and review of relevant goods and services.\n- Filing coordination and responses to examination issues may be included.\n- Scope depends on the mark, jurisdiction, class and subsequent use or record updates." },
	{ page: { label: "Copyright Registration", path: "/intellectual-property#ip-services" }, keywords: ["copyright registration", "copyright registration support"], text: "Copyright Registration\n\nPurpose: Organize authorship, ownership and registration support for original software, website materials and content.\n\nKey Details:\n- Copyright may arise automatically in many jurisdictions.\n- Registration requirements and evidentiary benefits vary by location and work type.\n- The website route is intended to clarify ownership and the relevant registration process." },
	{ page: { label: "Startup India Facilitation", path: "/intellectual-property#ip-services" }, keywords: ["startup india facilitation", "sipp", "startup scheme"], text: "Startup India Facilitation\n\nPurpose: Provide guidance and facilitator coordination for eligible DPIIT-recognized startups seeking patent, trademark or design support.\n\nKey Details:\n- SIPP facilitators are available under the scheme for qualifying filings, with facilitator fees borne by the government under scheme terms.\n- The published website information states that eligible startups may receive an 80% rebate on patent government filing fees and 50% on trademark government filing fees.\n- Eligibility and current official rules apply." },
	{ page: { label: "IP Audit", path: "/intellectual-property#ip-services" }, keywords: ["ip audit", "intellectual property audit"], text: "IP Audit\n\nPurpose: Identify and review IP across a company and prepare a prioritized protection roadmap.\n\nKey Details:\n- A review may cover inventions, brands, designs, software, content, know-how and ownership records.\n- The audit highlights gaps, risks and practical next steps.\n- Findings help align protection decisions with the organization's assets and business priorities." },
	{ page: { label: "Trademarks", path: "/intellectual-property#trademarks" }, keywords: ["trademark", "brand name", "logo", "tagline"], text: "Trademark support covers brand identifiers such as names, logos and taglines, including clearance planning, goods and services, filing coordination and examination responses." },
	{ page: { label: "Copyright", path: "/intellectual-property#copyright" }, keywords: ["copyright", "software copyright", "website content"], text: "Copyright support covers original software, website materials and content, including authorship, ownership and registration support. Registration requirements and benefits vary by jurisdiction." },
	{ page: { label: "IP Portfolio", path: "/intellectual-property#portfolio" }, keywords: ["ip portfolio"], text: "IP Portfolio services cover review and organization of inventions, brands, designs, copyright, know-how and ownership records to support a practical protection roadmap." },
	{ page: { label: "IP Commercialization", path: "/intellectual-property#commercialization" }, keywords: ["ip commercialization", "licensing", "ip monetization"], text: "IP Commercialization covers options for licensing, assignment and monetizing qualifying intellectual property while reviewing ownership, scope, obligations and commercial objectives." },
	{ page: { label: "IP Enforcement", path: "/intellectual-property#enforcement" }, keywords: ["ip enforcement", "infringement"], text: "IP Enforcement covers enforcement options for protected rights, including evidence review, notice strategy and dispute planning. Actions depend on the right, facts and applicable law." },
	{
		page: PAGE_LINKS.litigation,
		keywords: ["litigation", "dispute", "arbitration", "mediation", "infringement", "trade secret"],
		text: "The Litigation page covers Dispute Strategy, Commercial Disputes, Arbitration, Mediation and IP Litigation.",
	},
	{ page: { label: "Dispute Strategy", path: "/litigation" }, keywords: ["dispute strategy"], text: "Dispute Strategy focuses on identifying the issues, evidence, commercial objectives and practical options before formal or alternative dispute proceedings." },
	{ page: { label: "Commercial Disputes", path: "/litigation#commercial" }, keywords: ["commercial dispute", "contract dispute"], text: "Commercial Disputes covers disagreement over commercial arrangements, obligations and business conduct, with strategy shaped by contract terms and applicable law." },
	{ page: { label: "Arbitration", path: "/litigation#arbitration" }, keywords: ["arbitration"], text: "Arbitration support covers private dispute resolution under an applicable agreement or law, including strategy, evidence and procedural planning." },
	{ page: { label: "Mediation", path: "/litigation#mediation" }, keywords: ["mediation"], text: "Mediation support covers negotiated dispute resolution, preparation of issues and interests, and practical settlement planning." },
	{ page: { label: "IP Litigation", path: "/litigation#ip-litigation" }, keywords: ["ip litigation", "patent dispute", "trademark dispute"], text: "IP Litigation covers disputes involving intellectual property, including patent and trademark disputes, infringement, enforcement and evidence under applicable procedure." },
	{
		page: PAGE_LINKS.corporate,
		keywords: ["corporate", "governance", "compliance", "risk management", "corporate structure", "business advisory"],
		text: "Corporate information covers Corporate Advisory, Governance, Compliance, Risk Management and Corporate Structuring.",
	},
	{ page: { label: "Corporate Advisory", path: "/corporate" }, keywords: ["corporate advisory", "business advisory"], text: "Corporate Advisory supports organizations with business decisions involving structure, operations, regulation and strategic priorities." },
	{ page: { label: "Governance", path: "/corporate#governance" }, keywords: ["corporate governance", "board governance"], text: "Governance support covers decision-making structure, responsibilities, oversight and processes for accountable organizational leadership." },
	{ page: { label: "Compliance", path: "/corporate#compliance" }, keywords: ["compliance", "regulatory compliance"], text: "Compliance support covers identification of applicable obligations, internal processes and practical measures for meeting regulatory requirements." },
	{ page: { label: "Risk Management", path: "/corporate#risk" }, keywords: ["risk management", "corporate risk"], text: "Risk Management covers review of legal, operational and regulatory risks and development of proportionate controls and response planning." },
	{ page: { label: "Corporate Structuring", path: "/corporate#structuring" }, keywords: ["corporate structuring", "corporate structure"], text: "Corporate Structuring covers organizational arrangements and structural decisions aligned with ownership, operations and strategic objectives." },
	{
		page: PAGE_LINKS.transactions,
		keywords: ["transaction", "transactions", "merger", "acquisition", "due diligence", "joint venture", "investment", "contract", "licensing"],
		text: "The Transactions page covers Transaction Strategy, Mergers & Acquisitions, Investments, Joint Ventures and Strategic Transactions.",
	},
	{ page: { label: "Transaction Strategy", path: "/transactions" }, keywords: ["transaction strategy"], text: "Transaction Strategy considers commercial goals, transaction structure, intellectual property, regulatory issues and implementation planning." },
	{ page: { label: "Mergers & Acquisitions", path: "/transactions#mergers" }, keywords: ["merger", "acquisition", "m&a"], text: "Mergers & Acquisitions support covers due diligence, deal structure, IP and contractual issues and coordination of transaction requirements." },
	{ page: { label: "Investments", path: "/transactions#investments" }, keywords: ["investment", "investor", "funding"], text: "Investment support covers transaction planning, diligence and structuring for investment in a business or technology project." },
	{ page: { label: "Joint Ventures", path: "/transactions#joint-ventures" }, keywords: ["joint venture", "joint ventures"], text: "Joint Venture support covers structure, ownership, IP arrangements, governance and practical responsibilities between participating parties." },
	{ page: { label: "Strategic Transactions", path: "/transactions#strategic" }, keywords: ["strategic transaction", "licensing", "technology transaction"], text: "Strategic Transactions cover licensing, technology arrangements and partnerships aligned with commercial and intellectual property objectives." },
	{
		page: PAGE_LINKS.insights,
		keywords: ["insight", "insights", "article", "articles", "news", "publication", "publications", "case study", "case studies", "event", "events"],
		text: "Published Insights sections are Articles, News, Publications, Case Studies and Events. Open the Insights page and its relevant subsection to read the specific published content.",
	},
	{
		page: PAGE_LINKS.about,
		keywords: ["about", "company", "who are you", "tesla innovation", "innovation"],
		text: "Tesla Innovation describes its work as helping organizations protect ideas, navigate regulation, and make business decisions. The About page explains its practical, business minded approach to intellectual property, corporate, and innovation led challenges.",
	},
	{
		page: PAGE_LINKS.home,
		keywords: ["home", "website", "services", "what do you do"],
		text: "The Home page introduces Tesla Innovation and provides links to its company information and service areas, including intellectual property, corporate advisory, transactions, and dispute resolution.",
	},
];

function getAssistantReply(message) {
	const normalizedMessage = message.trim().toLowerCase();

	if (!normalizedMessage) {
		return { text: MISSING_REPLY, page: PAGE_LINKS.contact };
	}

	if (
		normalizedMessage.includes("patentability search") &&
		normalizedMessage.includes("patent watch")
	) {
		const patentability = patentServices.find((service) => service.id === "patentability-search");
		const patentWatch = patentServices.find((service) => service.id === "patent-watch");
		return {
			heading: "Patentability Search vs Patent Watch",
			text: `Patentability Search:\n${patentability.description}\nPurpose: Assess novelty and prior-art risks before drafting.\n\nPatent Watch:\n${patentWatch.description}\nPurpose: Provide recurring monitoring of new patent activity in a defined technology domain.\n\nDifference: Patentability Search is a focused, one-time prior-art assessment before drafting or investment. Patent Watch is an ongoing monitoring service for later publications and competitor activity.`,
			page: {
				label: "Patent Services",
				path: "/intellectual-property#patent-services",
			},
		};
	}

	if (
		normalizedMessage.includes("ip service") &&
		(normalizedMessage.includes("all") ||
			normalizedMessage.includes("each") ||
			normalizedMessage.includes("available") ||
			normalizedMessage.includes("offered") ||
			normalizedMessage.includes("categories"))
	) {
		return {
			heading: "IP Services",
			text: "The published IP Services categories are:\n\n1. Design Registration - Protect eligible visual features of a product.\n2. Trademark Filing - Protect brand names, logos and taglines.\n3. Copyright Registration - Organize authorship, ownership and registration support for original software, website materials and content.\n4. Startup India Facilitation - Explain eligibility and coordinate relevant startup filing support under the applicable scheme rules.\n5. IP Audit - Identify IP assets, ownership, protection gaps and a prioritized protection roadmap.",
			page: {
				label: "IP Services",
				path: "/intellectual-property#ip-services",
			},
		};
	}

	let bestMatch = null;
	let bestScore = 0;

	topicPages.forEach((topic) => {
		topic.keywords.forEach((keyword) => {
			const normalizedKeyword = keyword.toLowerCase();
			if (
				normalizedKeyword === "ip"
					? /\bip\b/.test(normalizedMessage)
					: normalizedMessage.includes(normalizedKeyword)
			) {
				const score = normalizedKeyword.length;
				if (score > bestScore) {
					bestMatch = topic;
					bestScore = score;
				}
			}
		});
	});

	if (bestMatch) {
		return { heading: bestMatch.page.label, text: bestMatch.text, page: bestMatch.page };
	}

	const isTeslaRelated = [
		"tesla",
		"our company",
		"our website",
		"your company",
		"your services",
		"patent",
		"trademark",
		"copyright",
		"geographical indication",
		"domain name",
		"intellectual",
		"litigation",
		"corporate",
		"transactions",
		"insights",
		"career",
		"contact",
		"about",
		"global",
	].some((keyword) => normalizedMessage.includes(keyword));

	if (isTeslaRelated) {
		return { text: MISSING_REPLY, page: PAGE_LINKS.contact };
	}

	return { text: UNRELATED_REPLY, page: PAGE_LINKS.home };
}

function Floatingchat() {
	const [isOpen, setIsOpen] = useState(false);
	const [draft, setDraft] = useState("");
	const [messages, setMessages] = useState([welcomeMessage]);
	const [explorerOpen, setExplorerOpen] = useState(false);
	const [explorerGroup, setExplorerGroup] = useState("Patents");

	const sendMessage = (event) => {
		event.preventDefault();
		const text = draft.trim();
		if (!text) return;
		submitQuestion(text);
	};

	const submitQuestion = (text) => {
		const reply = getAssistantReply(text);
		const messageId = Date.now();

		setMessages((currentMessages) => [
			...currentMessages,
			{ id: messageId, from: "visitor", text },
			{ id: messageId + 1, from: "assistant", ...reply },
		]);
		setDraft("");
	};

	return (
		<div className="tesla-chat-widget">
			{isOpen && (
				<section className="tesla-chat-panel" aria-label="Tesla assistant chat">
					<header className="tesla-chat-header">
						<div className="tesla-chat-brand-icon" aria-hidden="true">
							<Bot size={25} strokeWidth={2} />
						</div>
						<div className="tesla-chat-heading">
							<strong>Tesla Assistant</strong>
							<span>Website only company assistance</span>
						</div>
						<button className="tesla-chat-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close chat">
							<X size={22} />
						</button>
					</header>

					<div className="tesla-chat-messages" aria-live="polite">
						{messages.map((message) => (
							<div className={`tesla-chat-row tesla-chat-row-${message.from}`} key={message.id}>
								{message.from === "assistant" && <span className="tesla-chat-avatar" aria-hidden="true"><Bot size={19} /></span>}
								<div className="tesla-chat-content">
									{message.heading && <strong className="tesla-chat-page-title">{message.heading}</strong>}
									<p className="tesla-chat-bubble">{message.text}</p>
									{message.page && (
										<a
											className="tesla-chat-page-link"
											href={`${OFFICIAL_WEBSITE}${message.page.path}`}
											target="_blank"
											rel="noreferrer"
										>
											Explore this page: {message.page.label}
										</a>
									)}
								</div>
							</div>
						))}
					</div>

					<div className="tesla-chat-explorer">
						<button
							type="button"
							className="tesla-chat-explorer-toggle"
							aria-expanded={explorerOpen}
							onClick={() => setExplorerOpen((open) => !open)}
						>
							<span>Browse website information</span>
							<span aria-hidden="true">{explorerOpen ? "−" : "+"}</span>
						</button>
						{explorerOpen && (
							<div className="tesla-chat-explorer-body">
								<div className="tesla-chat-explorer-tabs" role="tablist" aria-label="Website sections">
									{explorerGroups.map((group) => (
										<button
											type="button"
											role="tab"
											aria-selected={explorerGroup === group.label}
											className={explorerGroup === group.label ? "is-active" : ""}
											key={group.label}
											onClick={() => setExplorerGroup(group.label)}
										>
											{group.label}
										</button>
									))}
								</div>
								<div className="tesla-chat-explorer-items">
									{explorerGroups
										.find((group) => group.label === explorerGroup)
										?.items.map((item) => (
											<button
												type="button"
												key={item.question}
												onClick={() => submitQuestion(item.question)}
											>
												{item.label}
											</button>
										))}
								</div>
							</div>
						)}
					</div>

					<div className="tesla-chat-suggestions" aria-label="Suggested questions">
						{suggestedQuestions.map((question) => (
							<button
								type="button"
								key={question}
								onClick={() => setDraft(question)}
							>
								{question}
							</button>
						))}
					</div>

					<form className="tesla-chat-composer" onSubmit={sendMessage}>
						<label className="tesla-chat-input-wrap">
							<span className="tesla-chat-sr-only">Message the Tesla assistant</span>
							<input
								value={draft}
								onChange={(event) => setDraft(event.target.value)}
								placeholder="Ask about Tesla Innovation..."
								autoComplete="off"
							/>
						</label>
						<button className="tesla-chat-send" type="submit" aria-label="Send message" disabled={!draft.trim()}>
							<Send size={21} />
						</button>
					</form>
				</section>
			)}

			<button
				className={`tesla-chat-launcher${isOpen ? " is-open" : ""}`}
				type="button"
				aria-label={isOpen ? "Close Tesla assistant" : "Chat with us"}
				aria-expanded={isOpen}
				onClick={() => setIsOpen((open) => !open)}
			>
				{isOpen ? <X size={25} /> : <MessageCircle size={25} />}
			</button>
			{!isOpen && <span className="tesla-chat-prompt" aria-hidden="true">Chat with us</span>}
		</div>
	);
}

export default Floatingchat;
