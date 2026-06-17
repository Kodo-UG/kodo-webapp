import React from 'react';
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import './NavHeader.css';
import logo from '../../assets/logo.png';
import {useLocation} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useQueryClient } from 'react-query';
import { clearFormData } from "../../toolkit/formReducer";
import { clearJobData } from "../../toolkit/jobReducer";
import { clearScholarships } from "../../toolkit/scholarshipReducer";
import { useMediaQuery } from '@uidotdev/usehooks';


export default function NavHeader() {
  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/aboutus", label: "About" },
    { href: "/scholarships", label: "Scholarships" },
    { href: "/testimonals", label: "Testimonials" },
    { href: "/blog", label: "Blogs" },
    { href: "/contactus", label: "Contact" },
  ]

  const location = useLocation();
 const token = localStorage.getItem('token');

 const isMd = useMediaQuery('only screen and (max-width: 950px)');
 const isSm = useMediaQuery('only screen and (max-width: 600px)');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 950) {
        // Changed from 768px to 950px to match the design
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []);

  const history = useHistory();
  const queryClient = useQueryClient(); // Get the queryClient instance
  const dispatch = useDispatch();

  const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.setItem("modal2Open", "true");
      localStorage.removeItem("userData");
      localStorage.removeItem("refer")
      dispatch(clearFormData());
      dispatch(clearJobData());
      queryClient.clear();
      dispatch(clearScholarships());
      history.push("/login");
    };
 

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}
    >
    <div className="container"
    >
      <nav className="nav"
         style={{
          marginBottom: isSm ? 40 : ''
        }}
      >
        {/* Logo section */}
        <div className="logo-Container">
          <Link to="/" className="logo-link">
            <img
              src={logo}
              alt="Kodo"
              width={120}
              height={24}
              className="logo-img"
              style={{
                width: 'full',
                height: 'full'
              }}
            />
          </Link>
        </div>
  
        {/* Navigation links */}
        <div className="nav-links"
          style={{
            display: isMd ? 'none' : 'flex'
          }}
        >
          {navigationItems.map((item) => (
            <Link style={{
              textDecoration: 'none',
              color: '#1d2855'
            }} key={item.href} to={item.href} className="nav-link nav-links-fix">
              {item.label}
            </Link>
          ))}
        </div>
  
        {/* Right section with login, CTA button, and menu toggle */}
        <div className="nav-right">
          {
            location.pathname == '/signin'|| location.pathname == '/login' || location.pathname == '/forgot/password' || location.pathname == '/final' ? '' : <div>{
              token ? <Link to="/scholars" className="login-link"
              >Dashboard</Link> : <Link to="/login" className="login-link"> Login</Link>
            }</div>
          }
          {
            token ?  <Link to="/scholarships" className="cta-button">Find Scholarships →</Link> :  <Link to="/stepper" className="cta-button">Find Scholarships →</Link>
          }
         
  
          {/* Mobile menu toggle */}
          <button className="menu-button" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <IoIosCloseCircleOutline size={30} /> : <Menu />}
          </button>
        </div>
      </nav>
    </div>
  
    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)} />
    )}
  
    {/* Mobile Menu */}
    <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
    >
      <div className="mobile-menu-content"
      >
        {navigationItems.map((item) => (
          <Link style={{
            color: '#1d2855'
          }} key={item.href} to={item.href} className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
  
        {/* Additional Mobile-only Links */}
        {
            location.pathname == '/signin'|| location.pathname == '/login' || location.pathname == '/forgot/password' || location.pathname == '/final' ? '' : <div>{
              token ? <Link to="/scholars" 
                className="mobile-menu-item sm-hidden"
              >Dashboard</Link> : <Link to="/login" 
                className="mobile-menu-item sm-hidden" onClick={() => setIsMobileMenuOpen(false)}
              > Login</Link>
            }</div>
          }
        {/* <Link to="/login" className="mobile-menu-item sm-hidden" onClick={() => setIsMobileMenuOpen(false)}>
          Login
        </Link> */}
        <div className="mobile-menu-button-container sm-hidden">
          <Link to="/scholarships" className="mobile-cta-button" onClick={() => setIsMobileMenuOpen(false)}>
            Find Scholarships →
          </Link>
        </div>
      </div>
    </div>
  </header>
  );
}