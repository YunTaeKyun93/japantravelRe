import LogoWhiteSrc from "../../assets/image/logo.png";
const LogoWhiteImg = ({ className, style }) => {
  return (
    <img
      src={LogoWhiteSrc}
      alt="LogoWhiteImg"
      className={className}
      style={{ ...style, objectFit: "cover" }}
    />
  );
};
export default LogoWhiteImg