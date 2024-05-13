import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import nativeBase from "../assets/nativeBase.png";
import reactLogo from "../assets/reactLogo.png";
import cSharp from "../assets/cSharp.png";
import tailwind from "../assets/tailwind.png";
import sql from "../assets/sql.png";
import { motion } from "framer-motion";

const Skills = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.08 * index,
      },
    }),
  };

  return (
    <div name="skills" className="w-full h-screen text-[#FFFFFF]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#6C5DD3]">Skills</p>
          <p className="py-4">&lt; Here are areas I have experience in /&gt;</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{scale: 1.08}}
            custom={0}
            className="shadow-md shadow-gray-950 rounded-md pt-4 duration-500"
          >
            <img src={reactLogo} alt="React Logo" className="w-20 mx-auto"></img>
            <p className="my-4">React.js</p>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{scale: 1.08}}
            custom={1}
            className="shadow-md shadow-gray-950 rounded-md pt-4 duration-500"
          >
            <img src={nativeBase} alt="NativeBase Logo" className="w-20 mx-auto"></img>
            <p className="my-4">NativeBase</p>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{scale: 1.08}}
            custom={2}
            className="shadow-md shadow-gray-950 rounded-md pt-4 duration-500"
          >
            <img src={tailwind} alt="Tailwind Logo" className="w-20 mx-auto"></img>
            <p className="my-4">Tailwind</p>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{scale: 1.08}}
            custom={3}
            className="shadow-md shadow-gray-950 rounded-md pt-4 duration-500"
          >
            <img src={cSharp} alt="c# Logo" className="w-20 mx-auto"></img>
            <p className="my-4">C#</p>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{scale: 1.08}}
            custom={4}
            className="shadow-md shadow-gray-950 rounded-md pt-4 duration-500"
          >
            <img src={javascript} alt="JS Logo" className="w-20 mx-auto"></img>
            <p className="my-4">JavaScript</p>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{scale: 1.08}}
            custom={5}
            className="shadow-md shadow-gray-950 rounded-md pt-4 duration-500"
          >
            <img src={html} alt="HTML Logo" className="w-20 mx-auto"></img>
            <p className="my-4">HTML</p>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{scale: 1.08}}
            custom={6}
            className="shadow-md shadow-gray-950 rounded-md pt-4 duration-500"
          >
            <img src={css} alt="css Logo" className="w-20 mx-auto"></img>
            <p className="my-4">css</p>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{scale: 1.08}}
            custom={7}
            className="shadow-md shadow-gray-950 rounded-md pt-4 duration-500"
          >
            <img src={sql} alt="SQL Logo" className="w-20 mx-auto"></img>
            <p className="my-4">SQL</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
