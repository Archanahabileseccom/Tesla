import { useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
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

const UNRELATED_REPLY = `I'm Tesla Assistant, designed exclusively to assist with the Tesla Innovation Private Limited website.

Please ask questions related to our company, services, intellectual property solutions, corporate information, transactions, insights, careers, or contact details.

Official Website: ${OFFICIAL_WEBSITE}/`;

const MISSING_REPLY = `I'm sorry, this information is not available on the Tesla Innovation website.

Please visit our official website or refer to the Contact page for further assistance.`;

const welcomeMessage = {
	id: 1,
	from: "assistant",
	text: "Hello! Welcome to Tesla Innovation Private Limited.\n\nI'm Tesla Assistant. I can help you find information about our company, services, intellectual property solutions, global IP, litigation, corporate services, transactions, insights, careers, and contact information.\n\nHow can I assist you today?\n\nOfficial Website: " + OFFICIAL_WEBSITE + "/",
	page: PAGE_LINKS.home,
};

const topicPages = [
	{
		page: PAGE_LINKS.contact,
		keywords: ["contact", "reach", "team", "phone", "email", "address", "location"],
		text: "Use the Contact page to share an enquiry with Tesla Innovation. The page includes a contact form.",
	},
	{
		page: PAGE_LINKS.careers,
		keywords: ["career", "careers", "job", "jobs", "vacancy", "vacancies", "recruitment", "hiring"],
		text: "The Careers page provides information about opportunities at Tesla Innovation. Please review that page for role and application details.",
	},
	{
		page: PAGE_LINKS.globalIp,
		keywords: ["global ip", "international ip", "cross-border", "international patent", "international trademark"],
		text: "The Global IP page describes international IP strategy, cross-border protection, portfolio management, international filing, and global enforcement.",
	},
	{
		page: PAGE_LINKS.ip,
		keywords: ["intellectual property", "patent", "trademark", "copyright", "design protection", "geographical indication", "domain name", "ip"],
		text: "The Intellectual Property page covers IP strategy and the protection and management of patents, trademarks, designs, copyright, and other IP assets.",
	},
	{
		page: PAGE_LINKS.litigation,
		keywords: ["litigation", "dispute", "arbitration", "mediation", "infringement", "trade secret"],
		text: "The Litigation page covers dispute strategy, commercial disputes, arbitration, mediation, and IP litigation.",
	},
	{
		page: PAGE_LINKS.corporate,
		keywords: ["corporate", "governance", "compliance", "risk management", "corporate structure", "business advisory"],
		text: "The Corporate page covers corporate advisory, governance, compliance, risk management, and corporate structuring.",
	},
	{
		page: PAGE_LINKS.transactions,
		keywords: ["transaction", "transactions", "merger", "acquisition", "due diligence", "joint venture", "investment", "contract", "licensing"],
		text: "The Transactions page covers transaction strategy, mergers and acquisitions, due diligence, joint ventures, investments, and contracts.",
	},
	{
		page: PAGE_LINKS.insights,
		keywords: ["insight", "insights", "article", "articles", "news", "publication", "publications", "case study", "case studies", "event", "events"],
		text: "The Insights page includes articles, news, publications, case studies, and events about topics such as intellectual property, technology, and innovation.",
	},
	{
		page: PAGE_LINKS.about,
		keywords: ["about", "company", "who are you", "tesla innovation", "innovation"],
		text: "The About page describes Tesla Innovation's practical, business-minded approach to intellectual property, corporate, and innovation-led challenges.",
	},
	{
		page: PAGE_LINKS.home,
		keywords: ["home", "website", "services", "what do you do"],
		text: "The Home page introduces Tesla Innovation and links to its company information and service areas.",
	},
];

function getAssistantReply(message) {
	const normalizedMessage = message.trim().toLowerCase();

	if (!normalizedMessage) {
		return { text: MISSING_REPLY, page: PAGE_LINKS.contact };
	}

	const match = topicPages.find(({ keywords }) =>
		keywords.some((keyword) =>
			keyword === "ip"
				? /\bip\b/.test(normalizedMessage)
				: normalizedMessage.includes(keyword),
		),
	);

	if (match) {
		return { text: match.text, page: match.page };
	}

	const isTeslaRelated = ["tesla", "our company", "our website", "your company", "your services"].some(
		(keyword) => normalizedMessage.includes(keyword),
	);

	if (isTeslaRelated) {
		return { text: MISSING_REPLY, page: PAGE_LINKS.contact };
	}

	return { text: UNRELATED_REPLY, page: PAGE_LINKS.home };
}

function Floatingchat() {
	const [isOpen, setIsOpen] = useState(false);
	const [draft, setDraft] = useState("");
	const [messages, setMessages] = useState([welcomeMessage]);

	const sendMessage = (event) => {
		event.preventDefault();
		const text = draft.trim();
		if (!text) return;
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
							<span>Website-only company assistance</span>
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
