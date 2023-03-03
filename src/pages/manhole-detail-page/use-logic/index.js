import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useReadManhole from "./../../../services/read-manhole";

const useLogic = () => {
  const readManhole = useReadManhole();
  const id = useParams();
  const [currentManhole, setCurrentManhole] = useState(null);

  const getManholeInfo = async (id) => {
    const manholeInfo = readManhole(id);
    return manholeInfo;
  };

  useEffect(() => {
    const impl = async () => {
      if (id == null) return;
      const manholeInfo = await getManholeInfo(id);
      setCurrentManhole(manholeInfo);
    };
    impl();
  }, []);
  return {
    currentManhole,
    isManholeLoading: !currentManhole,
  };
};
export default useLogic;
