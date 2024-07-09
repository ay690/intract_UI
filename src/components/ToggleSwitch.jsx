import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ToggleSwitch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab") || "essentials";

  const handleToggle = (label) => {
    navigate(`/academy?tab=${label}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const toggleSwitch = document.getElementById("toggle-switch");
      if (toggleSwitch) {
        if (window.scrollY > 100) {
          toggleSwitch.classList.add(
            "fixed",
            "bottom-5",
            "left-1/2",
            "-translate-x-1/2",
            "transform"
          );
          toggleSwitch.classList.remove("relative");
        } else {
          toggleSwitch.classList.remove(
            "fixed",
            "bottom-5",
            "left-1/2",
            "-translate-x-1/2",
            "transform"
          );
          toggleSwitch.classList.add("relative");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="toggle-switch"
      className="relative flex items-center p-1 transform -translate-x-1/2 bg-white rounded-full cursor-pointer bottom-5 left-1/2 bg-opacity-20 backdrop-filter backdrop-blur-lg"
    >
      <div
        onClick={() => handleToggle("essentials")}
        className={`px-4 py-2 rounded-full ${
          tab === "essentials"
            ? "bg-white bg-opacity-50"
            : "text-white text-opacity-50"
        }`}
      >
        Essentials
      </div>
      <div
        onClick={() => handleToggle("alpha-hub")}
        className={`px-4 py-2 rounded-full ${
          tab === "alpha-hub"
            ? "bg-white bg-opacity-50"
            : "text-white text-opacity-50"
        }`}
      >
        AlphaHub
      </div>
    </div>
  );
};

export default ToggleSwitch;
