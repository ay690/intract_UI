import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { sliderData } from "../constants/Slider";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
    );
  };

  const { imgSrc, heading, subHeading, avatars } = sliderData[currentIndex];

  return (
    <>
      <div className="flex items-start pl-4 mb-3 text-lg font-semibold text-white sm:pl-8 md:pl-64 sm:text-xl md:text-2xl">
        <h1>Daily New Alpha for You</h1>
      </div>
      <div className="relative max-w-full p-5 mx-auto text-white bg-opacity-25 rounded-lg md:p-3 md:max-w-5xl bg-white/20">
        <div className="flex flex-col justify-center gap-5 transition-opacity duration-500 ease-in-out md:flex-row">
          <div className="flex justify-center">
            <img
              src={imgSrc}
              alt="Slider Image"
              className="object-cover w-full min-h-full rounded-lg md:w-auto"
            />
          </div>

          <div className="flex flex-col items-start justify-between gap-5">
            <h2 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
              {heading}
            </h2>
            <h3 className="text-sm sm:text-md">{subHeading}</h3>

            <div className="w-full mt-3 border-t border-gray-600"></div>

            <div className="flex -space-x-2">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  className="inline-block w-8 h-8 rounded-full sm:w-9 sm:h-9 ring-2 ring-white dark:ring-neutral-900"
                  src={avatar}
                  alt={`Avatar ${index + 1}`}
                />
              ))}
            </div>

            <div className="bg-[#6435e9] mt-10 md:mt-20 rounded-lg px-6 py-2 sm:px-8 sm:py-2 md:px-12 md:py-3 text-sm md:text-base font-medium text-white shadow focus:outline-none focus:ring w-auto">
              <button className="hover:cursor-pointer hover:translate-x-1">Begin Journey</button>
            </div>
          </div>
        </div>

        <div
          className="absolute left-0 p-3 -translate-x-6 -translate-y-40 rounded-md sm:-translate-x-8 md:-translate-y-52 bg-white/20 opacity-65 hover:cursor-pointer"
          onClick={goToPrevious}
        >
          <FaAngleLeft size={30} />
        </div>

        <div
          className="absolute right-0 p-3 translate-x-6 -translate-y-40 rounded-md sm:translate-x-8 md:-translate-y-52 bg-white/20 opacity-65 hover:cursor-pointer"
          onClick={goToNext}
        >
          <FaAngleRight size={30} />
        </div>
      </div>
    </>
  );
};

export default Slider;
