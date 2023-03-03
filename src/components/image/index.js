const ImageComponent = ({ className, style, url }) => {
    return (
      <img
        src={url}
        alt=""
        className={className}
        style={{ ...style }}
      />
    );
  };
  export default ImageComponent;
  