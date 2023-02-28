import useReadPlace from "../read-place";

const useReadPlacecs = () => {
  const readPlace = useReadPlace();

  return async (placeIds) => {
    const result = await Promise.all(
      placeIds.map((placeId) => readPlace(placeId))
    );

    return result;
  };
};

export default useReadPlacecs;
