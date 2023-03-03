import axios from "axios";
import useApiAddress from "../api-address/index";
import ManholesNotFoundError from "./../../errors/manholes-not-found-error";

const useReadManholes = () => {
  const apiAddress = useApiAddress();
  return async () => {
    try {
      const axiosResult = await axios({
        method: "get",
        url: `${apiAddress}/manholes`
      });

      return axiosResult.data;
    } catch (error) {
      const httpStatus = error?.response?.status;

      if (httpStatus === 404) {
        throw new ManholesNotFoundError();
      }
    }
  };
};

export default useReadManholes;
