import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthContext";
import UserLoader from "../Pages/Loader/UserLoader";

const MainLayout = () => {
  const { loader } = useContext(AuthContext);
  return (
    <>
      {loader ? (
        <UserLoader />
      ) : (
        <div>
          <Navbar />
          <section className="max-w-7xl mx-auto min-h-[70vh] overflow-hidden">
            <Outlet />
          </section>
          <Footer />
        </div>
      )}
    </>
  );
};

export default MainLayout;
