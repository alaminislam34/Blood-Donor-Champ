import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import team from "../../assets/team/team1.jpg";
import team_2 from "../../assets/team/team2.jpg";
import team_3 from "../../assets/team/team3.jpg";
import team_4 from "../../assets/team/team4.jpg";

const Banner = () => {
  const swiperRef = useRef(null);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="h-[350px] md:h-[500px] w-full md:py-4 relative">
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-full"
      >
        <SwiperSlide className="h-full w-full relative">
          <div className="py-4 h-full w-full flex justify-center items-center">
            <img
              className="h-full object-cover w-full"
              src={team}
              alt="Team member 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full w-full relative">
          <div className="py-4 h-full w-full flex justify-center items-center">
            <img
              className="h-full object-cover w-full"
              src={team_2}
              alt="Team member 2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full w-full relative">
          <div className="py-4 h-full w-full flex justify-center items-center">
            <img
              className="h-full object-cover w-full"
              src={team_3}
              alt="Team member 3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full w-full relative">
          <div className="py-4 h-full w-full flex justify-center items-center">
            <img
              className="h-full object-cover w-full"
              src={team_4}
              alt="Team member 4"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Buttons */}

      {/* Pause and Play Buttons
      <div className="absolute top-4 right-4 flex space-x-2">
        <button
          onClick={handlePause}
          className="bg-red-500 text-white p-2 rounded-full"
        >
          Pause
        </button>
        <button
          onClick={handlePlay}
          className="bg-green-500 text-white p-2 rounded-full"
        >
          Play
        </button>
      </div> */}
    </div>
  );
};

export default Banner;
