import Footer from "./(sections)/Footer";
import { LeftPane, RightPane } from "./components/LeftPane";
import { Navbar } from "./components/Navbar";
import "./globals.css"

/* export const metadata = {
  title: "Minel Salihagić",
  description:
    "Welcome to the official website of Minel Salihagić, Software Developer and Engineer. Explore projects, skills, and find contact information.",
  keywords:
    "Minel Salihagić, Software Developer, Engineer, Projects, Skills, Contact",
  author: "Minel Salihagić",
  openGraph: {
    title: "Minel Salihagić",
    description:
      "Discover the projects, skills, and professional journey of Minel Salihagić, a Software Developer and Engineer.",
    url: "https://minelsalihagic.com",
    images: [
      {
        url: "https://minelsalihagic.com/path-to-your-image.jpg",
        width: 1200,
        height: 630,
        alt: "Minel Salihagić - Software Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minel Salihagić",
    description:
      "Discover the projects, skills, and professional journey of Minel Salihagić, a Software Developer and Engineer.",
    images: [
      {
        url: "https://minelsalihagic.com/path-to-your-image.jpg",
        alt: "Minel Salihagić - Software Developer",
      },
    ],
  },
}; */

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex bg-Navy">
          <LeftPane />
          <div className="bg-Navy w-full md:w-10/12 md:ml-[8.33333333%] pt-28 px-8">
            {children}
          </div>
          <RightPane />
        </div>
        <Footer/>
      </body>

      {/* <Analytics></Analytics>
      <SpeedInsights></SpeedInsights> */}
    </html>
  );
};

export default RootLayout;
