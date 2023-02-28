import React, { useState, useEffect } from "react";

const infoWindowContents = ({ title, description }) => `
<div>
  <h3 style="color: royalblue">${title}</h3>
  <p style="font-size:14px">${description}</p>
</div>
`;

const useMediaMarkers = ({
  map,
  mediaMarkers,
  requsetModalOpen,
  selectDepartureArea
}) => {
  const [mediaMarkerInsts, setMediaMarkerInsts] = useState([]);
  const updateMediaMarkers = () => {
    if (map == null) {
      return;
    }

    mediaMarkerInsts.forEach((media) => media.setMap(null));

    // 마커를 생성한다.
    const newMediaMarkerInsts = mediaMarkers.map((marker) => {
      const infoWindow = new window.google.maps.InfoWindow({
        content: infoWindowContents({
          title: marker.name,
          description: marker.description
        }),
        ariaLabel: marker.name
      });

      const newMediaMarkerInst = new window.google.maps.Marker({
        position: marker.coordinates,
        title: marker.locationName,
        map,
        animation: window.google.maps.Animation.BOUNCE
      });

      newMediaMarkerInst.addListener("click", () => {
        requsetModalOpen();
        selectDepartureArea(marker);
      });

      newMediaMarkerInst.addListener("mouseover", () => {
        infoWindow.open({
          anchor: newMediaMarkerInst,
          map
        });
      });
      newMediaMarkerInst.addListener("mouseout", () => {
        infoWindow.close();
      });

      return newMediaMarkerInst;
    });

    // 새로 생성된 마커를 저장한다.
    setMediaMarkerInsts(newMediaMarkerInsts);
  };

  useEffect(() => {
    updateMediaMarkers();
  }, [map, mediaMarkers]);
};

export default useMediaMarkers;
