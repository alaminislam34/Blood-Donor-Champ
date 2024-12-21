import { Circles } from "react-loader-spinner";

const UserLoader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Circles
        height={100}
        width={100}
        color="#ff4c4c" // Red color
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default UserLoader;
