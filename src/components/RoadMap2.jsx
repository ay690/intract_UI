import { useState } from "react";
import { TbCoinTakaFilled } from "react-icons/tb";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { IoIosLock } from "react-icons/io";
import { questItems2 } from "../constants/Quest";

const RoadMap = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="max-w-screen-xl px-6 mt-[500px] mx-auto lg:mt-56 text-white lg:px-24">
      <div className="relative rounded-lg lg:-right-64 bg-white/20 ring-1 ring-black/5 opacity-70 lg:max-w-xl lg:p-10 lg:mx-24">
        <div className="flex flex-col items-center justify-start lg:flex-row lg:gap-8">
          <div className="relative mb-6 overflow-hidden lg:mb-0 lg:mr-8">
            <img
              src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
              className="object-cover w-full border-4 border-gray-500 rounded-md h-80 lg:w-80"
            />
            <div className="absolute p-2 text-center transform -translate-x-1/2 bg-white rounded-full left-1/2 bottom-6 bg-opacity-20 backdrop-blur-md">
              <p className="text-white">6 Quest</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl lg:text-3xl">Basics of Crypto</h2>
            <h3 className="mt-1 text-sm opacity-50 lg:text-base">
              The safest and easiest place to start your crypto journey!
            </h3>
            <div className="mt-3 border-b border-gray-600 border-dotted"></div>
            <div className="flex w-40 gap-2 p-3 mt-3 bg-gray-500 bg-opacity-25 rounded-full">
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
          <div className="mt-6 overflow-y-scroll rounded-lg lg:mt-0 lg:absolute lg:right-4 lg:top-4 lg:w-96 lg:max-h-80 bg-white/20 ring-1 ring-black/5 lg:max-w-xl">
            <div className="flex flex-col gap-3 p-4 lg:p-2">
              {questItems2.map((quest) => (
                <div
                  key={quest.id}
                  className="p-2 bg-gray-900 bg-opacity-25 rounded-lg"
                >
                  <div className="flex items-center justify-start gap-4">
                    <img
                      src={quest.imageUrl}
                      className="border-4 border-gray-500 rounded-lg w-28 h-28"
                    />
                    <div className="flex flex-col w-full gap-2">
                      <h2 className="text-xl truncate lg:text-2xl">
                        {quest.title}
                      </h2>
                      <div className="mt-1 border-b border-gray-600 border-dotted"></div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm opacity-50 lg:text-base">
                          {quest.tasks} Tasks
                        </h3>
                        <div className="flex items-center w-1/2 h-2 bg-gray-600 rounded-full">
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
          </div>
        )}

        {/* Additional section */}
        <div className="absolute flex flex-col items-center transform -translate-y-1/2 mt-32  top-[600px] lg:top-1/2 right-11 lg:-left-[900px] lg:mt-40">
          <div className="p-2 bg-gray-800 bg-opacity-50 rounded-full">
            <TiTick size={20} color="white" />
          </div>
          <div className="flex flex-col items-center justify-center gap-3 mt-3">
            <img
              src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png"
              className="relative w-40 rounded-lg h-52"
            />

            <div className="absolute text-center text-white rounded-full left-56 top-60 bg-white/20 ring-1 ring-black/5">
              <IoIosLock size={30} color="gray" />
            </div>

            <div className="relative ml-32 text-white">
              <h2 className="text-xl lg:text-2xl">
                Intract Certified: Learner NFT
              </h2>
              <h3 className="mt-1 text-sm opacity-50 lg:text-base">
                Your crypto black-belt certificate
              </h3>
              <div className="mt-3">
                <button className="w-64 p-5 rounded-full shadow-lg opacity-50 bg-white/20 ring-1 ring-black/5">
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
