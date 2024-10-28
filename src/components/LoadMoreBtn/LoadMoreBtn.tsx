import s from "./LoadMoreBtn.module.css";
import { IoReload } from "react-icons/io5";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <button onClick={onClick} className={s.btn}>
    Load more <IoReload />
  </button>
);

export default LoadMoreBtn;
