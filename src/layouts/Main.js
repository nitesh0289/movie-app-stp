import { Outlet } from "react-router-dom";
import React from "react";

import Navbar from "../components/shared/navbar";

import styles from "./layouts.module.scss";

function Main() {
  return (
    <main className={styles.conatiner}>
      <Navbar />
      <section className={styles.content}>
        <Outlet />
      </section>
    </main>
  );
}

export default Main;
