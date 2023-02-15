

const useMainVideo = ({ weather }) => {

  const fahrenheit = weather?.main.temp * 1.8 + 32;
  const fah = Math.round(fahrenheit * 100) / 100;


  return {
    fah,
 
  };
};

export default useMainVideo;
