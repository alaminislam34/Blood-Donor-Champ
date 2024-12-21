import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthContext";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { motion } from "motion/react";

const Donar = () => {
  const { theme, user } = useContext(AuthContext);
  const [donor, setDonor] = useState([]);
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/donar`, {
        withCredentials: true,
        params: { address, bloodGroup },
      })
      .then((res) => {
        console.log(res.data);

        setDonor(res.data);
      });
  }, [address, bloodGroup]);

  const handleSortDonarArea = (e) => {
    const area = e.target.value;
    setAddress(area);
  };

  const handleBloodGroup = (value) => {
    const group = value.target.value;
    setBloodGroup(group);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        className="my-4 text-center"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text py-4">
          আমাদের ডোনার
        </h1>
      </div>
      {user ? (
        ""
      ) : (
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="1800"
          className={`w-11/12 sm:w-10/12 md:w-8/12 mx-auto shadow-xl rounded-md ${
            theme === "light" ? "bg-red-100" : " text-red-500"
          } flex flex-row justify-center items-center mb-4 py-2 px-4`}
        >
          <Marquee pauseOnHover={true}>
            <span className="text-lg">
              অনুগ্রহ করে লগইন করুন, শুধুমাত্র লগইন করা ব্যবহারকারীরাই
              রক্তদাতাদের তথ্য দেখতে পারবেন।{" "}
            </span>
          </Marquee>
        </div>
      )}

      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 p-6 rounded-xl shadow-lg border border-gray-200">
        {/* Search Box */}
        <div
          data-aos="fade-right"
          data-aos-delay="1500"
          data-aos-duration="1800"
          className="flex items-center w-full sm:w-auto bg-gray-100 rounded-lg shadow-inner overflow-hidden"
        >
          <input
            onChange={handleSortDonarArea}
            type="text"
            name="area"
            placeholder="এলাকা অনুসন্ধান করুন"
            className="py-2 px-4 w-full text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 text-white px-5 py-2 hover:scale-105 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2v6m0-6H4m16 0h-6"
              />
            </svg>
          </button>
        </div>

        {/* Dropdown Selector */}
        <div
          data-aos="fade-left"
          data-aos-delay="1500"
          data-aos-duration="1800"
          className="relative w-full sm:w-auto"
        >
          <select
            onChange={handleBloodGroup}
            name="group"
            className="py-2 px-4 w-full bg-gradient-to-r from-pink-500 to-red-500 rounded-lg shadow-md text-sm focus:outline-none cursor-pointer"
          >
            <option value={""} className="text-gray-700">
              গ্রুপ সিলেক্ট করুন
            </option>
            <option value={"A+"}>A+</option>
            <option value={"A-"}>A-</option>
            <option value={"B+"}>B+</option>
            <option value={"B-"}>B-</option>
            <option value={"O+"}>O+</option>
            <option value={"O-"}>O-</option>
            <option value={"AB+"}>AB+</option>
            <option value={"AB-"}>AB-</option>
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {donor.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 my-6 md:my-8 lg:my-12 m-4">
          {donor.map((d, index) => (
            <motion.div
              key={index}
              className="shadow-2xl rounded-lg p-4 md:p-6 transform perspective-1000 hover:rotate-x-3 hover:rotate-y-3 transition-transform duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Blood Group */}
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 flex items-center justify-center bg-red-300 text-red-600 font-bold text-2xl rounded-full shadow-xl">
                  {d.bloodGroup}
                </div>
              </div>

              {/* Donor Info */}
              <h3 className="text-xl font-bold text-center mt-4">{d.name}</h3>
              <p className="text-sm text-center">{d.address}</p>
              <p className="text-sm text-center">
                ফোন: <span className="font-medium">{d.number}</span>
              </p>

              {/* Social Media */}
              <div className="flex justify-center gap-4 mt-6">
                <motion.a
                  href={d.fbLink}
                  className="bg-blue-100 text-blue-500 p-3 rounded-full hover:bg-blue-200 hover:shadow-md transition"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaFacebook />
                </motion.a>
                <motion.p
                  data-tip={d.whatsappNumber}
                  className="bg-green-100 text-green-500 p-3 rounded-full hover:bg-green-200 hover:shadow-md transition tooltip tooltip-top"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaWhatsapp />
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center my-12 text-base md:text-xl lg:text-2xl font-semibold">
          কোনো ডোনার নাই
        </p>
      )}
    </div>
  );
};

export default Donar;
