import React from "react";
import styles from "./css/XNCNews.module.css";
import appStyles from "./css/App.module.css";

const ref = {
  title: "NC News",

  screens: {
    pc2: { name: "computer screenshot of NC News 2", img: "nc_pc_2" },
    pc1: { name: "computer screenshot of NC News", img: "nc_pc_1" },
    ph2: { name: "phone screenshot of NC News 2", img: "nc_ph_2" },
    ph1: { name: "phone screenshot of NC News", img: "nc_ph_1" },
  },

  links: [
    {
      label: "Back End",
      site: "Heroku",
      url: "https://nc-news-c-matus.herokuapp.com/api/",
    },
    {
      label: "Back End Code",
      site: "Github",
      url: "https://github.com/chicorycolumn/be-nc-news",
    },
    {
      label: "Front End",
      site: "Netlify",
      url: "https://purpleprose.netlify.com/",
      primary: true,
    },
    {
      label: "Front End Code",
      site: "Github",
      url: "https://github.com/chicorycolumn/fe-nc-news",
    },
  ],
};

const XNCNews = () => {
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
                A fullstack Reddit style news aggregation board.
                <br />
                <br />
                Articles can be created, voted on, and sorted by date or
                popularity. Users can register and log in, then create and
                comment on articles, with comments being voted on.
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
                Node.js, Axios, Express, Knex, SQL
                <br />
                <h5 className={styles.header}>Front End</h5>
                React, Reach Router, HTML, CSS, CSS Modules
                <br />
                <h5 className={styles.header}>Testing</h5>
                Chai, Mocha
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

export default XNCNews;
