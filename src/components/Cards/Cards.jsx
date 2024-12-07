import React from "react";
import Food1 from "../../assets/chole.webp";
import Food2 from "../../assets/samosa.png";
import Food3 from "../../assets/pav.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const HotFoodData = [
  {
    id: 1,
    name: "Chole Bhature",
    img: Food1,
    price: "₹ 150",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Samosa",
    img: Food2,
    price: "₹ 50",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Pav Bhaji",
    img: Food3,
    price: "₹ 120",
    delay: 1.2,
  },
];

function Cards() {
  return (
    <div className="container py-12">
      {/* header section */}
      <motion.h3
        variants={SlideUp(0)}
        initial="hidden"
        animate="visible"
        className="text-2xl font-bold text-darkGreen uppercase py-8"
      >
        Hot Food
      </motion.h3>

      {/* grid section */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {HotFoodData.map((food) => {
          return (
            <motion.div
              variants={SlideUp(food.delay)}
              initial="hidden"
              whileInView="show"
              className="group bg-white/50 shadow-md p-3 flex items-center gap-3"
            >
              <img
                src={food.img}
                alt=""
                className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[5deg]"
              />
              <div>
                <h3 className="text-xl font-semibold">{food.name}</h3>
                <p className="text-xl text-yellow-500">{food.price}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
