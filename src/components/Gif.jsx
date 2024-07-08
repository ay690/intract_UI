import { TiTick } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";

const Gif = () => {
  return (
    <div className="relative max-w-md max-h-[900px] p-5 mx-auto mt-2 text-white rounded-lg bg-white/20 ring-1 ring-black/5 opacity-70">
      <div>
        <img
          src="https://www.intract.io/assets/kol-reward-12e6ae06.gif"
          className="object-cover p-1 h-30 w-30 rounded-xl"
        />
      </div>

      <div className="flex flex-col justify-between gap-3 mt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm opacity-50 sm:text-base">
            Exclusive Community
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-[#bf98d6] rounded-full">
              <FaDiscord size={20} color="white" />
            </div>
            <h2 className="text-2xl sm:text-3xl">Earndrop</h2>
          </div>
        </div>
        <div className="mt-3 border-t border-gray-600"></div>
        <div className="flex items-center justify-between">
          <h3 className="text-sm opacity-50 sm:text-base">
            Complete all Essential quests
          </h3>
          <div className="p-3 bg-gray-600 rounded-full">
            <TiTick size={20} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-sm opacity-50 sm:text-base">
            Complete at least 1 Alpha Hub quest today
          </h3>
          <div className="p-3 bg-gray-600 rounded-full">
            <TiTick size={20} />
          </div>
        </div>
        <div>
          <button className="w-full p-3 text-white rounded-full shadow-lg opacity-50 bg-white/20 ring-1 ring-black/5">
            Claim Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gif;
