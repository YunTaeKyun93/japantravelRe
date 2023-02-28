import { useNavigate } from "react-router-dom";
const useLogic = () => {
  const navigator = useNavigate();

  return {
    navigator
  };
};
export default useLogic;
