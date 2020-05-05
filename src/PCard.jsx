import React from "react";
import styles from "./css/PCard.module.css";
import { Link, navigate } from "@reach/router";

const PCard = (props) => {
  let formattedDesc = [];
  if (props.pcard) {
    if (props.pcard.name) {
      props.pcard.descrip.split("\n").forEach((x, index) => {
        formattedDesc.push(x);
        if (index !== props.pcard.descrip.length - 1) {
          formattedDesc.push(<br />);
        }
      });
    }
  }

  return props.pcard ? (
    props.pcard.isCoda ? (
      <div className={styles.cardCoda}>
        <img
          className={styles.logoCoda}
          src={require(`./images/${props.pcard.img}.png`)}
          alt={"abstract swirls"}
        />
      </div>
    ) : (
      <Link to={props.pcard.link}>
        <div className={styles.card}>
          <img
            className={styles.logo}
            src={require(`./images/${props.pcard.img}.png`)}
            alt={`logo for ${props.pcard.name}`}
          />

          <div className={styles.descripContainer}>
            <div className={styles.descripSubcontainer}>
              <p className={styles.description}>{formattedDesc}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  ) : (
    <div className={styles.card}></div>
  );
};

export default PCard;
