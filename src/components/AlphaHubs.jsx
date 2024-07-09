import {
  Navbar,
  Banner,
  Footer,
  Dictionary,
  Projects,
  Slider,
  PopularNarrative,
} from "./index";

const AlphaHubs = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Slider />
      <PopularNarrative />
      <Projects />
      <Dictionary />
      <Footer />
    </div>
  );
};

export default AlphaHubs;
