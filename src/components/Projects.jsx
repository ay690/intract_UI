import { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { projects } from "../constants/Project";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [showCross, setShowCross] = useState(false); // State to track if cross image is shown

  const handlePlayClick = (index) => {
    setActiveProject(index);
    setShowCross(true); // Show cross image when video starts playing
  };

  const handleCloseClick = () => {
    setActiveProject(null);
    setShowCross(false); // Hide cross image when closing video
  };

  const getEmbedUrl = (url) => {
    const videoId = url.split("/shorts/")[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    console.log(`Embedding YouTube URL: ${embedUrl}`);
    return embedUrl;
  };

  return (
    <div className="w-full max-w-screen-xl px-4 py-10 mx-auto mt-40 text-white">
      <div className="mb-5">
        <h2 className="text-3xl text-center">
          Top Crypto Creators and Projects to Follow
        </h2>
        <h3 className="mt-1 text-center opacity-50">
          Answers to your crypto doubts, straight from the experts
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects?.map((project, index) => (
          <div className="relative group" key={index}>
            {activeProject === index ? (
              <div className="relative w-full h-full">
                <iframe
                  className="w-full h-full"
                  src={getEmbedUrl(project.youtubeLink)}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div
                  className="absolute p-2 bg-white rounded-full cursor-pointer bg-opacity-40 top-2 right-2"
                  onClick={handleCloseClick}
                >
                  <img
                    src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
                    className="w-6 h-6 rounded-lg"
                    alt="close video"
                  />
                </div>
              </div>
            ) : (
              <>
                <img
                  src={project.image}
                  className="transition-transform transform rounded-lg w-80 h-96 group-hover:blur-sm"
                  alt={project.title}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100"
                  onClick={() => handlePlayClick(index)}
                >
                  <div className="p-3 bg-black rounded-full cursor-pointer bg-opacity-70">
                    <CiPlay1 className="text-2xl text-white" />
                  </div>
                </div>
              </>
            )}
            {activeProject !== index && (
              <div
                className={`absolute p-5 bg-black bg-opacity-50 rounded-full cursor-pointer top-1 right-20 lg:right-3 ${
                  showCross ? "hidden" : ""
                }`}
              >
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/reel-video-9601984-8212597.png?f=webp&w=256"
                  className="w-6 h-6 rounded-lg"
                  alt="video icon"
                />
              </div>
            )}
            <div
              className={`absolute bottom-0 left-0 p-3 rounded-lg ${
                activeProject == index ? "hidden" : ""
              }`}
            >
              <p className="text-md white text- fontextt-semibold lg:text-2xl text-opacity-95">
                {project?.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
