import LogoBlackSrc from "../../assets/image/black-logo.png";
const LogoBlackImg = ({ className, style }) => {
  return (
    <img
      src={LogoBlackSrc}
      alt="LogoBlackImg"
      className={className}
      style={{ ...style, objectFit: "cover" }}
    />
  );
};
export default LogoBlackImg