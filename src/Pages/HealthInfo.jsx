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
          className="rounded-xl shadow-2xl relative overflow-hidden border group"
        >
          <div className="flex flex-col">
            <img
              className="aspect-square object-cover bg-center bg-no-repeat bg-cover"
              src={todo1}
              alt=""
            />
            <h4 className="text-xl lg:text-2xl font-semibold my-2 md:my-3  px-4">
              রক্তদান করার আগে করণীয়
            </h4>
          </div>
          <div className="p-4 lg:p-6 bg-black/60 text-white w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 group-hover:left-0 -left-96 duration-1000 backdrop-blur overflow-y-auto">
            <p className="text-lg md:text-xl font-semibold">
              রক্তদান করার আগে ব্যবহারকারীদের কিছু প্রস্তুতি গ্রহণ করতে হয়। এর
              মধ্যে অন্তর্ভুক্ত হতে পারে
            </p>
            <ol className="list-decimal list-inside py-4 space-y-2 ml-4">
              <li>
                আপনার বয়স, ওজন, এবং শারীরিক অবস্থার জন্য রক্তদান উপযুক্ত কিনা তা
                নিশ্চিত করুন। জ্বর, ঠান্ডা, বা অন্য কোনো অসুস্থতা থাকলে রক্তদান
                এড়িয়ে চলুন।
              </li>
              <li>
                রক্তদানের অন্তত ২-৩ ঘণ্টা আগে একটি হালকা এবং পুষ্টিকর খাবার খান।
                আয়রন সমৃদ্ধ খাবার (পালং শাক, ডিম, মাংস) এবং ফলিক অ্যাসিডযুক্ত
                খাবার গ্রহণ করুন।
              </li>
              <li>
                রক্তদানের আগে পর্যাপ্ত পানি ও তরল পান করুন, যাতে ডিহাইড্রেশন
                এড়ানো যায়। ডাবের পানি বা ফ্রুট জুসও উপকারী।
              </li>
              <li>
                রক্তদানের আগে চা, কফি বা অন্য কোনো ক্যাফেইনযুক্ত পানীয় পান না
                করাই ভালো।
              </li>
              <li>
                রক্তদানের আগের রাতে অন্তত ৭-৮ ঘণ্টা ঘুমান। বিশ্রামহীন শরীর
                রক্তদানের জন্য উপযুক্ত নয়।
              </li>
              <li>
                রক্তদানের জন্য প্রয়োজনীয় আইডি, স্বাস্থ্য সংক্রান্ত তথ্য, এবং
                পূর্ববর্তী রক্তদানের ইতিহাস সঙ্গে রাখুন।
              </li>
              <li>
                রক্তদানের আগে ২৪ ঘণ্টার মধ্যে ধূমপান বা অ্যালকোহল গ্রহণ না করাই
                ভালো।
              </li>
              <li>
                হিমোগ্লোবিন, রক্তচাপ এবং অন্যান্য স্বাস্থ্য সূচক ঠিক আছে কিনা তা
                নিশ্চিত করুন।
              </li>
              <li>
                রক্তদান করার জন্য মানসিকভাবে প্রস্তুত থাকুন এবং ভয়ের কোনো কারণ
                নেই, এটি আপনার জন্য একটি মহৎ কাজ।
              </li>
            </ol>
          </div>
        </div>
        {/* ২ */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="700"
          data-aos-duration="1200"
          className="rounded-xl shadow-2xl relative overflow-hidden border group"
        >
          <div className="flex flex-col">
            <img
              className="aspect-square object-cover bg-center bg-no-repeat bg-cover"
              src={todo2}
              alt=""
            />
            <h4 className="text-xl lg:text-2xl font-semibold my-2 md:my-3  px-4">
              রক্তদান করার পর করণীয়
            </h4>
          </div>
          <div className="p-4 lg:p-6 bg-black/60 text-white w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 group-hover:left-0 -left-96 duration-1000 backdrop-blur overflow-y-auto">
            <p className="text-lg md:text-xl font-semibold">
              রক্তদান করার পর কিছু পরামর্শ দেওয়া উচিত, যাতে রক্তদাতা সুস্থ থাকে।
              এর মধ্যে অন্তর্ভুক্ত হতে পারে:
            </p>
            <ol className="list-decimal list-inside py-4 space-y-2 ml-4">
              <li>রক্তদানের পর ১০-১৫ মিনিট বসে বা শুয়ে বিশ্রাম নিন।</li>
              <li>
                রক্তদানের পর পর্যাপ্ত পানি, ফলের রস, বা ডাবের পানি পান করুন।
                ডিহাইড্রেশন এড়াতে অন্তত ১ লিটার পানি পান করা উচিত।
              </li>
              <li>
                আয়রন সমৃদ্ধ খাবার (পালং শাক, মাছ, ডিম, মাংস) এবং ফলিক
                অ্যাসিডযুক্ত খাবার গ্রহণ করুন। ফল (আপেল, কমলা, ডালিম) এবং বাদাম
                (কাজু, আখরোট) খাওয়া উপকারী।
              </li>
              <li>
                রক্তদানের পরবর্তী ২৪ ঘণ্টা ভারী কাজ বা শারীরিক পরিশ্রম (যেমন
                জিম, দৌড়) এড়িয়ে চলুন।
              </li>
              <li>
                রক্তদানের অন্তত ১২-২৪ ঘণ্টার মধ্যে ধূমপান এবং অ্যালকোহল এড়িয়ে
                চলুন।
              </li>
              <li>
                যেখানে সূঁচ দেওয়া হয়েছে, সেই স্থানটি পরিষ্কার রাখুন এবং কোনো
                ধরনের আঘাত থেকে বাঁচানোর চেষ্টা করুন।
              </li>
              <li>
                যদি মাথা ঘোরা, বমি ভাব, বা শরীরের কোনো অস্বাভাবিক প্রতিক্রিয়া
                দেখা দেয়, তবে দ্রুত চিকিৎসকের পরামর্শ নিন।
              </li>
              <li>রক্তদানের রাতে পর্যাপ্ত ঘুম নিশ্চিত করুন।</li>
              <li>
                আপনি একটি মহৎ কাজ করেছেন, তাই মানসিকভাবে ইতিবাচক থাকুন এবং
                অন্যদেরও রক্তদান করতে উৎসাহিত করুন।
              </li>
            </ol>
          </div>
        </div>
        {/* ৩ */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="900"
          data-aos-duration="1200"
          className="rounded-xl shadow-2xl relative overflow-hidden border group"
        >
          <div className="flex flex-col">
            <img
              className="aspect-square object-cover bg-center bg-no-repeat bg-cover"
              src={todo3}
              alt=""
            />
            <h4 className="text-xl lg:text-2xl font-semibold my-2 md:my-3  px-4">
              রক্তদান পরবর্তী সতর্কতা
            </h4>
          </div>
          <div className="p-4 lg:p-6 bg-black/60 text-white w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 group-hover:left-0 -left-96 duration-1000 backdrop-blur overflow-y-auto">
            <p className="text-lg md:text-xl font-semibold">
              রক্তদানের পর সতর্কতা রাখা অত্যন্ত গুরুত্বপূর্ণ। কিছু বিষয় হতে
              পারে:
            </p>
            <ol className="list-decimal list-inside py-4 space-y-2 ml-4">
              <li>
                রক্তদানের পর শরীরকে পুনরায় শক্তি সঞ্চয় করার সময় দিন। ১০-১৫ মিনিট
                বিশ্রাম নেওয়া বাধ্যতামূলক।
              </li>
              <li>
                রক্তদানের পরপরই পর্যাপ্ত পানি, ফলের রস বা ডাবের পানি পান করুন।
                এতে ডিহাইড্রেশন এড়ানো যাবে।
              </li>
              <li>
                আয়রন এবং প্রোটিন সমৃদ্ধ খাবার খাওয়ার চেষ্টা করুন।
                তেল-ঝাল-মসলাযুক্ত খাবার এড়িয়ে চলুন।
              </li>
              <li>
                রক্তদানের পরবর্তী ২৪ ঘণ্টা ভারী শারীরিক পরিশ্রম, ভার উত্তোলন বা
                ব্যায়াম করবেন না।
              </li>
              <li>
                রক্তদানের অন্তত ১২-২৪ ঘণ্টার মধ্যে ধূমপান বা অ্যালকোহল গ্রহণ
                করবেন না।
              </li>
              <li>
                রক্ত নেওয়ার জায়গাটি পরিষ্কার ও শুকনো রাখুন। অতিরিক্ত চাপ দিলে বা
                আঘাত পেলে রক্তপাত হতে পারে।
              </li>
              <li>
                যদি মাথা ঘোরা, বমি বমি ভাব, অত্যধিক ক্লান্তি বা দুর্বলতা অনুভব
                করেন, তবে দ্রুত চিকিৎসকের পরামর্শ নিন।
              </li>
              <li>
                রক্তদানের মধ্যে ন্যূনতম ৩-৪ মাসের বিরতি দিন, যাতে শরীর পূর্ণ
                রক্তকণিকা পুনরুদ্ধার করতে পারে।
              </li>
            </ol>
          </div>
        </div>
        {/* ৪ */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="1100"
          data-aos-duration="1200"
          className="rounded-xl shadow-2xl relative overflow-hidden border group"
        >
          <div className="flex flex-col">
            <img
              className="aspect-square object-cover bg-center bg-no-repeat bg-cover"
              src={todo4}
              alt=""
            />
            <h4 className="text-xl lg:text-2xl font-semibold my-2 md:my-3  px-4">
              রক্তদানের পর সেরা খাবার তালিকা
            </h4>
          </div>
          <div className="p-4 lg:p-6 bg-black/60 text-white w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 group-hover:left-0 -left-96 duration-1000 backdrop-blur overflow-y-auto">
            <p className="text-lg md:text-xl font-semibold">
              রক্তদানের পর শরীর দ্রুত পুনরুদ্ধার এবং সুস্থ থাকতে কিছু খাবার ও
              ডায়েট করা অত্যন্ত গুরুত্বপূর্ণ ।
            </p>
            <ol className="list-decimal list-inside py-4 space-y-2 ml-4">
              <li>
                রক্তদানের পর আয়রনের অভাব পূরণ করা গুরুত্বপূর্ণ। আয়রন সমৃদ্ধ
                খাবার রক্তে হিমোগ্লোবিন তৈরি করতে সাহায্য করে। উদাহরণ: শাকসবজি
                (পালং শাক, কচু শাক), লাল মাংস, ডিমের কুসুম, চিংড়ি, কলিজা, বাদাম।
              </li>
              <li>
                আয়রন শোষণে ভিটামিন সি সহায়তা করে। উদাহরণ: কমলা, লেবু, আমলকি,
                পেঁপে, স্ট্রবেরি, টমেটো।
              </li>
              <li>
                শরীর পুনর্গঠনের জন্য প্রোটিন খুবই গুরুত্বপূর্ণ। উদাহরণ: ডাল,
                ডিম, মুরগির মাংস, মাছ, দুগ্ধজাত খাবার।
              </li>
              <li>
                শরীরের রক্তের পরিমাণ পূরণে পর্যাপ্ত পানি পান করা প্রয়োজন।
                উদাহরণ: পানি, ডাবের পানি, ফলের জুস (চিনি ছাড়া), স্যুপ।
              </li>
              <li>
                শারীরিক ক্লান্তি দূর করতে ফল এবং সবজি খুব উপকারী। উদাহরণ: আপেল,
                কলা, পেয়ারা, গাজর, ব্রকলি।
              </li>
              <li>
                ফলিক অ্যাসিড নতুন রক্ত কোষ তৈরিতে সাহায্য করে। উদাহরণ: বাঁধাকপি,
                বিটরুট, সয়াবিন, আঙ্গুর।
              </li>
              <li>
                শরীরকে শক্তি জোগাতে এবং ক্লান্তি দূর করতে সাহায্য করে। উদাহরণ:
                দুধ, দই, পনির।
              </li>
            </ol>
          </div>
        </div>
        {/* 5 */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="1300"
          data-aos-duration="1200"
          className="rounded-xl shadow-2xl relative overflow-hidden border group"
        >
          <div className="flex flex-col">
            <img
              className="aspect-square object-cover bg-center bg-no-repeat bg-cover"
              src={todo5}
              alt=""
            />
            <h4 className="text-xl lg:text-2xl font-semibold my-2 md:my-3  px-4">
              দীর্ঘমেয়াদী রক্তদান করার উপকারিতা
            </h4>
          </div>
          <div className="p-4 lg:p-6 bg-black/60 text-white w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 group-hover:left-0 -left-96 duration-1000 backdrop-blur overflow-y-auto">
            <p className="text-lg md:text-xl font-semibold">
              দীর্ঘমেয়াদী রক্তদান করার ফলে সুস্থ থাকা এবং শরীরকে ভালোভাবে রক্ষা
              করার জন্য নিচের পরামর্শগুলো অনুসরণ করা গুরুত্বপূর্ণ:
            </p>
            <ol className="list-decimal list-inside py-4 space-y-2 ml-4">
              <li>
                রক্তদান শরীরে আয়রনের ভারসাম্য বজায় রাখে, যা হৃদরোগের ঝুঁকি হ্রাস
                করে।
              </li>
              <li>
                রক্তদান করার ফলে শরীরে ফ্রি র‌্যাডিকেল কমে যায়, যা ক্যানসারের
                ঝুঁকি হ্রাস করতে সহায়তা করে।
              </li>
              <li>
                নিয়মিত রক্তদান নতুন রক্তকোষ তৈরিতে সহায়তা করে এবং শরীরকে সক্রিয়
                রাখে।
              </li>
              <li>
                রক্তদান আপনার মধ্যে ইতিবাচক মনোভাব ও আত্মবিশ্বাস বৃদ্ধি করে।
              </li>
            </ol>
          </div>
        </div>
        {/* 6 */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="1500"
          data-aos-duration="1200"
          className="rounded-xl shadow-2xl relative overflow-hidden border group"
        >
          <div className="flex flex-col">
            <img
              className="aspect-square object-cover bg-center bg-no-repeat bg-cover"
              src={todo6}
              alt=""
            />
            <h4 className="text-xl lg:text-2xl font-semibold my-2 md:my-3  px-4">
              দীর্ঘমেয়াদী রক্তদাতাদের জন্য সতর্কতা
            </h4>
          </div>
          <div className="p-4 lg:p-6 bg-black/60 text-white w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 group-hover:left-0 -left-96 duration-1000 backdrop-blur overflow-y-auto">
            <p className="text-lg md:text-xl font-semibold">
              দীর্ঘমেয়াদী রক্তদানে সুস্থতা বজায় রাখা সম্ভব এবং এটি মানবতার সেবায়
              আপনার গুরুত্বপূর্ণ ভূমিকা রাখতে সহায়তা করে।
            </p>
            <ol className="list-decimal list-inside py-4 space-y-2 ml-4">
              <li>
                শরীরের দুর্বলতা বা অস্বাভাবিক কোনো লক্ষণ দেখা দিলে চিকিৎসকের
                পরামর্শ নিন।
              </li>
              <li>
                ওজন কমে গেলে বা হিমোগ্লোবিনের মাত্রা কম থাকলে রক্তদান থেকে বিরত
                থাকুন।
              </li>
              <li>যেকোনো ধরনের ইনফেকশন হলে দ্রুত চিকিৎসা নিন।</li>
              <li>অতিরিক্ত পরিশ্রম ও ভারী কাজ করা থেকে বিরত থাকুন।</li>
            </ol>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default HealthInfo;
