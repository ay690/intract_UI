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
    <div className="relative max-w-5xl p-3 mx-auto text-white bg-opacity-25 rounded-lg opacity-65 bg-white/20">
      <div className="flex justify-center gap-5 transition-opacity duration-500 ease-in-out">
        <div>
          <img
            src={imgSrc}
            alt="Slider Image"
            className="object-fill w-auto min-h-full rounded-lg"
          />
        </div>

        <div className="flex flex-col items-start justify-between gap-5">
          <h2 className="text-xl font-bold text-white md:text-2xl">
            {heading}
          </h2>
          <h3 className="text-md">{subHeading}</h3>

          <div className="w-full mt-3 border-t border-gray-600"></div>

          <div className="flex -space-x-2">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                className="inline-block rounded-full w-9 h-9 ring-2 ring-white dark:ring-neutral-900"
                src={avatar}
                alt={`Avatar ${index + 1}`}
              />
            ))}
          </div>

          <div className="bg-[#6435e9] mt-20 rounded-lg px-8 py-2 text-sm sm:px-12 sm:py-3 md:text-base font-medium text-white shadow focus:outline-none focus:ring sm:w-auto">
            <button className="hover:cursor-pointer">Begin Journey</button>
          </div>
        </div>
      </div>

      <div
        className="absolute left-0 p-3 -translate-x-8 rounded-md -translate-y-52 bg-white/20 opacity-65 hover:cursor-pointer"
        onClick={goToPrevious}
      >
        <FaAngleLeft size={30} />
      </div>

      <div
        className="absolute right-0 p-3 translate-x-8 rounded-md -translate-y-52 bg-white/20 opacity-65 hover:cursor-pointer"
        onClick={goToNext}
      >
        <FaAngleRight size={30} />
      </div>
    </div>
  );
};

export default Slider;
