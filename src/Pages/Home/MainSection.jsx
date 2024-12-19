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

const MainSection = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${backBanner})` }}
        className="object-cover bg-cover bg-center bg-no-repeat w-full h-full"
      >
        <div className="w-full h-full bg-black/60 py-8 md:py-16 lg:py-20">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="z-10 font-poppins text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white py-4 flex flex-row gap-2 items-center justify-center"
          >
            রক্তদান হোক জীবনের অঙ্গীকার
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="text-center text-gray-300 text-sm lg:text-base font-medium w-11/12 lg:w-8/12 mx-auto font-roboto"
          >
            আমাদের লক্ষ্য একটি সহানুভূতিশীল সম্প্রদায় তৈরি করা, যেখানে প্রতিটি
            ফোঁটা রক্ত জীবনের জন্য অবদান রাখে। নিয়মিত রক্তদানের সরবরাহ নিশ্চিত
            করে, আমরা হাসপাতালগুলোর ঘাটতি দূর করতে এবং সংকটাপন্ন রোগীদের জন্য
            আশার আলো জ্বালাতে প্রতিজ্ঞাবদ্ধ।
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="flex justify-center items-center mt-4"
          >
            <button
              onClick={() => navigate("/donar")}
              className="btn hover:bg-transparent overflow-hidden bg-transparent text-white relative group"
            >
              <span className="z-10"> ডোনার দেখুন</span>
              <span className="absolute -top-36 -right-40 rounded-full group-hover:-rotate-12 group-hover:-top-8 group-hover:-right-10 w-[200px] h-[150px] bg-gradient-to-l from-pink-400 to-red-500 transition-all duration-1000"></span>
            </button>
          </div>
        </div>
      </div>

      <br />
      <div className="w-11/12 lg:w-10/12 mx-auto lg:mt-8">
        {/* রক্তদান কেন জরুরি? */}
        <div className="my-12">
          <div>
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-red-600 bg-clip-text text-transparent py-4 flex flex-row gap-2 items-center justify-center pb-6"
            >
              রক্তদান কেন জরুরি?
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="py-2"
            >
              রক্তদান মানুষের জীবন বাঁচানোর জন্য একটি অত্যন্ত গুরুত্বপূর্ণ ও
              সহানুভূতিশীল কাজ। তবে, যদি আমরা এই প্রশ্নটি করি—"জরুরি পরিস্থিতিতে
              রক্ত কোথায় পাওয়া যাবে?" তাহলে অনেকেই হয়তো ভাববেন যে,
              হাসপাতালগুলোতে রক্তের সরবরাহ সবসময়ই পর্যাপ্ত থাকে। কিন্তু বাস্তবতা
              অনেক সময় ভিন্ন। দুর্ঘটনা, অপারেশন বা অন্যান্য জরুরি পরিস্থিতিতে
              রক্তের চাহিদা হঠাৎ বেড়ে যায়, কিন্তু হাসপাতালগুলোতে রক্তের মজুদ
              সবসময় পর্যাপ্ত থাকে না।
            </p>
          </div>

          <div className="my-4 md:my-6 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row *:flex-1 items-center gap-4 md:gap-6 my-4">
              <div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <img src={needed} alt="" />
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h3 className="text-lg md:text-xl font-semibold py-1 lg:py-2">
                  হাসপাতালে রক্তের সংকট:
                </h3>
                <p className="py-2">
                  হাসপাতালগুলোতে জরুরি রক্তের সরবরাহ অনেক সময় পর্যাপ্ত থাকে না,
                  কারণ রক্তের চাহিদা পূর্বানুমান করা অনেক কঠিন। দুর্ঘটনা, বড়
                  ধরনের অস্ত্রোপচার, ক্যান্সার রোগী অথবা দীর্ঘমেয়াদী
                  অসুস্থতা—এসব ক্ষেত্রে রক্তের প্রয়োজন অপরিহার্য। তাই এমন
                  পরিস্থিতিতে রক্তের সরবরাহ সংকট তৈরি হতে পারে, যা রোগীকে
                  বাঁচানোর জন্য অত্যন্ত বিপজ্জনক।
                </p>
              </div>
            </div>

            <div className="my-4 flex flex-col-reverse gap-4 lg:gap-6 md:flex-row items-center *:flex-1">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <h3 className="text-lg md:text-xl font-semibold py-1 lg:py-2">
                  স্বেচ্ছায় রক্তদান:
                </h3>
                <p className="py-2">
                  এই সংকট কাটানোর জন্য একটি স্থিতিশীল রক্তের সরবরাহ ব্যবস্থা
                  তৈরি করতে হলে, আমাদের সকলকে স্বেচ্ছায় রক্তদান করতে হবে।
                  কিন্তু, স্বেচ্ছায় রক্তদানকারী সঠিক সময়ে কোথায় পাওয়া যাবে?
                  সেখানে একটি প্ল্যাটফর্ম অত্যন্ত কার্যকরী হতে পারে, যেখানে
                  রক্তদাতা এবং রক্তপ্রাপকদের সহজে সংযুক্ত করা যাবে। এই ধরনের
                  একটি প্ল্যাটফর্মের মাধ্যমে, রক্তদাতারা তাদের প্রোফাইল তৈরি
                  করতে পারবেন এবং জরুরি পরিস্থিতিতে তারা সহজেই রক্ত প্রার্থীদের
                  কাছে পৌঁছাতে পারবেন।
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                <img src={donate} alt="" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center my-4">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <img src={digital} alt="" />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                <h3 className="text-lg md:text-xl font-semibold py-1 lg:py-2">
                  একটি ডিজিটাল প্ল্যাটফর্মের গুরুত্ব:
                </h3>
                <p className="py-2">
                  এখানে একটি ডিজিটাল প্ল্যাটফর্ম অত্যন্ত গুরুত্বপূর্ণ ভূমিকা
                  পালন করতে পারে। এই প্ল্যাটফর্মে রক্তদাতারা তাদের এলাকা, রক্তের
                  ধরন এবং অন্যান্য প্রয়োজনীয় তথ্য প্রদান করতে পারবেন। যখনই কোনো
                  হাসপাতাল বা রোগী রক্তের প্রয়োজন জানাবে, তখন এটি রক্তদাতাদের
                  কাছে সহজেই পৌঁছাবে, এবং তারা স্বেচ্ছায় রক্তদান করার জন্য
                  প্রস্তুত হতে পারবেন।
                </p>
              </div>
              <ul
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="800"
                className="md:col-span-2 space-y-2 md:space-y-3"
              >
                <h3 className="text-lg md:text-xl font-semibold py-1 lg:py-2">
                  কেন এই প্ল্যাটফর্ম জরুরি?
                </h3>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="900"
                  className="font-semibold list-disc list-inside"
                >
                  জরুরি রক্ত প্রাপ্তি:
                  <p className="text-sm md:text-base font-normal">
                    রক্তদান একটি জীবন বাঁচানোর অমূল্য উপায়, তবে বিভিন্ন জরুরি
                    পরিস্থিতিতে রক্তের সরবরাহ সবসময় পর্যাপ্ত থাকে না।
                    যেমন—দুর্ঘটনা, বড় ধরনের অপারেশন, ক্যান্সার রোগী বা
                    দীর্ঘমেয়াদী অসুস্থতায় রক্তের চাহিদা হঠাৎ বেড়ে যায়। এসব
                    পরিস্থিতিতে রক্তের সরবরাহ সংকট তৈরি হতে পারে। এই সংকট
                    মোকাবিলায় একটি ডিজিটাল প্ল্যাটফর্ম গুরুত্বপূর্ণ ভূমিকা পালন
                    করতে পারে, যা রক্তদাতা এবং রক্তপ্রাপকদের সহজে সংযুক্ত করতে
                    সহায়তা করবে।
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                  className="font-semibold list-disc list-inside"
                >
                  রক্তের সংকট মোকাবিলা:
                  <p className="text-sm md:text-base font-normal">
                    রক্তদান একটি গুরুত্বপূর্ণ জীবন বাঁচানোর প্রক্রিয়া, তবে অনেক
                    সময় বিভিন্ন কারণে রক্তের সরবরাহ কমে যেতে পারে, বিশেষত জরুরি
                    পরিস্থিতিতে। দুর্ঘটনা, অপারেশন, কিংবা দীর্ঘমেয়াদী রোগের জন্য
                    রক্তের চাহিদা হঠাৎ বেড়ে যায়, কিন্তু সেই সময়ে হাসপাতালগুলোতে
                    রক্তের মজুদ সবসময় পর্যাপ্ত থাকে না। এই সংকট মোকাবিলায়
                    ডিজিটাল প্ল্যাটফর্মের মাধ্যমে দ্রুত এবং কার্যকরীভাবে রক্ত
                    প্রাপ্তি নিশ্চিত করা সম্ভব।
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1200"
                  className="font-semibold list-disc list-inside"
                >
                  স্বাস্থ্য নিরাপত্তা:
                  <p className="text-sm md:text-base font-normal">
                    রক্তদান একটি সহানুভূতিশীল এবং জীবন বাঁচানোর প্রক্রিয়া হলেও,
                    এর সঙ্গে সম্পর্কিত স্বাস্থ্য নিরাপত্তা অত্যন্ত গুরুত্বপূর্ণ।
                    আমাদের এই প্ল্যাটফর্মে রক্তদাতাদের স্বাস্থ্যগত নিরাপত্তা
                    নিশ্চিত করতে হবে। এছাড়াও, সঠিক রক্তের পরীক্ষা ও রক্তদাতাদের
                    পরিচ্ছন্নতা বিষয়েও মনোযোগ দেওয়া উচিত।
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Donate Blood */}

        <Banner />

        {/* Title Section */}
        <div className="my-4 md:my-6">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1500"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-red-600 bg-clip-text text-transparent py-4"
          >
            কেন আমরা রক্তদান করব ?
            <span>
              <MdBloodtype className="text-red-600 text-2xl md:text-4xl font-bold inline-flex items-center" />
            </span>
          </h2>
        </div>

        {/* Section 1 */}
        <div className="grid md:grid-cols-3 items-center gap-4">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1600"
            className="border-base-300 mx-auto"
          >
            <Lottie animationData={team1} />
          </div>

          <div className="md:col-span-2 flex justify-center items-center">
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1700"
              className="leading-relaxed"
            >
              <span className="text-lg md:text-xl font-semibold text-red-600">
                রক্তদান
              </span>{" "}
              একটি সহজ, তবে শক্তিশালী উপায় জীবনে পরিবর্তন আনার। এটি শুধুমাত্র
              একটি দান নয়—এটি একটি জীবনরক্ষা করণীয়। চিকিৎসা বিজ্ঞানের উন্নতি
              সত্ত্বেও, রক্ত কৃত্রিমভাবে উৎপাদিত করা সম্ভব নয়, যার কারণে
              স্বেচ্ছায় রক্তদান জরুরি হয়ে পড়ে বাড়তি চাহিদা পূরণের জন্য। প্রতিটি
              বছর, রক্ত সংক্রমণ জরুরি পরিস্থিতি, অস্ত্রোপচার এবং দীর্ঘমেয়াদী
              রোগের চিকিৎসায় মিলিয়ন মিলিয়ন জীবন বাঁচায়।
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2">
            <ul
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1800"
              data-aos-offset="200"
              className="my-4 lg:pr-4"
            >
              <li
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400"
                className="text-base md:text-lg font-semibold py-1 lg:py-2"
              >
                জীবন বাঁচান:
              </li>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="1900"
                className="text-sm md:text-base"
              >
                প্রতিটি দুই সেকেন্ডে, বিশ্বে কেউ না কেউ রক্তের প্রয়োজন।
                অস্ত্রোপচার undergoing রোগী, দুর্ঘটনার শিকার ব্যক্তি, ক্যান্সার
                রোগী এবং দীর্ঘমেয়াদী রোগে আক্রান্তরা প্রায়ই রক্ত সংক্রমণের
                প্রয়োজনীয়তা অনুভব করেন।
              </p>
              <br />
              <li
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="2000"
                className="text-base md:text-lg font-semibold py-1 lg:py-2"
              >
                জরুরি পরিস্থিতিতে সহায়তা:
              </li>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="2100"
                className="text-sm md:text-base"
              >
                দুর্যোগ, দুর্ঘটনা, এবং স্বাস্থ্য সংকট রক্তের চাহিদা হঠাৎ বাড়িয়ে
                দেয়। এমন সময়ে রক্ত ব্যাঙ্কগুলো প্রায়ই সঙ্কটে পড়ে।
              </p>
              <br />
              <li
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="2200"
                className="text-base md:text-lg font-semibold py-1 lg:py-2"
              >
                বিশেষ রক্তের ধরন অত্যন্ত গুরুত্বপূর্ণ:
              </li>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="2300"
                className="text-sm md:text-base"
              >
                কিছু রক্তের ধরন, যেমন O-negative, নিয়মিত চাহিদায় থাকে কারণ এটি
                যেকোনো রক্তের ধরনের রোগীকে দেওয়া যেতে পারে।
              </p>
            </ul>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="2400"
            data-aos-offset="200"
          >
            <Lottie animationData={team2} />
          </div>
        </div>

        {/* Section 3 */}
        <br />
        <div className="grid grid-cols-1 grid-flow-col-dense md:grid-cols-3 gap-4 md:gap-6 items-center mb-8 md:mb-12">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="2500"
            data-aos-offset="200"
          >
            <Lottie animationData={team3} />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="2600"
            data-aos-offset="200"
            className="md:col-span-2"
          >
            <h3 className="text-lg md:text-xl font-semibold py-1 lg:py-2">
              দাতাদের জন্য স্বাস্থ্য উপকারিতা:
            </h3>
            <p>
              রক্তদান শুধু গ্রহণকারীদেরই সাহায্য করে না, বরং দাতাদেরও স্বাস্থ্য
              উপকারিতা প্রদান করে:
            </p>
            <br />
            <ol
              data-aos="fade-up"
              data-aos-duration="1700"
              data-aos-delay="2700"
              className="list-disc list-inside space-y-2 text-sm md:text-base"
            >
              <li className="list-disc list-inside">
                <span className="font-semibold">উন্নত হৃদরোগের স্বাস্থ্য</span>:
                নিয়মিত রক্তদান শরীরে আয়রনের স্তর কমায়, যা হৃদরোগের ঝুঁকি
                কমাতে সাহায্য করতে পারে।
              </li>
              <li className="list-disc list-inside">
                <span className="font-semibold">রক্তকণিকা পুনর্নবীকরণ</span>:
                রক্তদান নতুন রক্তকণিকার উৎপাদন উদ্দীপিত করে, যা আপনার সঞ্চালন
                ব্যবস্থা স্বাস্থ্যকর রাখতে সাহায্য করে।
              </li>
              <li className="list-disc list-inside">
                <span className="font-semibold">
                  বিনামূল্যে স্বাস্থ্য পরিদর্শন
                </span>
                : অধিকাংশ রক্তদান কেন্দ্র রক্তদানের আগে আপনার রক্তচাপ,
                হিমোগ্লোবিনের স্তর এবং মোট স্বাস্থ্য পরীক্ষা করে।
              </li>
            </ol>
          </div>
        </div>

        {/* section 4 */}
      </div>
    </div>
  );
};

export default MainSection;
