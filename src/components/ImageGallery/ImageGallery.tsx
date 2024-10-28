import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../servises/api";

import s from "./ImageGallery.module.css";

interface ImageGallerypProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGallerypProps> = ({
  images,
  onImageClick,
}) => {
  if (!images || images.length === 0) {
    return null;
  }
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          onClick={() => onImageClick(image)}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;
