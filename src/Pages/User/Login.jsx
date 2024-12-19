import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const { theme, setUser, setAuthError, setLoader } = useContext(AuthContext);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        const user = result?.user;
        await user.reload();

        if (user.emailVerified) {
          Swal.fire({
            title: "সম্পূর্ণ",
            text: "আপনার লগইন সম্পূর্ণ হয়েছে",
            icon: "success",
            showConfirmButton: "আচ্ছা",
          });
          setLoader(true);
          setTimeout(() => {
            setLoader(false);
            navigate("/");
          }, 2000);
        } else {
          return Swal.fire({
            title: "ভেরিফিকেশন হয়নি",
            text: " আপনার ইমেইল ভেরিফিকেশন করে লগইন করুন",
            icon: "error",
            confirmButtonText: "ঠিক আছে",
          });
        }
      })
      .catch(() => setError("Incorrect email or password"));
  };

  const googleProvider = new GoogleAuthProvider();
  const handleSignUpGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => setAuthError(error.message));
  };
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        document.getElementById("my_modal_5").close();
        Swal.fire({
          title: "সম্পূর্ণ",
          text: "আপনার লগইন সম্পূর্ণ হয়েছে",
          icon: "success",
          confirmButtonText: "আচ্ছা",
        });
        e.target.reset();
        navigate("/login");
      })
      .catch();
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="flex justify-center items-center h-full py-12"
    >
      <form
        onSubmit={handleLogin}
        className={`flex flex-col gap-4 p-6 w-11/12 sm:w-8/12 mx-auto md:w-3/5 lg:w-6/12 rounded-xl ${
          theme === "light"
            ? "bg-gradient-to-tr from-red-100  to-red-200"
            : "bg-gradient-to-br from-[#f74747] to-[#701c1c]"
        }  loginForm`}
      >
        <h1
          className={`text-center text-2xl md:text-3xl font-bold bg-gradient-to-r ${
            theme === "light"
              ? "from-pink-400 to-red-600"
              : "from-pink-300 filter brightness-110 to-red-400"
          } bg-clip-text text-transparent py-2`}
        >
          লগইন করুন
        </h1>
        {error ? (
          <small
            className={`text-center ${
              theme === "light" ? "text-red-500" : "text-gray-300"
            }`}
          >
            {error}
          </small>
        ) : (
          " "
        )}
        <label htmlFor="email">
          <h4
            className={`text-lg font-semibold md:text-xl mb-1 ${
              theme === "light"
                ? "bg-gradient-to-r from-[#ec325a] to-red-400 text-transparent bg-clip-text"
                : "text-white"
            }`}
          >
            আপনার ইমেল
          </h4>
          <input
            required
            type="email"
            name="email"
            placeholder="আপনার ইমেল দিন"
            className={`w-full py-1.5 lg:py-2 px-3 lg:px-4 placeholder:text-sm placeholder:text-gray-400
              outline-none ${
                theme === "dark" ? "bg-transparent text-white" : "text-black"
              }`}
          />
        </label>

        <label htmlFor="pass">
          <h4
            className={`text-lg font-semibold md:text-xl mb-1 ${
              theme === "light"
                ? "bg-gradient-to-r from-[#ec325a] to-red-400 text-transparent bg-clip-text"
                : "text-white"
            }`}
          >
            আপনার পাসওয়ার্ড
          </h4>
          <input
            required
            type="password"
            name="password"
            placeholder="আপনার পাসওয়ার্ড"
            className={`w-full py-1.5 lg:py-2 px-3 lg:px-4 placeholder:text-sm placeholder:text-gray-400
              outline-none ${
                theme === "dark" ? "bg-transparent text-white" : "text-black"
              }`}
          />
          <p className="text-center pt-2">
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="text-sm underline"
            >
              পাসওয়ার্ড ভুলে গেছেন ?
            </button>
          </p>
        </label>
        <button
          type="submit"
          className={`text-xl font-bold py-1.5 btn border-none lg:py-2 border mt-4 rounded-lg ${
            theme === "light"
              ? "bg-gradient-to-r from-red-400 to-pink-400"
              : "bg-gradient-to-r from-red-300 to-pink-300 text-red-500"
          }`}
        >
          লগইন
        </button>
        <p className="text-right">
          কোন অ্যাকাইন্ট নেই ?{" "}
          <Link to="/register" className=" underline text-lg font-semibold">
            রেজিস্ট্রেশন
          </Link>
        </p>
        <div>
          <div className="divider">or</div>
          <div className="flex flex-col lg:flex-row *:flex-1 gap-2 items-center w-full *:w-full">
            <button
              type="button"
              onClick={handleSignUpGoogle}
              className={`font-bold py-1.5 btn border-none lg:py-2 border mt-4 rounded-lg ${
                theme === "light"
                  ? "bg-gradient-to-r from-red-400 to-pink-400"
                  : "bg-gradient-to-r from-red-300 to-pink-300 text-black"
              }`}
            >
              <FaGoogle /> Continue with google
            </button>
            <button
              type="button"
              className={`font-bold py-1.5 btn border-none lg:py-2 border mt-4 rounded-lg ${
                theme === "light"
                  ? "bg-gradient-to-r from-red-400 to-pink-400"
                  : "bg-gradient-to-r from-red-300 to-pink-300 text-black"
              }`}
            >
              <FaFacebook /> Continue with facebook
            </button>
          </div>
        </div>
      </form>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box ">
          <form onSubmit={handleResetPassword} className="flex flex-col gap-2">
            <h3 className="text-center my-2 text-lg md:text-xl">
              পাসওয়ার্ড রিসেট ইমেল পাঠান
            </h3>
            <input
              required
              type="email"
              name="email"
              placeholder="আপনার ইমেল লিখুন"
              className="py-2 px-4 border rounded-lg"
            />
            <button
              type="submit"
              className={`text-base md:text-lg font-bold py-1.5 btn border-none lg:py-2 border mt-4 rounded-lg ${
                theme === "light"
                  ? "bg-gradient-to-r from-red-400 to-pink-400"
                  : "bg-gradient-to-r from-red-300 to-pink-300 text-red-500"
              }`}
            >
              ইমেল পাঠান
            </button>
          </form>
          <div className="w-full mt-4 flex justify-center items-center">
            <button
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn"
            >
              close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
