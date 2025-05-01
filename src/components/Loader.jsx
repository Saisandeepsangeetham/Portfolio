import { Html, useProgress } from "@react-three/drei";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html as="div" center className="flex justify-center items-center flex-col">
      <div className="relative w-20 h-20">
        <div className="absolute w-full h-full rounded-full border-4 border-gray-200/20" />
        <div className="absolute w-full h-full rounded-full border-4 border-transparent animate-spin border-t-white" />
      </div>
      <p className="mt-8 text-sm font-bold text-white tracking-wider">
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};


const Preloader = ({setLoading})=>{
  const [progress,setProgress] = useState(0);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(progress >= 100){
        setLoading(false);
        return;
      }
      setProgress(prev => Math.min(prev + 1,100));
    },50);
    return () => clearTimeout(timer);
  },[progress,setLoading]);
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-[#050816] flex flex-col justify-center items-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-64 h-2 bg-gray-700 rounded-full mb-6 overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-purple-500 to-indigo-600"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <p className="text-white text-xl font-bold">{progress}%</p>
      <p className="text-gray-400 mt-4">Loading My portfolio experience...</p>
    </motion.div>
  );
};

export { CanvasLoader, Preloader };