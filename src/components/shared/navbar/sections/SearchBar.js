import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

import styles from "../navbar.module.scss";

function SearchBar() {
  return (
    <article className={styles.searchbar}>
      <input value="" />
      <Icon icon="mdi:search" />
    </article>
  );
}

export default SearchBar;
