import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        google -
      </a>
      Next js food project &copy;
    </div>
  );
}

export default Footer;
