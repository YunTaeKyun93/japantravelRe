import React from "react";
import classNames from "classnames/bind";
import styles from "./main-video.module.scss";
import ClipLoader from "react-spinners/ClipLoader";
const MainVideo = ({ logic }) => {
  const ss = classNames.bind(styles);

  if (logic.isWeatherLoading) {
    return (
      <ClipLoader color="white" loading={logic.airportIsLoading} size={150} />
    );
  }
  const weather = logic.weather;
  const fahrenheit = weather?.main.temp * 1.8 + 32;
  const fah = Math.round(fahrenheit * 100) / 100;
  return (
    <div className={ss("wrapper")}>
      <div className={ss("video-container")}>
        <iframe
          width="100%"
          height="960px"
          src="https://www.youtube.com/embed/KD3ey2dRmM0?loop=1&playlist=KD3ey2dRmM0&autoplay=1&mute=1&controls=0&showinfo=0&vq=hd1080&rel=0"
          title="Your Name (Kimi no Na wa)  Scenes In Real Life"
          allow="accelerometer; 
        autoplay; clipboard-write;
        encrypted-media; gyroscope;
        picture-in-picture; web-share"
        ></iframe>
        <div className={ss("weather-container")}>
          <div className={ss("weather-contents")}>
            <div className={ss("weather-icon")}>
              <img
                src={logic.weatherIcon}
                style={{ width: "200px", height: "200px" }}
                alt={logic.weather?.weather[0].main}
              />
            </div>
            <h4>
              {weather.main.temp}℃ / {fah}℉
            </h4>
            <span>
              {logic.day} {logic.month}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
