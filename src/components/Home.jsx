import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text, count] = useTypewriter({
    words: [
      "IT Repairs",
      "Internet Services",
      "IT Support",
      "Cloud Services",
      "Network Cabling",
      "IT Solutions",
      "Power Solutions",
      "IT Products",
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div name="home" className="w-full h-screen bg-home bg-cover bg-center bg-no-repeat">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-2 flex flex-col justify-center h-full">
        <div className="flex flex-col lg:flex-row lg:gap-4 text-4xl sm:text-6xl font-bold">

          <h1 className="text-[#0871f5]">Full Range of ICT Services</h1>
        </div>

        <h2 className="text-4xl sm:text-6xl font-bold text-gray-700">
          We do <span>{text}</span>
          <Cursor cursorColor="#0871f5"></Cursor>
        </h2>
        <p className="text-gray-700 py-4 max-w-[700px]">
          Thriving in a global and technologically advanced economy is no small feat. However, with the support of one
          of Johannesburg's top IT companies, your business can gain a significant advantage. Downtime is more than just
          a technical issue-it's a business killer.
          <br></br>
          <br></br>
          With Supima Technologies, your team has the backing of a leading IT company that is ready to help keep systems
          up and running and have hardware and software operating optimally. We are the IT company that gets and keeps
          you connected. To learn more about our services and solutions, contact us today. We look forward to hearing
          from you.
        </p>
        <div>
          <Link
            className="text-gray-700 group border-2 border-gray-700 px-6 py-3 my-2 max-w-fit flex items-center hover:bg-[#0871f5] hover:border-[#0871f5] duration-300 hover:cursor-pointer"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact Us
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 "></HiArrowNarrowRight>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
