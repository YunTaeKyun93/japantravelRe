import React, { useState } from "react";
import { BiChevronDown, BiChevronUp, BiChevronsRight } from "react-icons/bi";
import classNames from "classnames/bind";
import styles from "./anime-select-menu.module.scss";
import AnimeInfo from "./../anime-info/index";

const AnimeSelectMenu = ({ logic }) => {
  const ss = classNames.bind(styles);
  const [isAnimeListOpen, setIsAnimeListOpen] = useState(false);

  return (
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
      <div className={ss(`${isAnimeListOpen ? "anime-list" : "close-list"}`)}>
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
  );
};

export default AnimeSelectMenu;
