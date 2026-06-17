import React, { useState } from "react";
import './share.css';

const ShareLinkButton = () => {
	const url = "kodoscholarships.com";
	const [copied, setCopied] = useState(false);

	const handleInviteClick = async () => {
		try {
			if (navigator.share) {
				await navigator.share({
					title: "Invite Friends",
					text: "Join us using this link!",
					url: url
				});
			} else {
				
				const isWhatsAppSupported = /WhatsApp/.test(navigator.userAgent);

				if (isWhatsAppSupported) {
					console.log(isWhatsAppSupported, "here");
					shareViaWhatsApp(url);
				} else {
					copyToClipboard(url);
					setCopied(true);
				}
			}
		} catch (error) {
			console.error("Error sharing link:", error);
		}
	};

	const copyToClipboard = (text) => {
		const textArea = document.createElement("textarea");
		textArea.value = text;
		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand("copy");
		document.body.removeChild(textArea);
	};

	const shareViaWhatsApp = (text) => {
		const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(text)}`;
		window.location.href = whatsappUrl;
	};

	return (
		<div>
			<button onClick={handleInviteClick}>Invite</button>
			{copied && <p>Link copied to clipboard!</p>}
		</div>
	);
};

export default ShareLinkButton;
