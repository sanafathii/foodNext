import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/">NextFood</Link>
      </div>
      <div className={styles.right}>
        <Link href="/menu">Menu</Link>
        <Link href="/categories">Categories</Link>
      </div>
    </header>
  );
}

export default Header;
