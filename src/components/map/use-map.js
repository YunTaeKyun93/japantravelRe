import React, { useState, useRef, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const useMap = ({ center, zoom }) => {
  const mapRef = useRef();
  const [map, setMap] = useState();
  // const [zoom, setZoom] = useState(10);

  const initializeGoogleMapIfNotInitialized = (elem) => {
    // console.log({ elem });
    if (elem == null) {
      return;
    }

    if (!map) {
      mapRef.current = elem;
      setMap(
        new window.google.maps.Map(elem, {
          center,
          zoom,
        })
      );
    }
  };

  useEffect(() => {
    if (!map) {
      return;
    }
  
    map.setCenter(center);
  }, [center]);

  useEffect(() => {
    if (!map) {
      return;
    }
  
    map.setZoom(zoom);
  }, [zoom]);

  // useEffect(() => {
  //   if (!map) {
  //     return;
  //   }
  
  //   map.setCenter(center);
  //   map.setZoom(zoom);
  // }, [zoom, center]);


  const render = (status) => {
    return (
      <>
        <ClipLoader color="red" loading={status} size={150} />
        <h1>{status}</h1>
      </>
    );
  };

  return { map, initializeGoogleMapIfNotInitialized, render };
};

export default useMap;
