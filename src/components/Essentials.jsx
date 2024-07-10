import {
  Navbar,
  Banner,
  Footer,
  Dictionary,
  Projects,
  RoadMap,
  RoadMap2,
  Gif,
  Timer,
  RewardInfo,
} from "./index";

const Essentials = () => {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <RoadMap />
        <RoadMap2 />
        <div className="flex flex-col items-center justify-center max-w-5xl gap-10 mx-auto mt-64 lg:mt-20 md:flex-row md:gap-20">
          <div>
            <Timer />
            <Gif />
          </div>
          <RewardInfo />
        </div>
        <Projects />
        <Dictionary />
        <Footer />
      </div>
    </>
  );
};

export default Essentials;
