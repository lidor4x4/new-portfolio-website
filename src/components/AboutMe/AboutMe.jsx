import "./css/AboutMe.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import routyLogo from "./logos/routy-logo-removebg-preview.png";

export default function AboutMe() {
  return (
    <div className="about-me-continer">
      <div className="about-me">
        <h1 className="about-me-title">Hi, I’m Lidor. Nice to meet you.</h1>
        <p className="about-me-desc">
          Since beginning my journey as a freelance web developer over 3 years,
        </p>
        <p className="about-me-desc">
          I’ve worked on many projects, from small to big, from simple to
          complex. I’ve learned a lot about the development process
        </p>
        <p className="about-me-desc">
          from the planning to the final delivery. perpetually working on
          improving my chops one design problem at a time.
        </p>
      </div>
      <div className="about-me-my-skills-cards-container">
        <div className="about-me-my-skills-card-fornt-end">
          <FontAwesomeIcon
            icon="circle"
            className="about-me-my-skills-front-end-card-icon-circle-overlay"
            size="2xl"
            color="rgb(91,233,185)"
          />
          <FontAwesomeIcon
            icon="pen"
            className="about-me-my-skills-front-end-card-icon"
            size="2xl"
          />
          <h1 className="front-end-card-title">Frontend Developer</h1>
          <p className="front-end-card-desc">
            I like to code things from scratch, and enjoy
          </p>
          <p className="front-end-card-desc">
            bringing ideas to life in the browser.
          </p>
          <p className="prog-leng-title-front-end-card">Languages I speak:</p>
          <p className="prog-leng-desc-front-end-card">React, SCSS, CSS, JSX</p>
          <p className="dev-tools-title-front-end-card">Dev tools:</p>
          <ul className="dev-tools-desc-front-end-card">
            <li>Vscode</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>Github</li>
            <li>Terminal</li>
          </ul>
        </div>
        <div className="about-me-my-skills-card-back-end">
          <FontAwesomeIcon
            icon="circle"
            className="about-me-my-skills-back-end-card-icon-circle-overlay"
            size="2xl"
            color="rgb(91,233,185)"
          />
          <FontAwesomeIcon
            icon="code"
            className="about-me-my-skills-back-end-card-icon"
            size="2xl"
          />
          <h1 className="back-end-card-title">Backend Developer</h1>
          <p className="back-end-card-desc">
            I like to code endpoints from scratch, and enjoy
          </p>
          <p className="back-end-card-desc">
            seeing how it work with the front-end.
          </p>
          <p className="prog-leng-title-back-end-card">Languages I speak:</p>
          <p className="prog-leng-desc-back-end-card">
            JS, Express, MongoDB, NodeJS
          </p>
          <p className="dev-tools-title-back-end-card">Dev tools:</p>
          <ul className="dev-tools-desc-back-end-card">
            <li>Vscode</li>
            <li>Github</li>
            <li>Terminal</li>
          </ul>
        </div>
      </div>
      <div className="my-projects-continer">
        <h1 className="my-projects-title">My Projects</h1>
        <p className="my-projects-desc">
          I'm a bit of a digital product junky. Over the years, I've used
          hundreds of web and mobile
        </p>
        <p className="my-projects-desc">
          apps in different industries and verticals. Eventually, I decided that
          it would be a fun
        </p>
        <p className="my-projects-desc">
          challenge to try designing and building my own.
        </p>
        <hr />
        <br />
        <br />
      </div>
      <div className="my-projects-cards-continer">
        <div className="my-projects-routy-card">
          <img className="routy-logo" src={routyLogo} alt="routy" />
          <hr />
          <p className="my-projects-routy-desc">
            Be notified only when it matters
          </p>
          <p className="routy-link">
            <FontAwesomeIcon icon="code-branch" /> In development
          </p>
        </div>
      </div>
      <div className="collaborating-with-me-continer">
        <h1 className="collaborating-with-me-title">
          Interested in collaborating with me?
        </h1>
        <p className="collaborating-with-me-desc">
          I’m always open to discussing product code work or partnership
          opportunities.
        </p>
        <button
          onClick={() => (window.location.href = "/contact")}
          className="collaborating-with-me-button white-purple outline-btn"
        >
          <FontAwesomeIcon icon="message" /> Start a conversation
        </button>
      </div>
      <br />
      <br />
      <br />
      <div className="about-me-footer">
        <h2 className="about-me-footer-title">
          Living, learning, & leveling up
        </h2>
        <h2 className="about-me-footer-title mb-10">one day at a time.</h2>

        <div className="social-buttons-continer">
          <motion.buttom
            onClick={() =>
              (window.location.href = "https://github.com/lidor4x4")
            }
            className="github-button"
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon icon="fa-brands fa-github" size="2xl" />
          </motion.buttom>
          <motion.buttom whileHover={{scale:1.1}} onClick={() => window.location.href="/contact"} className="email-button">
            <FontAwesomeIcon icon="fa-regular fa-envelope" size="2xl" />
          </motion.buttom>
        </div>
        <p className="copyright pt-10">Handcrafted by me © LidorH</p>
      </div>
    </div>
  );
}
