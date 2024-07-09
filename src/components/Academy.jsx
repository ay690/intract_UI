import { Essentials, AlphaHubs } from "./index";
import { useLocation } from "react-router-dom";

const Academy = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab");

  return <div>{tab === "alpha-hub" ? <AlphaHubs /> : <Essentials />}</div>;
};

export default Academy;
