import { useState } from "react";
import { FaAngleRight, FaAngleLeft, FaArrowRight } from "react-icons/fa6";
import { TbCoinTakaFilled } from "react-icons/tb";
import { MdOutlineViewDay } from "react-icons/md";
import { cards } from "../constants/Lens";

const Lens = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 2 : prevIndex - 2
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= cards.length - 2 ? 0 : prevIndex + 2
    );
  };
  return (
    <div className="relative flex flex-col max-w-full mx-auto mt-5 text-white bg-opacity-25 opacity-75 md:flex-row md:max-w-5xl rounded-xl bg-white/20">
      {/***********  left section **********/}

      <div className="object-fill bg-black w-full md:w-[400px] opacity-35 rounded-t-xl md:rounded-t-none md:rounded-l-xl">
        <div className="flex flex-col gap-5 p-4 mt-5">
          <h2 className="text-lg font-bold">Exploring Lens Protocol</h2>
          <h3>
            Lens Protocol is a decentralized social graph that empowers
            developers to create social media applications on the blockchain. It
            ensures data ownership, privacy, and interop...
          </h3>
          <div className="flex items-center gap-2">
            <div className="p-3 text-center bg-white rounded-full bg-opacity-20 backdrop-blur-md">
              <p className="text-white">3 Quest</p>
            </div>
            <div className="flex -space-x-2">
              <img
                className="inline-block w-8 h-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
              <img
                className="inline-block w-8 h-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
              <img
                className="inline-block w-8 h-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                alt="Image Description"
              />
            </div>
          </div>
          <div className="mt-1 border-b border-gray-600 border-dotted"></div>

          <div className="flex w-32 gap-2 p-3 mt-2 bg-gray-500 bg-opacity-25 rounded-full">
            <TbCoinTakaFilled color="gold" size={20} />
            <span>70 XPs</span>
          </div>
          <div className="bg-[#6435e9] rounded-lg text-center p-3 text-white focus:ring w-full">
            <button className="flex items-center justify-center w-full hover:cursor-pointer hover:translate-x-1">
              <span className="mr-2">Start here</span>
              <FaArrowRight size={20} color="white" />
            </button>
          </div>
        </div>
      </div>

      {/**********  right section  ***************/}

      <div className="relative flex flex-col w-full gap-3 p-3 md:flex-row lg:w-[700px]">
        {cards?.slice(currentIndex, currentIndex + 2)?.map((card) => (
          <div
            key={card.id}
            className="w-full p-3 rounded-lg opacity-70 bg-white/20 hover:cursor-pointer"
            onMouseEnter={() => setHoveredCardId(card.id)}
            onMouseLeave={() => setHoveredCardId(null)}
          >
            <div
              className={`relative flex items-center justify-center overflow-hidden p-4 h-[250px] ${card.background} rounded-lg`}
            >
              <img
                src="https://www.intract.io/assets/grid-trending-779d3c45.png"
                className="w-full h-auto"
              />
              <img src={card.image} className="absolute w-3/4 h-auto" />
            </div>

            <div className="flex items-center justify-start gap-3 mt-2">
              <img src={card.networkImage} className="w-5 h-5" />
              <span>{card.subtitle}</span>
            </div>
            <div className="mt-1">
              <h3 className="text-truncate">{card.title}</h3>
            </div>

            <div className="w-full mt-3 border-t border-gray-600"></div>

            {/* Infinite scroll div */}
            <div className="overflow-hidden h-[50px] mt-2">
              <div
                className={`flex items-center gap-3 ${
                  hoveredCardId === card.id ? "animate-infinite-scroll" : ""
                }`}
              >
                <div className="flex items-center gap-2 p-3 rounded-full bg-white/20 bg-opacity-20">
                  <MdOutlineViewDay size={20} color="red" />
                  <span>{card.tasks} Tasks</span>
                </div>
                <div className="flex w-32 gap-2 p-3 rounded-full bg-opacity-20 bg-white/20">
                  <TbCoinTakaFilled color="gold" size={20} />
                  <span>{card.xps} XPs</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/********** Arrow keys ************/}

        <div
          className="absolute left-0 p-3 transform -translate-y-1/2 top-1/2 bg-white/20 opacity-65 hover:cursor-pointer"
          onClick={handlePrevClick}
        >
          <FaAngleLeft size={30} />
        </div>

        <div
          className="absolute right-0 p-3 transform -translate-y-1/2 top-1/2 bg-white/20 opacity-65 hover:cursor-pointer"
          onClick={handleNextClick}
        >
          <FaAngleRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Lens;
