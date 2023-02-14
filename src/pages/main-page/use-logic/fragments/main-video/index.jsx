import React from "react";
import classNames from "classnames/bind";
import styles from "./main-video.module.scss";
const MainVideo = () => {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("wrapper")}>
      <iframe
        width="100%"
        height="960px"
        src="https://www.youtube.com/embed/KD3ey2dRmM0?loop=1&playlist=KD3ey2dRmM0&autoplay=1&mute=1&controls=0&showinfo=0&vq=hd1080&rel=0"
        title="Your Name (Kimi no Na wa)  Scenes In Real Life"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      >
    </div>
  );
};

export default MainVideo;
