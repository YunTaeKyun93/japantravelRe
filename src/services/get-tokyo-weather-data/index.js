import useOpenWeatherApiKey from "../open-weather-api-key";
const useGetTokyoWeatherData = () => {
  const openWeatherApikey = useOpenWeatherApiKey();
  return async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${openWeatherApikey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
};

export default useGetTokyoWeatherData;
