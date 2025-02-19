import React, { Suspense } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./components/car/Car";
import Pipe from "./components/pipe/Pipe.tsx";
import * as THREE from "three";

// 📌 Three.js 확장 등록 (필요할 경우)
extend({ OrbitControls });

export default function App() {
  return (
    <Canvas
      camera={{ position: [0, 1, 10], fov: 50 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* 빛 추가 */}
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={10} />

      {/* 3D 모델 추가 */}
      <Suspense fallback={<mesh />}>  {/* ✅ Three.js에서 인식할 수 있는 객체 사용 */}
        <Pipe />
      </Suspense>

      {/* 마우스로 조작 가능하게 설정 */}
      <OrbitControls />
    </Canvas>
  );
}
