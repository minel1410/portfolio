
import Link from "next/link";
import FeatherIcon from "feather-icons-react";

const ProjectCard = ({
  cardTitle,
  cardDescription,
  githubLink = "#",
  hostedLink,
  technologies = []
}) => {
    return (
      <div className="bg-[#112240] w-full shadow-lg h-72 p-8 flex flex-col group justify-between hover:-translate-y-3 transition-all duration-300 cursor-pointer">
        <div className="flex w-full justify-between items-center">
          <FeatherIcon
            icon="folder"
            strokeWidth="1"
            className="text-Green w-12 h-12"
          />
          <div className="flex gap-3 items-center">
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <FeatherIcon
                icon="github"
                strokeWidth="2"
                className="text-LightestSlate hover:text-Green transition-all"
              />
            </Link>
            {hostedLink && (
              <Link href={hostedLink} target="_blank" rel="noopener noreferrer">
                <FeatherIcon
                  icon="external-link"
                  strokeWidth="2"
                  className="text-LightestSlate hover:text-Green transition-all"
                />
              </Link>
            )}
          </div>
        </div>
        <div>
          <p className="font-calibre font-bold text-LightestSlate text-xl group-hover:text-Green transition-all">
            {cardTitle}
          </p>
          <p className="font-calibre text-LightSlate font-md">
            {cardDescription}
          </p>
        </div>
        <div className="text-sm font-sf-mono text-Slate flex gap-5">
          {technologies.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
      </div>
    );
}

export default ProjectCard;