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
import { FaWrench, FaPlus, FaNetworkWired, FaWifi, FaCloudDownloadAlt, FaCodeBranch, FaCartPlus, FaSolarPanel } from "react-icons/fa";

const Services = () => {
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
    <div name="services" className="w-full h-screen text-[#FFFFFF]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#fe8606]">Services</p>
          <p className="py-4">Some of the services we offer</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            custom={0}
            className="shadow-md shadow-gray-950 rounded-md pt-4 content-center duration-500"
          >
            <FaWrench size={50} color="#fe8606" className="w-20 mx-auto"></FaWrench>
            <p className="my-4">IT Repairs</p>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            custom={1}
            className="shadow-md shadow-gray-950 rounded-md pt-4 content-center duration-500"
          >
            <FaPlus size={50} color="#fe8606" className="w-20 mx-auto"></FaPlus>
            <p className="my-4">IT Support</p>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            custom={2}
            className="shadow-md shadow-gray-950 rounded-md pt-4 content-center duration-500"
          >
            <FaWifi size={50} color="#fe8606" className="w-20 mx-auto"></FaWifi>
            <p className="my-4">Internet Services</p>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            custom={3}
            className="shadow-md shadow-gray-950 rounded-md pt-4 content-center duration-500"
          >
            <FaNetworkWired size={50} color="#fe8606" className="w-20 mx-auto"></FaNetworkWired>
            <p className="my-4">Network Cabling</p>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            custom={4}
            className="shadow-md shadow-gray-950 rounded-md pt-4 content-center duration-500"
          >
            <FaCloudDownloadAlt size={50} color="#fe8606" className="w-20 mx-auto"></FaCloudDownloadAlt>
            <p className="my-4">Cloud Servies</p>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            custom={5}
            className="shadow-md shadow-gray-950 rounded-md pt-4 content-center duration-500"
          >
            <FaCodeBranch size={50} color="#fe8606" className="w-20 mx-auto"></FaCodeBranch>
            <p className="my-4">IT Solutions</p>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            custom={6}
            className="shadow-md shadow-gray-950 rounded-md pt-4 content-center duration-500"
          >
            <FaCartPlus size={50} color="#fe8606" className="w-20 mx-auto"></FaCartPlus>
            <p className="my-4">IT Products</p>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            custom={7}
            className="shadow-md shadow-gray-950 rounded-md pt-4 content-center duration-500"
          >
            <FaSolarPanel size={50} color="#fe8606" className="w-20 mx-auto"></FaSolarPanel>
            <p className="my-4">Power Solutions</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
