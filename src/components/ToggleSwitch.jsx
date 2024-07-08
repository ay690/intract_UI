import { useState, useEffect } from "react";

const ToggleSwitch = () => {
  const [active, setActive] = useState("Essentials");

  const handleToggle = (label) => {
    setActive(label);
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
        onClick={() => handleToggle("Essentials")}
        className={`px-4 py-2 rounded-full ${
          active === "Essentials"
            ? "bg-white bg-opacity-50"
            : "text-white text-opacity-50"
        }`}
      >
        Essentials
      </div>
      <div
        onClick={() => handleToggle("AlphaHub")}
        className={`px-4 py-2 rounded-full ${
          active === "AlphaHub"
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
