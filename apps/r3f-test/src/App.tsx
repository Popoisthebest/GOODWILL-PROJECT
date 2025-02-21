import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CardModel } from "./components/card/CardModel"; // CardModel.tsx 불러오기

export default function App() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }} style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <CardModel position={[0, -1, 0]} scale={[1, 1, 1]} />
      <OrbitControls />
    </Canvas>
  );
}
