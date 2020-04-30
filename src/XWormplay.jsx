import React from "react";
import styles from "./css/XWormplay.module.css";

const ref = {
  pc2: { name: "computer screenshot of Wormplay 2", img: "worm_pc_2" },
  pc1: { name: "computer screenshot of Wormplay", img: "worm_pc_1" },
};

const XWormplay = () => {
  return (
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
              <p className={styles.title}>Wormplay</p>
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
              In game, players see their selfies appear on the worm's head, and
              try to drag and drop letters onto the worms to form words, against
              a timer. Socket.io allows players to play other users in real
              time, and the worms show different expressions based on game
              events.
              <br />
              <br />
              This was the final tw-week project at Northcoders, entirely remote
              working in a team of four to conceive, research, develop and
              deliver an end-to-end application in an agile environment. Used
              Trello as a kanban board and had daily standups. C Matus was
              primarily in charge of facial recognition components, and the data
              connections over the whole app.
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
              Node.js, Axios, Express, Socket.io
              <br />
              <h5 className={styles.header}>Front End</h5>
              HTML, CSS, CSS Modules, Socket.io, React, Phaser
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XWormplay;
