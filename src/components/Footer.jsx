import {
  FaTwitter,
  FaTelegramPlane,
  FaDiscord,
  FaSpotify,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="mt-5 border-t border-gray-600"></div>
      <div className="w-full px-20 py-24 mt-3 bg-custom-black">
        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-6 sm:grid-cols-2 gap-8 max-w-[600px] px-4 md:px-0">
          <div className="col-span-2">
            <img
              src="https://www.intract.io/logo/intract_text.svg"
              alt="Intract Logo"
              className="h-[25px]"
            />
            <h3 className="py-2 text-[#6D737A] max-w-sm">
              We are your personal guide for exploring web3 projects & earning
              100x rewards
            </h3>
          </div>

          <div>
            <h3 className="font-semibold text-white text-md">INTRACT</h3>
            <ul className="py-6 text-[#6D737A]">
              <li className="py-2 cursor-pointer hover:text-white">
                Explore Quests
              </li>
              <li className="py-2 cursor-pointer hover:text-white">
                Communities
              </li>
              <li className="py-2 cursor-pointer hover:text-white">
                Alpha Hub
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white text-md">EARN</h3>
            <ul className="py-6 text-[#6D737A]">
              <li className="py-2 cursor-pointer hover:text-white">
                Refer & Earn
              </li>
              <li className="py-2 cursor-pointer hover:text-white">
                Leaderboard
              </li>
              <li className="py-2 cursor-pointer hover:text-white">
                Achievements
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-md">ABOUT</h3>
            <ul className="py-6 text-[#6D737A]">
              <li className="py-2 cursor-pointer hover:text-white">
                Product Roadmap
              </li>
              <li className="py-2 cursor-pointer hover:text-white">
                Affiliate Program
              </li>
              <li className="py-2 cursor-pointer hover:text-white">
                Sign up Program
              </li>
              <li className="py-2 cursor-pointer hover:text-white">
                Growth Community
              </li>
              <li className="py-2 cursor-pointer hover:text-white">Blogs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-md">SUPPORT</h3>
            <ul className="py-6 text-[#6D737A]">
              <li className="py-2 cursor-pointer hover:text-white">
                Create your quest
              </li>
              <li className="py-2 cursor-pointer hover:text-white">
                Terms of services
              </li>
              <li className="py-2 cursor-pointer hover:text-white">
                Privacy Policy
              </li>
              <li className="py-2 cursor-pointer hover:text-white">
                Community Guidelines
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600"></div>

        <div className="md:max-w-[1480px] max-w-[600px] mt-[20px]">
          <h3 className="py-2 text-start">
            <p>
              {" "}
              <span className="text-sm font-semibold text-white">
                Disclaimer:{" "}
              </span>
              <span className="text-sm text-[#6D737A]">
                {" "}
                Crypto Products, Virtual Digital Assets, and NFTs are
                unregulated and can be highly risky. There may be no regulatory
                recourse for any loss from such transactions. We advise the
                viewer to proceed with caution. Nothing in this website or any
                communication published by us amounts to, is intended to be, or
                should be construed as investment or purchase advice of any kind
                or financial advice or promotion under any applicable laws. Any
                decision made based on the content provided on this website or
                any communication published by us shall not be attributable to
                us.
              </span>
            </p>
          </h3>
        </div>
        <div className="mt-5 border-t border-gray-600"></div>

        <div className="flex flex-col justify-between mt-10 lg:flex-row">
          <div className="mb-5 lg:mb-0">
            <p className="text-white">
              CREATED BY <span className="text-white underline">INTRACT</span>
            </p>
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            <a
              href="https://x.com/IntractCampaign"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-md hover:bg-white"
            >
              <FaTwitter color="#0096FF" size={25} />
            </a>
            <a
              href="https://discord.com/invite/faXj8Yzua6/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-md hover:bg-white"
            >
              <FaDiscord color="#5F9EA0" size={25} />
            </a>
            <a
              href="https://t.me/+bNAsaw8NqsxmNWQ1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-md hover:bg-white"
            >
              <FaTelegramPlane color="blue" size={25} />
            </a>
            <a
              href="https://open.spotify.com/show/40sCgrg26jFDN3i3WsHB5D"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-md hover:bg-white"
            >
              <FaSpotify color="#00A36C" size={25} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
