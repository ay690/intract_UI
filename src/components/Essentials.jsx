import {
  Navbar,
  Banner,
  Footer,
  Dictionary,
  Projects,
  RoadMap,
  RoadMap2,
} from "./index";

const Essentials = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <RoadMap />
      <RoadMap2 />
      <Projects />
      <Dictionary />
      <Footer />
    </div>
  );
};

export default Essentials;
