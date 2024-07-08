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
        <div className="flex items-center justify-center max-w-5xl gap-20 mx-auto">
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
