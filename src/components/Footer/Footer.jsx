import React from "react";
import "./footer.css";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
} from "@mui/icons-material";
import logo from "../Navbar/clinic-logo.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and About */}
          <div className="footer-section footer-logo-section">
            <div className="footer-logo">
              <img src={logo} alt="مركز العاليابي" />
              <h3 className="footer-logo-text">مركز العاليابي</h3>
            </div>
            <p className="footer-about">
              نقدم لكم رعاية صحية شاملة بايدي نخبة من الأطباء المتخصصين مع احدث
              التقنيات الطبية لضمان صحتكم وراحتكم.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">روابط سريعة</h3>
            <div className="footer-links">
              <a href="#home" className="footer-link">
                الرئيسية
              </a>
              <a href="#services" className="footer-link">
                الخدمات
              </a>
              <a href="#departments" className="footer-link">
                الأقسام الطبية
              </a>
              <a href="#doctors" className="footer-link">
                الأطباء
              </a>
              <a href="#contact" className="footer-link">
                اتصل بنا
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-heading">خدماتنا</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">
                الطب الباطني
              </a>
              <a href="#" className="footer-link">
                طب الأطفال
              </a>
              <a href="#" className="footer-link">
                أمراض القلب
              </a>
              <a href="#" className="footer-link">
                الأمراض الجلدية
              </a>
              <a href="#" className="footer-link">
                الطوارئ
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">معلومات الاتصال</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <LocationOn className="contact-icon" />
                <p>المملكة العربية السعودية، الرياض</p>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <p>+966 11 234 5678</p>
              </div>
              <div className="contact-item">
                <Email className="contact-icon" />
                <p>info@alayyabi.com</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="footer-social">
              <button className="social-icon" aria-label="Facebook">
                <Facebook />
              </button>
              <button className="social-icon" aria-label="Twitter">
                <Twitter />
              </button>
              <button className="social-icon" aria-label="Instagram">
                <Instagram />
              </button>
              <button className="social-icon" aria-label="LinkedIn">
                <LinkedIn />
              </button>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            © {new Date().getFullYear()} مركز العاليابي الطبي. جميع الحقوق
            محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
