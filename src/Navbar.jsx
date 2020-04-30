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
    const colours = {
      Atlantic: {
        yin: "#87ceeb",
        yang: "#00ffff",
        bor: "#0000ff",
        text: "#0000e6",
        bg: "#e0ffff",
      },
      Electric: {
        yin: "#ffa500",
        yang: "#ffff00",
        bor: "#ffff00",
        text: "#000000",
        bg: "#f0f8ff",
      },
    };

    Object.keys(colours[theme]).forEach((label) => {
      document.documentElement.style.setProperty(
        `--${label}`,
        `${colours[theme][label]}`
      );
    });
  };

  render() {
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
        <div className={styles.right}>
          <span
            className={styles.block}
            onClick={() => {
              this.toggleDropdown;
            }}
          >
            <img
              className={styles.icon}
              src={require(`./images/icons/${ref.label}.png`)}
              alt={ref.label}
            />
            <p className={styles.iconText}>{ref.text}</p>
          </span>

          <div
            id="triggerForDropdownFilters"
            className={styles.trigger}
            onClick={this.toggleDropdown}
          >
            Change theme
          </div>
          {this.state.isShowing ? (
            <div className={styles.dropdown}>
              <button
                className={`${styles.buttonA} ${styles.dropButtons}`}
                onClick={() => {
                  this.handleFilterClick("Atlantic");
                }}
              >
                Atlantic
              </button>

              <button
                className={`${styles.buttonE} ${styles.dropButtons}`}
                onClick={() => {
                  this.handleFilterClick("Electric");
                }}
              >
                Electric
              </button>
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
