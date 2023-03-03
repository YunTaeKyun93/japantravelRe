const ManholeListImg = ({ className, style, url }) => {
  return (
    <img
      src={url}
      alt=""
      className={className}
      style={{ ...style, objectFit: "cover" }}
    />
  );
};
export default ManholeListImg;
