import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useReadManholes from "./../../../services/read-manholes/index";

const useLogic = () => {
  const [manholes, setManholes] = useState([]);
  const navigator = useNavigate();
  const readManholes = useReadManholes();

  const init = async () => {
    const manholes = await readManholes();
    setManholes(manholes);
  };
  useEffect(() => {
    init();
  }, []);

  return {
    manholes,
    isManholesLoading: !manholes,
    navigator
  };
};

export default useLogic;
