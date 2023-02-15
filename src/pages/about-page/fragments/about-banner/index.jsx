import React from "react";
import classNames from "classnames/bind";
import styles from "./about-banner.module.scss";

const AboutBanner = () => {
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <div className={ss("banner-container")}>
        <div className={ss("title-container")}>
          <div className={ss("title")}>
            <h3>애니메이션 세계에 있는 것처럼 느끼게 하는</h3>
            <h3>일본 애니메이션의 실제 장소를 여행 가고 싶다면</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
