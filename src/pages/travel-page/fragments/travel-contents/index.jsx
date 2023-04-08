import React from "react";
import Map from "./../../../../components/map/index";
import classNames from "classnames/bind";
import styles from "./travel-contents.modulce.scss";
import AnimeSelectMenu from "./../anime-select-menu/index";

const TravelContents = ({ logic }) => {
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <div className={ss("travel-container")}>
        <AnimeSelectMenu logic={logic} />
        <Map
          center={logic.departureArea}
          zoom={logic.selectedPlace == null ? 10 : 20}
          mediaMarkers={logic.mediaMarkers.map((marker) => {
            return {
              ...marker,
              onClick: async () => {
                await logic.openMediaModalByMarker(marker);
              }
            };
          })}
        />
      </div>
    </div>
  );
};

export default TravelContents;
