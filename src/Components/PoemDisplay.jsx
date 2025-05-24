import React from "react";
import styles from "../App.module.css";

const PoemDisplay = ({ response }) => {
  if (!Array.isArray(response)) {
    return <p className={styles.error}>No poem to display yet.</p>;
  }

  return (
    <div>
      {response.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default PoemDisplay;
