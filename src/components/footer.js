import React from "react";
import styled from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <Footers>
        <div className="footer-container">
          <div className=" footer-left">
            <h1>CourseLelo</h1>
            <div className="social-icons">
              <AiFillInstagram className="footer-social-icons" />
              <FaTelegramPlane className="footer-social-icons" />
              <BsTwitter className="footer-social-icons" />
            </div>
          </div>
          <div className="footer-right">
            <ul>
              <h3>Courses</h3>
              <li>
                <a>Devlopment</a>
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
                <a>LifeStlye</a>
              </li>
            </ul>

            <ul>
              <h3>
                <a>CourseLelo</a>
              </h3>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Privacy policy</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />

        <div className="copyright">
          <h4>Copyright reserved-2022 ©️</h4>
        </div>
      </Footers>
    </>
  );
};

const Footers = styled.div`
  background-color: #33332d;
  /* height: 60%; */
  width: 100%;
  margin-top: 5rem;
  padding-bottom: 0.8rem;
  .footer-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    padding: 0 15%;

    padding-top: 2rem;
  }
  h1 {
    color: white;
    ${"" /* padding: 1.5rem 1rem; */}
  }
  .footer-social-icons {
    font-size: 2rem;
    color: white;
    margin: 0rem 1rem;
  }
  .social-icons {
    display: float;
    align-items: center;
    cursor:pointer;
    /* justify-content: space-between; */
  }
  .footer-right {
    display: flex;
    align-items: flex-start;
  }
  .footer-right h3 {
    color: whitesmoke;
    border-bottom: 1px solid white;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  ul:nth-child(1) {
    margin-right: 1rem;
  }
  ul li a {
    color: white;
    line-height: 2rem;
    &:hover {
      border-bottom: 1px solid white;
      cursor: pointer;
    }
  }
  .footer-left h1 {
    text-align: center;
  }

  hr {
    width: 80%;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    opacity: 0.1;
    color: black;
  }
  .copyright {
    margin-bottom: 1rem;
    h4 {
      text-align: center;
      color: white;
    }
  }
  @media (max-width: 650px) {
    .footer-container {
      padding: 0 3%;
      padding-top: 2rem;
      font-size: 15px;
    }
  }
  @media (max-width: 480px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .footer-right {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      width: 90%;
    }
  }
`;

export default Footer;
