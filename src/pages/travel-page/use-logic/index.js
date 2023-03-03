import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useReadAnimeList from "./../../../services/read-anime-list";
import useReadAnime from "./../../../services/read-anime";
import useReadPlaces from "../../../services/read-places/index";
import useReadRelatedPlace from "../../../services/read-related-place";
const defaultDepartureArea = {
  lat: 35.652832,
  lng: 139.79
};
const useLogic = () => {
  const navigator = useNavigate();
  const readAnimeList = useReadAnimeList();
  const readAnime = useReadAnime();
  const readPlaces = useReadPlaces();
  const readRelatedPlace = useReadRelatedPlace();
  const [animeList, setAnimeList] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [currentAnime, setCurrentAnime] = useState(null);
  const [swiperVersion, setSwiperVersion] = useState(0);
  const [places, setPlaces] = useState([]);
  const [focusedLocation, setFocusedLocation] = useState(undefined);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedRelatedPlace, setSelctedRelatedPlacec] = useState(null);

  const selectDepartureArea = async (place) => {
    console.log(1.5, place);
    setSelectedPlace(place);
    console.log(2, selectedPlace);
    setFocusedLocation({
      position: place.coordinates,
      name: place.name
    });
  };

  const init = async () => {
    const animeList = await readAnimeList();
    setAnimeList(animeList);
  };
  useEffect(() => {
    init();
  }, []);

  const getAnimeInfo = async (animeId) => {
    const animeInfo = await readAnime(animeId);
    return animeInfo;
  };

  const getPlaces = async (anime) => {
    const places = await readPlaces(anime.relatedPlaces);

    return places;
  };

  const getRelatedPlace = async (selectedPlace) => {
    const relatedPlace = await readRelatedPlace(selectedPlace._id);
    return relatedPlace;
  };

  useEffect(() => {
    const impl = async () => {
      if (selectedPlace == null) return;
      const relatedPlace = await getRelatedPlace(selectedPlace);
      console.log(3, relatedPlace);
      setSelctedRelatedPlacec(relatedPlace);
    };
    impl();
  }, [selectedPlace]);

  useEffect(() => {
    const impl = async () => {
      if (selectedAnime == null) {
        return;
      }

      const animeInfo = await getAnimeInfo(selectedAnime);
      setCurrentAnime(animeInfo);
      setSwiperVersion((prevVeresion) => prevVeresion + 1);
      setSelectedPlace(null);
    };
    impl();
  }, [selectedAnime]);

  useEffect(() => {
    const impl = async () => {
      if (currentAnime == null) {
        return;
      }
      const places = await getPlaces(currentAnime);
      // const result = [].concat(...places); //flat대신 사용 했는데 괜찮은지
      setPlaces(places);
    };
    impl();
  }, [currentAnime]);

  const requsetModalOpen = () => {
    setIsMediaModalOpen(true);
  };

  return {
    navigator,
    animeList,
    setSelectedAnime,
    isAnimeInfoLoading: !currentAnime,
    currentAnime,
    places,
    mediaMarkers: places,
    swiperVersion,
    selectDepartureArea,
    departureArea: focusedLocation?.position ?? defaultDepartureArea,
    isMediaModalOpen,
    setIsMediaModalOpen,
    requsetModalOpen,
    selectedPlace,
    setSelectedPlace,
    selectedRelatedPlace
  };
};
export default useLogic;

/*

엔드포인트:

GET animes?
GET places?
GET related-places?

# A
const animeId = '1234';
// 1
const anime = await readAnime(animeId);
anime.relatedPlaces (x)

// 2
const relatedPlaces = await readRelatedPlaces({ animeId }); // await RelatedPlace.find({ anime }).exec();



# b
// 1
const anime = await readAnime(animeId);
// 2
const relatedPlaces = await Promise.all(anime.relatedPlaces.map(
  relatedPlaceId => readRelatedPlace(relatedPlaceId)
))



anime.relatedPlace (id X) (object O)

// 1
const anime = await readAnime(animeId);

<div>
  {anime.relatedPlaces.map(
    relatedPlace => <img src={relatedPlace.image} />
  )}
</div>
anime.relatedPlaces.images;




GET animes
GET related-places?anime=1234

const useReadAnimes = () => async () => {
  const result = axios({
    method: 'get',
    url: `${apiAddr}/animes`
  });
};

const readAnimes = useReadAnimes();

const readAnimes = await readAnimes();

const relatedPlaces = await readRelatedPlacesOfAnime(animes[0].id);











const animes = await readAnimes();

<img src={animes[0].relatedPlaces[0].images} />






5
CREATE
UPDATE
DELETE
GET 단수
GET 복수

JOIN => 풀 객체

animes(1)
places(1)
related-places(1)


*/

/*
const bigFn = () => {
  // a
  // b
  // c
}

const fnA = (x) => {
  // a
}

const fnB = (x) => {
  // b
  a(x);
}

if (Number.isInteger(x) && x > 0) {
  throw new Error("");
}

const add = (a, b) => a + b;

const add = (a, b) => {
  // a
  if (Number.isInteger(x) && x > 0) {
    throw new Error("");
  }

  // b
  if (Number.isInteger(x) && x > 0) {
    throw new Error("");
  }

  return a + b;
}

const fnC = (x) => {
  // c
  if (x == null) {
    return;
  }
  b(x);
}
*/
