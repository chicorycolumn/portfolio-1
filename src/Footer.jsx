import React from "react";
import styles from "./css/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.bar}>
      <p className={styles.text}>C. Matus</p>
      <div className={styles.emailmeHolder}>
        <p className={styles.emailme}>
          <a target="_blank" href="mailto:c.matus.contact@gmail.com">
            <img
              className={styles.emailmeIcon}
              src={require(`./images/icons/letter_white.png`)}
            />
          </a>
        </p>
        <p className={styles.emailme}>
          <a target="_blank" href="https://uk.linkedin.com/">
            <img
              className={styles.emailmeIcon}
              src={require(`./images/icons/github_white.png`)}
            />
          </a>
        </p>
        <p className={styles.emailme}>
          <a target="_blank" href="https://github.com/chicorycolumn">
            <img
              className={styles.emailmeIcon}
              src={require(`./images/icons/linkedin_white.png`)}
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
