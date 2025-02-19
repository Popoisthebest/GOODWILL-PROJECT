import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ModelProps extends React.ComponentProps<"group"> {}

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF("/models/car/scene.gltf") as unknown as {
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.Material>;
  };

  const modelRef = useRef<THREE.Group>(null);
  const [position, setPosition] = useState<THREE.Vector3>(new THREE.Vector3(0, -0.01, 0));

  // 📌 마우스를 올릴 때마다 모델을 밀어내는 함수
  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();

    // 새로운 랜덤 위치로 이동
    const newPosition = position.clone().add(new THREE.Vector3(Math.random() * 0.5 - 0.25, 0, Math.random() * 0.5 - 0.25));
    setPosition(newPosition);
  };

  // 📌 useFrame을 사용하여 모델 위치 업데이트
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.position.lerp(position, 0.1); // 부드럽게 이동
    }
  });


  return (
    <group
      ref={modelRef}
      {...props}
      dispose={null}
      onPointerOver={handlePointerOver} // 마우스를 올리면 밀려남
    >
      <group
        position={[-0.015, -0.009, 0.063]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.578}
      >
        <group position={[0, -0.003, 0.007]}>
          <mesh
            geometry={nodes.windshield_0.geometry}
            material={materials.window}
          />
          <mesh
            geometry={nodes.windshield_1.geometry}
            material={materials.plastic}
          />
        </group>
        <group position={[0, 0, 0.029]}>
          <mesh
            geometry={nodes.Cylinder000_0.geometry}
            material={materials.silver}
          />
          <mesh
            geometry={nodes.Cylinder000_1.geometry}
            material={materials.plastic}
          />
          <mesh
            geometry={nodes.Cylinder000_2.geometry}
            material={materials.rubber}
          />
          <mesh
            geometry={nodes.Cylinder000_3.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group position={[0, 0, 0.029]}>
          <mesh
            geometry={nodes.Cylinder001_0.geometry}
            material={materials.silver}
          />
          <mesh
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.plastic}
          />
          <mesh
            geometry={nodes.Cylinder001_2.geometry}
            material={materials.rubber}
          />
          <mesh
            geometry={nodes.Cylinder001_3.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <mesh
          geometry={nodes.window_rear_0.geometry}
          material={materials.window}
        />
        <mesh
          geometry={nodes.Plane002_0.geometry}
          material={materials.paint}
          position={[-1.053, 3.51, -0.126]}
          rotation={[-1.439, -0.62, 0.775]}
          scale={0.024}
        />
        <mesh
          geometry={nodes.Plane003_0.geometry}
          material={materials.paint}
          position={[0.436, 3.723, -0.117]}
          rotation={[-1.483, 0.105, 0.803]}
          scale={0.024}
        />
        <mesh
          geometry={nodes.Plane004_0.geometry}
          material={materials.paint}
          position={[-0.488, 3.684, -0.328]}
          rotation={[-1.415, -0.045, 0.802]}
          scale={0.059}
        />
        <mesh
          geometry={nodes.boot_0.geometry}
          material={materials.full_black}
        />
        <mesh
          geometry={nodes.underbody_0.geometry}
          material={materials.full_black}
        />
        <mesh
          geometry={nodes.Plane_0.geometry}
          material={materials.Material}
          position={[0, 0, -1.054]}
          scale={[6.953, 9.785, 7.496]}
        />
        <mesh
          geometry={nodes.Cube001_0.geometry}
          material={materials.plastic}
          position={[0.036, -1.56, 0.333]}
          rotation={[0.709, -0.071, -0.245]}
          scale={[0.014, 0.014, 0.012]}
        />
        <mesh
          geometry={nodes.bumper_front004_0.geometry}
          material={materials.silver}
        />
        <mesh
          geometry={nodes.bumper_front004_1.geometry}
          material={materials.lights}
        />
        <mesh
          geometry={nodes.bumper_front004_2.geometry}
          material={materials.plastic}
        />
        <mesh
          geometry={nodes.bumper_front007_0.geometry}
          material={materials.glass}
          rotation={[-0.006, 0, 0]}
          scale={1.036}
        />
        <mesh
          geometry={nodes.bumper_front009_0.geometry}
          material={materials.tex_shiny}
        />
        <mesh
          geometry={nodes.bumper_front001_0.geometry}
          material={materials.plastic}
        />
        <mesh
          geometry={nodes.bumper_front001_1.geometry}
          material={materials.silver}
        />
        <mesh
          geometry={nodes.bumper_front001_2.geometry}
          material={materials.lights}
        />
        <mesh
          geometry={nodes.bumper_front003_0.geometry}
          material={materials.plastic}
        />
        <mesh
          geometry={nodes.bumper_front003_1.geometry}
          material={materials.glass}
        />
        <mesh geometry={nodes.boot001_0.geometry} material={materials.paint} />
        <mesh geometry={nodes.boot002_0.geometry} material={materials.paint} />
        <mesh
          geometry={nodes.Plane001_0.geometry}
          material={materials.tex_shiny}
          position={[0.005, 3.581, 0.107]}
        />
        <mesh
          geometry={nodes.boot003_0.geometry}
          material={materials.tex_shiny}
          position={[0, 0.003, 0]}
        />
        <mesh geometry={nodes.boot004_0.geometry} material={materials.window} />
        <mesh geometry={nodes.boot005_0.geometry} material={materials.paint} />
        <mesh
          geometry={nodes.boot006_0.geometry}
          material={materials.full_black}
        />
        <mesh
          geometry={nodes.window_rear001_0.geometry}
          material={materials.full_black}
        />
        <mesh geometry={nodes.boot007_0.geometry} material={materials.logo} />
        <mesh
          geometry={nodes.Plane005_0.geometry}
          material={materials.license}
          position={[0, 3.704, -0.292]}
          rotation={[0.114, 0, 0]}
          scale={[0.393, 0.393, 0.356]}
        />
        <mesh
          geometry={nodes.Plane006_0.geometry}
          material={materials.license}
          position={[0, -3.75, -0.432]}
          rotation={[0.082, 0, Math.PI]}
          scale={[0.395, 0.395, 0.357]}
        />
        <mesh geometry={nodes.boot008_0.geometry} material={materials.paint} />
        <mesh geometry={nodes.boot009_0.geometry} material={materials.silver} />
        <mesh
          geometry={nodes.boot010_0.geometry}
          material={materials.plastic}
        />
        <mesh geometry={nodes.boot011_0.geometry} material={materials.coat} />
        <mesh geometry={nodes.boot011_0_1.geometry} material={materials.coat} />
        <mesh
          geometry={nodes.Cube002_0.geometry}
          material={materials.full_black}
          scale={[0.332, 0.318, 0.318]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/car/scene.gltf");
