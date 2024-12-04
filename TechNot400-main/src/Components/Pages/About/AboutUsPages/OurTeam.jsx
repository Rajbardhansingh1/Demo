import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const teamMembers = [
  {
    name: "Rajvardhan Singh",
    position: "Marketing Research",
    title:"Founder",
    description:
      "As a marketing researcher, I analyze consumer behavior, market trends, and competitive landscapes to provide data-driven insights that help businesses make informed decisions and optimize their strategies.",
    imgSrc:
      "https://images.unsplash.com/photo-1593839686924-4b344fac3f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFkdWx0fGVufDB8fDB8fHww",
  },
  {
    name: "Ankit Biswas",
    position: "Back-End Developer",
    title:"Co-founder",
    description:
      "As a backend developer, I design, build, and maintain server-side applications, ensuring data security and efficient performance. I work with databases, APIs, and server logic to support seamless user experiences.",
    imgSrc:
      "https://images.unsplash.com/photo-1584598408453-5163444959e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Bisesh Kesara",
    position: "Digital Marketing",
    title:"Co-founder",
    description:
      "As a digital marketer, I develop and execute strategies to increase online visibility, engage audiences, and drive conversions. I use SEO, social media, content marketing, and analytics to optimize digital campaigns and achieve business goals.",
    imgSrc:
      "https://images.unsplash.com/photo-1518644730709-0835105d9daa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWR1bHR8ZW58MHx8MHx8fDA%3D",
  },
  
];

const OurTeam = () => {
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-800 bg-blue-100/70">
      <div className="container flex flex-col items-center justify-center p-4 sm:mx-auto sm:p-10">
        <p className="p-2 text-lg font-extrabold text-yellow-600 tracking-wider text-center uppercase">
          TRUBLE team
        </p>
        <h1 className="text-3xl font-bold leading-none text-center text-blue-500/80 sm:text-5xl">
          The creative forces working quietly in the background
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-36 sm:mt-52 mt-48 sm:mx-32 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col justify-center border-2 w-full px-4 sm:px-20 text-center rounded-3xl transform transition-transform hover:scale-105 duration-500 hover:shadow-lg dark:bg-gray-800 dark:text-gray-100 bg-gradient-to-r from-blue-200 to-yellow-100/70 shadow-xl"
            >
              <img
                alt={`${member.name}`}
                className="self-center sm:w-52 w-32 sm:h-52 h-32 sm:-mt-28 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 border-4 border-x-yellow-700 border-y-blue-700"
                src={member.imgSrc}
              />

              <div className="flex-1 mt-4">
                <p className="sm:text-3xl text-2xl font-bold text-yellow-600 leading-snug">
                  {member.name}
                </p>
                <p className="mt-2 text-xl font-bold">{member.title}</p>
                <p className="mt-2 text-lg rounded-lg border-2 sm:py-2 py-1 mx-4 sm:mx-12 bg-blue-200/40">{member.position}</p>
                <p className="mt-2 sm:text-xl text-md">{member.description}</p>
              </div>
              <div className="flex text-2xl items-center justify-center p-3 space-x-3 border-t-2 border-t-gray-500 mt-4">
                <IoMail />
                <FaTwitter />
                <FaLinkedin />
                {member.position.toLowerCase().includes("developer") ? (
                  <FaGithub />
                ) : (
                  <FaInstagram />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
