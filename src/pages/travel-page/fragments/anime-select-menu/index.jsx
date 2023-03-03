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
      <div
        className={ss("anime-menu")}
        onClick={() => setIsAnimeListOpen(!isAnimeListOpen)}
      >
        애니메이션 목록
        {isAnimeListOpen ? (
          <BiChevronDown className={ss("arrow")} />
        ) : (
          <BiChevronUp className={ss("arrow")} />
        )}
      </div>
      <div className={ss(`${isAnimeListOpen ? "close-list" : "anime-list"}`)}>
        {logic.animeList.map((anime) => (
          <span
            key={anime._id}
            onClick={() => {
              logic.setSelectedAnime(anime._id);
              setIsAnimeListOpen(true);
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
