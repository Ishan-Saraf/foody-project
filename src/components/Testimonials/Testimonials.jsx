import React from "react";
import { motion } from "framer-motion";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "The food here is absolutely amazing! The flavors are authentic and the service is excellent.",
    avatar: "https://via.placeholder.com/150",
    role: "Food Blogger",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback:
      "Best dining experience ever! The ambience, the taste, and the hospitality were all top-notch.",
    avatar: "https://via.placeholder.com/150",
    role: "Chef",
  },
  {
    id: 3,
    name: "Alex Johnson",
    feedback:
      "If you're looking for mouthwatering dishes, this is the place to be. Highly recommended!",
    avatar: "https://via.placeholder.com/150",
    role: "Food Enthusiast",
  },
  {
    id: 4,
    name: "Emily Davis",
    feedback:
      "I love the variety and quality of food served here. It's my go-to place for comfort food.",
    avatar: "https://via.placeholder.com/150",
    role: "Food Critic",
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function TestimonialsCarousel() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-leagueGothic font-semibold text-center text-darkGreen uppercase"
        >
          What Our Customers Say
        </motion.h2>
        <p className="text-center text-gray-600 mt-2">
          Hear it from the people who love our food.
        </p>

        {/* Carousel Section */}
        <motion.div
          className="flex mt-12 cursor-grab"
          drag="x"
          dragConstraints={{ right: 0, left: -600 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="min-w-[300px] bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center mx-4"
            >
              {/* Avatar */}
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-md"
              />
              {/* Name and Role */}
              <h3 className="text-xl font-semibold text-darkGreen mt-4">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              {/* Feedback */}
              <p className="text-gray-600 italic mt-4">
                "{testimonial.feedback}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;
