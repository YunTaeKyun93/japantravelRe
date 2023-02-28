import axios from "axios";
import useApiAddress from "../api-address/index";
import PlaceNotFoundError from "../../errors/place-not-found-error";


const useReadPlace = () => {
  const apiAddress = useApiAddress();
  return async (placeId) => {
   
    try {
      const axiosResult = await axios({
        method: "get",
        url: `${apiAddress}/places/${placeId}`
      });

      return axiosResult.data;
    } catch (error) {
      const httpStatus = error?.response?.status;

      if (httpStatus === 404) {
        throw new PlaceNotFoundError({placeId});
   
      }
    }
  };
};

export default useReadPlace;
