import React from "react";
import { partnerIcons } from "../hooks/partnerIcons";
import { motion } from "framer-motion";

const Partners = () => {
  const duplicatedCards = [...partnerIcons, ...partnerIcons];

  return (
    <div name="partners" className="w-full h-full text-white bg-[#191919] pt-12">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl font-bold inline border-b-4 border-[#0871f5]">Our Partners</p>
        </div>

        <div className="w-full gap-4 text-center py-8">
          <div className="relative h-full w-full overflow-hidden py-12 bg-[#191919] mx-auto">
            <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-[#191919] before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-[#191919] after:to-transparent after:filter after:blur-3"></div>

            <motion.div
              className="flex"
              animate={{
                x: ["0%", "-100%"],
                transition: {
                  ease: "linear",
                  duration: 15,
                  repeat: Infinity,
                },
              }}
            >
              {duplicatedCards.map((card, index) => (
                <div key={index} className="flex-shrink-0" style={{ width: `${100 / partnerIcons.length}%` }}>
                  <div className="flex items-center justify-center h-full">{card.title}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
