import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import classNames from "classnames/bind";
import styles from "./related-anime-carousel.module.scss";
const RelatedAnimeCarousel = ({relatedPlace}) => {
    const ss = classNames.bind(styles);

  return (
    <Swiper
    className={`my-swiper ${ss("carousel-container")}`}
    slidesPerView={1}
    autoplay={{
      delay: 2500
    }}
    loop
  >
    {relatedPlace.map((image) => (
      <SwiperSlide key={image.imageUrl}>
        <img
          src={image.imageUrl}
          className={ss("poster-img")}
          alt={image.imageUrl}
        />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default RelatedAnimeCarousel