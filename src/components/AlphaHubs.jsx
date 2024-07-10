import {
  Navbar,
  Banner,
  Footer,
  Dictionary,
  Projects,
  Slider,
  PopularNarrative,
  RecommendedNarrative,
} from "./index";

const AlphaHubs = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Slider />
      <PopularNarrative />
      <RecommendedNarrative />
      <Projects />
      <Dictionary />
      <Footer />
    </div>
  );
};

export default AlphaHubs;
