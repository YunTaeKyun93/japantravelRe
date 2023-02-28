import React, { Component } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import useGoogleMapApiKey from "../../services/google-map-api-key";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import useMap from "./use-map";
import useMediaMarkers from "./use-media-markers";
import classNames from "classnames/bind";
import styles from "./map.module.scss";
const emptyArray = [];



const Map = ({
  center,
  mediaMarkers = emptyArray,
  requsetModalOpen,
  currentMedia,
  selectDepartureArea,
  zoom = 10,
}) => {
  const ss = classNames.bind(styles);
  const apiKey = useGoogleMapApiKey();
  const { map, initializeGoogleMapIfNotInitialized, render } = useMap({
    center,
    zoom,
  });
  useMediaMarkers({
    map,
    mediaMarkers,
    requsetModalOpen,
    currentMedia,
    selectDepartureArea
  });
  return (
    <Wrapper apiKey={apiKey} render={render}>
      <div
        className={ss("wrapper")}
        ref={initializeGoogleMapIfNotInitialized}
      />
    </Wrapper>
  );
};

export default Map;
