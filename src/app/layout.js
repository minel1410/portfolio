import Footer from "./_sections/Footer";
import { LeftPane, RightPane } from "./components/Panels";
import { Navbar } from "./components/Navbar";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Minel Salihagić",
  description:
    "Welcome to the official website of Minel Salihagić, a Software Developer and Engineer specializing in web development, embedded systems, and software engineering. Explore projects, skills, and contact information.",
  keywords:
    "Minel Salihagić, Software Developer, Software Engineer, Web Development, Embedded Systems, React Developer, Tailwind CSS, Projects, Portfolio, Contact, Node.js, Next.js, Java, C++, Minel, Salihagic, Salihagić, minel, salihagic, salihagić, Full stack, Student, Frontend Developer, Backend Developer, Full Stack Developer, JavaScript, TypeScript, HTML, CSS, Git, GitHub, Open Source, Agile, Scrum, UI/UX, REST API, API Development, Digital Transformation, Software Architecture, Problem Solving, Computer Science, Technology, Innovation, Learning, Teaching, Mentorship, Coding, Debugging, Continuous Integration, Continuous Deployment, DevOps, Cloud Computing, AWS, Azure, Docker, Kubernetes, Microservices, Responsive Design, Cross-Browser Compatibility, Version Control, Software Testing, Software Design Patterns, Data Structures, Algorithms, Optimization, Linux, Unix, Python.",
  author: "Minel Salihagić",
  openGraph: {
    title: "Minel Salihagić",
    description:
      "Discover the projects, skills, and professional journey of Minel Salihagić, specializing in web development, embedded systems, and software engineering.",
    url: "https://minelsalihagic.com",
    images: [
      {
        url: "https://minelsalihagic.com/graph-img.png",
        width: 1200,
        height: 630,
        alt: "Minel Salihagić",
      },
    ],
    type: "website",
    locale: "en_US",
    site_name: "Minel Salihagić Portfolio",
  },

  favicon: "https://minelsalihagic.com/favicon.ico",
};



const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Minel Salihagić</title>
        <meta
          name="description"
          content="Welcome to the official website of Minel Salihagić, a Software Developer specializing in web development and software engineering. Explore projects, skills, and contact information."
        />
        <meta
          name="keywords"
          content="Software Developer, Web Development, Embedded Systems, React, Tailwind CSS, Next.js, Minel Salihagić, Portfolio"
        />
        <meta property="og:title" content="Minel Salihagić" />
        <meta
          property="og:description"
          content="Explore projects, skills, and contact information of Minel Salihagić, a Software Developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://minelsalihagic.com" />
        <meta
          property="og:image"
          content="https://minelsalihagic.com/preview.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Minel Salihagić" />
        <meta
          name="twitter:description"
          content="Explore projects, skills, and contact information of Minel Salihagić."
        />
      </head>
      <body className="overflow-x-hidden">
        {/* Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X2PRF0BS94"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X2PRF0BS94');
          `}
        </Script>

        <Navbar />
        <div className="flex bg-Navy">
          <LeftPane />
          <div className="bg-Navy w-full md:w-10/12 md:ml-[8.33333333%] pt-28 px-8 lg:px-20">
            {children}
          </div>
          <RightPane />
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
