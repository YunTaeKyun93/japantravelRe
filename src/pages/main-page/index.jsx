import React from "react";
import Navbar from "../../components/nav-bar/index";
import classNames from "classnames/bind";
import styles from "./main-page.module.scss";
import useLogic from "./use-logic";
import MainVideo from "./fragments/main-video/index";
import About from './fragments/about/index';
import Footer from './../../components/footer/index';
import MobileNavBar from '../../components/mobile-nav-bar';
const MainPage = () => {
  const ss = classNames.bind(styles);
  const logic = useLogic();

  return (
    <div className={ss("wrapper")}>
      <Navbar.Auto />
      <MobileNavBar/>
      <MainVideo logic={logic} />
      <About logic={logic}/>
      <Footer/>
    </div>
  );
};

export default MainPage;
