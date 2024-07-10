import { CiCircleInfo } from "react-icons/ci";

const RewardInfo = () => {
  return (
    <div className="max-w-sm p-4 mx-auto rounded-lg bg-white/20 opacity-70 sm:max-w-md md:max-w-lg lg:max-w-sm">
      <div className="flex flex-col justify-between gap-4 mt-2">
        <div className="flex items-center gap-2">
          <h3 className="text-sm text-white opacity-50 sm:text-base md:text-lg lg:text-xl">
            Rewards info
          </h3>
          <CiCircleInfo size={20} color="white" />
        </div>
        <div className="mt-1 border-t border-gray-600"></div>
        <div className="flex flex-col items-start gap-3">
          <p className="text-sm font-semibold text-white sm:text-base md:text-md lg:text-xl">
            Free access to paid KOL (crypto earning) communities!
          </p>
          <p className="text-sm text-white opacity-50 sm:text-base md:text-md lg:text-md">
            Win access to exclusive earning communities of some of the the
            greatest earners in crypto for a month, every 24 hours. Get access
            to unmatched insights, a close-knit community of the best airdrop
            earners, and more.
          </p>
          <p className="text-sm text-white opacity-50 sm:text-base md:text-md lg:text-md">
            To win: make sure you&apos;ve connected your Twitter and Discord
            accounts - and follow our criteria!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RewardInfo;
