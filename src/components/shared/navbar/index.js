import React from "react";

import SearchBar from "./sections/SearchBar";
import Left from "./sections/Left";
import Right from "./sections/Right";

import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <header className={styles.header}>
      <Left />
      <SearchBar />
      <Right />
    </header>
  );
}

export default Navbar;
