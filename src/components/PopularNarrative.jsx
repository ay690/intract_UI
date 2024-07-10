import { Farcaster, Grass, Lens } from "./index";

const PopularNarrative = () => {
  return (
    <>
      <Farcaster />
      <Lens />
      <Grass />
      <div className="flex justify-center max-w-full mx-auto mt-3 ">
        <button className="px-4 py-2 text-white bg-gray-500 rounded-lg opacity-40 hover:bg-gray-600 focus:outline-none hover:cursor-pointer hover:translate-x-1">
          See More
        </button>
      </div>
    </>
  );
};

export default PopularNarrative;
