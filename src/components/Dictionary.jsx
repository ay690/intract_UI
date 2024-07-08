import { IoBookOutline } from "react-icons/io5";
import ToggleSwitch from './ToggleSwitch';  

const Dictionary = () => {
  return (
    <div className="relative w-full max-w-screen-xl px-4 py-10 mx-auto text-white sm:px-6 md:px-8">
      <div className="mb-5">
        <h2 className="text-2xl text-center sm:text-3xl">Crypto Dictionary</h2>
        <h3 className="mt-1 text-sm text-center opacity-50 sm:text-base">
          Your one-stop to catch up on all crypto terms
        </h3>
      </div>

      <div className="relative flex items-center justify-center rounded-lg cursor-pointer">
        <img
          src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"
          alt="Dictionary image"
          className="w-full rounded-xl h-60 sm:h-80 md:w-3/4 md:h-96"
        />
        <div className="absolute text-center bottom-5 left-5 sm:left-10 md:left-20 lg:left-48 md:text-left">
          <p className="text-base font-bold sm:text-lg md:text-xl">
            <span className="text-white text-opacity-50">Web3+ Degen Glossary</span>
          </p>
          <p className="text-xs sm:text-sm md:text-base">
            <span className="text-white opacity-50">Your own crypto dictionary</span>
          </p>
        </div>

        <div className="absolute bottom-5 right-5 sm:right-10 md:right-20 lg:right-48">
          <a
            href="https://docs.intract.io/v/intract-academy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 bg-gray-500 rounded-full opacity-50"
          >
            <IoBookOutline size={22} />
          </a>
        </div>
      </div>
      <ToggleSwitch />
    </div>
  );
};

export default Dictionary;
