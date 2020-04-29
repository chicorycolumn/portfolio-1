import React from "react";
import styles from "./css/App.module.css";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import XWormplay from "./XWormplay";
import XNCNews from "./XNCNews";
import XPortfolio from "./XPortfolio";
import { Router, navigate } from "@reach/router";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Router>
        <Main path="/" />
        <XWormplay path="/wormplay" />
        <XNCNews path="/ncnews" />
        <XPortfolio path="/portfolio" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
