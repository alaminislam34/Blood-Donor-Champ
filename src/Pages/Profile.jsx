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
        .get(`${import.meta.env.VITE_URL}/donar`)
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
          <div className="relative flex justify-center items-center py-12 min-h-screen">
            {/* Decorative Background Shape */}

            {/* Profile Card */}
            <div
              className={`p-6 md:p-8 shadow-xl rounded-2xl backdrop-blur-lg flex flex-col justify-center items-center space-y-4 w-80 md:w-96 ${
                theme === "light"
                  ? "bg-gradient-to-br from-pink-50 via-white to-red-50 text-gray-800"
                  : "bg-gradient-to-br from-gray-700 via-gray-800 to-black text-white"
              }`}
            >
              {/* Profile Image */}
              <div className="w-32 md:w-40 h-32 md:h-40 rounded-full overflow-hidden border-4 border-pink-400">
                <img
                  className="w-full h-full object-cover"
                  src={user?.photoURL || userImage}
                  alt="User Profile"
                />
              </div>

              {/* User Name */}
              <h2 className="text-lg md:text-2xl font-bold">
                নাম: {user?.displayName || "অজানা"}
              </h2>

              {/* User Email */}
              <p className="text-sm md:text-base text-center">
                ইমেল: {user?.email || "ইমেল পাওয়া যায়নি"}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                {/* Join or Delete Donor */}
                {isDonar ? (
                  <Link
                    onClick={() => handleDeleteDonar(user?.email)}
                    className="flex items-center px-5 py-2 text-sm md:text-base font-medium rounded-full shadow-lg hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-red-400 to-pink-500 text-white"
                  >
                    ডিলিট ডোনার
                  </Link>
                ) : (
                  <Link
                    to="/donarForm"
                    className="flex items-center px-5 py-2 text-sm md:text-base font-medium rounded-full shadow-lg hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-pink-500 to-red-500 text-white"
                  >
                    জয়েন ডোনার
                  </Link>
                )}

                {/* Logout Button */}
                <button
                  onClick={handleLogoutUser}
                  className="flex items-center gap-2 px-5 py-2 text-sm md:text-base font-medium rounded-full shadow-lg hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-pink-500 to-red-500 text-white"
                >
                  <FaPowerOff className="text-lg" /> লগ আউট
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
