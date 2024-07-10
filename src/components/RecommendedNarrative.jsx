import { TbCoinTakaFilled } from "react-icons/tb";
import { cards } from "../constants/Cards";

const RecommendedNarrative = () => {
  return (
    <>
      <div className="flex items-start pl-4 mt-10 mb-16 text-xl font-semibold text-white md:text-2xl md:pl-28">
        <h1>Recommended Narrative</h1>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 gap-4 mx-4 md:grid-cols-2 md:mx-24">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative w-full max-h-screen p-2 text-white rounded-xl bg-white/20 ring-1 ring-black/5 opacity-70"
          >
            <div className="flex items-center justify-start gap-8">
              <div className="relative overflow-hidden">
                <img
                  src={card.image}
                  className="object-cover h-64 p-3 border-4 border-gray-500 rounded-md w-80"
                />
                <div className="absolute p-2 text-center transform -translate-x-1/2 bg-white rounded-full left-1/2 bottom-6 bg-opacity-20 backdrop-blur-md">
                  <p className="text-white">{card.quests} Quest</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 hover:cursor-pointer">
                <h2 className="text-2xl sm:text-3xl">{card.title}</h2>
                <h3 className="mt-1 text-sm opacity-50 sm:text-base">
                  {card.subtitle}
                </h3>
                <div className="mt-3 border-b border-gray-600 border-dotted"></div>
                <div className="flex w-40 gap-2 p-3 mt-3 bg-gray-500 bg-opacity-25 rounded-full">
                  <TbCoinTakaFilled color="gold" size={20} />
                  <span>{card.xps} XPs</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecommendedNarrative;
