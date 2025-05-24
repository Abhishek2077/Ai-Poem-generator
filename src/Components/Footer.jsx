import React from "react";
import styles from "../App.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        Made with 💙 by Abhishek Roshu |{"  "}
        <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </div>
  );
};

export default Footer;
