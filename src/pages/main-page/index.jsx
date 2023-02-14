import React from "react";
import Navbar from "./../../components/nav-bar/index";
import classNames from "classnames/bind";
import styles from "./main-page.module.scss";
import useLogic from "./use-logic";
import MainVideo from "./use-logic/fragments/main-video/index";
const MainPage = () => {
  const ss = classNames.bind(styles);
  const logic = useLogic();
  return (
    <div className={ss("wrapper")}>
      <Navbar scrollDir={logic.scrollDir} />
      <MainVideo />
    </div>
  );
};

export default MainPage;
