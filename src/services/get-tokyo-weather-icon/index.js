const useGetTokyoWeatherIcon = () => {
  return async (weatherIconCode) => {
    return `http://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
  };
};

export default useGetTokyoWeatherIcon;
