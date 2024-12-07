import React from "react";
import { motion } from "framer-motion";
import Dosa from "../../assets/Dosa.png";

// SlideUp Variants
const SlideUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5 },
  },
});

function About() {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          {/* Image Section */}
          <div className="relative flex justify-center items-center">
            {/* Yellow background */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute h-[250px] w-[250px] md:h-[400px] md:w-[400px] bg-lightYellow z-0 rounded-full md:-top-8 md:-left-8"
            ></motion.div>

            {/* Image */}
            <motion.img
              initial={{ opacity: 0, x: -100, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              src={Dosa}
              alt="Delicious dosa"
              className="relative z-10 w-[200px] md:w-full lg:max-w-[350px] img-shadow rounded-full"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-5 lg:max-w-[400px]">
            <motion.h1
              variants={SlideUp(1)}
              initial="hidden"
              whileInView="show"
              className="text-4xl md:text-6xl uppercase font-semibold font-leagueGothic text-center md:text-left"
            >
              The Best yummy food in town
            </motion.h1>
            <motion.p
              variants={SlideUp(1.6)}
              initial="hidden"
              whileInView="show"
              className="text-center md:text-left"
            >
              Our food is made with love and care, and we're sure you'll love it.
            </motion.p>
            <div className="text-center md:text-left">
              <button className="btn-primary">Order Now!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
