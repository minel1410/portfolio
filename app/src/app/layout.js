
import { Metadata } from "next";

export const metadata = {
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
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      {children}
    </html>
  );
};



export default RootLayout;
