import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const StaggeredDropDown = ({ title, icon, menuItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative right-3 font-semibold"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-4 px-3  rounded-md text-gray-300 bg-transparent cursor-pointer text-sm ">
        <span>{icon}</span>
        <span className=" text-sm">{title}</span>
        <motion.span
          variants={iconVariants}
          animate={open ? "open" : "closed"}
        >
          <FiChevronDown />
        </motion.span>
      </div>

      {open && (
        <motion.ul
          initial="closed"
          animate="open"
          variants={wrapperVariants}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-0 left-[100%] mt-2"
          style={{ marginLeft: "-8px" }}
        >
          {menuItems.map((item, idx) => (
            <Option key={idx} Icon={item.icon} text={item.text} />
          ))}
        </motion.ul>
      )}
    </div>
  );
};

const Option = ({ text, Icon }) => {
  return (
    <motion.li
      variants={itemVariants}
      className="flex items-center gap-3 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-black text-slate-700 hover:text-gray-300 transition-colors cursor-pointer"
    >
      <motion.span>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};
