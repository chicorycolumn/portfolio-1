import styles from "./css/AboutMe.module.css";
import React from "react";
import image from "./images/person.png";

const AboutMe = () => {
  return (
    <div className={styles.box}>
      <div className={styles.innerbox}>
        <p className={styles.text}>
          C Matus is a fast-learning and versatile junior software developer,
          recently graduated from Northcoders, a multi-award-winning coding
          bootcamp.
          <br />
          <br />
          Track record of working in a team both remotely and in-person, with
          demanding schedules and fast-paced learning environments, as well as
          successfully organising own workload for research and execution of
          projects, and supporting colleagues.
          <br />
          <br />
          Highly-developed communication and presentation skills, with seven
          years experience teaching English. A flair and love for languages,
          speaks B2 Spanish and A2 Polish.
          <br />
          <br />
          Language: JavaScript
          <br />
          Back End: Node.js, Axios, Express, Knex, SQL, Socket.io
          <br />
          Front End: React, Phaser, HTML, CSS (and CSS Modules)
          <br />
          Testing: Chai, Sinon, Mocha, Jest
          <br />
          Additional experience: Python, Adobe Premiere Pro, Audacity
        </p>
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
