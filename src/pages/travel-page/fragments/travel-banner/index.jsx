import React from "react";
import classNames from "classnames/bind";
import styles from "./travel-banner.module.scss";
import TravelBannerImg from "./../../../../components/travel-banner/index";
const TravelBanner = () => {
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <div className={ss("banner-container")}>
        <TravelBannerImg className={ss("banner-image")} />
      </div>
    </div>
  );
};

export default TravelBanner;
