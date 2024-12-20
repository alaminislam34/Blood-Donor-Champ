import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextProvider/AuthContext";
import { FaPowerOff } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";
import Swal from "sweetalert2";
import { PiWarningDiamondFill } from "react-icons/pi";
import userImage from "../assets/user.jpg";

const Profile = () => {
  const navigate = useNavigate();
  const { user, loading, theme, setLoader, isDonar, setIsDonar } =
    useContext(AuthContext);
  const handleLogoutUser = () => {
    Swal.fire({
      title: "আপনি কি নিশ্চিত",
      text: "আপনি কি অ্যাকাউন্ট লগ আউট করতে চান?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "লগ আউট",
    }).then((result) => {
      if (result?.isConfirmed) {
        signOut(auth)
          .then(
            Swal.fire({
              title: "লগ আউট!",
              text: "লগ আউট সম্পূর্ণ হয়েছে.",
              icon: "success",
              confirmButtonText: "আচ্ছা",
            }),
            setLoader(true),
            setTimeout(() => {
              setLoader(false);
              navigate("/");
            }, 3000)
          )
          .catch();
      } else {
        return;
      }
    });
  };

  useEffect(() => {
    if (user?.email) {
      axios
        .get("https://blood-donation-server-ar.vercel.app/donar")
        .then((result) => {
          if (result.data.some((d) => d.email === user.email)) {
            setIsDonar(true);
          } else {
            setIsDonar(false);
          }
        })
        .catch((error) => console.error("Error fetching donor data:", error));
    }
  }, [user]);

  const handleDeleteDonar = (email) => {
    Swal.fire({
      title: "আপনি কি নিশ্চিত",
      text: "আপনি কি আপনার ডোনার অ্যাকাউন্ট মুছে ফেলতে চান?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff242f",
      cancelButtonColor: "#6EC207",
      confirmButtonText: "হুম, মুছে ফেলুন",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_URL}/donar/${email}`)
          .then((result) => {
            if (result.data.deletedCount > 0) {
              Swal.fire({
                title: "সম্পূর্ণ!",
                text: "ডোনার অ্যাকাইন্ট ডিলিট",
                icon: "warning",
                confirmButtonText: "আচ্ছা",
              });
              setLoader(true);
              setTimeout(() => {
                setLoader(false);
              }, 2000);
            }
          });
      } else {
        return;
      }
    });
  };
  return (
    <div>
      <section className="h-full">
        {loading ? (
          ""
        ) : (
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className={`flex justify-center items-center py-12`}
          >
            <div
              className={`p-4 md:p-6 shadow-2xl rounded-xl backdrop-blur-md flex flex-col justify-center items-center space-y-2 md:space-y-4 md:w-80 w-72 duration-700 ${
                theme === "light"
                  ? "bg-gradient-to-tr from-pink-200 via-red-300 to-red-400"
                  : "bg-gradient-to-tr from-red-400 via-red-400 to-pink-300 text-white"
              }`}
            >
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="w-28 md:w-36 h-28 md:h-36 rounded-full overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover bg-center"
                  src={user?.photoURL || userImage}
                  alt=""
                />
              </div>
              <h2
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="text-lg md:text-xl font-semibold"
              >
                নাম: {user?.displayName}
              </h2>
              <p
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="text-xs md:text-sm lg:text-base"
              >
                ইমেল: {user?.email}
              </p>
              <div className="flex flex-row gap-3 pt-4">
                {isDonar ? (
                  <div data-aos="zoom-in" data-aos-duration="1500">
                    <Link
                      onClick={() => handleDeleteDonar(user?.email)}
                      className={`btn text-sm border-none ${
                        theme === "light"
                          ? "bg-gradient-to-l from-pink-500 to-red-600 text-white"
                          : "bg-gradient-to-l from-pink-300 to-red-300 text-black"
                      }`}
                    >
                      <span className="pt-1">ডিলিট ডোনার</span>{" "}
                      <PiWarningDiamondFill />
                    </Link>
                  </div>
                ) : (
                  <div data-aos="zoom-in" data-aos-duration="1500">
                    <Link
                      to="/donarForm"
                      className={`btn text-sm flex items-center border-none ${
                        theme === "light"
                          ? "bg-gradient-to-l from-pink-500 to-red-600 text-white"
                          : "bg-gradient-to-l from-pink-300 to-red-300 text-black"
                      }`}
                    >
                      <span className="pt-1">জয়েন ডোনার</span>
                    </Link>
                  </div>
                )}

                <button
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  onClick={handleLogoutUser}
                  className={`py-2 rounded-lg border-none ${
                    theme === "light"
                      ? "bg-gradient-to-l from-pink-500 to-red-600 text-white"
                      : "bg-gradient-to-l from-pink-300 to-red-300 text-black"
                  } border duration-500 text-sm flex flex-row gap-1 px-3 items-center`}
                >
                  <FaPowerOff /> <span className="pt-1">লগ আউট</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Profile;
