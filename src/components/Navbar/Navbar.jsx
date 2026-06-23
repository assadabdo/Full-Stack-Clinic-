/* ============================================
   NAVBAR COMPONENT
   Sticky glass-morphism navbar with navigation
   ============================================ */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Navbar.css";
// import '../styles/global.css'
import Button from "@mui/material/Button";
import logo from "../Navbar/clinic-logo.jpeg";
import { supabase } from "../utils/supabase";
import { colors } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const Navbar = ({ session }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect for glass morphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "الخدمات", href: "#services" },
    // { name: "الأقسام الطبية", href: "#departments" },
    { name: "الأطباء", href: "#doctors" },
    { name: "اتصل بنا", href: "#contact" },
  ];

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle login/logout
  const handleLoginLogout = async () => {
    if (session) {
      await supabase.auth.signOut();
    } else {
      // Redirect to login page
      navigate("/login");
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-placeholder">
            <img src={logo} alt="no" />
            <span className="logo-text">مركز العاليابي</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-nav">
          {navLinks.map((link) => (
            <li key={link.name} className="navbar-nav-item">
              <a href={link.href} className="navbar-nav-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Login Button */}

        <div className="navbar-auth">
          <Button
            startIcon={session ? <LogoutIcon sx={{ margin: "0px 8px" }} /> : ""}
            onClick={handleLoginLogout}
            variant={session ? "contained" : "contained"}
            size="large"
            sx={{ backgroundColor: session ? "#d75c10c8" : "success" }}
          >
            {session ? "تسجيل خروج" : "تسجيل دخول"}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`navbar-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="navbar-mobile-nav">
          {navLinks.map((link) => (
            <li key={link.name} className="navbar-mobile-nav-item">
              <a
                href={link.href}
                className="navbar-mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar-mobile-auth">
          <Button
            startIcon={session ? <LogoutIcon sx={{ margin: "0px 8px" }} /> : ""}
            variant={session ? "contained" : "contained"}
            color={session ? "primary" : "success"}
            onClick={() => {
              handleLoginLogout();
              setIsMobileMenuOpen(false);
            }}
          >
            {session ? "تسجيل خروج" : "تسجيل دخول"}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
