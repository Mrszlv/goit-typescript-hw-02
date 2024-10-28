import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader: React.FC = () => (
  <div className={s.load}>
    <RotatingLines
      visible={true}
      width="30"
      strokeColor="grey"
      strokeWidth="2"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
    />
  </div>
);

export default Loader;
