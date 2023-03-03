import React from "react";
import classNames from "classnames/bind";
import styles from "./footer.module.scss";
import LogoBlackImg from "./../logo-black/index";
import ImageComponent from "./../image/index";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigator = useNavigate();
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <div className={ss("footer-container")}>
        <LogoBlackImg
          className={ss("logo")}
          onClick={() => {
            navigator("/");
          }}
        />
        <div className={ss("footer-description")}>
          <p>
            본 사이트는 상업적인 목적이 아닌 개인 포트폴리오 용도로
            만들어졌습니다. 홈페이지의 일부 내용과 이미지 등은 출처가 따로
            있음을 밝힙니다.
          </p>
        </div>
        <div className={ss("copyright")}>
          <a href="https://www.tripadvisor.com/Tourism-g1023181-Tokyo_Prefecture_Kanto-Vacations.html">
            <ImageComponent
              url="https://www.gotokyo.org/shared/site_gotokyo/images/105x16xbnr_tripadvisor.png.pagespeed.ic.6FzO4LzgR6.webp"
              className={ss("copyright-logo")}
            />
          </a>

          <p>저작권 ©Tokyo Convention & Visitors Bureau. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
