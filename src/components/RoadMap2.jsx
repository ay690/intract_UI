import { useState } from "react";
import { questItems2 } from "../constants/Quest";
import { TbCoinTakaFilled } from "react-icons/tb";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { IoIosLock } from "react-icons/io";

const RoadMap2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <div className="relative max-w-xl max-h-screen p-10 mx-auto text-white rounded-lg mt-52 bg-white/20 ring-1 ring-black/5 opacity-70">
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
            {questItems2.map((quest) => (
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
        <div className="hidden lg:absolute  lg:flex lg:flex-col items-center mt-40 transform -translate-y-1/2 left-[-500px] top-1/2">
          <div className="p-2 bg-gray-800 bg-opacity-50 rounded-full">
            <TiTick size={20} color="white" />
          </div>
          <div className="flex flex-col items-center justify-center gap-3 mt-3">
            <img
              src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png"
              className="relative w-40 rounded-lg h-52"
            />

            <div className="absolute text-center text-white rounded-full right-32 top-60 bg-white/20 ring-1 ring-black/5">
              <IoIosLock size={30} color="gray" />
            </div>

            <div className="relative ml-32 text-white">
              <h2 className="text-xl sm:text-2xl">
                Intract Certified: Earner NFT
              </h2>
              <h3 className="mt-1 text-sm opacity-50 sm:text-base">
                Your proof of airdrop expertise
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
    </>
  );
};

export default RoadMap2;
