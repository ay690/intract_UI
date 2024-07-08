import {
  Navbar,
  Banner,
  Footer,
  Dictionary,
  Projects,
  RoadMap,
  RoadMap2,
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
      <Projects />
      <Dictionary />
      <Footer />
    </div>
  );
};

export default Essentials;
