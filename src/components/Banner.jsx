import { FaArrowRight } from "react-icons/fa6";
const Banner = () => {
  return (
    <section className="relative bg-[url('https://www.intract.io/assets/intract-academy-background-5547a705.png')] bg-cover bg-center bg-no-repeat z-0">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 justify-center">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <div className="flex justify-center items-center">
            <img
              src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif"
              className="h-20 w-44 "
            />
          </div>
          <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
            Intract{" "}
            <span className="text-gray-600">
              users have together made more than
            </span>{" "}
            $100 million <span className="text-gray-600">in web3. </span>
            <span className="text-gray-600">Join them and</span> learn how to
            earn crypto!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center items-center justify-center">
            <a
              href="#"
              className="flex items-center justify-center w-full bg-[#6435e9] rounded px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              <span>Get Started</span>
              <FaArrowRight className="ml-2" color="white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
