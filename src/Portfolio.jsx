import React from "react";
import PCard from "./PCard";
import styles from "./css/Portfolio.module.css";

class Portfolio extends React.Component {
  state = {
    currentGridRows: 0,
    pcards: [
      {
        name: "NC News",
        img: "logo_ncnews3",
        link: "/ncnews",
        descrip:
          "Fullstack Reddit-style news aggregation board.\nBuilt with RESTful API and SQL database.",
      },
      {
        name: "Wormplay",
        img: "logo_wormplay2",
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
    ],
  };

  theGridIsThrees = (gridThrees) => {
    let pcards = this.state.pcards;
    if (gridThrees.matches && this.state.currentGridRows !== 3) {
      pcards = pcards.filter((item) => item.name);
      this.setState({ currentGridRows: 3 });
      let len = pcards.length;
      if (len % 3 === 1) {
        pcards.splice(len - 1, 0, {});
        pcards.push({});
      } else if (len % 3 === 2) {
        pcards.splice(len - 1, 0, {});
      }
      this.setState({ pcards });
    }
  };

  theGridIsTwos = (gridTwos) => {
    let pcards = this.state.pcards;
    if (gridTwos.matches && this.state.currentGridRows !== 2) {
      this.setState({ currentGridRows: 2 });
      pcards = pcards.filter((item) => item.name);
      if (pcards.length % 2) {
        pcards.push({
          isCoda: true,
          img: "ornate_star2",
        });
      }
      this.setState({ pcards });
    }
  };

  theGridIsOnes = (gridOnes) => {
    let pcards = this.state.pcards;
    if (gridOnes.matches && this.state.currentGridRows !== 1) {
      this.setState({
        currentGridRows: 1,
      });
      pcards = pcards.filter((item) => item.name);
      this.setState({
        pcards,
      });
    }
  };

  render() {
    let gridOnes = window.matchMedia("(max-width: calc(306px * 3))");
    this.theGridIsOnes(gridOnes);
    gridOnes.addListener(this.theGridIsOnes);

    let gridTwos = window.matchMedia(
      "(max-width: calc(449.67px * 3)) and (min-width: calc(306.1px * 3))"
    );
    this.theGridIsTwos(gridTwos);
    gridTwos.addListener(this.theGridIsTwos);

    let gridThrees = window.matchMedia("(min-width: calc(449.68px * 3))");
    this.theGridIsThrees(gridThrees);
    gridThrees.addListener(this.theGridIsThrees);

    return (
      <div className={styles.grid} id="gridd">
        {this.state.pcards.map((pcard, index) => {
          return (
            <div id={styles[`pbox${index}`]} className={styles.box}>
              <PCard pcard={pcard} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Portfolio;
