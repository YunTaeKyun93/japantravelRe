import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import classNames from "classnames/bind";
import styles from "./anime-info.module.scss";
import { BiChevronDown, BiChevronUp, BiChevronsRight } from "react-icons/bi";

import MovieCard from "./../movie-card/index";

const AnimeInfo = ({ logic }) => {
  const ss = classNames.bind(styles);
  const [storyMenuOpen, setStoryMenuOpen] = useState(false);

  if (logic.isAnimeInfoLoading) {
    return <div>Loading...</div>;
  }
  const anime = logic.currentAnime;
  const places = logic.places;
  return (
    <div className={ss("card-container")}>
      <div className={ss("movie-title")}>
        <h2>{anime.title}</h2>
      </div>
      
      <div className={ss("card-main")}>
        <MovieCard logic={logic} />
      </div>
      <div className={ss("card-border")} />
      <div className={ss("card-footer")}>
        <div
          className={ss("story")}
          onClick={() => setStoryMenuOpen(!storyMenuOpen)}
        >
          <span>스토리 요약</span>
          {storyMenuOpen ? (
            <BiChevronUp className={ss("arrow-down")} />
          ) : (
            <BiChevronDown className={ss("arrow-down")} />
          )}
        </div>
        {storyMenuOpen && (
          <div className={ss("content")}>
            {storyMenuOpen && <p> {anime.story}</p>}
          </div>
        )}
      </div>
      <div className={ss("relatedplace-list")}>
        {places.map((place, i) => (
          <span
            key={i}
            onClick={() => {
              logic.selectDepartureArea(place);
            }}
          >
            <BiChevronsRight />
            {place.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimeInfo;
