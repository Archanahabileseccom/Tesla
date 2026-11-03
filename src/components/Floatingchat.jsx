import { useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import "./Floatingchat.css";

const welcomeMessage = {
	id: 1,
	from: "assistant",
	text: "Hello! I'm the Tesla assistant. Ask about our intellectual property, corporate, litigation, or transaction services, or how to contact our team.",
};

function getAssistantReply(message) {
	const normalizedMessage = message.toLowerCase();

	if (normalizedMessage.includes("contact") || normalizedMessage.includes("team")) {
		return "You can reach our team through the Contact page. Choose 'Contact' in the site navigation and share a few details about your enquiry.";
	}

	if (normalizedMessage.includes("patent") || normalizedMessage.includes("trademark") || normalizedMessage.includes("copyright") || normalizedMessage.includes("ip")) {
		return "Our Intellectual Property team can help with IP strategy, patents, trademarks, copyright, portfolio management, and enforcement. Visit the Intellectual Property page to explore these services.";
	}

	if (normalizedMessage.includes("litigation") || normalizedMessage.includes("dispute") || normalizedMessage.includes("arbitration")) {
		return "We advise on dispute strategy, commercial disputes, arbitration, mediation, and IP litigation. Visit the Litigation page for more information.";
	}

	if (normalizedMessage.includes("corporate") || normalizedMessage.includes("compliance") || normalizedMessage.includes("governance")) {
		return "Our Corporate team works across advisory, governance, compliance, risk management, and corporate structuring. The Corporate page has more detail.";
	}

	return "Thanks for your message. I can help with IP, litigation, corporate, and transaction service enquiries. For specific advice, please contact our team through the Contact page.";
}

function Floatingchat() {
	const [isOpen, setIsOpen] = useState(false);
	const [draft, setDraft] = useState("");
	const [messages, setMessages] = useState([welcomeMessage]);

	const sendMessage = (event) => {
		event.preventDefault();
		const text = draft.trim();
		if (!text) return;

		setMessages((currentMessages) => [
			...currentMessages,
			{ id: Date.now(), from: "visitor", text },
			{ id: Date.now() + 1, from: "assistant", text: getAssistantReply(text) },
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
							<span>Services, insights and contact help</span>
						</div>
						<button className="tesla-chat-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close chat">
							<X size={22} />
						</button>
					</header>

					<div className="tesla-chat-messages" aria-live="polite">
						{messages.map((message) => (
							<div className={`tesla-chat-row tesla-chat-row-${message.from}`} key={message.id}>
								{message.from === "assistant" && <span className="tesla-chat-avatar" aria-hidden="true"><Bot size={19} /></span>}
								<p className="tesla-chat-bubble">{message.text}</p>
							</div>
						))}
					</div>

					<form className="tesla-chat-composer" onSubmit={sendMessage}>
						<label className="tesla-chat-input-wrap">
							<span className="tesla-chat-sr-only">Message the Tesla assistant</span>
							<input
								value={draft}
								onChange={(event) => setDraft(event.target.value)}
								placeholder="Ask about our services..."
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
