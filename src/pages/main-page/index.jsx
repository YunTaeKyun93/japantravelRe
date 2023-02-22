import React from "react";
import Navbar from "../../components/nav-bar/index";
import classNames from "classnames/bind";
import styles from "./main-page.module.scss";
import useLogic from "./use-logic";
import MainVideo from "./fragments/main-video/index";
import About from './fragments/about/index';

const MainPage = () => {
  const ss = classNames.bind(styles);
  const logic = useLogic();
  return (
    <div className={ss("wrapper")}>
      <Navbar.Auto />
      <MainVideo logic={logic} />
      <About logic={logic}/>
    </div>
  );
};

export default MainPage;
