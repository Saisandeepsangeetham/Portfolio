import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const tech = [
  technologies.languages,
  technologies.frameworks,
  technologies.libraries,
  technologies.databases,
  technologies.tools,
  technologies.environments
];

const techVariants = [
  "Languages",
  "Frameworks",
  "Libraries",
  "Databases",
  "Tools",
  "Environments",
];

const Skills = () => {
  const languageSections = tech.map((technology, index) => (
    <div className="w-full h-fit flex gap-2 md:flex-row flex-col" key={index}>
      <h3 className="md:hidden text-[#e5e6e9]">{techVariants[index]}</h3>
      <motion.div
        className="w-full flex flex-row flex-wrap gap-2"
        variants={fadeIn("right", "spring", 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {technology.map((tech, idx) => (
          <a
            href={tech.link}
            key={tech.name}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row"
          >
            <div className="w-[40px] h-[40px] relative flex items-center group cursor-pointer">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
              <div className="opacity-0 w-fit min-w-[80px] bg-[#9b4dee] text-[#e5e6e9] text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 -top-12 -left-1/3 pointer-events-none">
                {tech.name}
              </div>
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  ));

  const techNames = techVariants.map((techName, index) => (
    <h3 className="h-[50px] md:flex items-center hidden text-[#e5e6e9]" key={index}>
      {techName}
    </h3>
  ));

  return (
    <section className="w-full h-fit p-8 mt-20" id="skills">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mx-auto"
      >
        <p className={styles.sectionSubText}>What I have learnt so far</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 text-[#e5e6e9] text-[17px] bg-[#2e384d] md:w-fit md:min-w-[60%] w-full h-full leading-[30px] flex md:flex-row flex-col gap-4 p-8 md:px-16 mx-auto rounded-lg justify-between bg-opacity-90 shadow-sm shadow-[#804dee]"
      >
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full gap-5"
        >
          {techNames}
        </motion.div>
        <div className="w-[2px] h-[400px] bg-[#cbb8f5] rounded-lg md:flex hidden mx-8" />
        <div className="md:w-[80%] w-full pl-2 h-full flex flex-col gap-8">
          {languageSections}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
