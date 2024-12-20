import todo1 from "../assets/todo1.jpg";
import todo2 from "../assets/todo2.jpg";
import todo3 from "../assets/todo3.jpg";
import todo4 from "../assets/todo4.jpg";
import todo5 from "../assets/todo5.jpg";
import todo6 from "../assets/todo6.jpg";

const HealthInfo = () => {
  return (
    <div>
      <div className="text-center flex flex-col gap-2">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
          className="font-poppins text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-red-600 bg-clip-text text-transparent py-4 flex flex-row gap-2 items-center justify-center"
        >
          স্বাস্থ্য পরামর্শ
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="text-center text-sm md:text-base font-medium w-11/12 lg:w-8/12 mx-auto font-roboto"
        >
          রক্ত দান করলে শরীরের নতুন রক্ত তৈরি হয়, যা স্বাস্থ্যের জন্য উপকারী।
          রক্ত দানে শরীরের অবাঞ্ছিত টক্সিন বের হয় এবং হৃদরোগের ঝুঁকি কমায়। তবে,
          রক্ত দানের আগে ভালোভাবে বিশ্রাম নিতে এবং প্রচুর পানি পান করতে হবে।
        </p>
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 sm:gap-6 lg:gap-16 m-6 md:m-8 lg:m-12">
        {/* ১ */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="500"
          data-aos-duration="1200"
          className="group relative rounded-xl shadow-lg overflow-hidden border border-gray-300 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
        >
          {/* Image Section */}
          <img
            className="aspect-square object-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-105"
            src={todo1}
            alt="রক্তদান করার আগে করণীয়"
          />

          {/* Title Section */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
              রক্তদান করার আগে করণীয়
            </h4>
          </div>

          {/* Hover Content Section */}
          <div className="absolute inset-0 bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 lg:p-8 overflow-y-auto">
            <h4 className="text-lg md:text-xl font-semibold mb-4">
              রক্তদান করার আগে প্রস্তুতি
            </h4>
            <p className="text-sm md:text-base font-medium mb-4">
              রক্তদান করার আগে কিছু গুরুত্বপূর্ণ বিষয় মনে রাখা উচিত:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4 text-sm md:text-base">
              <li>
                শারীরিক অবস্থার জন্য রক্তদান উপযুক্ত কিনা তা নিশ্চিত করুন। জ্বর
                বা ঠান্ডা থাকলে এড়িয়ে চলুন।
              </li>
              <li>
                হালকা এবং পুষ্টিকর খাবার খান। আয়রন সমৃদ্ধ খাবার গ্রহণ করুন।
              </li>
              <li>পর্যাপ্ত পানি পান করুন। ডাবের পানি বা জুস পান করুন।</li>
              <li>চা বা কফি এড়িয়ে চলুন।</li>
              <li>আগের রাতে ভালো ঘুমান। বিশ্রামহীন শরীর উপযুক্ত নয়।</li>
              <li>প্রয়োজনীয় আইডি এবং স্বাস্থ্য সংক্রান্ত তথ্য সঙ্গে রাখুন।</li>
              <li>রক্তদানের আগে ধূমপান বা অ্যালকোহল পরিহার করুন।</li>
            </ul>
          </div>
        </div>

        {/* ২ */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="700"
          data-aos-duration="1200"
          className="group relative rounded-xl shadow-lg overflow-hidden border border-gray-300 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
        >
          {/* Image Section */}
          <img
            className="aspect-square object-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-105"
            src={todo2}
            alt="রক্তদান করার পর করণীয়"
          />

          {/* Title Section */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
              রক্তদান করার পর করণীয়
            </h4>
          </div>

          {/* Hover Content Section */}
          <div className="absolute inset-0 bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 lg:p-8 overflow-y-auto">
            <h4 className="text-lg md:text-xl font-semibold mb-4">
              রক্তদানের পর প্রয়োজনীয় পদক্ষেপ
            </h4>
            <p className="text-sm md:text-base font-medium mb-4">
              রক্তদান করার পর কিছু গুরুত্বপূর্ণ বিষয় মনে রাখা উচিত:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4 text-sm md:text-base">
              <li>রক্তদানের পর ১০-১৫ মিনিট বসে বা শুয়ে বিশ্রাম নিন।</li>
              <li>
                পর্যাপ্ত পানি পান করুন, ফলের রস বা ডাবের পানি পান করে নিজেকে
                হাইড্রেট রাখুন।
              </li>
              <li>
                পুষ্টিকর খাবার গ্রহণ করুন, বিশেষ করে আয়রন ও ফলিক অ্যাসিড সমৃদ্ধ
                খাবার।
              </li>
              <li>
                ভারী কাজ বা শারীরিক পরিশ্রম থেকে পরবর্তী ২৪ ঘণ্টা বিরত থাকুন।
              </li>
              <li>ধূমপান এবং অ্যালকোহল এড়িয়ে চলুন।</li>
              <li>সূঁচের স্থান পরিষ্কার রাখুন এবং সুরক্ষিত রাখুন।</li>
              <li>
                যদি কোনো অস্বাভাবিক প্রতিক্রিয়া দেখা দেয়, তবে দ্রুত চিকিৎসকের
                পরামর্শ নিন।
              </li>
              <li>পর্যাপ্ত ঘুম নিশ্চিত করুন।</li>
              <li>
                মানসিকভাবে ইতিবাচক থাকুন এবং অন্যদের রক্তদান করতে উৎসাহিত করুন।
              </li>
            </ul>
          </div>
        </div>

        {/* ৩ */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="900"
          data-aos-duration="1200"
          className="group relative rounded-xl shadow-lg overflow-hidden border border-gray-300 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
        >
          {/* Image Section */}
          <img
            className="aspect-square object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            src={todo3}
            alt="রক্তদান পরবর্তী সতর্কতা"
          />

          {/* Title Section */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
              রক্তদান পরবর্তী সতর্কতা
            </h4>
          </div>

          {/* Hover Content Section */}
          <div className="absolute inset-0 bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 lg:p-8 overflow-y-auto">
            <h4 className="text-lg md:text-xl font-semibold mb-4">
              রক্তদানের পর বিশেষ সতর্কতা
            </h4>
            <p className="text-sm md:text-base font-medium mb-4">
              রক্তদানের পর আপনার শরীরের যত্ন নেওয়া খুব গুরুত্বপূর্ণ। নিচের
              সতর্কতা মানুন:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4 text-sm md:text-base">
              <li>
                রক্তদানের পরপরই অন্তত ১০-১৫ মিনিট বসে বা শুয়ে বিশ্রাম নিন।
              </li>
              <li>
                পর্যাপ্ত পানি পান করুন, ফলের রস বা ডাবের পানি পান করে নিজেকে
                হাইড্রেট রাখুন।
              </li>
              <li>
                পুষ্টিকর খাবার গ্রহণ করুন, বিশেষত আয়রন এবং প্রোটিন সমৃদ্ধ খাবার।
                ঝাল-মসলাযুক্ত খাবার এড়িয়ে চলুন।
              </li>
              <li>
                ভারী কাজ বা ব্যায়াম থেকে ২৪ ঘণ্টার জন্য বিরত থাকুন, শরীরকে
                বিশ্রাম দিন।
              </li>
              <li>
                রক্তদানের ১২-২৪ ঘণ্টার মধ্যে ধূমপান এবং অ্যালকোহল এড়িয়ে চলুন।
              </li>
              <li>
                যেখানে সূঁচ দেওয়া হয়েছে, সেই স্থানটি পরিষ্কার রাখুন এবং আঘাত
                থেকে রক্ষা করুন।
              </li>
              <li>
                যদি কোনো অস্বাভাবিক অনুভূতি (মাথা ঘোরা, দুর্বলতা, বা বমি বমি
                ভাব) দেখা দেয়, দ্রুত চিকিৎসকের সঙ্গে যোগাযোগ করুন।
              </li>
              <li>
                পরবর্তী রক্তদান করার আগে ৩-৪ মাসের বিরতি দিন, যাতে শরীর রক্ত
                পুনর্নির্মাণ করতে পারে।
              </li>
            </ul>
          </div>
        </div>

        {/* ৪ */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="1100"
          data-aos-duration="1200"
          className="group relative rounded-xl shadow-lg overflow-hidden border border-gray-300 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
        >
          {/* Image Section */}
          <img
            className="aspect-square object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            src={todo4}
            alt="রক্তদানের পর সেরা খাবার তালিকা"
          />

          {/* Title Section */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
              রক্তদানের পর সেরা খাবার তালিকা
            </h4>
          </div>

          {/* Hover Content Section */}
          <div className="absolute inset-0 bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 lg:p-8 overflow-y-auto">
            <h4 className="text-lg md:text-xl font-semibold mb-4">
              রক্তদানের পর শরীরের যত্ন নেওয়ার জন্য সেরা খাবার
            </h4>
            <p className="text-sm md:text-base font-medium mb-4">
              রক্তদানের পর দ্রুত পুনরুদ্ধারের জন্য কিছু খাবার অত্যন্ত কার্যকর:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-sm md:text-base">
              <li>
                <strong>আয়রন সমৃদ্ধ খাবার:</strong> শাকসবজি (পালং শাক, কচু শাক),
                লাল মাংস, ডিমের কুসুম, চিংড়ি, কলিজা।
              </li>
              <li>
                <strong>ভিটামিন সি:</strong> কমলা, লেবু, আমলকি, পেঁপে,
                স্ট্রবেরি, টমেটো।
              </li>
              <li>
                <strong>প্রোটিন সমৃদ্ধ খাবার:</strong> ডাল, ডিম, মুরগির মাংস,
                মাছ, দই।
              </li>
              <li>
                <strong>পর্যাপ্ত পানি:</strong> পানি, ডাবের পানি, ফলের রস,
                স্যুপ।
              </li>
              <li>
                <strong>ফল ও সবজি:</strong> আপেল, কলা, পেয়ারা, গাজর, ব্রকলি।
              </li>
              <li>
                <strong>ফলিক অ্যাসিড:</strong> বাঁধাকপি, বিটরুট, সয়াবিন, আঙ্গুর।
              </li>
              <li>
                <strong>শক্তি জোগাতে:</strong> দুধ, দই, পনির।
              </li>
            </ul>
          </div>
        </div>

        {/* 5 */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="1300"
          data-aos-duration="1200"
          className="group relative rounded-xl shadow-lg overflow-hidden border border-gray-300 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
        >
          {/* Image Section */}
          <img
            className="aspect-square object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            src={todo5}
            alt="দীর্ঘমেয়াদী রক্তদান করার উপকারিতা"
          />

          {/* Title Section */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
              দীর্ঘমেয়াদী রক্তদান করার উপকারিতা
            </h4>
          </div>

          {/* Hover Content Section */}
          <div className="absolute inset-0 bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 lg:p-8 overflow-y-auto">
            <h4 className="text-lg md:text-xl font-semibold mb-4">
              দীর্ঘমেয়াদী রক্তদান কেন উপকারী?
            </h4>
            <p className="text-sm md:text-base font-medium mb-4">
              দীর্ঘমেয়াদী রক্তদান শরীর এবং মানসিক স্বাস্থ্যের জন্য উপকারী হতে
              পারে:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-sm md:text-base">
              <li>
                <strong>হৃদরোগের ঝুঁকি হ্রাস:</strong> রক্তদান শরীরে আয়রনের
                ভারসাম্য বজায় রাখে এবং হৃদরোগ প্রতিরোধ করে।
              </li>
              <li>
                <strong>ক্যানসারের ঝুঁকি কমায়:</strong> ফ্রি র‌্যাডিকেল কমে
                যাওয়ার ফলে ক্যানসারের ঝুঁকি হ্রাস পায়।
              </li>
              <li>
                <strong>নতুন রক্তকোষ তৈরি:</strong> নিয়মিত রক্তদান শরীরে নতুন
                রক্তকোষ তৈরি করতে সহায়তা করে এবং শরীর সক্রিয় থাকে।
              </li>
              <li>
                <strong>মানসিক স্বাস্থ্যের উন্নতি:</strong> রক্তদান ইতিবাচক
                মনোভাব এবং আত্মবিশ্বাস বৃদ্ধি করে।
              </li>
            </ul>
          </div>
        </div>

        {/* 6 */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="1500"
          data-aos-duration="1200"
          className="group relative rounded-xl shadow-lg overflow-hidden border border-gray-300 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
        >
          {/* Image Section */}
          <img
            className="aspect-square object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            src={todo6}
            alt="দীর্ঘমেয়াদী রক্তদাতাদের জন্য সতর্কতা"
          />

          {/* Title Section */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
              দীর্ঘমেয়াদী রক্তদাতাদের জন্য সতর্কতা
            </h4>
          </div>

          {/* Hover Content Section */}
          <div className="absolute inset-0 bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 lg:p-8 overflow-y-auto">
            <h4 className="text-lg md:text-xl font-semibold mb-4">
              সুস্থ থাকা এবং নিরাপত্তা নিশ্চিত করার টিপস
            </h4>
            <p className="text-sm md:text-base font-medium mb-4">
              দীর্ঘমেয়াদী রক্তদানে সুস্থতা বজায় রাখা গুরুত্বপূর্ণ। মানবতার সেবায়
              এটি আপনার ভূমিকা রাখে।
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-sm md:text-base">
              <li>
                <strong>দুর্বলতা অনুভব করলে:</strong> শরীর দুর্বল হলে বা
                অস্বাভাবিক লক্ষণ দেখা দিলে চিকিৎসকের পরামর্শ নিন।
              </li>
              <li>
                <strong>ওজন এবং হিমোগ্লোবিন পরীক্ষা:</strong> ওজন কমে গেলে বা
                হিমোগ্লোবিনের মাত্রা কম থাকলে রক্তদান করা থেকে বিরত থাকুন।
              </li>
              <li>
                <strong>ইনফেকশনের যত্ন:</strong> যেকোনো ধরনের ইনফেকশন হলে দ্রুত
                চিকিৎসা নিন এবং সম্পূর্ণ সুস্থ হওয়ার পর রক্তদান করুন।
              </li>
              <li>
                <strong>শারীরিক পরিশ্রম এড়িয়ে চলুন:</strong> অতিরিক্ত পরিশ্রম ও
                ভারী কাজ থেকে বিরত থাকুন।
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default HealthInfo;
