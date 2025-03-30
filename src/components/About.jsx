import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <section className="">
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Hello! I'm Shivam Sharma, a passionate web developer and problem
            solver. Currently, I'm the Tech Team Lead at GDSC MVJCE, and I'm
            pursuing a B.E. degree in Computer Science and Engineering at MVJ
            College Of Engineering in Bengaluru, India, with an expected
            graduation year of 2025. I'm a software developer with experience in
            TypeScript, TailwindCSS, and JavaScript. I specialize in frameworks
            such as React, Node.js, Next.js, React-Three-Fiber, and Three.js. My
            knowledge extends to fundamental data structures and algorithms,
            making me well-versed in frontend web development.
          </motion.p>

          <a
            href="mailto:sandeep.sangeetham845@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary w-fit transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2">
            <img
              src="../assets/email.svg"
              alt="email"
              className="w-[30px] h-[30px]"
            />
            sandeep.sangeetham845@gmail.com
          </a>

          <div className="flex gap-5 items-center">
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
      <div></div>
    </section>
  );
};

export default About;
