import React from "react";
import classNames from "classnames/bind";
import styles from "./about.module.scss";
const About = ({ logic }) => {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("wrapper")} onClick={() => logic.navigator("./about")}>
      <div className={ss("about-container")}>
        <img
          src="https://p4.wallpaperbetter.com/wallpaper/730/293/252/anime-your-name-kimi-no-na-wa-sky-wallpaper-preview.jpg"
          alt="일본여행"
        />
        <div className={ss("text-container")}>
          <h2>웹서비스를 만들게 된 계기</h2>
          <p>평범한 일본여행이 아닌</p>
          <p>애니메이션의 주인공이 될 수 있다면?</p>
        </div>
      </div>
    </div>
  );
};

export default About;
