import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import devAnimationData from "../../assets/animations/developer-animation.json";

const DevAnimationPreloader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress >= 100) {
        setLoading(false);
        return;
      }
      setProgress(prev => Math.min(prev + 1, 100));
    }, 40);
    return () => clearTimeout(timer);
  }, [progress, setLoading]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: devAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const quotes = [
    "Turning coffee into code...",
    "Crafting pixels into experiences...",
    "Converting imagination into reality...",
    "Transforming ideas into innovation..."
  ];
  
  const currentQuote = quotes[Math.floor(progress/25)];

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#0e1630] to-[#1a1a2e] flex flex-col justify-center items-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.8 }}>
      <div className="w-[280px] h-[280px] mb-8">
        <Lottie options={defaultOptions} />
      </div>

      <motion.div
        className="text-white text-xl font-medium tracking-wide mb-10 text-center px-4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}>
        <span className="text-[#915eff]">{currentQuote}</span>
      </motion.div>

      <div className="w-64 h-[3px] bg-gray-800/30 rounded-full">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#915eff] via-[#6b8aff] to-[#915eff]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-white/70 text-sm">{progress}%</p>
    </motion.div>
  );
};

export default DevAnimationPreloader;