import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { styles } from "../styles";
import { socials, services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { IoMdMail } from "react-icons/io";
import TicofabCanvas from "../components/canvas/Tico";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt classNam="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[240px] w-[240px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = ({ isMobile }) => {
  return (
    <section
      className="md:container md:mx-auto md:px-6 lg:px-12 xl:px-24 md:pt-4 lg:pt-6"
      id="about">
      <div className="md:flex md:flex-row md:item-center md:justify-center md:gap-10 lg:gap-14">
        <div className="md:flex-1 md:max-w-2xl lg:max-w-3xl md:pt-12">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
          </motion.div>
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] leading-[30px] pr-8 pl-8 md:pr-8">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]">
              Hello! I am Saisandeep Sangeetham, a tech enthusiast and problem
              solver currently pursuing a Bachelor of Engineering in Computer
              Science at SSN College of Engineering, Chennai, set to graduate in
              2026. I love exploring AI and machine learning, and I am skilled
              in Python, C++, and web development tools like React.js and
              Node.js, basic knowledge with Three.js and React-three-fiber I
              enjoy creating smart systems using frameworks such as Flutter and
              Dart. I thrive in team settings, balancing logic with creativity
              to tackle real-world problems. Always eager to learn and make a
              difference through technology!
            </motion.p>

            <a
              href="mailto:sandeep.sangeetham845@gmail.com"
              target="_blank"
              rel="noreferrer"
              className=" mt-4 text-[14px] hover:text-primary w-fit transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2">
              <IoMdMail className="h-[25px] w-[25px]" />
              sandeep.sangeetham845@gmail.com
            </a>

            <div className="flex gap-5 items-center mt-6">
              {socials.map((social) => (
                <a
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  key={social.id}
                  className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer">
                  <img
                    src={social.icon}
                    alt={social.id}
                    className="w-full h-full object-contain"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        {!isMobile && (
          <div className="hidden md:flex md:items-center md:justify-center md:flex-shrink-0 h-[600px] md:w-[400px] lg:w-[500px] xl:w-[600px] md:sticky md:top-[30px]">
            <TicofabCanvas />
          </div>
        )}
      </div>
      <div className="mt-8 flex flex-wrap gap-10 items-center justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default About;
