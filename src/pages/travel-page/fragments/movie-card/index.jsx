import React from "react";
import classNames from "classnames/bind";
import styles from "./movie-card.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimePoster from "./../../../../components/anime-poster";
import "./swiper.css";
 
const MovieCard = ({ logic }) => {
  const ss = classNames.bind(styles);
  const anime = logic.currentAnime;


  return (
    <div className={ss("movie-card")}>
       
      <Swiper
        key={logic.swiperVersion}
        className={`my-swiper ${ss("carousel-container")}`}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 1000 }}
        // scrollbar={{ draggable: false }}
        // pagination={{ clickable: false }}
      >
        {anime.images.map((image) => (
          <SwiperSlide key={image.imageUrl}>
            <AnimePoster url={image.imageUrl} className={ss("poster-img")} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={ss("story-summary")}>
        <h3>스토리 요약</h3>
        <div className={ss("story")}>
          <p>{anime.story}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
