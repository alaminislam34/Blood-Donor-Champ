import Lottie from "lottie-react";
import React, { useContext } from "react";
import team1 from "../../assets/team/blood1.json";
import team2 from "../../assets/team/blood2.json";
import team3 from "../../assets/team/blood3.json";
import { MdBloodtype } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import backBanner from "../../assets/backBanner.jpg";
import needed from "../../assets/neededBl.jpg";
import donate from "../../assets/blad.jpg";
import digital from "../../assets/digitalPlatform.png";
import { motion } from "motion/react";

const MainSection = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${backBanner})` }}
        className="object-cover bg-cover bg-center bg-no-repeat w-full h-[70vh] md:h-[80vh] lg:h-[90vh] relative"
      >
        <div className="w-full h-full bg-black/50 flex flex-col justify-center items-center">
          {/* Title Section */}
          <motion.h1
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="z-10 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white py-4 font-poppins leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            রক্তদান হোক জীবনের অঙ্গীকার
          </motion.h1>

          {/* Description Section */}
          <motion.p
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
            className="text-center text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-medium w-10/12 md:w-8/12 mx-auto font-roboto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            আমাদের লক্ষ্য একটি সহানুভূতিশীল সম্প্রদায় তৈরি করা, যেখানে প্রতিটি
            ফোঁটা রক্ত জীবনের জন্য অবদান রাখে। নিয়মিত রক্তদানের সরবরাহ নিশ্চিত
            করে, আমরা হাসপাতালগুলোর ঘাটতি দূর করতে এবং সংকটাপন্ন রোগীদের জন্য
            আশার আলো জ্বালাতে প্রতিজ্ঞাবদ্ধ।
          </motion.p>

          {/* Button Section */}
          <motion.div
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
            className="flex justify-center items-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button
              onClick={() => navigate("/donar")}
              className="relative inline-flex items-center border justify-center overflow-hidden text-white font-semibold py-3 px-8 rounded-full shadow-lg group transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 group-hover:w-full group-hover:h-full rounded-full"></span>
              <span className="relative">ডোনার দেখুন</span>
            </button>
          </motion.div>
        </div>
      </div>
      <br />
      <div className="w-11/12 lg:w-10/12 mx-auto lg:mt-8">
        {/* Section: রক্তদান কেন জরুরি? */}
        <section className="my-12">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent py-4"
          >
            রক্তদান কেন জরুরি?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="text-center py-4 text-lg md:text-xl leading-relaxed text-gray-700"
          >
            রক্তদান মানুষের জীবন বাঁচানোর জন্য একটি অত্যন্ত গুরুত্বপূর্ণ ও
            সহানুভূতিশীল কাজ। দুর্ঘটনা, অপারেশন বা অন্যান্য জরুরি পরিস্থিতিতে
            রক্তের চাহিদা হঠাৎ বেড়ে যায়, কিন্তু হাসপাতালগুলোতে রক্তের মজুদ
            সবসময় পর্যাপ্ত থাকে না।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <img
                src={needed}
                alt="রক্তের চাহিদা"
                className="rounded-xl shadow-md transform hover:scale-105 transition duration-300"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <h3 className="text-xl md:text-2xl font-semibold pb-2">
                হাসপাতালে রক্তের সংকট:
              </h3>
              <p className="text-base leading-relaxed">
                দুর্ঘটনা, বড় ধরনের অস্ত্রোপচার, ক্যান্সার রোগী বা দীর্ঘমেয়াদী
                অসুস্থতার সময় রক্তের চাহিদা অপরিহার্য। হাসপাতালগুলোতে রক্তের
                মজুদ সবসময় যথেষ্ট থাকে না, যা রোগীকে বাঁচানোর জন্য বিপজ্জনক হতে
                পারে।
              </p>
            </div>
          </div>
        </section>

        {/* Section: স্বেচ্ছায় রক্তদান */}
        <section className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <h3 className="text-xl md:text-2xl font-semibold pb-2">
                স্বেচ্ছায় রক্তদান:
              </h3>
              <p className="text-lg leading-relaxed">
                সংকট কাটানোর জন্য, আমাদের সকলকে স্বেচ্ছায় রক্তদান করতে হবে। একটি
                ডিজিটাল প্ল্যাটফর্মে রক্তদাতারা তাদের প্রোফাইল তৈরি করতে পারবেন
                এবং জরুরি পরিস্থিতিতে সহজে রক্ত প্রার্থীদের সাথে সংযুক্ত হতে
                পারবেন।
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <img
                src={donate}
                alt="স্বেচ্ছায় রক্তদান"
                className="rounded-xl shadow-md transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </section>

        {/* Section: একটি ডিজিটাল প্ল্যাটফর্ম */}
        <section className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <img
                src={digital}
                alt="ডিজিটাল প্ল্যাটফর্ম"
                className="rounded-xl shadow-md transform hover:scale-105 transition duration-300"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <h3 className="text-xl md:text-2xl font-semibold pb-2">
                একটি ডিজিটাল প্ল্যাটফর্মের গুরুত্ব:
              </h3>
              <p className="text-lg leading-relaxed">
                ডিজিটাল প্ল্যাটফর্ম রক্তদাতা এবং রক্তপ্রাপকদের মধ্যে সংযোগ তৈরি
                করে। এটি রক্তদাতাদের এলাকা, রক্তের ধরন এবং অন্যান্য তথ্য প্রদানে
                সহায়ক।
              </p>
            </div>
          </div>
        </section>

        {/* Banner */}
        <Banner />

        {/* Section: কেন আমরা রক্তদান করব? */}
        <section className="my-12 text-center">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1500"
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent py-4"
          >
            কেন আমরা রক্তদান করব ?
            <MdBloodtype className="text-red-600 text-3xl md:text-4xl inline-flex ml-2" />
          </h2>
        </section>

        {/* Section: Lottie Animations */}
        <section className="grid md:grid-cols-3 gap-6 my-12">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1600"
          >
            <Lottie
              animationData={team1}
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
          <div
            className="md:col-span-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1700"
          >
            <p className="text-lg leading-relaxed">
              <span className="text-2xl font-semibold text-red-600">
                রক্তদান
              </span>{" "}
              একটি সহজ, তবে শক্তিশালী উপায় জীবনে পরিবর্তন আনার। এটি শুধু একটি
              দান নয়, এটি একটি জীবনরক্ষা করণীয়।
            </p>
          </div>
        </section>

        {/* More Information */}
        <section className="grid md:grid-cols-3 gap-6 my-12">
          <div className="md:col-span-2">
            <ul className="space-y-4">
              <li className="font-semibold text-lg">জীবন বাঁচান:</li>
              <p className="text-base">
                প্রতিটি দুই সেকেন্ডে, বিশ্বে কেউ না কেউ রক্তের প্রয়োজন।
              </p>
              <li className="font-semibold text-lg">
                জরুরি পরিস্থিতিতে সহায়তা:
              </li>
              <p className="text-base">
                দুর্যোগ এবং স্বাস্থ্য সংকটে রক্ত সরবরাহ অপরিহার্য।
              </p>
              <li className="font-semibold text-lg">বিশেষ রক্তের ধরন:</li>
              <p className="text-base">
                কিছু রক্তের ধরন, যেমন O-negative, নিয়মিত প্রয়োজন হয়।
              </p>
            </ul>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1800"
          >
            <Lottie
              animationData={team2}
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainSection;
