import React from "react";
import { animate, motion } from "framer-motion";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-full flex justify-center items-center p-4">
      {/* container */}
      <form
        method="POST"
        action="https://getform.io/f/eebf957f-9f0a-4ad6-8724-5e4c8e5fdb65"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-4 text-[#FFFFFF]">
          <p className="text-4xl font-bold inline border-b-4 border-[#6C5DD3]">Contact</p>
          <p className="py-4">&lt; Submit the form below or contact me through my socials /&gt;</p>
        </div>

        <div className="flex flex-col gap-4 text-[#FFFFFF] ">
          <motion.input
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            transition={{ type: "spring", bounce: 0.2, duration: 1.2, delay: 0.05 }}
            viewport={{ once: true }}
            className="bg-[#252731] placeholder-gray-500 focus:text-[#6C5DD3] p-2"
            type="text"
            placeholder="Name"
            name="name"
          ></motion.input>

          <motion.input
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            transition={{ type: "spring", bounce: 0.2, duration: 1.2, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#252731] placeholder-gray-500 focus:text-[#6C5DD3] p-2"
            type="email"
            placeholder="Email"
            name="email"
          ></motion.input>

          <motion.textarea
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            transition={{ type: "spring", bounce: 0.2, duration: 1.2, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-[#252731] placeholder-gray-500 focus:text-[#6C5DD3] p-2"
            placeholder="Message"
            name="message"
            rows={10}
          ></motion.textarea>
        </div>

        <button className="text-white border-2 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#6C5DD3] hover:[box-shadow:] hover:border-[#6C5DD3] duration-[200ms,600ms] transition-[color,box-shadow,border] px-4 py-3 my-8 mx-auto flex items-center">
          Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
