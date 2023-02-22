import AboutContentSrc2 from "../../assets/image/about-contents2.png";
const AboutContentImg2 = ({ className, style }) => {
  return (
    <img
      src={AboutContentSrc2}
      alt="AboutContentImg2"
      className={className}
      style={{ ...style, objectFit: "cover" }}
    />
  );
};
export default AboutContentImg2;
