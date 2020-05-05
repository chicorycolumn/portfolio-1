import React from "react";
import styles from "./css/XWormplay.module.css";
import appStyles from "./css/App.module.css";

const ref = {
  title: "Wormplay",

  screens: {
    pc2: { name: "computer screenshot of Wormplay 2", img: "worm_pc_2" },
    pc1: { name: "computer screenshot of Wormplay", img: "worm_pc_1" },
  },

  links: [
    {
      label: "Back End",
      site: "Heroku",
      url: "https://wormplayserver.herokuapp.com/",
    },
    {
      label: "Back End Code",
      site: "Github",
      url: "https://github.com/nadiarashad/wormplay-BE",
    },
    {
      label: "Front End",
      site: "Netlify",
      url: "https://github.com/chicorycolumn/wormplay-FE",
      primary: true,
    },
    {
      label: "Front End Code",
      site: "Github",
      url: "https://github.com/chicorycolumn/wormplay-FE",
    },
  ],
};

const XWormplay = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className={appStyles.topAnchor} id="topAnchor"></div>
      <div className={appStyles.topPadding} id="topPadding"></div>
      <div className={styles.all} id="all">
        <div className={styles.leftie} id="leftie">
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
                A Phaser-based online game with facial-recognition.
                <br />
                <br />
                Players create a username and enter a lobby, where they can pull
                funny faces in front of their webcam, and a emotion-recognition
                API takes photos of their face based on specific emotions. To
                play, users can join a game or create a new game room.
                <br />
                <br />
                In game, players see their selfies appear on the worm's head,
                and try to drag and drop letters onto the worms to form words,
                against a timer. Socket.io allows players to play other users in
                real time, and the worms show different expressions based on
                game events.
                <br />
                <br />
                This was the final two-week project at Northcoders, entirely
                remote working in a team of four to conceive, research, develop
                and deliver an end-to-end application in an agile environment.
                Used Trello as a kanban board and had daily standups. C Matus
                was primarily in charge of facial recognition components, and
                the data connections over the whole app.
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
                Node.js, Axios, Express, Socket.io
                <br />
                <h5 className={styles.header}>Front End</h5>
                HTML, CSS, CSS Modules, Socket.io, React, Phaser
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default XWormplay;
