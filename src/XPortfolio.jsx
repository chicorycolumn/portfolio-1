import React from "react";
import styles from "./css/XPortfolio.module.css";
import appStyles from "./css/App.module.css";

const ref = {
  pc2: { name: "computer screenshot of Portfolio 2", img: "portfolio_pc_2" },
  pc1: { name: "computer screenshot of Portfolio", img: "portfolio_pc_1" },
  ph2: { name: "phone screenshot of Portfolio 2", img: "portfolio_ph_2" },
  ph1: { name: "phone screenshot of Portfolio", img: "portfolio_ph_1" },
};

const XPortfolio = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className={appStyles.topAnchor} id="topAnchor"></div>
      <div className={appStyles.topPadding} id="topPadding"></div>
      <div className={styles.all}>
        <div className={styles.leftie}>
          <img
            className={styles.pc}
            src={require(`./images/screenshots/${ref.pc2.img}.png`)}
            alt={ref.pc2.name}
          />
          <img
            className={styles.pc}
            src={require(`./images/screenshots/${ref.pc1.img}.png`)}
            alt={ref.pc1.name}
          />
        </div>
        <div className={styles.rightie}>
          <div className={styles.box}>
            <div className={styles.innerbox}>
              <div className={styles.text}>
                <p className={styles.title}>Portfolio Website</p>
                <br />
                A fully responsive React-based website
                <br />
                <br />A professional portfolio site, responsive to mobile and
                desktop. Intricate use of CSS to deliver a smooth experience.
                <div className={styles.linkBox}>
                  <div className={styles.linkHolder}>
                    <img
                      className={styles.linkIcon}
                      alt="heroku logo"
                      src={require(`./images/heroku_logo.png`)}
                    />
                    <p className={styles.linkSubheading}>Back End</p>
                    <span className={styles.tooltiptext}>Heroku</span>
                  </div>

                  <div className={styles.linkHolder}>
                    <span className={styles.tooltiptext}>Github</span>
                    <img
                      className={styles.linkIcon}
                      alt="github logo"
                      src={require(`./images/github_logo.png`)}
                    />
                    <p className={styles.linkSubheading}>Back End Code</p>
                  </div>

                  <div className={styles.linkHolder}>
                    <span className={styles.tooltiptext}>Netlify</span>
                    <img
                      className={styles.linkIcon}
                      alt="netlify logo"
                      src={require(`./images/netlify_logo.png`)}
                    />
                    <p className={styles.linkSubheading}>Front End</p>
                  </div>

                  <div className={styles.linkHolder}>
                    <span className={styles.tooltiptext}>Github</span>
                    <img
                      className={styles.linkIcon}
                      alt="github logo"
                      src={require(`./images/github_logo.png`)}
                    />
                    <p className={styles.linkSubheading}>Front End Code</p>
                  </div>
                </div>
              </div>

              <div className={styles.specs}>
                <h5 className={styles.header}>Language</h5>
                JavaScript
                <br />
                <h5 className={styles.header}>Back End</h5>
                Node.js
                <br />
                <h5 className={styles.header}>Front End</h5>
                React, Reach Router, HTML, CSS, CSS Modules
              </div>
            </div>
          </div>

          <div className={styles.phHolder}>
            <img
              className={styles.ph}
              src={require(`./images/screenshots/${ref.ph2.img}.png`)}
              alt={ref.ph2.name}
            />
            <img
              className={styles.ph}
              src={require(`./images/screenshots/${ref.ph1.img}.png`)}
              alt={ref.ph1.name}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default XPortfolio;
