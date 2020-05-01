import React from "react";
import PCard from "./PCard";
import styles from "./css/Portfolio.module.css";

const pcards = [
  {
    name: "NC News",
    img: "logo_ncnews2",
    link: "/ncnews",
    descrip:
      "Fullstack Reddit-style news aggregation board.\nBuilt with RESTful API and SQL database.",
  },
  {
    name: "Wormplay",
    img: "logo_wormplay",
    link: "/wormplay",
    descrip:
      "Phaser-based online game with facial-recognition.\nUses Socket.io for realtime player interactions",
  },
  {
    name: "Portfolio",
    img: "logo_portfolio2",
    link: "/portfolio",

    descrip: "Fully responsive React-based website.",
  },

  {
    name: "Wesoły",
    img: "logo_happy",
    link: "",
    descrip: "Happy happy yes.",
  },
  {
    name: "Zszokowany",
    img: "logo_shocked",
    link: "",
    descrip: "What a shock wow yes.",
  },
  {
    name: "Smutny",
    img: "logo_sad",
    link: "",
    descrip: "Sadness overwhelms me.",
  },
];

const Portfolio = () => {
  return (
    <div className={styles.grid} id="gridd">
      {pcards.map((pcard, index) => {
        return (
          <div id={styles[`pbox${index}`]} className={styles.box}>
            <PCard pcard={pcard} />
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
