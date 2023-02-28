import React from "react";
import classNames from "classnames/bind";
import styles from "./related-place-info.module.scss";
import SwiperCore, { Autoplay, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";

const RelatedPlaceInfo = ({ logic }) => {
  const ss = classNames.bind(styles);
  const place = logic.selectedPlace;
  const relatedPlace = logic.selectedRelatedPlace;

  return (
    <div className={ss("wrapper")}>
      <h1>{place.name}</h1>
      <div>
      <Swiper
            key={logic.swiperVersion}
            className={`my-swiper ${ss("carousel-container")}`}
            slidesPerView={1}
            autoplay={{
              delay: 2500
            }}
            loop
            scrollbar={{ draggable: false }}
            pagination={{ clickable: false }}
          >
            {/* {anime.images.map((image) => (
              <SwiperSlide key={image.imageUrl}>
                <AnimePoster
                  url={image.imageUrl}
                  className={ss("poster-img")}
                />
              </SwiperSlide>
            ))} */}
          </Swiper>
      </div>
      <div></div>
    </div>
  );
};

export default RelatedPlaceInfo;
