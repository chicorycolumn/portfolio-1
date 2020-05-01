import React from "react";
import styles from "./css/Navbar.module.css";
import { useLocation } from "react-router-dom";

const refObj = [
  {
    label: "hexagons",
    text: "Portfolio",
    onclick: "portfolio-holder",
  },
  {
    label: "person",
    text: "About",
    onclick: "aboutme-holder",
  },
  { label: "letter", text: "Contact" },
  {
    label: "github",
    text: "Github",
    onclick: "https://github.com/chicorycolumn",
  },
  { label: "linkedin", text: "LinkedIn", onclick: "https://uk.linkedin.com/" },
];

const colours = {
  Atlantic: {
    yin: "#87ceeb",
    yang: "#00ffff",
    bor: "#0000ff",
    text: "#0000e6",
    bg: "#e0ffff",
  },
  Electric: {
    yin: "#ffc966",
    yang: "#ffff66",
    bor: "#ffa500",
    text: "#332100",
    bg: "#fcfce8",
  },
  Photosynthetic: {
    yin: "#90EE90",
    yang: "#d3f8d3",
    bor: "#1cb01c",
    text: "#0e580e",
    bg: "#e9fce9",
  },
  Hellenic: {
    yin: "#D3D3D3",
    yang: "#ffffff",
    bor: "#000000",
    text: "#000000",
    bg: "#F5F5F5",
  },
};

class Navbar extends React.Component {
  state = {
    isShowing: false,
  };

  toggleDropdown = () => {
    this.setState((prevState) => {
      return { isShowing: !prevState.isShowing };
    });
  };

  handleFilterClick = (theme) => {
    Object.keys(colours[theme]).forEach((label) => {
      document.documentElement.style.setProperty(
        `--${label}`,
        `${colours[theme][label]}`
      );
    });
  };

  render() {
    return (
      <div className={styles.navGrid} id="navbar">
        <div className={styles.left}>
          {refObj.map((ref) => (
            <span
              className={styles.block}
              onClick={() => {
                // let location = useLocation();
                console.log(this.props);

                if (ref.onclick) {
                  if (/^http/.test(ref.onclick)) {
                    window.open(ref.onclick, "_blank");
                  } else {
                    let el = document.getElementById(ref.onclick);
                    el.scrollIntoView({
                      behavior: "smooth",
                    });
                    el.scrollTop += 500;
                  }
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
        <div className={styles.right}>
          <span
            id="triggerForDropdownFilters"
            className={`${styles.block} ${styles.trigger}`}
            onClick={this.toggleDropdown}
          >
            <img
              className={styles.icon}
              src={require(`./images/icons/star.png`)}
              alt="Star"
            />
            <span className={`${styles.iconText} ${styles.Wordschangetheme}`}>
              Change theme
            </span>
            <span className={`${styles.iconText} ${styles.Wordstheme}`}>
              Theme
            </span>
          </span>
          {this.state.isShowing ? (
            <div className={styles.dropdown}>
              {Object.keys(colours).map((label) => {
                return (
                  <button
                    style={{ backgroundColor: colours[label].yang }}
                    id={`button${label}`}
                    className={styles.dropButtons}
                    onClick={() => {
                      this.handleFilterClick(label);
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
