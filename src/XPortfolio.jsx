import React from "react";
import styles from "./css/XPortfolio.module.css";
import appStyles from "./css/App.module.css";

const ref = {
  title: "Portfolio",

  screens: {
    pc2: { name: "computer screenshot of Portfolio 2", img: "portfolio_pc_1" },
    pc1: { name: "computer screenshot of Portfolio", img: "portfolio_pc_2" },
    ph2: { name: "phone screenshot of Portfolio 2", img: "portfolio_ph_2" },
    ph1: { name: "phone screenshot of Portfolio", img: "portfolio_ph_1" },
  },

  links: [
    {
      label: "Hosting",
      site: "Netlify",
      url: "https://c-m-portfolio.netlify.app",
      primary: true,
    },
    {
      label: "Code",
      site: "Github",
      url: "https://github.com/chicorycolumn/portfolio-1",
    },
  ],
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
            src={require(`./images/screenshots/${ref.screens.pc2.img}.png`)}
            alt={ref.screens.pc2.name}
          />
          <img
            className={styles.pc}
            src={require(`./images/screenshots/${ref.screens.pc1.img}.png`)}
            alt={ref.screens.pc1.name}
          />
        </div>
        <div className={styles.rightie}>
          <div className={styles.box}>
            <div className={styles.innerbox}>
              <div className={styles.text}>
                <div
                  className={styles.title}
                  onClick={() => {
                    window.open(
                      ref.links.filter((link) => link.primary)[0].url,
                      "_blank"
                    );
                  }}
                >
                  {ref.title}
                  <span className={styles.tooltiptext2}>Visit</span>
                </div>
                <br />
                A fully responsive React-based website
                <br />
                <br />A professional portfolio site, responsive to mobile and
                desktop. Intricate use of CSS to deliver a smooth experience.
                <div className={styles.linkBox}>
                  {ref.links.map((link) => {
                    return (
                      <div
                        className={styles.linkHolder}
                        onClick={() => {
                          window.open(link.url, "_blank");
                        }}
                      >
                        <img
                          className={styles.linkIcon}
                          alt={`${link.site} logo`}
                          src={require(`./images/${link.site.toLowerCase()}_logo.png`)}
                        />
                        <p className={styles.linkSubheading}>{link.label}</p>
                        <span className={styles.tooltiptext}>{link.site}</span>
                      </div>
                    );
                  })}
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
              src={require(`./images/screenshots/${ref.screens.ph2.img}.png`)}
              alt={ref.screens.ph2.name}
            />
            <img
              className={styles.ph}
              src={require(`./images/screenshots/${ref.screens.ph1.img}.png`)}
              alt={ref.screens.ph1.name}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default XPortfolio;
