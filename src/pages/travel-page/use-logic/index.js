import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useReadAnimeList from "./../../../services/read-anime-list";
import useReadAnime from "./../../../services/read-anime";
import useReadRelatedPlacecs from "../../../services/read-related-places/index";

const defaultDepartureArea = {
  lat: 35.652832,
  lng: 139.79
};
const useLogic = () => {
  const navigator = useNavigate();
  const readAnimeList = useReadAnimeList();
  const readAnime = useReadAnime();
  const readRelatedPlaces = useReadRelatedPlacecs();
  const [animeList, setAnimeList] = useState([]);
  const [focusedLocation, setFocusedLocation] = useState(undefined);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [currentAnime, setCurrentAnime] = useState(null);
  const [relatedPlaces, setRealatedPlaces] = useState([]);
  const selectDepartureArea = async () => {};
console.log('currentAnime',currentAnime);
console.log('relatedPlaces',relatedPlaces)
  const init = async () => {
    const animeList = await readAnimeList();
    setAnimeList(animeList);
  };
  useEffect(() => {
    init();
  }, []);

  const getAnimeInfo = async () => {
    if (selectedAnime != null) {
      const animeInfo = await readAnime(selectedAnime);
      return animeInfo;
    }
  };
  const getRelatedPlaces = async () => {
    if (currentAnime != null) {
      const relatedPlaces = await readRelatedPlaces(currentAnime.relatedPlaces);
      return relatedPlaces;
    }
  };

  useEffect(() => {
    const impl = async () => {
      const animeInfo = await getAnimeInfo();
      setCurrentAnime(animeInfo);
    };
    impl();
  }, [selectedAnime]);

  useEffect(() => {
    const impl = async () => {
      const relatedPlaces = await getRelatedPlaces();
      setRealatedPlaces(relatedPlaces);
    };
    impl();
  }, [currentAnime]);

  return {
    navigator,
    animeList,
    // departureArea: focusedLocation?.position ?? defaultDepartureArea,
    defaultDepartureArea,
    setSelectedAnime,
    isAnimeInfoLoading: !currentAnime,
    currentAnime,
    relatedPlaces
  };
};
export default useLogic;
