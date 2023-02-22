import React from "react";
import Navbar from "./../../components/nav-bar/index";
import classNames from "classnames/bind";
import styles from "./travel-page.module.scss";
import useLogic from "./use-logic/index";
import TravelBanner from "./fragments/travel-banner/index";
import Map from "./../../components/map/index";
import TravelContents from "./fragments/travel-contents/index";

const TravelPage = () => {
  const logic = useLogic();
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <Navbar />
      <TravelBanner />
      <TravelContents logic={logic} />

    </div>
  );
};

export default TravelPage;
