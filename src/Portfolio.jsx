import React from "react";
import PCard from "./PCard";
import styles from "./css/Portfolio.module.css";

const pcards = [
  {
    name: "NC News",
    img: "logo_ncnews2",
    link: "",
    descrip:
      "It illustrates how flex-grow works, weird quirks and all. ... If we apply display: flex.",
  },
  {
    name: "Wormplay",
    img: "logo_wormplay",
    link: "",
    descrip:
      "Vitae scelerisque scelerisque scelerisque.\nEnim ligula venenatis.",
  },
  {
    name: "Portfolio",
    img: "logo_portfolio2",
    link: "",

    descrip:
      "You have the possiblity to affect one or more flex-items to don't stretch the full height of the container. To affect all glex-items of it.",
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
