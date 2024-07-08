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
} from "./index";

const Essentials = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <RoadMap />
      <RoadMap2 />
      <Timer />
      <Gif />
      <Projects />
      <Dictionary />
      <Footer />
    </div>
  );
};

export default Essentials;
