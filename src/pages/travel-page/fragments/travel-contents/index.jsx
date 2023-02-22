import React, { useState } from "react";
import Map from "./../../../../components/map/index";
import classNames from "classnames/bind";
import styles from "./travel-contents.modulce.scss";
import { BiChevronDown, BiChevronUp, BiChevronsRight } from "react-icons/bi";
import AnimeInfo from "../anime-info/index";

const TravelContents = ({ logic }) => {
  const ss = classNames.bind(styles);
  const [isAnimeListOpen, setIsAnimeListOpen] = useState(false);
  return (
    <div className={ss("wrapper")}>
      <div className={ss("travel-container")}>
        <div className={ss("menu")}>
          <div className={ss("anime-menu")}>
            애니메이션 목록
            {isAnimeListOpen ? (
              <BiChevronUp
                className={ss("arrow")}
                onClick={() => setIsAnimeListOpen(!isAnimeListOpen)}
              />
            ) : (
              <BiChevronDown
                className={ss("arrow")}
                onClick={() => setIsAnimeListOpen(!isAnimeListOpen)}
              />
            )}
          </div>
          <div
            className={ss(`${isAnimeListOpen ? "anime-list" : "close-list"}`)}
          >
            {logic.animeList.map((anime) => (
              <span
                key={anime._id}
                onClick={() => {
                  logic.setSelectedAnime(anime._id);
                  setIsAnimeListOpen(false);
                }}
              >
                <BiChevronsRight /> {anime.title}
              </span>
            ))}
          </div>
          <AnimeInfo logic={logic} />
        </div>
        <Map
          center={logic.defaultDepartureArea}
          // mediaMarkers={logic.mediaMarkers}
          // requsetModalOpen={logic.requsetModalOpen}
          // setSelectedPlace={logic.setSelectedPlace}
        />
      </div>
    </div>
  );
};

export default TravelContents;
