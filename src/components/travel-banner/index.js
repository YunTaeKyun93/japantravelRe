import TravelBannerSrc from "../../assets/image/travel-banner.PNG";
const TravelBannerImg = ({ className, style }) => {
  return (
    <img
      src={TravelBannerSrc}
      alt="TravelBannerImg"
      className={className}
      style={{ ...style, objectFit: "cover" }}
    />
  );
};
export default TravelBannerImg;
