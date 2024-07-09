import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Slider = () => {
  return (
    <div className="relative max-w-5xl p-3 mx-auto text-white bg-opacity-25 rounded-lg opacity-65 bg-white/20">
      <div className="flex justify-center gap-5">
        <div>
          <img
            src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/ff5f87c6c2b54f0b8de31b0b8e876c52.jpg"
            alt="Slider Image"
            className="object-fill w-auto min-h-full rounded-lg"
          />
        </div>

        <div className="flex flex-col items-start justify-between gap-5">
          <h2 className="text-xl font-bold text-white md:text-2xl">
            Introduction To Farcaster
          </h2>
          <h3 className="text-md">
            Farcaster is a decentralized social network built on open protocols.
            It empowers users to own their identity, content, and social
            connections, giving them control over their online presence in a
            secure and transparent way.This Alpha-hub quest is an...
          </h3>

          {/************************ border line  ***********************/}
          <div className="w-full mt-3 border-t border-gray-600"></div>

          <div className="flex -space-x-2">
            <img
              className="inline-block rounded-full w-9 h-9 ring-2 ring-white dark:ring-neutral-900"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image 1"
            />
            <img
              className="inline-block rounded-full w-9 h-9 ring-2 ring-white dark:ring-neutral-900"
              src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image 2"
            />
            <img
              className="inline-block rounded-full w-9 h-9 ring-2 ring-white dark:ring-neutral-900"
              src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
              alt="Image 3"
            />
          </div>

          <div className="bg-[#6435e9] mt-20 rounded-lg px-8 py-2 text-sm sm:px-12 sm:py-3 md:text-base font-medium text-white shadow focus:outline-none focus:ring sm:w-auto">
            <button className="hover:cursor-pointer">Begin Journey</button>
          </div>
        </div>
      </div>

      <div className="absolute left-0 p-3 -translate-x-8 rounded-md -translate-y-52 bg-white/20 opacity-65">
        <FaAngleLeft size={30} />
      </div>

      <div className="absolute right-0 p-3 translate-x-8 rounded-md -translate-y-52 bg-white/20 opacity-65">
        <FaAngleRight size={30} />
      </div>
    </div>
  );
};

export default Slider;
