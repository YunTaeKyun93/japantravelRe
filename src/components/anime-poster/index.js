const AnimePoster = ({ url, className, style }) => {
  return (
    <img
      src={url}
      alt=""
      className={className}
      style={{ ...style, objectFit: "cover" }}
    />
  );
};
export default AnimePoster;
