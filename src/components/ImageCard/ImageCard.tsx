import { Image } from "../../servises/api";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const { urls, alt_description } = image;

  return (
    <li onClick={onClick} className={s.item}>
      <div>
        <img
          src={urls.small}
          alt={alt_description || "Image"}
          className={s.img}
        />
      </div>
    </li>
  );
};

export default ImageCard;
