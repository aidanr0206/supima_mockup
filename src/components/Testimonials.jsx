import React from "react";
import { content } from "../hooks/testimonialContent";
import { motion } from "framer-motion";
import { Rating } from "react-simple-star-rating";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../slider-animations.css";
import "../styles.css";

const Testimonials = () => {
  return (
    <div name="partners" className="w-full h-screen text-white bg-[#0871f5]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <p className=" text-4xl font-bold inline border-b-4 border-white">What our clients say</p>
        </motion.div>

        <motion.div
          className="py-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <Slider className="slider-wrapper text-gray-700" autoplay={1500}>
            {content.map((item, index) => (
              <div key={index} className="slider-content" style={{ background: `no-repeat center center` }}>
                <div className="inner">
                  <h1>{item.name}</h1>
                  <p>{item.comment}</p>
                  <p>
                    <Rating
                      initialValue={item.rating}
                      fillColor="#fe8606"
                      readonly={true}
                      SVGstyle={{ display: "inline" }}
                    />
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
