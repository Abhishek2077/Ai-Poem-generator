import React, { useEffect, useState } from "react";
import styles from "../App.module.css";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // every second

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <div className={styles.clock}>
      {time}
    </div>
  );
};

export default Clock;
