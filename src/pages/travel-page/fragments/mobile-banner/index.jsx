import React from "react";
import classNames from "classnames/bind";
import styles from "./mobile-banner.module.scss";
const MobileBanner = () => {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("wrapper")}>
      <div className={ss("content")}>
        <iframe
          src="https://www.youtube.com/embed/TPatm1M5BAU?autoplay=1&mute=1&loop=1&playlist=TPatm1M5BAU"
          title="tokyo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <h2>Tokyo Travel</h2>
      </div>
    </div>
  );
};

export default MobileBanner;
