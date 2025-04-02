import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education }) => {
  return (<VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={education.date}
    icon={
      <div className= "flex justify-center items-center w-full h-full overflow-hidden">
        <img
          src={education.icon}
          alt={education.title}
          className="w-100% h-100% object-contain rounded-full"
        />
      </div>
    }>
    <div>
      <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style= {{margin:0}}>{education.name}</p>
    </div>

  </VerticalTimelineElement>)
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="education">
        <h2 className="text-white font-black text-center md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] pl-8">Education</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
