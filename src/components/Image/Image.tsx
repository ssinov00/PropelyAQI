import { ImageProps } from "global";

const Image = ({ src, classes, alt } : ImageProps) => {
  return <img src={src} className={classes} alt={alt} />;
};

export default Image;