import React, { useState } from "react";
// import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [ShowMobileView, SetMobileView] = useState(false);
  return (
    <>
      <navbar className="Main-Navbar">
        {/* left-side */}

        <div className="Left-side">
          <GiHamburgerMenu
            className="Hamburger"
            onClick={() => SetMobileView(!ShowMobileView)}
          />
          {/* LOGO */}

          <div className="Logo">
            <h2>
              <span>C</span>ourses
              <span>L</span>elo
            </h2>
          </div>
          {/* Nav-Tags */}
          <div className={ShowMobileView ? " mobile-view " : "Nav-tag"}>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li className="AC-icon">
                <a>
                  <h5>All</h5>{" "}
                  <h5>
                    Category <AiOutlineCaretDown />
                  </h5>
                </a>
                <div className="All-Category">
                  <ul>
                    <li>
                      <a>Development</a>
                    </li>
                    <li>
                      <a>Programming</a>
                    </li>
                    <li>
                      <a>Digital Marketing</a>
                    </li>
                    <li>
                      <a>Designing</a>
                    </li>
                    <li>
                      <a>LifeStyle</a>
                    </li>
                    <li>
                      <a>Others</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* right-side */}
        {/* Search bar b*/}

        <div className="search-bar">
          <input />
          <button>Search</button>
        </div>

        <FaSearch className="searchicon" />
      </navbar>
    </>
  );
};

export default Navbar;
