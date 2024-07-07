import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="relative bg-[url('https://www.intract.io/assets/intract-academy-background-5547a705.png')] bg-cover bg-center bg-no-repeat z-0">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative justify-center max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <div className="flex items-center justify-center">
            <img
              src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif"
              className="h-20 w-44"
              alt="Intract Academy Logo"
            />
          </div>
          <p className="max-w-lg mt-4 text-sm text-white sm:text-base md:text-lg lg:text-xl">
            Intract{" "}
            <span className="text-gray-600">
              users have together made more than
            </span>{" "}
            $100 million <span className="text-gray-600">in web3. </span>
            <span className="text-gray-600">Join them and</span> learn how to
            earn crypto!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-center">
            <a
              href="#"
              className="flex items-center justify-center w-full bg-[#6435e9] rounded px-8 py-2 text-sm sm:px-12 sm:py-3 md:text-base font-medium text-white shadow focus:outline-none focus:ring sm:w-auto"
            >
              <span className="flex items-center transition-transform transform hover:translate-x-1">
                <span>Get Started</span>
                <FaArrowRight className="ml-2" color="white" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
