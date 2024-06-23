import React from "react";

import styles from "./navlink.module.scss";

function NavLink(props) {
  const { path, name, handler, className } = props;

  return (
    <a href={path || ""} onClick={() => handler?.()} className={` ${styles.link} ${className}`}>
      <span>{name}</span>
    </a>
  );
}

export default NavLink;
