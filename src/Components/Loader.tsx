import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="Loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#a600ed"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export default Loader;
