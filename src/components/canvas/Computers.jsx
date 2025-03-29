import { Suspense, } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import CanvasLoader from '../Loader';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
extend({ OrbitControls });

const Model = () => {
  const computer = useGLTF('/desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive 
        object={computer.scene}
        scale={0.75}
        position={[0, -3, -1.5]}
        rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Need to add the fallback to the suspense as the canvas loader */}
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate = {true}
          autoRotateSpeed = {2}
        />
        <Model />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;