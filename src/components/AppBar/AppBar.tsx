import React from "react";
import styles from "./AppBar.css";

console.log(styles);

export const AppBar = () => {
  return (
    <div className={styles["app-bar"]}>
      <h1>app bar</h1>
    </div>
  );
};
