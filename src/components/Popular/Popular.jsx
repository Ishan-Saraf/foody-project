import React from "react";
import { motion } from "framer-motion";
import Food1 from "../../assets/chole.webp";
import Food2 from "../../assets/samosa.png";
import Food3 from "../../assets/pav.png";

const popularDishes = [
  {
    id: 1,
    name: "Chole Bhature",
    img: Food1,
    description: "A spicy, tangy delight from North India.",
    price: "₹150",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Samosa",
    img: Food2,
    description: "Crispy and golden, filled with spicy potatoes.",
    price: "₹50",
    delay: 0.4,
  },
  {
    id: 3,
    name: "Pav Bhaji",
    img: Food3,
    description: "A buttery mix of spiced vegetables served with bread.",
    price: "₹120",
    delay: 0.6,
  },
];

// Animation Variants
const cardVariants = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5 },
  },
});

function Popular() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        {/* Header Section */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-leagueGothic text-center text-darkGreen uppercase font-semibold"
        >
          Popular Dishes
        </motion.h2>
        <p className="text-center text-gray-600 mt-2">
          Try our most loved dishes made with authentic flavors.
        </p>

        {/* Dishes Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {popularDishes.map((dish) => (
            <motion.div
              key={dish.id}
              variants={cardVariants(dish.delay)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Section */}
              <div className="p-4 space-y-3">
                <h3 className="text-xl font-bold text-darkGreen">
                  {dish.name}
                </h3>
                <p className="text-gray-600 text-sm">{dish.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-yellow-500 font-semibold">
                    {dish.price}
                  </span>
                  <button className="btn-primary px-4 py-1 text-sm">
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Popular;
