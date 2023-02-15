import AboutContentSrc1 from "../../assets/image/kimetunoyaiba.jpg";
const AboutContentImg1 = ({ className, style }) => {
  return (
    <img
      src={AboutContentSrc1}
      alt="AboutContentImg1"
      className={className}
      style={{ ...style, objectFit: "cover" }}
    />
  );
};
export default AboutContentImg1;
