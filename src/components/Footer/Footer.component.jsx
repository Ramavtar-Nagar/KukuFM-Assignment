"use client";

import React from "react";
import footerStyles from "./Footer.module.css";

// PageFooter component for displaying footer section of the page
const PageFooter = () => {
  return (
    <footer className={footerStyles.pageFooter}>
      <div className={footerStyles.footerContainer}>
        
        {/* Footer navigation links */}
        <div className={footerStyles.footerLinks}>
          <a href="/about" className={footerStyles.footerLink}>
            About Us
          </a>
          <a href="/contact" className={footerStyles.footerLink}>
            Contact
          </a>
          <a href="/privacy" className={footerStyles.footerLink}>
            Privacy Policy
          </a>
          <a href="/terms" className={footerStyles.footerLink}>
            Terms of Service
          </a>
        </div>
        
        {/* Footer social media links */}
        <div className={footerStyles.footerSocial}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.footerSocialIcon}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.footerSocialIcon}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.footerSocialIcon}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.footerSocialIcon}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        
        {/* Footer copyright information */}
        <div className={footerStyles.footerCopy}>
          <p>
            &copy; {new Date().getFullYear()} KukuFM...    All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
