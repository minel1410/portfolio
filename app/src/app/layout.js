import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata = {
  title: "Minel Salihagić",
  description:
    "Welcome to the official website of Minel Salihagić. Explore projects, skills, and find contact information.",
  keywords:
    "Minel Salihagić, Software Developer, Engineer, Projects, Skills, Contact, Minel, Salihagić, Student, Mathematics, Sarajevo, Developer, Frontend, Backend",
  author: "Minel Salihagić",
  openGraph: {
    title: "Minel Salihagić",
    description:
      "Discover the projects, skills, and professional journey of Minel Salihagić, a Software Developer and Engineer.",
    url: "https://minelsalihagic.com",
    images: [
      {
        url: "https://minelsalihagic.com/graph-img.png",
        width: 1200,
        height: 630,
        alt: "Minel Salihagić - Software Developer",
      },
    ],
    type: "website",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
