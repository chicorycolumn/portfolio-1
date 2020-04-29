import React from "react";
import styles from "./css/XNCNews.module.css";

const ref = [
  { name: "computer screenshot of NC News 2", img: "nc_pc_2" },
  { name: "computer screenshot of NC News", img: "nc_pc_1" },
  { name: "phone screenshot of NC News 2", img: "nc_ph_2" },
  { name: "phone screenshot of NC News", img: "nc_ph_1" },
];

const XNCNews = () => {
  return (
    <div className={styles.all}>
      <div className={styles.leftie}>
        <img
          className={styles.pc}
          src={require(`./images/screenshots/${ref[0].img}.png`)}
          alt={ref[0].name}
        />
        <img
          className={styles.pc}
          src={require(`./images/screenshots/${ref[1].img}.png`)}
          alt={ref[1].name}
        />
      </div>
      <div className={styles.rightie}>
        <div className={styles.box}>
          <div className={styles.innerbox}>
            <div className={styles.text}>
              <p className={styles.title}>NC News</p>
              <br />
              A fullstack Reddit style news aggregation board.
              <br />
              <br />
              Articles can be created, voted on, and sorted by date or
              popularity. Users can register and log in, then create and comment
              on articles, with comments being voted on.
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
            src={require(`./images/screenshots/${ref[2].img}.png`)}
            alt={ref[2].name}
          />
          <img
            className={styles.ph}
            src={require(`./images/screenshots/${ref[3].img}.png`)}
            alt={ref[3].name}
          />
        </div>
      </div>
    </div>
  );
};

export default XNCNews;
