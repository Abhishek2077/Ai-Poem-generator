import React from "react";
import styles from "./App.module.css";
import Image from "./Components/Image";
import Header from "./Components/Header";
import Clock from "./Components/Clock";
import PoemBox from "./Components/PoemBox";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className={styles.container}>
      <Image />
      <Header />
      <Clock />
      <PoemBox />
      <Footer />
    </div>
  );
}

export default App;
