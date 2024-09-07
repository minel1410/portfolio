
import Link from "next/link";
import FeatherIcon from "feather-icons-react";

const Footer = () => {
    return (
      <footer className="bg-Navy">
        <div className="w-full flex justify-center pt-16 pb-4">
          <div className="flex gap-8">
            <FeatherIcon icon="github" className="text-Slate"></FeatherIcon>
            <FeatherIcon icon="instagram" className="text-Slate"></FeatherIcon>
            <FeatherIcon icon="twitter" className="text-Slate"></FeatherIcon>
            <FeatherIcon icon="linkedin" className="text-Slate"></FeatherIcon>
            <FeatherIcon icon="codepen" className="text-Slate"></FeatherIcon>
          </div>
        </div>

        <div className="w-full flex flex-col items-center pt-4 pb-4 text-LightSlate font-Calibre">
          <p>
            Built by{" "}
            <Link
              href={"#"}
              className="relative text-Green after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.5px] after:bg-Green after:transition-all after:duration-300 hover:after:w-full"
            >
              Minel Salihagić
            </Link>
          </p>
          <p>
            Designed borrowed from{" "}
            <Link
              href={"#"}
              className="relative text-Green after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.5px] after:bg-Green after:transition-all after:duration-300 hover:after:w-full"
            >
              Brittany Chaing
            </Link>
          </p>
        </div>
      </footer>
    );
}

export default Footer;