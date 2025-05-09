import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";

import { CanvasLoader } from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <mesh>
      <primitive
        object={earth.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const ErrorFallback = () => (
  <div className="flex justify-center items-center h-full">
    <p className="text-red-500">Error loading 3D model</p>
  </div>
);

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </ErrorBoundary>
    </Canvas>
  );
};

export default EarthCanvas;
