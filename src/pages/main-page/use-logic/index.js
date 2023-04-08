import { useState, useEffect } from "react";
import useGetTokyoWeatherData from "./../../../services/get-tokyo-weather-data/index";
import useGetTokyoWeatherIcon from "../../../services/get-tokyo-weather-icon";
import { useNavigate,useLocation } from "react-router-dom";
const useLogic = () => {
  const getTokyoWeatherData = useGetTokyoWeatherData();
  const getTokyoWeatherIcon = useGetTokyoWeatherIcon();
  const navigator = useNavigate();
  const location = useLocation();
  const [scrollDir, setScrollDir] = useState("scrolling up");
  const [weather, setWeather] = useState(null);
  const [weatherIconCode, setWeatherIconCode] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [currentPage, setCurrentPage] = useState('');
  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [ location ])
 
  const init = async () => {
    const tokyoWeather = await getTokyoWeatherData();
    setWeather(tokyoWeather);
    setWeatherIconCode(tokyoWeather.weather[0].icon);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    init();
  }, []);

  useEffect(() => {
    const impl = async () => {
      const iconSrc = await getTokyoWeatherIcon(weatherIconCode);
      
      setWeatherIcon(iconSrc);
    };
    impl();
  }, [weatherIconCode]);
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const date = new Date();
  const day = date.getDate();
  const month = monthNames[date.getMonth()];


  return {
    scrollDir,
    weather,
    isWeatherLoading: !weather,
    weatherIcon,
    day,
    month,
    navigator,
    currentPage
  };
};
export default useLogic;
