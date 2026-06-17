import React from 'react';
import {Link,useLocation} from 'react-router-dom';
import './footer.css';
import logo from '../../assets/logo.png';
import {useState,useEffect} from 'react';

const Footer = () => {
	const {pathname} = useLocation();
	console.log(pathname);

	const [isresponsive,setIsresponsive] = useState(window.innerWidth > 767);
	const [isresponsive2,setIsresponsive2] = useState(window.innerWidth > 1023);

	useEffect(() => {
		const handleResize = () => {
			setIsresponsive(window.innerWidth > 768);
			setIsresponsive2(window.innerWidth > 1023);
		};
	
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	  }, []);

	  const styles = {
		container: {
			marginBottom:isresponsive ? 200 : isresponsive2 ? 150 : 0
		},
	  };  

  return (
	<footer
		className='footer'
	>
	<div className="container">
	  <div className="footer-content"
	  	style={{
			position: 'relative'
		}}
	  >
		{/* Logo */}
		<div className={`${pathname == '/aboutus' ? 'logo-container-about': 'logo-container'}`}>
		  <Link to="/" className="inline-block">
			<img
			  src={logo}
			  alt="Kodo Scholarships"
			//   width={120}
            //   height={24}
              className={`${pathname == '/aboutus' ? 'logo-container-about-img' : 'logo-img'}`}
              style={{
                width: 'full',
                height: 'full'
			}}
			/>
		  </Link>
		</div>

		<div className={`${pathname == '/aboutus' ? 'links-container-about' : 'links-container'}`}
		>
		  {/* Navigation Links - First Column */}
		  <div className={`${pathname == '/aboutus' ? 'link-column-about-first' : 'link-column'}`}>
			<Link to="/aboutus"
				style={{
					color: '#1d2855'
				}}
			>About</Link>
			<Link to="/scholarships"
				style={{
					color: '#1d2855'
				}}
			>Scholarships</Link>
			<Link to="/testimonals"
				style={{
					color: '#1d2855'
				}}
			>Testimonials</Link>
			<Link to="/contactus"
				style={{
					color: '#1d2855'
				}}
			>Contact</Link>
		  </div>

		  {/* Navigation Links - Second Column */}
		  <div className={`${pathname == '/aboutus' ? 'link-column-about' : 'link-column'}`}
		  >
			<Link to="/policy"
				style={{
					color: '#1d2855'
				}}
			>Terms Of Service</Link>
			<Link to="/blog"
				style={{
					color: '#1d2855'
				}}
			>Blog</Link>
			<Link to="/policy"
				style={{
					color: '#1d2855'
				}}
			>Privacy Policy</Link>
		  </div>

		  {/* App Download Buttons */}
		  <div className={`${pathname == '/aboutus' ? 'app-buttons-about' : 'app-buttons'}app-buttons`}
		  	style={styles}
		  >
			<Link to="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
			  <img
				src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/App%20Store%20%E8%8B%B1%E6%96%87%20%E9%BB%91%E8%89%B2-mzVnx5Nup7Y6MoevDioYCglyFN83fG.png"
				alt="Download on the App Store"
				style={{
					marginBottom: 15
				}}
				className={`${pathname == '/aboutus'? 'app1' : ''}`}
			  />
			</Link>
			<Link to="https://play.google.com" target="_blank" rel="noopener noreferrer"
			>
			  <img
				src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google%20Play%20%E8%8B%B1%E6%96%87%20%E9%BB%91%E8%89%B2-5ip16nv7GXomrgrIDICT4vu5DL5slS.png"
				alt="Get it on Google Play"
				
			  />
			</Link>
		  </div>
		</div>
	  </div>
	</div>

	{/* Bottom Bar */}
	
  </footer>
  )
}

export default Footer