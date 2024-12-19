import { BallTriangle } from "react-loader-spinner";

const UserLoader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default UserLoader;
