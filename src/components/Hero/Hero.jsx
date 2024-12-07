import React from "react";
import Leaf from "../../assets/leaf.png";
import Dosa from "../../assets/Dosa.png";

import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export const SlideUp = (delay) => {
  return {
    initial: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

function Hero() {
  return (
    <main>
      <div className="container min-h-[600px] flex justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
          {/* text content here */}
          <div className="space-y-2 mt-14 text-center md:text-left md:mt-0">
            <motion.h1
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="show"
              className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline text-transparent"
            >
              Yummy
              <img
                src={Leaf}
                alt=""
                className="absolute w-[50px] top-0 right-0"
              />
            </motion.h1>
            <motion.h1
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="show"
              className="text-5xl lg:text-7xl xl:text-8xl font-bold uppercase"
            >
              Breakfast
            </motion.h1>
            <motion.p
              variants={SlideUp(1.5)}
              initial="hidden"
              whileInView="show"
              className="text-sm"
            >
              Welcome to Yummy Food, your go-to destination for delicious and
              healthy food. Our menu features
            </motion.p>
            <motion.button
              variants={SlideUp(2)}
              initial="hidden"
              whileInView="show"
              className="btn-primary items-center gap-4 inline-block !mt-10"
            >
              <IoCartOutline className="inline mr-2" />
              Order Now!
            </motion.button>
          </div>
          {/* image content here */}
          <motion.img
            initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
            whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
            src={Dosa}
            alt="Food"
            className="w-[450px] img-shadow rounded-full"
          />
        </div>
      </div>

      {/* yellow background */}
      <motion.div
        initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
        whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[2500px] h-[2500px] rounded-3xl bg-lightYellow absolute top-[30%] left-[70%] z-0"
      ></motion.div>
    </main>
  );
}

export default Hero;
