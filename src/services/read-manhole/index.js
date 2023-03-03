import useApiAddress from "../api-address/index";
import axios from "axios";

const useReadManhole = () => {
  const apiAddress = useApiAddress();

  return async (id) => {
    const manholeId = id.id;
    console.log(manholeId)
    try {
      const axiosResult = await axios({
        method: "get",
        url: `${apiAddress}/manholes/${manholeId}`
      });
      return axiosResult.data;
    } catch (error) {
      const httpStatus = error?.response?.status;
      // if(httpStatus === 404){
      //     throw new Error
      // }
    }
  };
};
export default useReadManhole;
