import React from "react";

import ClipLoader from "react-spinners/ClipLoader";
import classNames from "classnames/bind";
import styles from "./related-place-info.module.scss";

import { FiX } from "react-icons/fi";
import RelatedAnimeCarousel from "../related-anime-carousel";
import RelatedPlaceCarousel from "../related-place-carousel";

const RelatedPlaceInfo = ({ place, relatedPlace, onRequestClose }) => {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("wrapper")}>
      <div className={ss("close-btn")}>
        <FiX onClick={onRequestClose} className={ss('close')}/>
      </div>
      <h1>{place.name}</h1>
      <div className={ss("border")}></div>
      <div className={ss("image-container")}>
      <RelatedAnimeCarousel relatedPlace={relatedPlace}/>
      <RelatedPlaceCarousel place={place}/>
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
