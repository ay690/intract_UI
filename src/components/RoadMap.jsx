import { useState } from "react";
import { TbCoinTakaFilled } from "react-icons/tb";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { IoIosLock } from "react-icons/io";
import { questItems } from "../constants/Quest";

const RoadMap = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="relative max-w-xl max-h-screen p-6 mx-4 text-white rounded-lg sm:mx-8 md:mx-16 lg:mx-24 bg-white/20 ring-1 ring-black/5 opacity-70">
        <div className="flex flex-col items-center justify-start gap-8 lg:flex-row">
          <div className="relative overflow-hidden">
            <img
              src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
              className="object-cover w-40 h-40 border-4 border-gray-500 rounded-md sm:h-60 sm:w-60 lg:h-80 lg:w-80"
            />
            <div className="absolute p-2 text-center transform -translate-x-1/2 bg-white rounded-full left-1/2 bottom-2 sm:bottom-4 lg:bottom-6 bg-opacity-20 backdrop-blur-md">
              <p className="text-xs text-white sm:text-sm">6 Quest</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl">
              Basics of Crypto
            </h2>
            <h3 className="mt-1 text-xs opacity-50 sm:text-sm lg:text-base">
              The safest and easiest place to start your crypto journey!
            </h3>
            <div className="mt-3 border-b border-gray-600 border-dotted"></div>
            <div className="flex items-center justify-center w-full gap-2 p-3 mt-3 bg-gray-500 bg-opacity-25 rounded-full lg:justify-start lg:w-40">
              <TbCoinTakaFilled color="gold" size={20} />
              <span>1490 XPs</span>
            </div>
          </div>
        </div>
        <div
          className="absolute cursor-pointer top-4 right-4"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <GoTriangleUp color="gray" size={20} />
          ) : (
            <GoTriangleDown color="gray" size={20} />
          )}
        </div>

        {isMenuOpen && (
          <div
            className="flex flex-col max-w-xl gap-3 mt-2 overflow-y-scroll"
            style={{ maxHeight: "320px" }}
          >
            {questItems.map((quest) => (
              <div
                key={quest.id}
                className="p-2 bg-gray-900 bg-opacity-25 rounded-lg"
              >
                <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
                  <img
                    src={quest.imageUrl}
                    className="w-20 h-20 border-4 border-gray-500 rounded-lg sm:w-28 sm:h-28"
                  />
                  <div className="flex flex-col w-full gap-2 text-center sm:text-left">
                    <h2 className="text-base truncate sm:text-xl">
                      {quest.title}
                    </h2>
                    <div className="mt-1 border-b border-gray-600 border-dotted"></div>
                    <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
                      <h3 className="text-xs opacity-50 sm:text-sm lg:text-base">
                        {quest.tasks} Tasks
                      </h3>
                      <div className="flex items-center w-full h-2 bg-gray-600 rounded-full sm:w-1/2">
                        <div className="w-4/5 h-full bg-black rounded-full"></div>
                      </div>
                      <div className="p-2 bg-gray-800 bg-opacity-50 rounded-full">
                        <TiTick size={20} color="white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional section */}
        <div className="hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 translate-y-96 sm:bottom-8 lg:bottom-20 lg:left-[150%] lg:translate-x-0 lg:transform lg:translate-y-1/2 lg:w-96 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <div className="p-2 overflow-hidden bg-gray-800 bg-opacity-50 rounded-full">
            <TiTick size={20} color="white" />
          </div>
          <div className="flex flex-col items-center justify-center gap-3 mt-3 text-center lg:text-left">
            <img
              src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png"
              className="relative w-20 h-32 rounded-lg sm:w-28 lg:w-40 sm:h-40 lg:h-52"
            />
            <div className="absolute text-center text-white rounded-full right-16 top-36 sm:right-20 lg:right-32 sm:top-44 lg:top-60 bg-white/20 ring-1 ring-black/5">
              <IoIosLock size={20} color="gray" />
            </div>
            <div className="relative ml-16 text-white sm:ml-20 lg:ml-32">
              <h2 className="text-base sm:text-xl lg:text-2xl">
                Intract Certified: Learner NFT
              </h2>
              <h3 className="mt-1 text-xs opacity-50 sm:text-sm lg:text-base">
                Your crypto black-belt certificate
              </h3>
              <div className="mt-3">
                <button className="w-32 p-2 rounded-full shadow-lg opacity-50 sm:w-48 lg:w-64 sm:p-3 lg:p-5 bg-white/20 ring-1 ring-black/5">
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
