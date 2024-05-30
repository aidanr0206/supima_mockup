import React from "react";
import { content } from "../hooks/testimonialContent";
import { motion } from "framer-motion";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../slider-animations.css";
import "../styles.css";

const Testimonials = () => {
  return (
    <div name="partners" className="w-full h-screen text-white bg-[#0871f5]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl font-bold inline border-b-4 border-white">What our clients say</p>
        </div>

        <div className="py-8">
          <Slider className="slider-wrapper text-gray-700">
            {content.map((item, index) => (
              <div key={index} className="slider-content" style={{ background: `no-repeat center center` }}>
                <div className="inner">
                  <h1>{item.name}</h1>
                  <p>{item.comment}</p>
                  <button>{item.rating}</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
