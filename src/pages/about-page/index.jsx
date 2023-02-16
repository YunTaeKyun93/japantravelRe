import React from "react";
import Navbar from "./../../components/nav-bar/index";
import classNames from "classnames/bind";
import styles from "./about-page.module.scss";
import AboutBanner from "./fragments/about-banner/index";
import useLogic from './use-logic/index';
import AboutContents from './fragments/about-contents/index';
const AboutPage = () => {
  const logic = useLogic()
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <Navbar scrollDir={logic.scrollDir}  />
      <AboutBanner />
      <AboutContents/>
    </div>
  );
};

export default AboutPage;
