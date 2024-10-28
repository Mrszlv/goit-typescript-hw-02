import ReactModal from "react-modal";
import { Image } from "../../servises/api";

import s from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
}

ReactModal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  const { urls, alt_description, user, likes } = image;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div>
        <img
          src={urls.regular}
          alt={alt_description || "Image"}
          className={s.modalImg}
        />
        <p className={s.modalText}>
          <span className={s.span}>Author:</span> {user.name}
        </p>
        <p className={s.modalText}>
          <span className={s.span}>Likes:</span> {likes}
        </p>
        <p className={s.modalText}>
          <span className={s.span}>Descriptions:</span> {alt_description}
        </p>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
