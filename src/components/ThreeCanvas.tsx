import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

// @ts-ignore
import Eth from "../../public/Eth";

const ThreeCanvas = () => {
  return (
    <Canvas className="canvas relative z-30">
      <ambientLight intensity={1} />
      <Environment preset="studio" />
      <OrbitControls
        autoRotate={true}
        enablePan={false}
        dampingFactor={0.03}
        minDistance={5}
        maxDistance={5}
      />
      <mesh scale={2}>
        <Eth />
      </mesh>
    </Canvas>
  );
};
export default ThreeCanvas;
