import { useContext, useState } from "react";
import logo from "../../assets/team/logo.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../ContextProvider/AuthContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "motion/react";

const Footer = () => {
  const { theme, user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const handleEmailSend = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const message = form.message.value;
    const email = user?.email;
    console.table({ name, email, message });
    const emailSender = { name, email, message };

    setIsLoading(true);

    axios
      .post(`${import.meta.env.VITE_URL}/send-email`, emailSender, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        form.reset();
        document.getElementById("my_modal_5").close();
        toast.success("Email send successfully");
      });
  };
  return (
    <div className="">
      <footer className="flex flex-col justify-center gap-4 md:gap-6 bg-base-300 text-content py-6 md:py-8">
        <div className="w-full justify-center items-center flex">
          <a className="text-lg md:text-2xl flex flex-row gap-2 items-center">
            <Lottie className="w-14 h-14" animationData={logo}></Lottie>
            <span className="font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
              লাল আশা
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 *:flex-1 *:mt-6 md:mt-0 justify-center w-11/12 lg:w-11/12 mx-auto">
          <div className="text-left">
            <h3 className="text-left text-lg sm:text-xl md:text-2xl my-2 w-full ">
              আমাদের সেবাসমূহ
            </h3>
            <ul className="flex flex-col gap-1 list-disc list-inside text-left *:text-xs sm:*:text-sm md:*:text-base ">
              <li>
                <span>
                  আপনার নিকটবর্তী রক্তদাতা খুঁজুন এবং সরাসরি তাদের সাথে যোগাযোগ
                  করুন।
                </span>
              </li>
              <li>
                <span>অন্যান্য ব্যবহারকারীদের অভিজ্ঞতা এবং পরামর্শ জানুন।</span>
              </li>
              <li>
                <span>
                  রক্তদান করার সঠিক সময় এবং অন্যান্য গুরুত্বপূর্ণ ইভেন্টের জন্য
                  রিমাইন্ডার পান।
                </span>
              </li>
              <li>
                <span>
                  রক্তদাতাদের তালিকায় যোগদান করুন এবং আপনার প্রোফাইল তৈরি করুন।
                </span>
              </li>
              <li>
                <span>সমাজে রক্তদান কার্যক্রমকে আরও সমৃদ্ধ করতে দান করুন।</span>
              </li>
              <li>
                সমাজে রক্তদানের সচেতনতা বাড়াতে এবং সহজে রক্ত সংগ্রহের জন্য ব্লাড
                ক্যাম্প আয়োজন।
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="text-left text-lg sm:text-xl md:text-2xl my-2 w-full ">
              স্বাস্থ্য পরামর্শ
            </h3>
            <ul className="flex flex-col gap-1 list-disc list-inside justify-start text-left *:text-xs sm:*:text-sm md:*:text-base">
              <li>
                <span>
                  রক্তদানের আগে প্রচুর পরিমাণে পানি পান করুন, স্বাস্থ্যকর খাবার
                  খান এবং পর্যাপ্ত বিশ্রাম নিন।
                </span>
              </li>
              <li>
                <span>
                  রক্তদান করার পরে হালকা খাবার খান এবং ১০-১৫ মিনিট বসে বিশ্রাম
                  নিন।
                </span>
              </li>
              <li>
                <span>
                  ভারী কাজ করা থেকে বিরত থাকুন এবং পর্যাপ্ত পানি পান করুন।
                </span>
              </li>
              <li>
                <span>
                  নিয়মিত রক্তদান করলে শরীরের আভ্যন্তরীণ রক্ত সঞ্চালন ঠিক থাকে।
                  তবে রক্তদানের সময়ের মধ্যবর্তী বিরতিটি অবশ্যই মেনে চলুন।
                </span>
              </li>
              <li>
                <span>
                  রক্তদানের পরে আয়রন ও প্রোটিন সমৃদ্ধ খাবার যেমন ডিম, মাংস,
                  শাকসবজি, এবং ফলমূল খান।
                </span>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="text-left text-lg sm:text-xl md:text-2xl my-2 w-full ">
              যোগাযোগ
            </h3>
            <ul className="flex flex-col gap-1 justify-start text-left *:text-xs sm:*:text-sm md:*:text-base ">
              <li>মোবাইল নাম্বার: ০১৮২১৮৫৮৯১৭</li>
              <li>ইমেইল : mi3548514@gmail.com</li>
              <li>হোয়াটস অ্যাপ নাম্বার: ০১৮২১৮৫৮৯১৭</li>
              <li>
                ফেসবুক :{" "}
                <a href="https://www.facebook.com/ar.alamin34">Facebook</a>
              </li>
              <li>
                ঠিকানা:
                <span className="">গ্রাম: জাহানাবাদ বাজারপাড়া</span>
                <span className="">উপজেলা: পার্বতীপুর</span>
                <span className="">জেলা: দিনাজপুর</span>
                <span className="">বিভাগ: রংপুর</span>
              </li>
            </ul>
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn relative overflow-hidden my-2 group bg-transparent border border-red-400"
            >
              <span className="relative z-10 ">আমাকে ইমেইল করুন</span>
              <span className="absolute w-0 h-0 top-1/2 left-1/2 rounded-lg z-0 group-hover:top-0 group-hover:left-0 group-hover:w-full group-hover:h-full duration-700 bg-gradient-to-r from-red-500 to-pink-400"></span>
            </button>
          </div>
        </div>
        <div className="space-y-2 w-full text-center flex flex-col justify-center mt-4">
          <p className="">
            <span className="text-base md:text-lg font-bold">
              Developer MD Al Amin Islam
            </span>
          </p>
          <p className="text-xs sm:text-sm lg:text-base">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
          <div className="w-full flex justify-center">
            <div className="flex flex-row gap-4">
              <a href="https://x.com/MDAlAmin0412">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/@AlAminIslam-kn5gc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/ar.alamin34">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* modal  */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`modal-box ${
              theme === "light"
                ? "bg-gradient-to-br from-pink-50 via-white to-red-50 text-gray-800"
                : "bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white"
            } relative p-6 md:p-8 rounded-2xl shadow-2xl overflow-hidden max-w-md sm:max-w-lg md:max-w-2xl mx-auto`}
            data-aos="zoom-in"
          >
            {/* Background Decoration */}
            <motion.div
              className="absolute inset-0 -z-10 blur-3xl opacity-20"
              style={{
                background:
                  theme === "light"
                    ? "radial-gradient(circle, #ffe4e1, #ff8ab2)"
                    : "radial-gradient(circle, #1e293b, #0f172a)",
              }}
            ></motion.div>

            {/* Title */}
            <motion.h3
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wider"
            >
              {theme === "light" ? "Let’s Connect!" : "আমাকে ইমেইল করুন"}
            </motion.h3>

            {/* Form */}
            <motion.form
              onSubmit={handleEmailSend}
              className="flex flex-col gap-4 md:gap-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* Name Input */}
              <motion.input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border bg-transparent text-base md:text-lg transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
              {/* Message Input */}
              <motion.textarea
                required
                name="message"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border bg-transparent text-base md:text-lg transition-all duration-300"
                rows={4}
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>
              {/* Submit Button */}
              {isLoading ? (
                <button
                  type="button"
                  className="w-full p-3 rounded-lg bg-red-500 text-white text-base md:text-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="loading loading-dots loading-md"></span>
                  Sending...
                </button>
              ) : (
                <motion.button
                  type="submit"
                  className="w-full p-3 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Send Email
                </motion.button>
              )}
            </motion.form>

            {/* Modal Action (Close Button) */}
            <div className="modal-action flex justify-end">
              <motion.button
                className="btn btn-outline"
                whileHover={{ scale: 1.1 }}
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </dialog>
      </footer>
      <ToastContainer />
    </div>
  );
};

export default Footer;
