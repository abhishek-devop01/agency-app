import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import SeviceCard from "./SeviceCard";
import { motion } from "motion/react";

const Services = () => {
  const ServicesData = [
    {
      title: "Advertising",
      description:
        "we turn bold ideas to powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content marketing",
      description: "we help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description:
        "we turn bold ideas to powerful digital solutions that connect, engage...",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "we turn bold ideas to powerful digital solutions that connect, engage...",
      icon: assets.social_icon,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
        alt=""
      />

      <Title
        title="How can we help"
        desc="From strategy to execution, we craft digital solution that move your business forward"
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {ServicesData.map((service, index) => (
          <SeviceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
