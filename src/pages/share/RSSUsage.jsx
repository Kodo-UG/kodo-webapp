import { useMediaQuery } from "@uidotdev/usehooks";
import { Share2, Copy, Check } from "lucide-react"
import { useState } from "react";
// import CustomShareComponent from "./CustomShareComponent";
import './share.css';

const CustomShareComponent = ({ url }) => {
	const shareData = {
	  title: "Join Kodo Scholarships",
	  text: "Get access to exclusive scholarships and opportunities!",
	  url: url,
	}
  
	const handleShare = async () => {
	  try {
		if (navigator.share) {
		  await navigator.share(shareData)
		} else {
		  // Fallback for browsers that don't support the Web Share API
		  copyToClipboard(url)
		}
	  } catch (error) {
		console.error("Error sharing:", error)
	  }
	}
  
	const copyToClipboard = (text) => {
	  navigator.clipboard.writeText(text)
	}
  
	return (
	  <button onClick={handleShare} className="share-button"
		style={{
			backgroundColor: '#00d6dd'
		}}
	  >
		<Share2 className="icon" />
		Share Your Invite Link
	  </button>
	)
  }

export default function RSSUsage() {
	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const isLgMd = useMediaQuery("only screen and (min-width : 1023px)");
	const isMd = useMediaQuery(
		"only screen and (min-width : 700px) and (max-width : 1022px)"
	);
	const isLg = useMediaQuery("only screen and (min-width : 1200px)");

	const userId = localStorage.getItem("userID");
	const URL = `https://kodoscholarships.com/admissions/${userId}`;
	const useUrl = `https://kodoscholarships.com/admissions/${userId}`;

	const [copied, setCopied] = useState(false)
	const copyToClipboard = () => {
		navigator.clipboard.writeText(useUrl);
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	  }

	return (
		<div
			className="p-5 mt-5 d-flex flex-column align-items-center justify-content-center "
			style={{
				backgroundColor: "#f0f4f8"
			}}
		>
			<div
				className={` bg-white h-100  mb-5 px-4 py-4`}
				style={{
					width: isSm ? "100%" : isMd ? "85%" : "50%",
					marginLeft: isLg ? "20rem" : isLgMd ? '15rem' : isMd ? "0rem" : isSm ? "1rem" : "",
					boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<div className=" w-100 " style={{ height: "16rem" }}>
					<img
						className="w-100 h-100 object-cover"
						src="/images/inv.png"
						alt=""
						style={{
							height: "100%",
							width: "100%",
							objectFit: "cover"
						}}
					/>
				</div>
				<div
					className="bg-white text-center p-2"
					style={{
						borderBottom: "2px solid gray"
					}}
				>
					<h4 style={{ fontWeight: "bold" }}>
						Get A Free Month Subscription!
					</h4>
					<p>
						Invite 5 Friends to Kodo Scholarships and get yourself a free
						subscription for one month
					</p>
				</div>
				<div className="w-100  px-4">
					<div className="w-90 p-4  h-25vh d-flex align-items-center justify-content-center flex-column mb-4">
						<CustomShareComponent url={URL} />
										<div className="counters-container">
							<div className="counter friends-counter"
								style={{
									backgroundColor: '#000000'
								}}
							>
								<p className="counter-number">05</p>
								<p className="counter-label">FRIENDS INVITED</p>
							</div>
							<div className="counter months-counter"
								style={{
									paddingTop: isLg ? 20 : isLgMd ? 20 : isMd ? 20 : 20, 
								}}
							>
								<p className="counter-number">01</p>
								<p className="counter-label">MONTH FREE</p>
							</div>
						</div>
					</div>
				</div>
				<button className="w-100 p-1 bg-black text-white d-flex align-items-center justify-content-center"
					style={{
						borderRadius: 5,
						backgroundColor: '#1d2855'
					}}
				>
					<a href={useUrl} style={{ fontWeight: "bold", color: "white",padding: 5 }}>
						INVITE A FRIEND
					</a>
				</button>
				<div className="w-100 d-flex align-items-center justify-content-center p-2"
				>
					<div>Or Copy Your Link</div>
				</div>
				<div className="copy-link-container">
					<input value={useUrl} readOnly className="link-input" />
					<button className="copy-button" onClick={copyToClipboard}>
					{copied ? <Check className="icon" /> : <Copy className="icon" />}
					</button>
				</div>
				{/* <button
					className="w-100 p-1  d-flex align-items-center justify-content-center"
					style={{
						border: "2px solid black",
						padding: 10,
						borderRadius: 5
					}}
				>
					<input
						style={{
							width: "100%",
							justifyContent: "center",
							alignItems: "center",
							padding: 5
						}}
						id="urlInput"
						name="url"
						type="text"
						value={useURL}
						required
					/>
				</button> */}
			</div>
		</div>
	);
}
