import axios from "axios";
import useApiAddress from "../api-address/index";

const useReadRelatedPlacecs = () => {
  const apiAddress = useApiAddress();
  return async (placeId) => {
  
    const axiosResult = await axios({
      method: "get",
      url: `${apiAddress}/places`,
      params: { placeId }
    });
    return axiosResult.data;
  };
};
export default useReadRelatedPlacecs;
