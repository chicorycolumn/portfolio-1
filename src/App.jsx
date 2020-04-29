import React from "react";
import styles from "./css/App.module.css";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      {/* <header className={styles.App_header}></header> */}
      <div className={styles.blurbContainer}>
        <p className={styles.blurb}>
          C Matus is a fast-learning and versatile junior software developer.
          <br />
          <br />
          Recently graduated from Northcoders, a multi award winning coding
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
      <Footer />
    </div>
  );
}

export default App;
