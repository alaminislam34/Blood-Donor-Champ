import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DonarForm = () => {
  const { user, theme, setLoader } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      bloodGroup: "",
      age: "",
      number: "",
      address: "",
      email: user?.email,
      healthInfo: "",
      prevDonate: "",
      fbLink: "",
      whatsappNumber: "",
    },
  });
  const facebookUrlRegex =
    /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9_.-]+\/?$/;
  // Form Submission Handler
  const handleOnSubmit = (e) => {
    axios.get(`${import.meta.env.VITE_URL}/donar`).then((result) => {
      if (result.data.some((d) => d.email === user.email)) {
        Swal.fire({
          title: "ওহহ!!",
          text: "ইতিমধ্যে ডোনার হিসেবে যুক্ত আছেন।",
          icon: "warning",
          confirmButtonText: "আচ্ছা",
        });
        reset();
      } else {
        console.table({ e });
        axios.post(`${import.meta.env.VITE_URL}/donar`, e).then((result) => {
          if (result) {
            Swal.fire({
              title: "সম্পূর্ণ!",
              text: "আপনি ডোনার হিসেবে যুক্ত হয়েছে",
              icon: "success",
              confirmButtonText: "আচ্ছা",
            });
            reset();
            setLoader(true);
            setTimeout(() => {
              setLoader(false);
              navigate("/");
            }, 2000);
          } else {
            return;
          }
        });
      }
    });
  };

  return (
    <div className="flex justify-center items-center py-10 md:py-14 lg:py-16">
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className={`donorForm ${
          theme === "light"
            ? "bg-gradient-to-tr from-red-100 to-red-200"
            : "bg-gradient-to-br from-[#f74747] to-[#701c1c]"
        } p-4 md:p-6 rounded-lg flex flex-col gap-4 md:gap-6 w-10/12 md:w-10/12 lg:w-8/12 mx-auto border`}
      >
        <h2
          className={`text-center text-2xl md:text-3xl font-bold bg-gradient-to-r ${
            theme === "light"
              ? "from-pink-400 to-red-600"
              : "from-pink-300 filter brightness-110 to-red-400"
          } bg-clip-text text-transparent py-2`}
        >
          ডোনার হিসেবে জয়েন করুন
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Name */}
          <label className="flex flex-col gap-2">
            <span className="text-base font-medium">আপনার সম্পূর্ণ নাম</span>
            <input
              type="text"
              placeholder="আপনার সম্পূর্ণ নাম লিখুন"
              className="border py-2 px-3 rounded"
              {...register("name", {
                required: "আপনার নাম দিতে হবে",
                minLength: {
                  value: 4,
                  message: "আপনার নাম কমপক্ষে ৪ বর্ণের হতে হবে",
                },
              })}
            />
            {errors.name && (
              <span
                className={`${
                  theme === "light" ? "text-red-500" : "text-gray-300"
                } text-sm `}
              >
                {errors.name.message}
              </span>
            )}
          </label>

          {/* Age */}
          <label className="flex flex-col gap-2">
            <span className="text-base font-medium">আপনার বয়স</span>
            <input
              type="number"
              placeholder="আপনার বয়স "
              className="border py-2 px-3 rounded"
              {...register("age", {
                required: "আপনার বয়স দিতে হবে",
                min: {
                  value: 18,
                  message: "আপনার বয়স কমপক্ষে ১৮ এর উপরে হতে হবে..",
                },
              })}
            />
            {errors.age && (
              <span
                className={`${
                  theme === "light" ? "text-red-500" : "text-gray-300"
                } text-sm `}
              >
                {errors.age.message}
              </span>
            )}
          </label>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Email */}
          <label className="flex flex-col gap-2">
            <span className="text-base font-medium">আপনার ইমেল</span>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="border py-2 px-3 bg-gray-200 rounded"
              {...register("email")}
            />
          </label>

          {/* Phone Number */}
          <label className="flex flex-col gap-2">
            <span className="text-base font-medium">আপনার ফোন নম্বর</span>
            <input
              type="number"
              placeholder="আপনার ফোন নম্বর লিখুন"
              className="border py-2 px-3 rounded"
              {...register("number", {
                required: "আপনার ফোন নম্বর দিতে হবে.",
                validate: {
                  isValidNumber: (value) =>
                    value.startsWith("01") && value.length === 11
                      ? true
                      : "আপনার ফোন নম্বরটি ০১ দিয়ে শুরু হতে হবে এবং ১১ ডিজিটের হতে হবে।",
                },
              })}
            />
            {errors.number && (
              <span
                className={`${
                  theme === "light" ? "text-red-500" : "text-gray-300"
                } text-sm `}
              >
                {errors.number.message}
              </span>
            )}
          </label>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {/* facebook link */}
          <label className="flex flex-col gap-2">
            <span className="text-base font-medium">
              আপনার ফেসবুক লিংক ( অপশনাল )
            </span>
            <input
              type="text"
              placeholder="আপনার ফেসবুক লিংক"
              className="border py-2 px-3 bg-gray-200 rounded"
              {...register("fbLink", {
                required: false,
              })}
            />
            {errors.fbLink && (
              <span
                className={`${
                  theme === "light" ? "text-red-500" : "text-gray-300"
                } text-sm `}
              >
                {errors.fbLink.message}
              </span>
            )}
          </label>

          {/* Whatsapp link */}
          <label className="flex flex-col gap-2">
            <span className="text-base font-medium">
              আপনার হোয়াটস অ্যাপ নম্বর ( অপশনাল )
            </span>
            <input
              type="number"
              placeholder="আপনার হোয়াটস অ্যাপ নম্বর"
              className="border py-2 px-3 bg-gray-200 rounded"
              {...register("whatsappNumber", {
                validate: (value) => {
                  if (value) {
                    return value.startsWith("01") && value.length === 11
                      ? true
                      : "আপনার ফোন নম্বরটি ০১ দিয়ে শুরু হতে হবে এবং ১১ ডিজিটের হতে হবে।";
                  }
                  return true;
                },
              })}
            />
            {errors.whatsappNumber && (
              <span
                className={`${
                  theme === "light" ? "text-red-500" : "text-gray-300"
                } text-sm `}
              >
                {errors.whatsappNumber.message}
              </span>
            )}
          </label>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Address */}
          <label className="flex flex-col gap-2">
            <span className="text-base font-medium">আপনার ঠিকানা</span>
            <input
              type="text"
              placeholder="আপনার ঠিকানা লিখুন"
              className="border py-2 px-3 rounded"
              {...register("address", { required: "আপনার ঠিকানা দিতে হবে." })}
            />
            {errors.address && (
              <span
                className={`${
                  theme === "light" ? "text-red-500" : "text-gray-300"
                } text-sm `}
              >
                {errors.address.message}
              </span>
            )}
          </label>

          {/* Health Info */}
          <label className="flex flex-col gap-2">
            <span className="text-base font-medium">
              আপনার স্বাস্থ্যের অবস্থা
            </span>
            <input
              type="text"
              placeholder="আপনার স্বাস্থের অবস্থা"
              className="border py-2 px-3 rounded"
              {...register("healthInfo", {
                required: "আপনার স্বাস্থের অবস্থা জানান",
              })}
            />
            {errors.healthInfo && (
              <span
                className={`${
                  theme === "light" ? "text-red-500" : "text-gray-300"
                } text-sm `}
              >
                {errors.healthInfo.message}
              </span>
            )}
          </label>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Previous Donate */}
          <label className="flex flex-col gap-2">
            <span className="text-base font-medium">পূর্বে দান করেছেন?</span>
            <input
              type="text"
              placeholder="আপনি পূর্বে রক্ত দান করেছেন? "
              className="border py-2 px-3 rounded"
              {...register("prevDonate", {
                required: "আপনার পূর্বে রক্তদান সম্পর্কে জানান",
              })}
            />
            {errors.prevDonate && (
              <span
                className={`${
                  theme === "light" ? "text-red-500" : "text-gray-300"
                } text-sm `}
              >
                {errors.prevDonate.message}
              </span>
            )}
          </label>

          {/* Blood Group */}
          <label className="flex flex-col gap-2">
            <span className="text-lg font-medium">আপনার রক্তের গ্রুপ</span>
            <select
              className="border py-2 px-3 rounded"
              {...register("bloodGroup", {
                required: "আপনার রক্তের গ্রুপ জানান",
              })}
            >
              <option value="">রক্তের গ্রুপ বেছে নিন</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            {errors.bloodGroup && (
              <span
                className={`${
                  theme === "light" ? "text-red-500" : "text-gray-300"
                } text-sm `}
              >
                {errors.bloodGroup.message}
              </span>
            )}
          </label>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => reset()}
            className={`underline ${
              theme === "light" ? "text-red-500" : "text-white"
            } `}
          >
            রিসেট
          </button>
        </div>
        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            type="submit"
            className={`text-lg font-bold btn border-none w-full py-2 border rounded-lg ${
              theme === "light"
                ? "bg-gradient-to-r from-red-400 to-pink-400 text-white"
                : "bg-gradient-to-r from-red-300 to-pink-300 text-black"
            }`}
          >
            জয়েন করুন
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonarForm;
