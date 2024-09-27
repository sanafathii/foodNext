import React from "react";
import styles from "./HomePage.module.css";
import Banner from "../modules/Banner";
import Attributes from "../modules/Attributes";
import Definition from "../modules/Definition";
import Companies from "../modules/Companies";
import Instructure from "../modules/Instructure";
import Guide from "../modules/Guide";
import Restrictions from "../modules/Restrictions";

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instructure />
      <Guide />
      <Restrictions />
    </div>
  );
}

export default HomePage;
