import Footer from "./(sections)/Footer";
import { LeftPane, RightPane } from "./components/Panels";
import { Navbar } from "./components/Navbar";
import "./globals.css"

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

  favicon: "https://minelsalihagic.com/favicon.ico"
};


const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
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
