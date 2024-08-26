import { RotatingLines, RotatingSquare } from "react-loader-spinner";

const Loader = () => {
  return (
    <RotatingLines
      strokeWidth="10"
      visible={true}
      strokeColor="pink"
      width="96"
      animationDuration="0.75"
    ></RotatingLines>
  );
};
export default Loader;
