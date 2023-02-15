const useGetCurrnetLocation = () => {
  return async () => {
    let lat;
    let lon;
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
    });
  };
};
export default useGetCurrnetLocation;
