"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { OffCanvas } from "..";

// MainHeader component for displaying the header section with navigation
const MainHeader = () => {
  const [offCanvasOpen, setoffCanvasOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the OffCanvas menu visibility
  const toggleOffCanvas = () => setoffCanvasOpen(!offCanvasOpen);

  // Toggle the dropdown menu visibility
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Left section of the header with hamburger menu and logo */}
        <div className={styles.left}>
          <button className={styles.hamburger} onClick={toggleOffCanvas}>
            &#9776;
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 112 32"
            width="90px"
            height="100%"
            fill="#FFF"
          >
            <path
              fill="currentColor"
              d="M6.08 24.096V7.904c0-.288.16-.48.448-.48h2.064c.304 0 .48.16.48.48v16.16c0 .352-.144.496-.48.496H6.528c-.304.016-.448-.16-.448-.464"
            ></path>
            {/* Add additional paths as needed */}
          </svg>
        </div>
        
        {/* Middle section of the header with search bar */}
        <div className={styles.middle}>
          <input
            type="text"
            placeholder="Search audiobook & stories..."
            className={styles.searchBar}
          />
        </div>
        
        {/* Right section of the header with dropdown and navigation buttons */}
        <div className={styles.right}>
          <div className={styles.dropdown}>
            <button
              className={styles.dropdownButton}
              onClick={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <div className={styles.dropdownContent}>
                <span>Languages</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="7"
                  className={styles.dropdownIcon}
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h8v7H0z"></path>
                    <path
                      fill="currentColor"
                      fillRule="nonzero"
                      d="m1 2 3 3 3-3z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className={styles.dropdownText}>Hindi</div>
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <ul>
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">Spanish</a>
                  </li>
                  <li>
                    <a href="#">French</a>
                  </li>
                  <li>
                    <a href="#">German</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button className={styles.navButton}>Buy Premium</button>
          <button className={styles.navButton}>Login/Signup</button>
          <button className={styles.navButton}>
            <Image
              src="https://d1l07mcd18xic4.cloudfront.net/static/donwloadapp.png"
              alt="Download"
              className={styles.downloadIcon}
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
      <OffCanvas show={offCanvasOpen} onClose={toggleOffCanvas} />
    </header>
  );
};

export default MainHeader;
