import { CiPlay1 } from "react-icons/ci";
import { projects } from "../constants/Project";

const Projects = () => {
  return (
    <div className="w-full max-w-screen-xl px-4 py-10 mx-auto text-white">
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
            <img
              src={project.image}
              className="transition-transform transform rounded-lg w-80 h-96 group-hover:blur-sm"
            />
            <div className="absolute p-5 bg-black bg-opacity-50 rounded-full top-1 right-20 lg:right-3 ">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/reel-video-9601984-8212597.png?f=webp&w=256"
                className="w-6 h-6 rounded-lg"
              />
            </div>
            <div className="absolute bottom-0 left-0 p-3 rounded-lg">
              <p className="text-2xl font-semibold text-white text-opacity-95">
                {project?.title}
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
              <div className="p-3 bg-black rounded-full bg-opacity-70">
                <CiPlay1 className="text-2xl text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
