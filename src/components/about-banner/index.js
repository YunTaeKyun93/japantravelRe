import AboutBannerSrc from "../../assets/image/about-banner.jpg";
const AboutBannerImg = ({ className, style }) => {
  return (
    <img
      src={AboutBannerSrc}
      alt="AboutBannerImg"
      className={className}
      style={{ ...style, objectFit: "cover" }}
    />
  );
};
export default AboutBannerImg;
