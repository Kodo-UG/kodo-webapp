import React, { useState } from "react";
import "./policy.css";
import { useMediaQuery } from "@uidotdev/usehooks";

function Policy() {
	const [isChecked, setIsChecked] = useState(false);

	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const isMd = useMediaQuery(
		"only screen and (min-width : 700px) and (max-width : 1250px)"
	);

	const handleCheckboxChange = () => {
		setIsChecked((prevChecked) => !prevChecked);
	};
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center"
			}}
		>
			<div
				style={{
					width: isSm | isMd ? "100%" : "75%",
					padding: isSm | isMd ? "1rem" : "1.5rem",
					fontSize: isSm | isMd ? "1rem" : "1.5rem",
					textAlign: "justify"
				}}
			>
				<div className="">
					<h1 style={{ color: "#1c2755" }}>Privacy Policy</h1>
					<div className="text">
						<h2>Overview</h2>
						<p>
							{" "}
							<span style={{ fontWeight: "bold" }}>
								Kodo Scholarships
							</span>{" "}
							(“kodoscholarships.com,” “us,” or “we”) respect(s) your
							privacy, and we want you to understand how we may collect
							personal information about you through our websites, mobile
							applications, products and services, and how that
							information may be used, maintained and, in some cases,
							shared. This privacy policy (“Privacy Policy”) sets forth
							the privacy practices and policies governing our Web
							Applications, mobile applications, products and services.
						</p>

						<p>
							“Personal information”, is any information that enables us
							to identify you, directly or indirectly, by reference to an
							identifier such as your name, identification number,
							location data, online identifier or one or more factors
							specific to you. Personal information includes “sensitive
							personal information” and “pseudonymised personal
							information” but excludes anonymous information or
							information that has had the identity of an individual
							permanently removed.
						</p>

						<p>
							BY USING OR ACCESSING OUR WEB APPLICATIONS, MOBILE
							APPLICATIONS, PRODUCTS AND SERVICES OR BY PROVIDING
							PERSONAL INFORMATION TO US ON OR THROUGH THESE WEB
							APPLICATIONS, MOBILE APPLICATIONS, PRODUCTS AND SERVICES,
							YOU CONSENT TO THE COLLECTION, USE, TRANSFER AND DISCLOSURE
							OF THAT INFORMATION IN ACCORDANCE WITH THIS PRIVACY POLICY
							AND APPLICABLE LAW.
						</p>

						<p>Please read our Privacy Policy to understand:</p>
						<ul>
							<h3
								style={{
									color: "#1c2755",
									textDecoration: "underline"
								}}
							>
								Information We Collect and How We Use It
							</h3>
							<li> • Information You Provide to Us</li>{" "}
							<li> • Social Networking Activities</li>{" "}
							<li> • Financial Transactions </li>{" "}
							<li>• Site Use Information </li>{" "}
							<li> • How We Use Information </li>
						</ul>
						<ul>
							<li
								style={{
									color: "#1c2755",
									textDecoration: "underline"
								}}
							>
								• Cookies Policy
							</li>
							<li
								style={{
									color: "#1c2755",
									textDecoration: "underline"
								}}
							>
								• Opting Out of Communications
							</li>
							<li
								style={{
									color: "#1c2755",
									textDecoration: "underline"
								}}
							>
								• Disclosing Information to Third Parties
							</li>
							<li
								style={{
									color: "#1c2755",
									textDecoration: "underline"
								}}
							>
								• Security
							</li>
							<li
								style={{
									color: "#1c2755",
									textDecoration: "underline"
								}}
							>
								• Links to Other Web Applications, mobile applications,
								products and services
							</li>
							<li
								style={{
									color: "#1c2755",
									textDecoration: "underline"
								}}
							>
								• Child Privacy
							</li>

							<li
								style={{
									color: "#1c2755",
									textDecoration: "underline"
								}}
							>
								• Consent to Transfer of Information from Outside the
								Uganda
							</li>
							<li
								style={{
									color: "#1c2755",
									textDecoration: "underline"
								}}
							>
								• Governing Law
							</li>
							<li
								style={{
									color: "#1c2755",
									textDecoration: "underline"
								}}
							>
								• Changes to this Privacy Policy
							</li>
							<li
								style={{
									color: "#1c2755",
									textDecoration: "underline"
								}}
							>
								• Contact
							</li>
						</ul>
						<p style={{ color: "#1c2755" }}>
							Information we collect and how we Use it
						</p>
						<p>
							The following describes the types of personal and other
							information we may collect about you, and how we use and
							maintain that information:
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Information You Provide to Us
						</p>
						<p>
							Kodo scholarships gathers and retains personal information
							about you, including name, email address, physical address,
							phone number, or other personal or background information
							when you voluntarily submit it to us. If you submit
							information in connection with an employment opportunity
							listed on our Careers page, in addition to contact
							information we may collect your date of birth, education
							history, military service, immigration status and
							employment history as well as information about references
							you identify.
						</p>

						<p>
							Before you can utilize some portions of our Web
							Applications, mobile applications, products and services,
							we may require that you request access to those portions by
							providing us with your contact information, a username and
							a password. If you provide us with a telephone number or an
							email address, you expressly agree that we, or our
							authorized agents, can use that information to contact you
							about your access request or your account, or about Kodo
							Scholarships and its associated activities.
						</p>
						<p>
							Kodo Scholarships collects information reported by
							individuals and entities as part of its regulatory
							activities, which may include personal information such as
							names of reporting entities’ personnel, business and
							mailing addresses, phone numbers, accounting license
							numbers, and pending or concluded criminal, civil or
							administrative actions. If you submit personal information
							of others to the Kodo scholarships, you represent and
							warrant that you have the necessary consent or authority to
							do so.
						</p>
						<p>
							We may keep any information that you provide to us
							indefinitely.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Social Networking Activities
						</p>
						<p>
							Our Web Applications, mobile applications, products and
							services may allow you to enter social networking Web
							Applications, mobile applications, products and services
							such as Facebook, YouTube, LinkedIn, and Twitter. If you
							choose to follow, like, friend, share, or comment on our
							social media Web Applications, mobile applications,
							products and services, or otherwise share information on
							these social networking Web Applications, mobile
							applications, products and services, we may receive
							information about you. We may use such information about
							you in a variety of ways, including to enhance your
							experience with the Kodo Scholarshipd outreach and to
							communicate with you about our new activities. We may keep
							all of this information indefinitely.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Financial Transactions
						</p>
						<p>
							If you pay subscription or annual fees to Kodo scholarships
							“Registration, Annual and Special Reporting” (”RASR”)
							system, you will be engaging in a financial transaction
							through our RASR Websites, mobile applications, products
							and services, www.kodoscholarships.com. In any such
							transaction, you will be asked to provide certain financial
							information, such as your bank account number and routing
							details, to effectuate a bank transfer. We retain such
							information for our records, and may also transfer it to a
							third party for payment processing. We use technology
							designed to encrypt the transmission of data to us through
							the system, as well as financial information we receive,
							transfer or maintain. If you submit financial information
							through https://payments.www.kodoscholarships.com, all of
							that information is submitted directly and securely to a
							third-party payment processor; Kodo scholarships does not
							receive or retain any financial information submitted
							through https://payments.www.kodoscholarships.com.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Site Use Information
						</p>
						<p>
							Kodo scholarships may collect technical information
							relating to each time a visitor comes to our Web
							Applications, mobile applications, products and services,
							including the IP address of visitors to our Web
							Applications, mobile applications, products and services.
							Such information is considered personal information under
							this Privacy Policy. We may also collect information about
							your use of our Web Applications, mobile applications,
							products and services, including number of visits, average
							time spent on the Web Applications, mobile applications,
							products and services, pages viewed, page response times,
							download errors, length of visits to certain pages, page
							interaction information (such as scrolling, clicks, and
							mouse-overs), methods used to browse away from the page,
							and any phone number used to call us. Gathering this
							information helps us to improve the content we offer. You
							do not have to register with our Web Applications, mobile
							applications, products and services before we can collect
							this information. We may share with third parties this
							information or other data on an aggregated basis without
							the use of any information that personally identifies you.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							How We Use Information
						</p>
						<p>
							We use your personal information according to the terms of
							the Privacy Policy in effect at the time of our use. We
							will only process your personal information, including
							sharing it with third parties, where (1) you have provided
							your consent which can be withdrawn at any time, (2) the
							processing is necessary for the performance of a contract
							to which you are a party (including your registration or
							agreements with us), (3) we are required by law, (4)
							processing is required to protect your vital interests or
							those of another person, or (5) processing is necessary for
							the purposes of our legitimate commercial or regulatory
							interests, provided your interests and fundamental rights
							do not override those interests.
						</p>

						<p
							style={{
								color: "#1c2755"
							}}
						>
							{" "}
							Cookies Policy{" "}
						</p>
						<p>
							Like most Web Applications, mobile applications, products
							and services, we may employ “cookies” or similar
							technologies on certain pages of our Web Applications,
							mobile applications, products and services. Cookies make
							the use of the Web Applications, mobile applications,
							products and services easier by, among other things, saving
							your preferences. We may also use cookies to deliver
							content tailored to your interests. We may use information
							collected with cookies to statistically analyse usage of
							our Web Applications, mobile applications, products and
							services, and to improve and customize our content and
							other offerings.
						</p>

						<ul>
							<p>
								Types of cookies we may use on our Web Applications,
								mobile applications, products and services include:
							</p>

							<li>
								• Session cookies: These temporary cookies expire and
								are automatically erased whenever you close your browser
								window. We may use session cookies to grant our users
								access to content and to enable actions such as
								remembering application or payment information as you
								are in the process of entering it.{" "}
							</li>
							<li>
								• Persistent cookies: These cookies usually have an
								expiration date in the distant future and remain in your
								browser until they expire or you manually delete them.
								We may use persistent cookies to better understand usage
								patterns so we can improve the Web Applications, mobile
								applications, products and services for our users. For
								example, we may use a persistent cookie to associate you
								with your account or to remember your choices on the Web
								Applications, mobile applications, products and
								services.
							</li>
							<li>
								{" "}
								• Third-party cookies: We may permit third-party service
								providers to place cookies through our Web Applications,
								mobile applications, products and services to provide us
								with better insights into the use of the Web
								Applications, mobile applications, products and services
								or user demographics or to provide relevant services to
								you. These third parties may collect information about a
								user’s online activities over time and across different
								Web Applications, mobile applications, products and
								services when he or she uses our websites, mobile
								applications, products and services. For example, we may
								use a third-party tool to analyse usage patterns of the
								Web Applications, mobile applications, products and
								services. Such a tool may generate a cookie to capture
								information about your use of the Web Applications,
								mobile applications, products and services which the
								third-party provider uses to compile reports on
								websites, mobile applications, products and services
								activity for us and to provide other related services.
								The third-party provider may use a portion of your IP
								address to identify its cookie. We do not control the
								use of third-party cookies or the resulting information
								and we are not responsible for any actions or policies
								of such third parties. In particular, our Web
								Applications, mobile applications, products and services
								may use Google Analytics and Hot jar to collect and
								process data. For more information on Google Analytics,
								please see Google’s privacy policy and Google Analytics
								help pages (located at
								https://www.google.com/policies/privacy/ and
								https://support.google.c
								om/analytics/?hl=en#topic=3544906). To opt out of being
								tracked by Google Analytics across all Web Applications,
								mobile applications, products and services, please visit
								https://tools.google.com/dlpage/gaoptout.
							</li>
							<li>
								{" "}
								• FormoreinformationonHotjar,please see
								Hotjar’sprivacypolicy(located)at
								https://www.hotjar.com/legal/policies/priv acy). To opt
								out of being tracked by Hot jar, please visit
								https://www.hotjar.com/legal/compliance/opt-out.
							</li>
						</ul>
						<p>
							The specific cookies that may be used on the Web
							Applications, mobile applications, products and services
							are:
						</p>
						<p style={{ fontWeight: "bold" }}>Type of Cookies</p>
						<p style={{ fontWeight: "bold" }}>Essential Cookies</p>
						<p>
							These are cookies that are necessary for the operation of
							Kodo Scholarships Web Application, mobile application,
							products and services. They include, for example, cookies
							that enable you to log into secure areas of our Web
							Applications, mobile applications, products and services,
							use a shopping cart or make use of e-billing. For example:
						</p>
						<ul>
							<li>
								{" "}
								<span style={{ fontWeight: "bold" }}>
									WSS_ Full Screen Mode{" "}
								</span>
								-Determines whether the page should be shown in "full
								screen" depending on the particular local system
								configuration.
							</li>
							<li>
								{" "}
								<span style={{ fontWeight: "bold" }}>
									Kodo Scholarships Outdated Browser Ack{" "}
								</span>
								-Tracks whether users have clicked to accept the
								outdated browser notice.
							</li>
							<li>
								{" "}
								<span style={{ fontWeight: "bold" }}>
									Kodo Scholarships PrivacyPolicyAck201506{" "}
								</span>
								- Tracks whether users have clicked to accept the
								cookies notice.
							</li>
						</ul>
						<p style={{ fontWeight: "bold" }}>
							Performance and Functionality Cookies
						</p>
						<p>
							These are used to recognize you when you return to the Web
							Applications, mobile applications, products and services.
							This enables us to personalize our content for you and
							remember your preferences (for example, your choice of
							language or region), but are non-essential to the
							performance of the Web Applications, mobile applications,
							products and services. For example:
						</p>
						<p>
							<span style={{ fontWeight: "bold" }}>
								WOPISessionContext -
							</span>
							Identifies where to redirect a web application.
						</p>
						<p>
							<span style={{ fontWeight: "bold" }}>
								Search Session -{" "}
							</span>
							Contains an identifier for the current search session.
						</p>
						<p>
							<span style={{ fontWeight: "bold" }}>Search Query - </span>
							Contains the text of the last search performed by the user.
						</p>
						<p style={{ fontWeight: "bold" }}>
							Analytical or Customization Cookies
						</p>
						<p>
							These cookies collect information about how users access
							and move through the Web Applications, mobile applications,
							products and services. We use this information in either
							aggregate form to help us to improve the way the Web
							Applications, mobile applications, products and services
							work, or to personalize the Web Applications, mobile
							applications, products and services to your interests. For
							example:
						</p>
						<p>
							<span style={{ fontWeight: "bold" }}>
								Google Analytics (ga and _gat) -{" "}
							</span>
							Collects anonymised information about how users use the Web
							Applications, mobile applications, products and services,
							including the number of users visiting the Web
							Applications, mobile applications, products and services,
							where they came from, and the page or pages they visited.
						</p>
						<p>
							{" "}
							<span style={{ fontWeight: "bold" }}>Mail chimp –</span>
							Cookie tracker in emails improves the understanding of our
							users to provide more user-friendly information to them.
						</p>
						<p>
							{" "}
							<span style={{ fontWeight: "bold" }}>Hot jar-</span>
							Collects users’ clicks, scrolling, and mouse behaviour to
							improve the understanding of users engagement on the Web
							Applications, mobile applications, products and services
							and to provide more user-friendly layouts and information.
							Asks users that are leaving the Web Applications, mobile
							applications, products and services if they would take an
							exit poll. To see a list of Hot jar’s cookies, please visit
							https://www.hotjar.com/legal/policies/cookie- information.
						</p>
						<p>
							{" "}
							When you first access our Web Applications, mobile
							applications, products and services from certain
							jurisdictions, you will receive a message advising you that
							cookies and similar technologies are in use. By clicking
							“accept cookies”, closing the message, or continuing to
							browse the Websites, mobile applications, products and
							services, you signify that you understand and agree to the
							use of these technologies, as described in this Cookie
							Policy.
						</p>
						<p>
							You do not have to accept cookies and consent can be
							withdrawn at any time. If you prefer not to receive cookies
							through our Web Applications, mobile applications, products
							and services, you can set your browser to either reject all
							cookies, to allow only “trusted” Web Applications, mobile
							applications, products and services to set them, or to
							accept only those cookies from those sites you are
							currently on. Unless you have adjusted the setting of your
							browser so that it will refuse cookies, our system may
							issue cookies when you log on to our Web Applications,
							mobile applications, products and services. If your browser
							is set to reject cookies, or if your browser notifies you
							that you are about to receive a cookie and you reject it,
							then your use of our Web Applications, mobile applications,
							products and services may not be as efficient as it would
							be if the cookie were enabled, and some parts of the Web
							Applications, mobile applications, products and services
							may not work at all. In addition, you can exercise
							advertising cookie choices by visiting
							http://www.aboutads.info/choices/,
							http://www.networkadvertising.org/choices/; or
							http://youronlinechoices.com/.
						</p>
						<p>
							As well as cookies, we may use other technologies to
							recognize and track visitors to the Web Applications,
							mobile applications, products and services. A web beacon
							(also known as a “tracking pixel” or “clear GIF”) is a
							clear graphic image (typically a one-pixel tag) that is
							delivered through a web browser or HTML e-mail, typically
							in conjunction with a cookie.
						</p>
						<p>
							Web beacons allows us, for example, to monitor how users
							move from one page within our Web Applications, mobile
							applications, products and services to another, to track
							access to our communications, to understand whether users
							have come to our Web Applications, mobile applications,
							products and services from an online advertisement
							displayed on a third-party websites, mobile applications,
							products and services, to measure how ads have been viewed
							and to improve site performance.
						</p>
						<p>
							We do not use technology that recognizes a “do-not-track”
							signal from your web browser because we do not track users
							other than for aggregate statistical purposes.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Opting Out of Communications
						</p>
						<p>
							If you have subscribed to or are otherwise receiving KWISH
							TECHNOLOGIES LTD news or similar information from us by
							email and no longer want to receive such information in the
							future, you may opt out of receiving these emails by
							clicking the “unsubscribe” link at the bottom of those
							emails you receive or on the{" "}
							<span style={{ textDecoration: "underline" }}>
								delete account
							</span>{" "}
							on the Web Application, mobile applications, products and
							services. Please allow ample time for us to process your
							request. If you are having difficulty
							unsubscribing/deleting account, please contact us directly
							at info@kodoscholarships.com
						</p>
						<p>
							Please note that even if you opt out of receiving emails,
							you may still receive communications related to Kodo
							Scholarships oversight activities or otherwise as required
							by law. Also note that we may need to keep information we
							have collected about you for record-keeping, research and
							other purposes.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Disclosing Information to Third Parties
						</p>
						<p>
							We will not share, rent, sell or otherwise disclose any
							personal information that we collect about you through our
							Web Applications, mobile applications, products and
							services, except in any of the following situations or
							otherwise described in this Privacy Policy:
						</p>
						<ul>
							<li>
								• You request or authorize the release of your personal
								information.{" "}
							</li>

							<li>
								{" "}
								• We may disclose personal information to our
								third-party contractors and payment processors who
								perform services for us in connection with the Web
								Applications, mobile applications, products and
								services, or to complete or confirm a transaction or
								series of transactions that you conduct with us. We may
								also disclose personal information to service providers
								or suppliers if the disclosure will enable that party to
								perform business, professional or technical support for
								us.{" "}
							</li>
							<li>
								• We may disclose personal information as part of a
								transfer of the assets or related interests of KODO
								SCHOLARSHIPS. We do not guarantee that any entity
								receiving such information in connection with one of
								these transactions will comply with all the terms of
								this Privacy Policy.{" "}
							</li>
							<li>
								• We may disclose personal information to comply with
								the law, applicable regulations, governmental and
								quasi-governmental requests, court orders or subpoenas,
								or to enforce our Terms of Use or other agreements, or
								to protect our rights, property or safety or the rights,
								property or safety of our users or others. We reserve
								the right to release information that we collect to law
								enforcement or other government officials, as we, in our
								sole and absolute discretion, deem necessary or
								appropriate.{" "}
							</li>
							<li>
								{" "}
								• In accordance with our regulatory function, we post to
								our Web Applications, mobile applications, and products
								and services certain information reported to KODO
								SCHOLARSHIPS by individuals and entities that may
								include personal information such as names of reporting
								entities’ personnel, business and mailing addresses,
								phone numbers accounting license numbers, and pending or
								concluded criminal, civil or administrative actions. The
								reporting individual or entity is responsible for
								obtaining any necessary consent or authority for
								disclosure of such personal information.{" "}
							</li>
							<li>
								{" "}
								• We may also share aggregated or anonymous information
								that cannot identify you with third parties. For
								example, we may disclose the number of visitors to our
								Web Applications, mobile applications, products and
								services or the number of people who have downloaded a
								particular document.{" "}
							</li>
						</ul>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Security
						</p>
						<p>
							We use technology designed to encrypt the transmission of
							data to us through our Web Applications, mobile
							applications, products and services, including through our
							RASR system, through https://payments.kodoscholarchips.com
							and through https://bdpayments.kodoscholarships.com In
							addition, we take steps to protect all user data we collect
							against any unauthorized access. However, you should keep
							in mind that the Web Applications, mobile applications,
							products and services are run on software, hardware and
							networks, any component of which may, from time to time,
							require maintenance or experience problems or breaches of
							security beyond our control.
						</p>
						<p>
							While we take steps to protect your personal information
							and keep it secure, you also play a role in protecting your
							information. You must maintain the security of your online
							transactions by not sharing your passwords and account
							information with any unauthorized parties.
						</p>
						<p>
							Please also be aware that despite our best intentions and
							the guidelines outlined in this Privacy Policy, no data
							transmission over the Internet or encryption method can be
							guaranteed to be 100 percent secure. Kodo Scholarships
							cannot guarantee the security of any information you
							transmit to us or from our Web Applications, mobile
							applications, products and services, and therefore, you use
							our Web Applications, mobile applications, products and
							services at your own risk.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Links to Other Web Applications, mobile applications,
							products and services
						</p>
						<p>
							Our Web Applications, mobile applications, products and
							services may contain links to other Web Applications,
							mobile applications, products and services, including
							social media Web Applications, mobile applications,
							products and services hosted by third- party providers;
							however, this Privacy Policy only addresses KODO
							SCHOLARSHIPS use and disclosure of your information
							collected through our Web Applications, mobile
							applications, products and services, if any. If you choose
							to link to an external websites, mobile applications,
							products and services from our websites, mobile
							applications, products and services, you will leave our
							websites, mobile applications, products and services. We
							are not responsible for the privacy practices of any third
							parties or the content of linked Web Applications, mobile
							applications, products and services. We encourage you to
							read the applicable privacy policies and terms and
							conditions of such parties or Web Applications, mobile
							applications, products and services.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Child Privacy
						</p>
						<p>
							If you are under the age of 18, please do not use or access
							the Web Applications, mobile applications, products and
							services. It is not our intention to collect or use
							personal information from anyone under 18 years of age, and
							we will not knowingly do so. If we are made aware that we
							have collected any personal information from children under
							the age of 18, and are asked to delete such information
							from our system, we will promptly do so.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Consent to Transfer of Information from Outside of the
							Uganda
						</p>
						<p>
							If you access the Web Applications, mobile applications,
							products and services from outside of the Uganda,
							information that we collect about you will be transferred
							to servers inside the Uganda and maintained indefinitely,
							which may involve the transfer of information out of your
							country of origin. By allowing us to collect information
							about you, you consent to such transfer and processing of
							your data.
						</p>
						<p>
							We will not collect your personal information through the
							Web Applications, mobile applications, products and
							services unless you have provided it to us voluntarily or
							the collection is pursuant to the regulatory activities of
							KODO SCHOLARSHIPS. In situations other than those listed in
							this Privacy Policy, you will be informed if your personal
							information will be disclosed to third parties and will
							have the opportunity to opt out of such disclosure, unless
							such disclosure to third parties is pursuant to the
							regulatory activities of KODO SCHOLARSHIPS or is otherwise
							required by law.
						</p>

						<p
							style={{
								color: "#1c2755"
							}}
						>
							Governing Law
						</p>
						<p>
							By choosing to visit our Web Applications, mobile
							applications, products and services or provide information
							to us, you agree that any dispute over privacy or the terms
							contained in this Privacy Policy will be governed by the
							laws of the Republic of Uganda. You also agree to abide by
							any limitation on damages contained in our Terms of Use, or
							other agreement that we have with you.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Changes to this Privacy Policy
						</p>
						<p>
							We may occasionally amend this Privacy Policy to reflect
							KODO SCHOLARSHIPS activities and user feedback and we
							reserve the right to make changes to this Privacy Policy at
							any time. If at any point we decide to use personal
							information in a manner that is materially different from
							that stated at the time it was collected, we will endeavour
							to notify you of such changes prior to implementing them by
							posting a revised Privacy Policy with a new “Last Updated”
							date, displaying the word “updated” next to the Privacy
							Policy link on each page of the Web Applications, mobile
							applications, products and services or otherwise. The use
							of your information is subject to the Privacy Policy and
							Terms of Use in effect at the time of use. The provisions
							contained in this Privacy Policy supersede all previous
							notices or policies regarding our privacy practices with
							respect to our Web Applications, mobile applications,
							products and services. Please check the “Last Updated”
							legend at the top of this page to see when this Privacy
							Policy was last revised. We encourage you to check
							frequently to see the current Privacy Policy to be informed
							of how KODO SCHOLARSHIPS is committed to protecting your
							information and providing you with improved content on our
							Web Applications, mobile applications, products and
							services in order to enhance your experience.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Contact
						</p>
						<p>
							If you have any questions or complaints regarding our
							Privacy Policy or our Web Applications, mobile
							applications, products and services, please contact us at
							info@kodoscholarshis.com or send a letter to:
						</p>
						<ul>
							<li>Kodo Scholarships</li> <li>Parliamentary Avenue</li>{" "}
							<li> Kampala Uganda </li> <li>+46 72 84 883 13</li>
						</ul>
						<p
							style={{
								color: "#1c2755",
								fontWeight: "bold",
								marginBottom: "1rem"
							}}
						>
							Terms of Use
						</p>
						<p>
							<span
								style={{
									fontWeight: "bold"
								}}
							>
								Last Updated:{" "}
							</span>{" "}
							July, 2023
						</p>
						<p>
							This Terms of Use Agreement (this "Agreement") is a legal
							agreement between you and Kodo scholarships ("KODO
							SCHOLARSHIPS," "us," "we," or "our") governing your use of
							our Web Applications, mobile applications, products and
							services: https://kodoscholarshops.com,
							https://payments.kodoscholarships.com and
							https://bdpayements@kodoschoolarships.com (each a
							"Websites, mobile applications, products and services" and
							collectively the "Web Applications, mobile applications,
							products and services"). By using or accessing a Websites,
							mobile applications, products and services or downloading
							materials from a Websites, mobile applications, products
							and services, you agree to be legally bound by this
							Agreement.
						</p>
						<ul>
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Updates to this Agreement
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Authorized Use
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Intellectual Property Rights
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• User-Submitted Information
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Secure User Accounts
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Changes to the Web Applications, mobile applications,
								products and services
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Third-Party Content
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Links to Third-Party Web Applications, mobile
								applications, products and services
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Social Media Pages
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Notice of Copyright Infringement
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Other Policies and Terms
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Termination
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Child Privacy
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Disclaimer of Warranty
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Limitation of Liability
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Indemnity
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Consent to Communication
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Effect of Invalidity
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Waivers
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• International Users
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Choice of Law
							</li>{" "}
							<li
								style={{
									color: "#1c2755",
									fontWeight: "bold",
									textDecoration: "underline"
								}}
							>
								• Contact
							</li>
						</ul>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Updates to this Agreement
						</p>
						<p>
							We may revise or otherwise change or update this Agreement.
							Please check the "Last Updated" legend at the top of this
							page to see when this Agreement was last revised. Changes
							will become effective immediately after they are posted. A
							current version of this Agreement showing the effective
							date is always available at this location. We encourage you
							to periodically review this Agreement to see if there have
							been any changes that may affect you. If you do not agree
							to this Agreement as modified, then you must discontinue
							your use of the Web Applications, mobile applications,
							products and services. Your continued use of Web
							Applications, mobile applications, products and services
							will signify your continued agreement to this Agreement as
							it may be revised from time to time.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Authorized Use
						</p>
						<p>
							While using Web Applications, mobile applications, products
							and services, you are required to comply with all
							applicable statutes, orders, regulations, rules, and other
							laws. You may not use Web Applications, mobile
							applications, products and services for any fraudulent or
							unlawful purpose, and you may not take any action to
							interfere with Web Applications, mobile applications,
							products and services or any other user's use of a
							Websites, mobile applications, products and services. In
							addition, we expect users of the Web Applications, mobile
							applications, products and services to respect the rights
							and dignity of others. By way of example and not of
							limitation, you may not (and you expressly agree that you
							will not) do any of the following, which violate this
							Agreement:
						</p>
						<ul>
							<li>
								• Post, upload, share, transmit, distribute, facilitate
								distribution of or otherwise make available to or
								through Web Applications, mobile applications, products
								and services any unlawful, infringing, harmful,
								harassing, defamatory, threatening, intimidating,
								fraudulent, tortious, vulgar or otherwise objectionable
								material of any kind, including unauthorized or
								unsolicited advertising;{" "}
							</li>
							<li>
								• Reproduce, duplicate or copy any portion of Web
								Applications, mobile applications, products and
								services, except as authorized by this Agreement;{" "}
							</li>
							<li>
								• Sell, resell or otherwise exploit for any commercial
								purposes, the use of or access to a Web application or
								any portion thereof without the prior written consent of
								the KODO SCHOLARSHIPS;
							</li>
							<li>
								• Impersonate any person or entity, falsely state or
								otherwise misrepresent your affiliation with any person
								or entity in connection with a Web application, or
								express or imply that we endorse any statement you make;
							</li>
							<li>
								• Violate or attempt to violate the security of Web
								Applications, mobile applications, products and
								services;{" "}
							</li>
							<li>
								• Disseminate on a Websites, mobile applications,
								products and services any viruses, worms, spyware,
								adware or other malicious computer code, file or program
								that is harmful, invasive or may or is intended to
								damage or hijack the operation of, or monitor the use
								of, any hardware, software or equipment;{" "}
							</li>
							<li>
								• Use any data mining, bots, spiders, automated tools or
								similar data gathering and extraction methods, directly
								or indirectly, on a Websites, mobile applications,
								products and services or to collect any information from
								a Websites, mobile applications, products and services
								or any other user of a Websites, mobile applications,
								products and services; or{" "}
							</li>
							<li>
								• Assist or permit any persons in violating this
								Agreement or applicable statutes, orders, regulations,
								rules, and other laws governing the use of the Web
								Applications, mobile applications, products and
								services.{" "}
							</li>
						</ul>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Intellectual Property Rights
						</p>
						<p>
							All content ("Content") available through the Web
							Applications, mobile applications, products and services is
							protected by copyrights, trademarks or other proprietary
							rights and laws. Except as set forth herein or otherwise
							agreed in writing by KODO SCHOLARSHIPS or other rights
							owner(s), the use of any Content available on a Websites,
							mobile applications, products and services is strictly
							prohibited. KODO SCHOLARSHIPS seeks to ensure that public
							accounting firms, issuers, investors and the general public
							have ready access to the rules and standards of KODO
							SCHOLARSHIPS, as well as to the forms, releases, orders,
							notices, guidance, reports, papers and similar materials
							that KODO SCHOLARSHIPS disseminates to the public through
							the Web Applications, mobile applications, products and
							services ("KODO SCHOLARSHIPS Public Materials"). Subject to
							third-party copyright noted on the Web Applications, mobile
							applications, products and services, We therefore allow,
							and will not assert copyright infringement claims based
							solely on, the use, publication, display or distribution of
							all or any portion of such KODO SCHOLARSHIPS Public
							Materials. You may use the KODO SCHOLARSHIPS Public
							Materials from the Web Applications, mobile applications,
							products and services explicitly made available by KODO
							SCHOLARSHIPS for public use, provided that you (a) keep
							intact all copyright and other proprietary notices; (b) use
							KODO SCHOLARSHIPS Public Materials pursuant to any
							associated licenses; (c) obtain consent of any applicable
							party with respect to third- party copyright, as necessary,
							(d) use appropriate attribution where feasible (e.g.
							"Source: Kodo Scholarships, www.kodoscholarships.com ; (e)
							make no modifications to the KODO SCHOLARSHIPS Public
							Materials; (f) do not make any additional representations
							or warranties relating to KODO SCHOLARSHIPS Public
							Materials on behalf of the Kodo Scholarships; and (g) do
							not use KODO SCHOLARSHIPS Public Materials in any way that
							the KODO SCHOLARSHIPS deems inappropriate or inadvisable in
							its sole discretion. Any rights not expressly granted
							herein are reserved
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							User-Submitted Information
						</p>
						<p>
							You are responsible for any Content you transmit through
							our Web Applications, mobile applications, products and
							services. You agree, represent and warrant that any Content
							you transmit through our Web Applications, mobile
							applications, products and services or to us is truthful,
							accurate, not misleading and offered in good faith, and
							that you have the right to transmit such Content. You shall
							not upload, post or otherwise make available on or through
							a Websites, mobile applications, products and services any
							content protected by copyright, trademark or other
							proprietary right of any third party without the express
							written permission of the owner of such right(s) or the
							authority to do so. You shall be solely liable for any
							damages resulting from any infringement of copyright,
							trademark or other proprietary rights, or any other harm
							resulting from such a submission.
						</p>
						<p>
							We do not want you to, and you should not, send any
							confidential or proprietary Content to us unless (a)
							transmitted pursuant to KODO SCHOLARSHIPS regulatory
							activities; (b) specifically requested by us; or (c)
							provided as tips/referrals/complaints, including those
							submitted through our Tip & Referral Canter. Please note
							that any Content sent to KODO SCHOLARSHIPS other than
							pursuant to (a)-(c) above will be deemed not to be
							confidential or proprietary.
						</p>
						<p>
							By submitting Content, other than personally identifiable
							information or bank account information related to payments
							made through the Web Applications, mobile applications,
							products and services, you grant to the KODO SCHOLARSHIPS
							(or warrant that the owner of such Content has expressly
							granted to KODO SCHOLARSHIPS) a royalty-free, perpetual,
							irrevocable and unrestricted right and license (a) to use,
							reproduce, display, modify, adapt, publish, translate,
							transmit, distribute or otherwise make available to others
							such Content (in whole or in part and for any purpose)
							worldwide and/or to incorporate it in other works in any
							form, media or technology now known or hereafter developed;
							(b) to exercise all copyright, trademark, publicity,
							privacy and other proprietary rights with regard to such
							Content; and (c) to use your name, likeness and/or other
							biographical information in any and all media and/or
							communications. You also agree that KODO SCHOLARSHIPS is
							free to use any ideas, concepts, know-how or techniques
							that you send to us for any purpose.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Secure User Accounts
						</p>
						<p>
							Certain portions of our Web Applications, mobile
							applications, products and services are accessible only to
							users who have been granted access and given login
							credentials ("Secure Users"). If you are a Secure User, you
							agree to accurately maintain and update any information
							about yourself and your account that you have provided to
							KODO SCHOLARSHIPS . You further agree that you are
							responsible for all activities that occur under your Secure
							User account. You are responsible for maintaining the
							confidentiality of your login credentials and you agree not
							to share your login credentials with any unauthorized
							parties. You also agree to notify us promptly of any
							unauthorized use of your login credentials or any other
							breach of security that you become aware of involving or
							relating to a Websites, mobile applications, products and
							services by emailing us at info@kodoscholarships.com
						</p>
						<p>
							The KODO SCHOLARSHIPS reserves the right to take any and
							all action, as it deems necessary or reasonable to maintain
							the security of the Web Applications, mobile applications,
							products and services and your account, including without
							limitation, terminating your account, changing your
							password or requesting information to authorize
							transactions on your account.
						</p>
						<h3>
							WE EXPLICITLY DISCLAIM LIABILITY FOR ANY AND ALL LOSSES AND
							DAMAGES ARISING FROM YOUR FAILURE TO COMPLY WITH THIS
							SECTION.
						</h3>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Changes to the Web Applications, mobile applications,
							products and services
						</p>
						<p>
							We may make improvements and/or changes to the Web
							Applications, mobile applications, products and services,
							add or remove features, or terminate a Websites, mobile
							applications, products and services at any time without
							notice. We (a) reserve the right (but have no obligation)
							to change the Content or other offerings on the Websites,
							mobile applications, products and services, at any time
							without any notice or liability to you or any other person;
							and (b) do not warrant that information on the Web
							Applications, mobile applications, products and services is
							accurate, complete, reliable, current or error-free. Some
							jurisdictions may not allow the exclusions and disclaimers
							of certain implied warranties, so some of the provisions of
							this section may not apply to you.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Third-Party Content
						</p>
						<p>
							Any information, statements, opinions or other Content
							provided by third parties and made available on our Web
							Applications, mobile applications, products and services
							are those of the respective author(s) and not KODO
							SCHOLARSHIPS. We do not guarantee the validity, accuracy,
							truthfulness, completeness, reliability or usefulness of
							any information, statement, opinion or other Content on our
							Web Applications, mobile applications, products and
							services other than from an authorized KODO SCHOLARSHIPS
							representative acting in his or her official capacity.
							Under no circumstance will the KODO SCHOLARSHIPS be liable
							for any loss or damage caused, directly or indirectly, by
							your reliance on any such third-party Content.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Links to Third-Party Web Applications, mobile applications,
							products and services
						</p>
						<p>
							The KODO SCHOLARSHIPS may provide on the Web Application,
							mobile applications, products and services, solely as a
							convenience to users, links to Web Applications, mobile
							applications, products and services operated by third
							parties. If you use these links, you will leave our Web
							Applications, mobile applications, products and services.
							If you decide to visit any linked websites, mobile
							applications, products and services, you do so at your own
							risk and it is your responsibility to take all protective
							measures to guard against viruses or other destructive
							elements. KODO SCHOLARSHIPS does not make any warranty or
							representation regarding, or endorse or otherwise sponsor,
							any linked Web Applications, mobile applications, products
							and services or the information appearing thereon or any of
							the products or services described thereon. Links do not
							imply that the KODO SCHOLARSHIPS is legally authorized to
							use any trademark, trade name, logo or copyright symbol
							displayed in or accessible through the links, or that any
							linked websites, mobile applications, products and services
							is authorized to use any trademark, trade name, logo or
							copyright symbol of the KODO SCHOLARSHIPS.
						</p>
						<p>
							YOU AGREE THAT YOUR USE OF THIRD-PARTY WEB APPLICATIONS,
							MOBILE APPLICATIONS, PRODUCTS AND SERVICES AND RESOURCES,
							INCLUDING WITHOUT LIMITATION YOUR USE OF ANY CONTENT,
							INFORMATION, DATA, ADVERTISING, PRODUCTS OR OTHER MATERIALS
							ON OR AVAILABLE THROUGH SUCH WEB APPLICATIONS, MOBILE
							APPLICATIONS, PRODUCTS AND SERVICES AND RESOURCES, IS AT
							YOUR OWN RISK AND IS SUBJECT TO THE TERMS AND CONDITIONS OF
							USE APPLICABLE TO SUCH WEB APPLICATIONS, MOBILE
							APPLICATIONS, PRODUCTS AND SERVICES AND RESOURCES.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Social Media Pages
						</p>
						<p>
							KODO SCHOLARSHIPS may maintain a presence on social media
							Web Applications, mobile applications, products and
							services, including Facebook, YouTube, LinkedIn and Twitter
							(collectively, "Social Media Pages"), to provide a place
							for the public to learn more about the KODO SCHOLARSHIPS
							and to share comments. All comments, visuals and other
							materials posted by visitors to our Social Media Pages do
							not necessarily reflect the opinions or ideas of the KODO
							SCHOLARSHIPS. All visitors to our Social Media Pages must
							comply with the respective social media websites, mobile
							applications, products and service's Terms of Use. We
							review some but not all postings to our Social Media Pages,
							and may remove postings that we determine are inappropriate
							or offensive.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Notice of Copyright Infringement
						</p>
						<p>
							If you believe that any Content on Web application
							infringes upon any copyright which you own or control, you
							may send a written notification, containing the information
							required, to our Designated Copyright Agent as set forth
							below.
						</p>
						<p>Designated Copyright Agent: KODO</p>
						<p>SCHOLARSHIPS Email: </p>
						<p>info@kodoscholarships.com</p>
						<p>
							If any user of the Web Applications, mobile applications,
							products and services is deemed to be a repeat copyright
							infringer,KODO SCHOLORSHIPS will terminate such user's
							license to use the Web Applications, mobile applications,
							products and services.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Other Policies and Terms
						</p>
						<p>
							This Agreement applies exclusively to your access to and
							use of the Web Applications, mobile applications, products
							and services and does not alter in any way the terms or
							conditions of any other agreement or regulatory obligation
							you may have with KODO SCHOLARSHIPS. Additional policies
							and terms may apply to use of all or portions of the Web
							Applications, mobile applications, products and services
							and are incorporated by reference into this Agreement.
							Please refer to and review all additional specific terms
							and conditions as applicable, including the KODO
							SCHOLARSHIP’S Privacy Policy, which describes how we
							collect and use information on and through the Web
							Applications, mobile applications, products and services.
						</p>

						<p
							style={{
								color: "#1c2755"
							}}
						>
							Termination
						</p>
						<p>
							The Web Applications, mobile applications, products and
							services and this Agreement are in effect until terminated
							by the KODO SCHOLARSHIPS. In addition to any right or
							remedy that may be available to tKODO SCHOOLARSHIPS under
							applicable law, and subject to regulatory requirements,
							KODO SCHOLARSHIPS may suspend, limit or terminate all or a
							portion of your access to the Web Applications, mobile
							applications, products and services or any of their
							features at any time with or without notice and with or
							without cause, including without limitation, if the KODO
							SCHOLARSHIPS believes that you have violated or acted
							inconsistently with the letter or spirit of this Agreement.
							The provisions of this Agreement concerning authorized use,
							intellectual property rights, user-submitted information,
							disclaimer of warranty, limitation of liability and
							indemnity, as well as any other provisions that by their
							nature should survive, shall survive any such termination.
						</p>
						<p>
							You agree that if your use of the Web Applications, mobile
							applications, products and services is terminated pursuant
							to this Agreement, you will not attempt to use a Websites,
							mobile applications, products and services under any name,
							real or assumed. You further agree that if you violate this
							restriction after your use of the Web Applications, mobile
							applications, products and services is terminated, you will
							indemnify and hold us harmless from any and all liability
							that we may incur therefor. We reserve the right to have
							all violators prosecuted to the fullest extent of the law.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Child Privacy
						</p>
						<p>
							If you are under the age of 18, please do not use or access
							the Web Applications, mobile applications, products and
							services. It is not our intention to collect or use
							personal information from anyone under 18 years of age, and
							we will not knowingly do so. If we are made aware that we
							have collected any personal information from children under
							the age of 18 and are asked to delete such information from
							our system, we will promptly do so.
						</p>

						<p
							style={{
								color: "#1c2755"
							}}
						>
							Disclaimer of Warranty
						</p>
						<p>
							KODO SCHOALARSHIPS DOES NOT WARRANT OR MAKE ANY
							REPRESENTATIONS REGARDING THE USE, VALIDITY, ACCURACY,
							RELIABILITY OF, OR OTHERWISE RESPECTING THE CONTENT
							AVAILABLE ON THE WEB APPLICATIONS, MOBILE APPLICATIONS,
							PRODUCTS AND SERVICES OR ANY OTHER WEB APPLICATIONS, MOBILE
							APPLICATIONS, PRODUCTS AND SERVICES LINKED TO OR FROM THE
							WEB APPLICATIONS, MOBILE APPLICATIONS, PRODUCTS AND
							SERVICES. DOWNLOADING OR OTHERWISE OBTAINING ANY CONTENT
							THROUGH THE WEB APPLICATIONS, MOBILE APPLICATIONS, PRODUCTS
							AND SERVICES IS DONE AT YOUR OWN RISK. THE CONTENT OF THE
							WEB APPLICATIONS, MOBILE APPLICATIONS, PRODUCTS AND
							SERVICES IS PROVIDED "AS IS" AND ON AN "AS AVAILABLE"
							BASIS, WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR
							IMPLIED. TO THE FULLEST EXTENT POSSIBLE UNDER APPLICABLE
							LAW, THE KWISH TECHNOLOGIES LTD DISCLAIMS ALL WARRANTIES,
							EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
							WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
							PURPOSE AND NONINFRINGEMENT.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Limitation of Liability
						</p>
						<p>
							KODO SCHOLARSHIPS AND EACH OF ITS BOARD MEMBERS, DIRECTORS,
							OFFICERS, EMPLOYEES, AGENTS AND CONTRACTORS (COLLECTIVELY,
							THE "RELEASEES") WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY
							KIND ARISING OUT OF OR RELATING TO THE USE OF OR THE
							INABILITY TO USE THE WEB APPLICATIONS, MOBILE APPLICATIONS,
							PRODUCTS AND SERVICES, THE WEB APPLICATIONS, MOBILE
							APPLICATIONS, PRODUCTS AND SERVICES' CONTENT OR LINKS,
							INCLUDING BUT NOT LIMITED TO DAMAGES CAUSED BY OR RELATED
							TO ERRORS, OMISSIONS, INTERRUPTIONS, DEFECTS, DELAYS IN
							OPERATION OR TRANSMISSION, COMPUTER VIRUSES OR LINE
							FAILURES. THE RELEASEES SHALL NOT HAVE ANY LIABILITY OR
							RESPONSIBILITY FOR ANY ACTS, OMISSIONS OR CONDUCT OF ANY
							USER OR OTHER THIRD PARTY. THE RELEASEES WILL ALSO NOT BE
							LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, EXEMPLARY OR
							CONSEQUENTIAL DAMAGES, EVEN IF THEY HAVE BEEN ADVISED OF
							THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT
							ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR
							CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS MAY NOT
							APPLY TO YOU. IF ANY PORTION OF THIS LIMITATION OF
							LIABILITY IS FOUND TO BE INVALID OR UNENFORCEABLE FOR ANY
							REASON, THEN THE AGGREGATE LIABILITY OF THE RELEASEES SHALL
							NOT EXCEEDOR BE LESS THAN TWO HUNDRED DOLLARS ($200).
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Indemnity
						</p>
						<p>
							You agree to indemnify and hold harmless KODO SCHOOARSHIPS
							and its Board members, directors, officers, employees,
							agents and contractors from and against any and all claims,
							damages, losses, costs (including without limitation
							reasonable attorneys' fees) or other expenses that arise
							directly or indirectly out of or from (a) your breach of
							any provision of this Agreement; (b) your activities in
							connection with the Web Applications, mobile applications,
							products and services; or (c) unsolicited information you
							provide to the KODO SCHOLARSHIPS through the Web
							Applications, mobile applications, products and services.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Consent to Communication
						</p>
						<p>
							If you provide us with a telephone number or email address,
							you expressly agree that we, or our authorized agents, can
							use that number or email address to contact you.
						</p>
						<p>
							When you use the Web Applications, mobile applications,
							products and services or send emails to KODO SCHOLARSHIPS,
							you are communicating with KODO SCHOLARSHIPS
							electronically. You consent to receive electronically any
							communications related to your use of the Web Applications,
							mobile applications, products and services. We may
							communicate with you by email or by posting notices on the
							Web Applications, mobile applications, products and
							services. You agree that all agreements, notices,
							disclosures and other communications that are provided to
							you electronically satisfy any legal requirement that such
							communications be in writing. All notices from the KODO
							SCHOLARSHIPS intended for receipt by a user in connection
							with the Web Applications, mobile applications, products
							and services shall be deemed delivered and effective when
							sent to the email address provided by the user on or
							through the Web Applications, mobile applications, products
							and services.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Effect of Invalidity
						</p>
						<p>
							In the event a court having jurisdiction finds any portion
							of this Agreement unenforceable, that portion shall not be
							effective and the remainder of this Agreement shall remain
							effective.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Waivers
						</p>
						<p>
							No waiver, express or implied, by either party of any
							breach of or default under this Agreement will constitute a
							continuing waiver of such breach or default or be deemed to
							be a waiver of any preceding or subsequent breach or
							default.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							International Users
						</p>
						<p>
							The Web Applications, mobile applications, products and
							services are controlled, operated and administered by KODO
							SHOLARSHIPS (or its licensees) from its offices within the
							Uganda, EAST AFRICA,Nigeria,Gambia,Zambia, Zimbabwe,
							Cameroon, Sierra Leon and Ghana. and are NOT intended to
							subject KODO SCHOLARSHIPS to the laws or jurisdiction of
							any state mentioned by country or territory other than that
							of the Uganda East Africa,Nigeria,Gambia,Zambia, Zimbabwe,
							Cameroon, Sierra Leon and Ghana.
						</p>
						<p>
							KODO SCHOLARSHIPS DOES NOT REPRESENT OR WARRANT THAT THE
							WEB APPLICATIONS, MOBILE APPLICATIONS, PRODUCTS AND
							SERVICES OR ANY PART THEREOF ARE APPROPRIATE OR AVAILABLE
							FOR USE IN ANY PARTICULAR JURISDICTION OTHER THAN THE
							UGANDA AND EAST AFRICA,Nigeria,Gambia,Zambia, Zimbabwe,
							Cameroon, Sierra Leon and Ghana. Those who choose to access
							the Web Applications, mobile applications, products and
							services do so on their own initiative and at their own
							risk, and are responsible for complying with all statutes,
							orders, regulations, rules and other laws of applicable
							jurisdictions.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Choice of Law
						</p>
						<p>
							You agree that any dispute in connection with the Web
							Applications, mobile applications, products and services,
							this Agreement or the Privacy Policy will be governed by
							the laws of Uganda, East Africa,Nigeria,Gambia,Zambia,
							Zimbabwe, Cameroon, Sierra Leon and Ghana. You also consent
							to the adjudication of any disputes arising in connection
							with the Web Applications, mobile applications, products
							and services in the courts of law of Uganda.
						</p>
						<p
							style={{
								color: "#1c2755"
							}}
						>
							Contact
						</p>
						<p>
							If you have questions about this Agreement, or if you have
							technical questions about the operation of the Web
							Applications, mobile applications, products and services,
							please contact us via email at: info@kodoscholarship.com
						</p>
					</div>
				</div>
				<div className="other">
					<div className="checkbox">
						<label>
							<input
								type="checkbox"
								checked={isChecked}
								onChange={handleCheckboxChange}
								// style={{ marginRight: "1rem" }}
							/>
							I have successfully read through the aboveterms and
							policies and agree by the above terms and policies
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Policy;
