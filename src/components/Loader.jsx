import { Html, useProgress } from "@react-three/drei";

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

export default CanvasLoader;