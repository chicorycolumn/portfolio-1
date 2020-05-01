import React from "react";
import styles from "./css/Main.module.css";
import appStyles from "./css/App.module.css";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import { Router, navigate } from "@reach/router";

function Main() {
  return (
    <>
      <div className={appStyles.topAnchor} id="topAnchor"></div>
      <div className={appStyles.topPadding} id="topPadding"></div>
      <div className={styles.blurbContainer}>
        <p className={styles.blurb}>
          C Matus is a fast-learning and versatile junior software developer.
          <br />
          <br />A recent graduate of Northcoders, a multi award winning coding
          bootcamp.
        </p>
      </div>
      <div className={styles.holderP} id="portfolio-holder">
        <div className={styles.separator}></div>
        <h1 className={styles.ptitle}>Portfolio</h1>
        <Portfolio />
      </div>
      <div className={styles.holderA} id="aboutme-holder">
        <AboutMe />
      </div>
    </>
  );
}

export default Main;
