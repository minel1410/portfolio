
import Link from "next/link";
import FeatherIcon from "feather-icons-react";

const Footer = () => {
    return (
      <footer className="bg-Navy">
        <div className="w-full flex justify-center pt-16 pb-4">
          <div className="flex gap-8">
            <Link
              href="https://github.com/minel1410"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer"
            >
              <FeatherIcon
                icon="github"
                className="text-Slate hover:text-Green"
              ></FeatherIcon>
            </Link>
            <Link
              href="https://instagram.com/minel.salihagic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
            >
              <FeatherIcon
                icon="instagram"
                className="text-Slate hover:text-Green"
              ></FeatherIcon>
            </Link>
            <Link
              href="https://linkedin.com/in/minel-salihagi%C4%87-9ba401300/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
            >
              <FeatherIcon
                icon="linkedin"
                className="text-Slate hover:text-Green"
              ></FeatherIcon>
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col items-center pt-4 pb-4 text-LightSlate font-Calibre">
          <p>
            Built by{" "}
            <Link
              href="https://minelsalihagic.com"
              className="relative text-Green after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.5px] after:bg-Green after:transition-all after:duration-300 hover:after:w-full"
            >
              Minel Salihagić
            </Link>
          </p>
        </div>
      </footer>
    );
}

export default Footer;