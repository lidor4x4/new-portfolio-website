import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeHeroSectionImg from "./imgs/Home-hero-section.png";
import "./css/Home.css";


export default function Home() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
    }, []);

  const toggleNav = () => {
      setToggleMenu(!toggleMenu);
  };
  
  return (
    <div className="home-container">
      <section className="hero-section">
        <img
          className="hero-section-img"
          
          alt="hero-section-img"
        />
        {(toggleMenu || screenWidth > 480) && (
          <ul className="nav">
            <motion.li
              onClick={() => (window.location.href = "/contact")}
              whileHover={{ scale: 1.2 }}
              className="nav-item2"
            >
              Contact me
            </motion.li>
            <motion.li onClick={() => window.location.href = "/about-me"} whileHover={{ scale: 1.2 }} className="nav-item3">
              About me
            </motion.li>
          </ul>
        )}
        {screenWidth < 480 && (
          <button onClick={toggleNav} className="navbar-button">
            <FontAwesomeIcon icon="bars" />
          </button>
        )}
        <div className="hero-section-me">
          <motion.h1 whileHover={{ scale: 1.2 }}>I'm Lidor</motion.h1>
          <motion.h3
            whileHover={{ scale: 0.9 }}
            className="aboue-me-subtitle-hero-section"
          >
            A full-stack web developer
          </motion.h3>
        </div>
      </section>
    </div>
  );
}
