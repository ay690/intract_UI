import { useState, useEffect } from "react";
import { GoClock } from "react-icons/go";

const Timer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const end = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000); // 2 days from now
    const difference = end - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="relative max-w-md p-5 mx-auto text-white rounded-lg max-h-mdscreen mt-52 bg-white/20 ring-1 ring-black/5 opacity-70">
      <div className="flex items-center justify-start gap-3">
        <GoClock size={15} color="orange" />
        <h2 className="text-[#6D737A]">Rewards unlock in </h2>
      </div>
      <div className="mt-3 border-t border-gray-600"></div>
      <div className="relative flex items-center justify-center mt-5">
        <img
          src="https://www.intract.io/assets/dotBg-149528a0.png"
          className="absolute object-cover w-full h-20"
        />
        <div className="relative z-10 text-3xl sm:text-5xl">
          {Object.keys(timeLeft).length > 0 ? (
            <span>
              {formatTime(timeLeft.days)} : {formatTime(timeLeft.hours)} :{" "}
              {formatTime(timeLeft.minutes)} : {formatTime(timeLeft.seconds)}
            </span>
          ) : (
            <span className="text-3xl sm:text-5xl">Timeapos;s up!</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;
