import React, { Component } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import useGoogleMapApiKey from "../../services/google-map-api-key";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import useMap from "./use-map";
import useMediaMarkers from "./use-media-markers";
import classNames from "classnames/bind";
import styles from "./map.module.scss";
const emptyArray = [];


// const center = {
//   lat: -3.745,
//   lng: -38.523
// };
// const Map = ({ center }) => {
//   const ss = classNames.bind(styles);
//   const apiKey = useGoogleMapApiKey();

//   return (
//     <LoadScript googleMapsApiKey={apiKey}>
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
//         {/* Child components, such as markers, info windows, etc. */}
//         <></>
//       </GoogleMap>
//     </LoadScript>
//   );
// };

const Map = ({
  center,
  mediaMarkers = emptyArray,
  requsetModalOpen,
  currentMedia,
  setSelectedPlace
}) => {

  const ss = classNames.bind(styles);
  const apiKey = useGoogleMapApiKey();
  const { map, initializeGoogleMapIfNotInitialized, render } = useMap({
    center
  });
  useMediaMarkers({
    map,
    mediaMarkers,
    requsetModalOpen,
    currentMedia,
    setSelectedPlace
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
