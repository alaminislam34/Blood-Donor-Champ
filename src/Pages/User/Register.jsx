import { useContext, useState } from "react";
import { AuthContext } from "../../ContextProvider/AuthContext";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Swal from "sweetalert2";

const Register = () => {
  const [passError, setPassError] = useState(false);
  const [error2, setError2] = useState(false);
  const { theme, setUser, setAuthError, authError, setLoader } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const handleSignUpGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setLoader(true);
        setTimeout(() => {
          setLoader(false);
          navigate("/");
        }, 2000);
      })
      .catch((error) => setAuthError(error.message));
  };
  //   handle Register
  const handleRegister = (e) => {
    e.preventDefault();

    // Password validation regex
    const regex =
      /^(?=.*[a-zA-Z])(?=.*[\d!@#$%^&*()_+={}\\[\]|;:'",.<>?/~`-]).{6,}$/;

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass1 = form.pass1.value;
    const pass2 = form.pass2.value;

    // Validate password
    if (!regex.test(pass1)) {
      setPassError(true);
      return;
    } else {
      setPassError(false);
    }

    // Check if passwords match
    if (pass1 !== pass2) {
      setError2(true);
      return;
    } else {
      setError2(false);
    }

    // Create user account
    createUserWithEmailAndPassword(auth, email, pass1)
      .then((result) => {
        const user = result.user;

        // Send email verification
        sendEmailVerification(user).then(() => {
          Swal.fire({
            title: "ইমেইল ভেরিফিকেশন পাঠানো হয়েছে",
            text: "আপনার ইমেইল চেক করুন এবং ভেরিফিকেশন সম্পূর্ণ করুন।",
            icon: "info",
            confirmButtonText: "ঠিক আছে",
          });

          // Update profile
          updateProfile(user, { displayName: name });

          // Sign out the user to prevent unverified login
          auth.signOut();

          setLoader(true);
          setTimeout(() => {
            setLoader(false);
            navigate("/login"); // Redirect to login page
          }, 2000);
        });
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center py-12">
      <form
        onSubmit={handleRegister}
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className={`flex flex-col gap-4 p-6 w-11/12 sm:w-8/12 mx-auto md:w-3/5 lg:w-6/12 rounded-xl ${
          theme === "light"
            ? "bg-gradient-to-tr from-red-100  to-red-200"
            : "bg-gradient-to-br from-[#f74747] to-[#701c1c]"
        }   loginForm`}
      >
        <div>
          <h1
            className={`text-center text-2xl md:text-3xl font-bold bg-gradient-to-br ${
              theme === "light"
                ? "from-pink-400 to-red-600"
                : "from-pink-200 filter brightness-110 to-red-300"
            } bg-clip-text text-transparent mt-4 pt-4`}
          >
            রেজিস্ট্রেশন করুন
          </h1>
        </div>
        {authError ? (
          <small
            className={` text-center ${
              theme === "light" ? "text-red-600" : "text-white/70"
            }text-red-500`}
          >
            {authError}
          </small>
        ) : (
          ""
        )}
        {/* your name */}
        <label htmlFor="name">
          <h4
            className={`font-semibold md:text-xl mb-1 ${
              theme === "light"
                ? "bg-gradient-to-r from-[#ec325a] to-red-400 text-transparent bg-clip-text"
                : "text-white"
            }`}
          >
            আপনার নাম
          </h4>
          <input
            required
            type="text"
            name="name"
            placeholder="আপনার নাম দিন"
            className={`w-full py-1.5 lg:py-2 px-3 lg:px-4 placeholder:text-sm placeholder:text-gray-400
              outline-none ${
                theme === "dark" ? "bg-transparent text-white" : "text-black"
              }`}
          />
        </label>
        {/* email */}
        <label htmlFor="email">
          <h4
            className={`font-semibold md:text-xl mb-1 ${
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
        {/* pass1 */}
        <label htmlFor="pass">
          <h4
            className={`font-semibold md:text-xl mb-1 ${
              theme === "light"
                ? "bg-gradient-to-r from-[#ec325a] to-red-400 text-transparent bg-clip-text"
                : "text-white"
            }`}
          >
            পাসওয়ার্ড লিখুন
          </h4>
          <input
            required
            type="password"
            name="pass1"
            placeholder="পাসওয়ার্ড লিখুন"
            className={`w-full py-1.5 lg:py-2 px-3 lg:px-4 placeholder:text-sm placeholder:text-gray-400
              outline-none ${
                theme === "dark" ? "bg-transparent text-white" : "text-black"
              }`}
          />
          <small
            className={`pt-2 text-wrap ${
              theme === "light" ? "text-red-600" : "text-white"
            }`}
          >
            {passError
              ? "Password must be at least 6 character, one upperCase, one lowerCase and one special character.."
              : ""}
          </small>
        </label>
        {/* pass2 */}
        <label htmlFor="pass">
          <h4
            className={`font-semibold md:text-xl mb-1 ${
              theme === "light"
                ? "bg-gradient-to-r from-[#ec325a] to-red-400 text-transparent bg-clip-text"
                : "text-white"
            }`}
          >
            আবার পাসওয়ার্ড লিখুন
          </h4>
          <input
            required
            type="password"
            name="pass2"
            placeholder="আবার পাসওয়ার্ড লিখুন"
            className={`w-full py-1.5 lg:py-2 px-3 lg:px-4 placeholder:text-sm placeholder:text-gray-400
              outline-none ${
                theme === "dark" ? "bg-transparent text-white" : "text-black"
              }`}
          />
          <small
            className={`pt-2 text-wrap ${
              theme === "light" ? "text-red-600" : "text-white"
            }`}
          >
            {error2 ? "Password does not match" : ""}
          </small>
        </label>
        {/* button */}
        <button
          type="submit"
          className={`text-lg font-bold py-1.5 btn border-none lg:py-2 border mt-4 rounded-lg ${
            theme === "light"
              ? "bg-gradient-to-r from-red-400 to-pink-400"
              : "bg-gradient-to-r from-red-300 to-pink-300 text-red-500"
          }`}
        >
          সাইন ইন
        </button>
        <p className="text-right">
          আগে থেকে অ্যাকাইন্ট আছে ?{" "}
          <Link to="/login" className="text-lg underline font-semibold">
            লগইন
          </Link>
        </p>
        <div data-aos="zoom-in" data-aos-duration="1000" className="">
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
    </div>
  );
};

export default Register;
