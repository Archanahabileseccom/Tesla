import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const businessCardUrl = "http://mikivcard.com/tesla-innovation";
const defaultMessage =
	`Hi Tesla Innovation, I'd like to discuss how you can help my organization. Here's my card: ${businessCardUrl}`;
const apiBaseUrl =
	import.meta.env.VITE_API_BASE_URL ||
	(import.meta.env.DEV ? "http://127.0.0.1:8000" : window.location.origin);

function WhatsAppChat() {
	const [isQrOpen, setIsQrOpen] = useState(false);
	const [isOpeningWhatsApp, setIsOpeningWhatsApp] = useState(false);
	const [whatsappError, setWhatsAppError] = useState("");

	const openWhatsApp = async (event) => {
		event.preventDefault();
		if (isOpeningWhatsApp) return;

		const whatsappWindow = window.open("about:blank", "_blank");
		if (!whatsappWindow) {
			setWhatsAppError("Allow pop-ups to open WhatsApp.");
			return;
		}

		whatsappWindow.opener = null;
		setIsOpeningWhatsApp(true);
		setWhatsAppError("");

		try {
			const response = await fetch(
				`${apiBaseUrl.replace(/\/+$/, "")}/api/integrations/whatsapp/`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ message: defaultMessage }),
				},
			);
			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || `Request failed (${response.status}).`);
			}
			if (data.success !== true || typeof data.url !== "string") {
				throw new Error("The server did not return a WhatsApp link.");
			}

			const whatsappUrl = new URL(data.url);
			if (
				whatsappUrl.protocol !== "https:" ||
				whatsappUrl.hostname !== "wa.me" ||
				!/^\/\d+$/.test(whatsappUrl.pathname)
			) {
				throw new Error("The server returned an invalid WhatsApp link.");
			}

			whatsappWindow.location.replace(whatsappUrl.toString());
		} catch (error) {
			whatsappWindow.close();
			console.error("Failed to get the WhatsApp link:", error);
			setWhatsAppError(
				error instanceof TypeError
					? "We couldn't connect to the WhatsApp service. Please try again later."
					: error.message || "WhatsApp couldn't be opened. Please try again.",
			);
		} finally {
			setIsOpeningWhatsApp(false);
		}
	};

	useEffect(() => {
		if (!isQrOpen) return undefined;

		const handleKeyDown = (event) => {
			if (event.key === "Escape") setIsQrOpen(false);
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isQrOpen]);

	return (
		<>
			<style>{`
				.tesla-qr-button {
					position: fixed;
					right: 35px;
					bottom: 104px;
					z-index: 81;
					width: 48px;
					height: 48px;
					border: 2px solid #173d2b;
					border-radius: 50%;
					background: #fff;
					color: #173d2b;
					font: 700 12px "DM Sans", "Segoe UI", sans-serif;
					cursor: pointer;
					box-shadow: 0 5px 16px rgba(20, 50, 35, 0.2);
				}

				.tesla-qr-overlay {
					position: fixed;
					inset: 0;
					z-index: 1000;
					display: grid;
					place-items: center;
					padding: 20px;
					background: rgba(0, 0, 0, 0.55);
				}

				.tesla-qr-dialog {
					position: relative;
					width: min(100%, 360px);
					padding: 28px;
					border-radius: 16px;
					background: #fff;
					color: #173d2b;
					text-align: center;
					font-family: "DM Sans", "Segoe UI", sans-serif;
					box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
				}

				.tesla-qr-close {
					position: absolute;
					top: 10px;
					right: 12px;
					border: 0;
					background: transparent;
					color: #173d2b;
					font-size: 26px;
					cursor: pointer;
				}

				.tesla-qr-code {
					display: block;
					width: 220px;
					height: 220px;
					margin: 20px auto;
				}

				.tesla-qr-link {
					color: #173d2b;
					font-size: 14px;
					overflow-wrap: anywhere;
				}

				.tesla-whatsapp-button {
					position: fixed;
					right: 28px;
					bottom: 28px;
					z-index: 81;
					width: 62px;
					height: 62px;
					display: grid;
					place-items: center;
					border: 2px solid #fff;
					border-radius: 50%;
					background: #25d366;
					box-shadow: 0 8px 22px rgba(20, 90, 52, 0.28);
					color: #fff;
					padding: 0;
					cursor: pointer;
					isolation: isolate;
					animation: tesla-whatsapp-pulse 2s ease-out infinite;
					transition: transform 160ms ease, background 160ms ease;
				}

				.tesla-whatsapp-button:disabled {
					cursor: wait;
					opacity: 0.8;
				}

				.tesla-whatsapp-error {
					position: fixed;
					right: 28px;
					bottom: 102px;
					z-index: 82;
					max-width: min(320px, calc(100vw - 40px));
					padding: 10px 14px;
					border-radius: 8px;
					background: #8b1e1e;
					color: #fff;
					font: 14px/1.4 "DM Sans", "Segoe UI", sans-serif;
					box-shadow: 0 5px 16px rgba(20, 50, 35, 0.2);
				}

				.tesla-whatsapp-label {
					position: absolute;
					bottom: calc(100% + 12px);
					left: 50%;
					padding: 8px 12px;
					border-radius: 8px;
					background: #173d2b;
					color: #fff;
					font-family: "DM Sans", "Segoe UI", sans-serif;
					font-size: 14px;
					font-weight: 600;
					line-height: 1;
					white-space: nowrap;
					opacity: 0;
					transform: translate(-50%, 4px);
					pointer-events: none;
					transition: opacity 160ms ease, transform 160ms ease;
				}

				.tesla-whatsapp-label::after {
					position: absolute;
					top: 100%;
					left: 50%;
					width: 8px;
					height: 8px;
					background: #173d2b;
					content: "";
					transform: translate(-50%, -50%) rotate(45deg);
				}

				.tesla-whatsapp-button:hover .tesla-whatsapp-label,
				.tesla-whatsapp-button:focus-visible .tesla-whatsapp-label {
					opacity: 1;
					transform: translate(-50%, 0);
				}

				.tesla-whatsapp-button:hover {
					transform: translateY(-2px);
					background: #1ebe5d;
				}

				.tesla-whatsapp-button:focus-visible {
					outline: 3px solid #173dbe;
					outline-offset: 3px;
				}

				.tesla-whatsapp-button svg {
					position: relative;
					z-index: 1;
					width: 31px;
					height: 31px;
				}

				@keyframes tesla-whatsapp-pulse {
					0%, 100% { box-shadow: 0 8px 22px rgba(20, 90, 52, 0.28), 0 0 0 0 rgba(37, 211, 102, 0.42); }
					50% { box-shadow: 0 8px 22px rgba(20, 90, 52, 0.28), 0 0 0 9px rgba(37, 211, 102, 0); }
				}

				@media (max-width: 600px) {
					.tesla-qr-button {
						right: 20px;
						bottom: max(82px, calc(env(safe-area-inset-bottom) + 66px));
					}

					.tesla-whatsapp-button {
						right: 16px;
						bottom: max(16px, env(safe-area-inset-bottom));
						width: 56px;
						height: 56px;
					}

				}

				@media (prefers-reduced-motion: reduce) {
					.tesla-whatsapp-button {
						animation: none;
						transition: none;
					}

					.tesla-whatsapp-label {
						transition: none;
					}
				}
			`}</style>
			<button
				className="tesla-qr-button"
				type="button"
				onClick={() => setIsQrOpen(true)}
				aria-label="Show Tesla Innovation business card QR code"
				aria-expanded={isQrOpen}
				title="Scan for Tesla Innovation's business card"
			>
				QR
			</button>
			<button
				className="tesla-whatsapp-button"
				type="button"
				onClick={openWhatsApp}
				disabled={isOpeningWhatsApp}
				aria-busy={isOpeningWhatsApp}
				aria-label="Chat with Tesla Innovation on WhatsApp"
				title="Chat with us on WhatsApp"
			>
				<span className="tesla-whatsapp-label" aria-hidden="true">WhatsApp</span>
				<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path d="M12.04 2a9.94 9.94 0 0 0-8.52 15.05L2 22l5.08-1.33A9.94 9.94 0 1 0 12.04 2Zm0 18.1a8.14 8.14 0 0 1-4.15-1.13l-.3-.18-3.02.79.81-2.94-.2-.31A8.15 8.15 0 1 1 12.04 20.1Zm4.47-6.1c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.4-.54-.41l-.46-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.01.4 1.35.51.57.18 1.09.16 1.5.1.46-.07 1.43-.59 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
				</svg>
			</button>
			{whatsappError && (
				<p className="tesla-whatsapp-error" role="alert">
					{whatsappError}
				</p>
			)}
			{isQrOpen && (
				<div
					className="tesla-qr-overlay"
					onClick={(event) => {
						if (event.target === event.currentTarget) setIsQrOpen(false);
					}}
				>
					<section
						className="tesla-qr-dialog"
						role="dialog"
						aria-modal="true"
						aria-labelledby="tesla-qr-title"
					>
						<button
							className="tesla-qr-close"
							type="button"
							onClick={() => setIsQrOpen(false)}
							aria-label="Close QR code"
						>
							&times;
						</button>
						<h2 id="tesla-qr-title">Tesla Innovation</h2>
						<p>Scan to open our business card.</p>
						<QRCodeSVG
							className="tesla-qr-code"
							value={businessCardUrl}
							size={220}
							level="H"
							includeMargin
							title="Tesla Innovation business card QR code"
						/>
						<a
							className="tesla-qr-link"
							href={businessCardUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							{businessCardUrl}
						</a>
					</section>
				</div>
			)}
		</>
	);
}

export default WhatsAppChat;