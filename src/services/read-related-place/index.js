import axios from "axios";
import useApiAddress from "../api-address/index";

const useReadRelatedPlace = () => {
  const apiAddress = useApiAddress();
  return async (placeId) => {
    const axiosResult = await axios({
      method: "get",
      url: `${apiAddress}/relatedPlaces`,
      params: { placeId }
    });
    
    const relatedPlaceImage = axiosResult.data.relatedPlaceImage;
  
    return relatedPlaceImage
  };
};
export default useReadRelatedPlace;
