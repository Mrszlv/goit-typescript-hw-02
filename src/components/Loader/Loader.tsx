import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader: React.FC = () => (
  <div className={s.load}>
    <RotatingLines
      visible={true}
      width="80"
      strokeColor="white"
      strokeWidth="4"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
    />
  </div>
);

export default Loader;
