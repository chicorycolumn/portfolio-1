import styles from "./css/AboutMe.module.css";
import React from "react";
import image from "./images/c_matus_photo.jpg";

const AboutMe = () => {
  return (
    <div className={styles.box}>
      <div className={styles.innerbox}>
        <p className={styles.text}>
          C Matus has a thorough track record of working in a team both remotely
          and in-person, with demanding schedules and fast-paced learning
          environments, as well as successfully organising own workload for
          research and execution of projects, and supporting colleagues.
          <br />
          <br />
          Highly-developed communication and presentation skills, with seven
          years experience teaching English. A flair and love for languages,
          speaks B2 Spanish and A2 Polish.
          <br />
          <br />A fast-learning and versatile junior software developer,
          recently graduated from Northcoders, a multi-award-winning coding
          bootcamp.
        </p>
        <div className={styles.specs}>
          <h5 className={styles.header}>Languages</h5>
          JavaScript
          <br />
          <h5 className={styles.header}>Back End</h5>
          Node.js, Axios, Express, Knex, SQL, Socket.io
          <br />
          <h5 className={styles.header}>Front End</h5>
          React, Phaser, HTML, CSS (and CSS Modules)
          <br />
          <h5 className={styles.header}>Testing</h5>
          Chai, Sinon, Mocha, Jest
          <br />
          <h5 className={styles.header}>Additional experience</h5>
          Python, Adobe Premiere Pro, Audacity
        </div>
        <div className={styles.rightbox}>
          <img
            className={styles.image}
            src={image}
            alt="Face and shoulders of the site designer in question"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
