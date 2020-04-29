import React from "react";
import styles from "./css/PCard.module.css";

const PCard = (props) => {
  let formattedDesc = [];
  props.pcard.descrip.split("\n").forEach((x, index) => {
    formattedDesc.push(x);
    if (index !== props.pcard.descrip.length - 1) {
      formattedDesc.push(<br />);
    }
  });

  return (
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
  );
};

export default PCard;
