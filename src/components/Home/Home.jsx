import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/Home.css";


export default function Home() {

  return (
    <div className="home-container">
      <h1 className="title-home">Hello! Im Lidor</h1>
      <p className="desc-home">a full-stack web developer</p>
      <ul className="home-nav">
        <motion.li whileHover={{ scale: 1.1 }}>
          <a className="home-nav-link" href="/about">
            → About Me{" "}
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          {" "}
          <a className="home-nav-link" href="/contact">
            → Contact Me{" "}
          </a>{" "}
        </motion.li>
      </ul>
    </div>
  );
}
