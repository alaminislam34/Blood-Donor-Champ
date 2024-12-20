import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthContext";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import axios from "axios";

const Donar = () => {
  const { theme, user } = useContext(AuthContext);
  const [donor, setDonor] = useState([]);
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/donar`, {
        params: { address, bloodGroup },
        withCredentials: true,
      })
      .then((res) => {
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
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
        data-aos-duration="1200"
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

      <div className="w-full flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-4 items-center">
        <div
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
          className="flex flex-row items-center"
        >
          <input
            onChange={handleSortDonarArea}
            type="text"
            name="area"
            placeholder="Search area"
            className="py-1.5 px-2 md:px-3 border border-gray-500 rounded-l-lg"
          />

          <div>
            <button
              type="submit"
              className="btn border relative bg-transparent hover:bg-transparent group overflow-hidden"
            >
              <span className="z-10 group-hover:text-white duration-500">
                খুজুন
              </span>
              <span className="absolute -top-24 -right-24 rounded-full group-hover:-rotate-12 group-hover:-top-8 group-hover:-right-10 w-[120px] h-[100px] bg-gradient-to-l from-pink-400 to-red-500 transition-all duration-500"></span>
            </button>
          </div>
        </div>

        <select
          data-aos="fade-left"
          data-aos-delay="700"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
          name="group"
          onChange={handleBloodGroup}
          className="py-1.5 px-3 bg-gradient-to-r from-pink-400 to-red-500 cursor-pointer *:cursor-pointer"
        >
          <option value={""} className="text-xs">
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
      </div>

      <div className="divider"></div>

      {donor.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 md:my-8 lg:my-12">
          {donor.map((d, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              data-aos-duration="900"
              data-aos-offset="200"
              key={d._id}
              className="rounded-xl bg-donarBack bg-center bg-cover border"
            >
              <div
                className={`w-full h-full p-4 space-y-2 ${
                  theme === "light"
                    ? "bg-white/80 text-black"
                    : "bg-black/80 text-white"
                } backdrop-blur-md rounded-xl shadow-2xl`}
              >
                <h3 className="text-base md:text-lg lg:text-xl font-semibold">
                  ডোনারের নাম: {d.name}
                </h3>
                <div className="flex *:flex-1">
                  <p className="text-sm">
                    <span className="font-semibold">রক্তের গ্রুপ</span>:{" "}
                    <span className="text-red-600 font-bold italic bg-base-300 px-2">
                      {d.bloodGroup}
                    </span>
                  </p>
                  <p className="text-sm">
                    <span className={`font-semibold `}>ফোন নম্বর</span>:{" "}
                    <span>{user ? d.number : "*******"}</span>
                  </p>
                </div>
                <p className="text-sm">
                  <span className="font-semibold">ঠিকানা </span>:{" "}
                  <span className="text-wrap">{d.address}</span>
                </p>
                <div className="flex *:flex-1">
                  <p className="text-sm">
                    <span className="font-semibold">স্বাস্থ্যের অবস্থা</span>:{" "}
                    {d.healthInfo}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">পূর্বের রক্তদান</span>:{" "}
                    {d.prevDonate}
                  </p>
                </div>
                <div>
                  <div className="divider my-1"></div>
                  <ul className="flex flex-col sm:flex-row gap-4 items-center">
                    <p>সামাজিক মাধ্যম: </p>
                    <div className="flex flex-row gap-2">
                      {d.fbLink && (
                        <li className="w-6 h-6 bg-base-200 flex justify-center items-center text-xl lg:text-2xl rounded-full bg-gradient-to-tr from-blue-500 to-blue-600 text-white cursor-pointer duration-300">
                          <a href={user ? d.fbLink : "#"}>
                            <FaFacebook />
                          </a>
                        </li>
                      )}
                      {d.whatsappNumber && (
                        <div className="flex flex-row items-center gap-2">
                          <li className="w-6 h-6 bg-base-200 flex justify-center items-center text-xl lg:text-2xl rounded-full bg-gradient-to-tr from-green-500 to-green-600 text-white">
                            <FaWhatsapp />
                          </li>
                          <p>{user ? d.whatsappNumber : "*******"}</p>
                        </div>
                      )}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-12">কোনো ডোনার নাই</p>
      )}
    </div>
  );
};

export default Donar;
