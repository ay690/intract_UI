import { HiMagnifyingGlass } from "react-icons/hi2";

const Navbar = () => {
  return (
    <header className="bg-[#00000040] opacity-65 p-3 relative z-10">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block" href="#">
              <img
                src="https://www.intract.io/logo/intract_text.svg"
                className="w-32 h-20"
                alt="Logo"
              />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {["Compass", "Explore", "Academy", "NFTs", "For Projects"].map(
                  (item) => (
                    <li key={item} className="relative pb-2">
                      <a
                        className="text-gray-500 text-lg transition hover:text-gray-500/75 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                        href="#"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-between gap-10 md:gap-4">
              <div className="flex items-center justify-center gap-4">
                <div className="relative">
                  <input
                    placeholder="Search for ecosystems, trending quests etc."
                    className="hidden lg:block outline-none bg-custom-black text-gray-600 w-full lg:w-[400px] p-2 border rounded-full pl-10"
                  />
                  <HiMagnifyingGlass
                    size={22}
                    color="white"
                    className="absolute p-1 transform -translate-y-1/2 bg-gray-500 rounded-full left-3 top-1/2"
                  />
                </div>
              </div>
              <a className=" sm:block" href="#">
                <img
                  src="https://www.intract.io/assets/broadcast_or-04af786c.svg"
                  className="w-10 h-10 p-2 border-2 border-yellow-700 rounded-full"
                  alt="Broadcast Icon"
                />
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black-600"
                  href="#"
                >
                  Sign In
                </a>
              </div>
              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
