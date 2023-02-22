import axios from "axios";
import useApiAddress from "../api-address";

const useReadAnimeList = () => {
  const apiAddress = useApiAddress();
  return async () => {
    const axiosResult = await axios({
      method: "get",
      url: `${apiAddress}/animeList`
    });
    const animeList = axiosResult.data;
    return animeList;
  };
};
export default useReadAnimeList;
