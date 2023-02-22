import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import classNames from "classnames/bind";
import styles from "./anime-info.module.scss";
import AnimePoster from "./../../../../components/anime-poster/index";
import { BiChevronDown, BiChevronUp, BiChevronsRight } from "react-icons/bi";

import SwiperCore, { Autoplay, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

SwiperCore.use([Autoplay, Pagination, Scrollbar]);
const AnimeInfo = ({ logic }) => {
  const ss = classNames.bind(styles);
  const [storyMenuOpen, setStoryMenuOpen] = useState(false);

  if (logic.isAnimeInfoLoading) {
    return (
      <ClipLoader color="red" loading={logic.isAnimeInfoLoading} size={150} />
    );
  }
  const anime = logic.currentAnime;
  const relatedPlaces = logic.relatedPlaces;
  console.log(relatedPlaces);
  return (
    <div className={ss("card-container")}>
      <div className={ss("card-main")}>
        <div className={ss("card-header")}>{anime.title}</div>
        <div className={ss("card-contents")}>
          <Swiper
            className={`my-swiper ${ss("carousel-container")}`}
            slidesPerView={1}
            autoplay={{
              delay: 2500
            }}
            loop
            scrollbar={{ draggable: false }}
            pagination={{ clickable: false }}
          >
            {anime.images.map((image) => (
              <SwiperSlide key={image.imageUrl}>
                <AnimePoster
                  url={image.imageUrl}
                  className={ss("poster-img")}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={ss("card-border")} />
      <div className={ss("card-footer")}>
        <div
          className={ss("story")}
          onClick={() => setStoryMenuOpen(!storyMenuOpen)}
        >
          <span>스토리 요약</span>
          {storyMenuOpen ? <BiChevronDown  className={ss("arrow-down")}/> : <BiChevronUp className={ss("arrow-down")} />}
      
        </div>
        {storyMenuOpen && <p> {anime.story}</p>}
      </div>
      <div className={ss("relatedplace-list")}>
        {relatedPlaces.map((relatedPlace) => (
          <span>
            <BiChevronsRight/>{relatedPlace.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimeInfo;
