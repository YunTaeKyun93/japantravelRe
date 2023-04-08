import React from "react";
import classNames from "classnames/bind";
import ClipLoader from "react-spinners/ClipLoader";

import styles from "./related-place-info.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import { FiX } from "react-icons/fi";

const RelatedPlaceInfo = ({ place, relatedPlace, onRequestClose }) => {
  const ss = classNames.bind(styles);
  // if (logic.relatedPlace== null) {
  //   return (
  //     <ClipLoader color="blue" loading={logic.isManholesLoading} size={350} />
  //   );
  // }


  return (
    <div className={ss("wrapper")}>
      <div className={ss("close-btn")}>
        <FiX onClick={onRequestClose} className={ss('close')}/>
      </div>
      <h1>{place.name}</h1>
      <div className={ss("border")}></div>
      <div className={ss("image-container")}>
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
        <Swiper
          className={`my-swiper ${ss("carousel-container")}`}
          slidesPerView={1}
          autoplay={{
            delay: 2500
          }}
        >
          {place.locationImages.map((image) => (
            <SwiperSlide key={image.imageUrl}>
              <img
                src={image.imageUrl}
                className={ss("poster-img")}
                alt={image.imageUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={ss("border")}></div>
      <div className={ss("content-container")}>
        <p>찾아가는 길 : {place.description}</p>
        <p>주소 : {place.address}</p>
      </div>
    </div>
  );
};

export default RelatedPlaceInfo;
