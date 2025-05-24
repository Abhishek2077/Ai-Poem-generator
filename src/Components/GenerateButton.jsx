import React from "react";
import styles from "../App.module.css";

const GenerateButton = ({ onClick }) => {
  return (
    <button className={styles.glowButton} onClick={onClick}>
      Generate New Poem
    </button>
  );
};

export default GenerateButton;
