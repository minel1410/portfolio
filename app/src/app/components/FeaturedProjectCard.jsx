import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";

const FeaturedProjectCard = ({
  cardTitle = "Project Title", // Default value if cardTitle is not provided
  cardDescription = "Project description goes here.", // Default value if cardDescription is not provided
  backgroundImage = "/default-image.png", // Default background image
  githubLink = "#", // Default to "#" if no GitHub link is provided
  hostedLink, // Optional, will be checked before rendering
  technologies = [], // Default to an empty array if no technologies are provided
}) => {
  return (
    <div className="relative w-full group hover:cursor-pointer">
      <div className="h-full w-1/2 absolute right-0 top-0 z-0 bg-center bg-contain bg-no-repeat">
        <div className="h-full relative">
          <div className="h-full flex w-full items-center relative transition-all z-20">
            <Image
              src="/alumni.png"
              alt="Portfolio Image"
              width={1000}
              height={1000}
              className="rounded-md relative transition-all"
            />
            <div className="hidden lg:absolute inset-0 bg-Green opacity-100 mix-blend-multiply group-hover:opacity-0 transition-all rounded-md"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-96 group hover:shadow-xl lg:hover:shadow-none hover:cursor-pointer lg:w-3/4 right-0">
        <div
          className={`relative w-full h-full shadow-md lg:shadow-none mt-5 bg-cover bg-center bg-opacity-0`}
        >
          <div className="absolute inset-0 lg:bg-transparent bg-opacity-[92%] lg:bg-opacity-100 flex flex-col justify-between p-6 sm:p-8 group-hover:bg-opacity-[85%] transition-all">
            <p className="font-sf-mono text-Green font-bold">
              Featured Project
            </p>
            <Link
              href={hostedLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-White text-xl font-bold group-hover:text-Green transition-all">
                {cardTitle}
              </p>
            </Link>
            <p className="text-Slate mt-4 sm:mt-8 text-justify lg:bg-[#112240] lg:p-5 tracking-tight font-semibold lg:rounded-md lg:shadow-lg">
              {cardDescription}
            </p>
            <div className="font-sf-mono text-LightestSlate gap-3 text-sm mt-2 sm:mt-8 font-extralight flex flex-wrap">
              {technologies.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
            <div className="text-Slate flex gap-5 mt-5">
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:cursor-pointer hover:text-Green"
              >
                <FeatherIcon icon="github" strokeWidth="2" />
              </Link>
              {hostedLink && (
                <Link
                  href={hostedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hosted Project"
                  className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:cursor-pointer hover:text-Green"
                >
                  <FeatherIcon icon="external-link" strokeWidth="2" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
