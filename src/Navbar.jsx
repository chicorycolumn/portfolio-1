import React from "react";
import styles from "./css/Navbar.module.css";

const refObj = [
  {
    label: "hexagons",
    text: "Portfolio",
    onclick: "portfolio-holder",
  },
  {
    label: "person",
    text: "About me",
    onclick: "aboutme-holder",
  },
  { label: "letter", text: "Contact me" },
  { label: "github", text: "Github" },
  { label: "linkedin", text: "LinkedIn" },
];

const Navbar = () => {
  return (
    <div className={styles.navGrid}>
      <div className={styles.left}>
        {refObj.map((ref) => (
          <span
            className={styles.block}
            onClick={() => {
              if (ref.onclick) {
                let el = document.getElementById(ref.onclick);

                el.scrollIntoView({
                  behavior: "smooth",
                });
                el.scrollTop += 500;
              }
            }}
          >
            <img
              className={styles.icon}
              src={require(`./images/icons/${ref.label}.png`)}
              alt={ref.label}
            />
            <p className={styles.iconText}>{ref.text}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
