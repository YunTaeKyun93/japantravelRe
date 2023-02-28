import useApiAddress from "../api-address";
import axios from "axios";

const useReadAnime = () => {
  const apiAddress = useApiAddress();

  return async (animeId) => {
    const axiosResult = await axios({
      method: "get",
      url: `${apiAddress}/animeList/${animeId}`,
    });
    
    const result = axiosResult.data;
    return result;
  };
};

export default useReadAnime;
