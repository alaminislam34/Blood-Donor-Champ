import { useContext, useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/AuthContext";
import "aos/dist/aos.css";
import Aos from "aos";
import Lottie from "lottie-react";
import logo from "../../assets/team/logo.json";
import userImage from "../../assets/user.jpg";

const Navbar = () => {
  const { theme, setTheme, user, loading } = useContext(AuthContext);
  const [sticky, setSticky] = useState();
  const location = useLocation();

  const handleTheme = (mood) => {
    setTheme(mood);
  };

  useEffect(() => {
    Aos.init({
      delay: 100,
      once: true,
      offset: 250,
      easing: "ease-out",
    });
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleSticky = () => {
      if (window.scrollY > 150) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleSticky);
    return () => window.removeEventListener("scroll", handleSticky);
  }, []);

  // Page title handle
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "রক্তদান এর নায়ক";
        break;
      case "/donar":
        document.title = "রক্তদাতা";
        break;
      case "/reviews":
        document.title = "মতামত";
        break;
      case "/profile":
        document.title = "প্রোফাইল";
        break;
      case "/donarForm":
        document.title = "ডোনার ফর্ম";
        break;
      case "/login":
        document.title = "লগইন";
        break;
      case "/register":
        document.title = "রেজিস্টার";
        break;
    }
  }, [location.pathname]);

  const menu = (
    <>
      <NavLink to="/">হোম</NavLink>
      <NavLink to="/donar">ডোনার</NavLink>
      <NavLink to="/reviews">মতামত</NavLink>
      <NavLink to="/healthInfo">স্বাস্থ্য পরামর্শ</NavLink>
      {user ? (
        <NavLink to="/profile">প্রোফাইল</NavLink>
      ) : (
        <li className="md:hidden">
          <Link
            to="/login"
            className={`py-1.5 md:py-2 px-4 border rounded-lg text-white bg-gradient-to-r ${
              theme === "light"
                ? " from from-pink-500 to-red-400"
                : "bg-[#2a323c]"
            }`}
          >
            লগইন
          </Link>
          <br />
          <Link
            to="/register"
            className={`py-1.5 md:py-2 px-4 border rounded-lg text-white bg-gradient-to-r ${
              theme === "light"
                ? " from from-pink-500 to-red-400"
                : "bg-[#2a323c]"
            }`}
          >
            রেজিস্ট্রেশন
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div
      className={` h-[63px] lg:h-[75px] relative z-50 ${
        theme === "light" ? "bg-white" : ""
      } `}
    >
      <div
        className={`w-full duration-700 ${
          sticky
            ? "fixed top-0 left-0 w-full z-50 backdrop-blur-xl shadow-xl"
            : ""
        }`}
      >
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          className="navbar max-w-7xl mx-auto "
        >
          <div className="navbar-start">
            <Link
              to="/"
              className="text-base md:text-2xl flex flex-row items-center"
            >
              <Lottie
                animationData={logo}
                loop={true} // Ensures the animation loops
                autoplay={true} // Starts the animation automatically
                className="w-14 h-14" // Ensures the size is correct
              />
              <span className="font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                লাল আশা
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex flex-row gap-6 text-base">
              {menu}
            </ul>
          </div>
          <div className="navbar-end flex flex-row gap-3">
            <button
              onClick={() =>
                handleTheme(`${theme === "light" ? "dark" : "light"}`)
              }
              className={`py-1 px-1 text-xl *:filter *:brightness-150 *:font-bold border rounded-xl ${
                theme === "light"
                  ? "shadow-[2px_2px_10px_1px_rgba(0,0,0,0.4)]"
                  : "shadow-[2px_2px_10px_1px_rgba(255,255,255,0.05)] border-transparent bg-[#2A323C]"
              }`}
            >
              {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
            </button>

            {user ? (
              <div>
                <Link to="/profile">
                  {loading ? (
                    <span className="loading loading-ring loading-lg"></span>
                  ) : (
                    <img
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full"
                      src={user.photoURL || userImage}
                      alt=""
                    />
                  )}
                </Link>
              </div>
            ) : (
              <div className="md:flex flex-row gap-2 items-center hidden">
                <Link
                  to="/login"
                  className={`py-1.5 md:py-2 px-4 border rounded-lg bg-gradient-to-r ${
                    theme === "light"
                      ? " from from-pink-500 to-red-400"
                      : "bg-[#2a323c]"
                  }`}
                >
                  লগইন
                </Link>
                <Link
                  to="/register"
                  className={`py-1.5 md:py-2 px-4 border rounded-lg bg-gradient-to-r ${
                    theme === "light"
                      ? " from from-pink-500 to-red-400"
                      : "bg-[#2a323c]"
                  }`}
                >
                  রেজিস্ট্রেশন
                </Link>
              </div>
            )}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content 
             bg-base-100 rounded-box z-[100] shadow-2xl p-4 gap-4 absolute w-40"
                style={{ right: 0, zIndex: 10000 }}
              >
                {menu}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
