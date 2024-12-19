import Lottie from "lottie-react";
import notFound from "../../src/assets/team/404page.json";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-full py-12 h-full flex flex-col justify-center items-center">
      <div className="w-[250px] mx-auto">
        <Lottie className="border" animationData={notFound}></Lottie>
      </div>
      <div>
        <h3 className="flex flex-row gap-2 items-center text-center">
          <span>Go to</span>
          <Link to="/" className="text-red-500">
            Home
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default PageNotFound;
