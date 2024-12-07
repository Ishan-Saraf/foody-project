import React from "react";
import Logo from "../../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion"; // Import only the necessary module

const NavMenu = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    delay: 0.1,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Menu",
    path: "/menu",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Delivery",
    path: "/delivery",
    delay: 0.4,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    delay: 0.5,
  },
];

// Function to generate animation variants with delay
const generateVariants = (delay) => ({
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.5 } },
});

function Navbar() {
  return (
    <nav>
      {/* Container */}
      <div className="container flex justify-between items-center font-leagueGothic">
        {/* Logo Section */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={Logo}
          alt="logo"
          className="w-36"
        />

        {/* Menu Section */}
        <div className="hidden md:block">
          <ul className="flex gap-6">
            {NavMenu.map((menu) => (
              <motion.li
                key={menu.id}
                variants={generateVariants(menu.delay)}
                initial="initial"
                animate="animate"
                className="nav-menu"
              >
                <a href={menu.path} className="inline-block px-2 py-2 text-2xl font-semibold">
                  {menu.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Button Section */}
        <motion.div
          variants={generateVariants(1)}
          initial="initial"
          animate="animate"
        >
          <button className="h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-dark">
            <IoCartOutline />
          </button>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
