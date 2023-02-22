import LogoBlackSrc from "../../assets/image/black-logo.png";
import { useNavigate } from "react-router-dom";
const LogoBlackImg = ({ className, style }) => {
  const navigator = useNavigate()
  return (
    <img
      src={LogoBlackSrc}
      alt="LogoBlackImg"
      className={className}
      style={{ ...style, objectFit: "cover" }}
      onClick={()=>{navigator('/')}}
    />
  );
};
export default LogoBlackImg