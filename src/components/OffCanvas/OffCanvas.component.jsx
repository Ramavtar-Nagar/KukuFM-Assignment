"use client";

import React from "react";
import styles from "./OffCanvas.module.css";

// OffCanvas component for rendering a side menu
const OffCanvas = ({ show, onClose }) => {
  return (
    // Wrapper for the off-canvas menu, applying styles conditionally based on the 'show' prop
    <div className={`${styles.offCanvasWrapper} ${show ? styles.show : ""}`}>
      <div className={styles.offCanvasContent}>
        {/* Button to close the off-canvas menu */}
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.offCanvasHeader}>Menu</h2>
        <nav className={styles.offCanvasNav}>
          {/* Navigation links for the off-canvas menu */}
          <a href="/login-signup" className={styles.navItem}>
            Login / Signup
          </a>
          <a href="/for-creators" className={styles.navItem}>
            For Creators
          </a>
          <a href="/about" className={styles.navItem}>
            About
          </a>
          <a href="/legal" className={styles.navItem}>
            Legal
          </a>
          <a href="/help-support" className={styles.navItem}>
            Help & Support
          </a>
          <a href="/blog" className={styles.navItem}>
            Blogs
          </a>
          <a href="/download-app" className={styles.navItem}>
            Download KukuFM App
          </a>
          <a href="/careers" className={styles.navItem}>
            Careers 🚀
          </a>
        </nav>
        <div className={styles.offCanvasFooter}>
          {/* Footer text with an icon */}
          <p className={styles.footerText}>
            Made with Love{" "}
            <img
              height="18px"
              width="18px"
              src="https://d1l07mcd18xic4.cloudfront.net/static/love-icon.svg"
              alt="love icon"
            />{" "}
            in India
          </p>
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
