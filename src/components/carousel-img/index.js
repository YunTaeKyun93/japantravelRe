const CarouselImage = ({ url, className, style }) => {
    return (
      <img
        src={url}
        alt={url}
        className={className}
        style={{ ...style, objectFit: "cover" }}
      />
    );
  };
  export default CarouselImage;
  