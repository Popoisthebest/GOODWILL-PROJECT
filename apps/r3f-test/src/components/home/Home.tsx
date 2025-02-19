import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import { ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";

interface ModelProps extends React.ComponentProps<"group"> {}

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF("/models/home/home.gltf") as unknown as {
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.Material>;
  };

  const modelRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // 📌 마우스가 닿으면 모델이 부드럽게 이동
  const { position } = useSpring({
    position: hovered ? [Math.random() * 2 - 1, -1, Math.random() * 2 - 1] : [0, -1, 0],
    config: { mass: 1, tension: 100, friction: 10 },
  });

  // 📌 클릭하면 모델이 멀리 튕겨나가는 효과
  const { scale } = useSpring({
    scale: clicked ? 1.2 : 1,
    config: { mass: 1, tension: 200, friction: 15 },
  });

  return (
    <group {...props} dispose={null}>
      <group scale={2}>
        <mesh geometry={nodes?.Cube001_1?.geometry} material={materials?.base} />
        <mesh geometry={nodes?.Cube001_2?.geometry} material={materials?.base} />
      </group>
      <mesh geometry={nodes?.Cube001?.geometry} material={materials?.wood} position={[0, 0.2, 0]} scale={2} />
      <mesh geometry={nodes?.bed?.geometry} material={materials?.wood} position={[-1, 0.992, -0.6]}>
        <mesh geometry={nodes?.Cube003_1?.geometry} material={nodes?.Cube003_1?.material} />
        <mesh geometry={nodes?.Cube004?.geometry} material={materials?.wool} />
        <mesh geometry={nodes?.Cube005?.geometry} material={materials?.wool} position={[0.009, 0.505, -0.644]} />
      </mesh>
      <mesh geometry={nodes?.Cube002?.geometry} material={materials?.wood} position={[1.17, 1.445, -0.719]} />
      <mesh geometry={nodes?.Cube006?.geometry} material={materials?.wood} position={[1.17, 1.431, 1.394]} />
      <mesh geometry={nodes?.Icosphere?.geometry} material={materials?.['light wood']} position={[0.701, 0.939, 1.047]} scale={0.066} />
      <mesh geometry={nodes?.Cube007?.geometry} material={materials?.chair} position={[0.614, 0.835, -0.725]} />
      <mesh geometry={nodes?.Cube008?.geometry} material={materials?.wood} position={[0.366, 0.644, -0.445]} scale={0.612} />
      <mesh geometry={nodes?.Cube009?.geometry} material={materials?.plastic} position={[1.533, 1.728, -1.595]} scale={0.153} />
      <mesh geometry={nodes?.Circle?.geometry} material={materials?.pot} position={[1.19, 1.359, 1.297]}>
        <mesh geometry={nodes?.Plane?.geometry} material={materials?.['light plant']} position={[0.011, 0.304, -0.005]} rotation={[-3.107, 0.008, -2.433]} />
        <mesh geometry={nodes?.Plane001_1?.geometry} material={materials?.['light plant']} position={[0.011, 0.304, -0.005]} rotation={[-0.277, 1.055, 1.261]} scale={1.333} />
        <mesh geometry={nodes?.Plane002?.geometry} material={materials?.['light plant']} position={[0.011, 0.304, -0.005]} rotation={[0.571, -0.273, 0.956]} scale={1.597} />
        <mesh geometry={nodes?.Plane003?.geometry} material={materials?.['light plant']} position={[0.011, 0.304, -0.005]} rotation={[-2.702, -0.356, -2.108]} scale={1.218} />
        <mesh geometry={nodes?.Plane004?.geometry} material={materials?.['light plant']} position={[0.011, 0.304, -0.005]} rotation={[-2.904, 1.213, -2.907]} scale={1.258} />
      </mesh>
      <mesh geometry={nodes?.Cube010?.geometry} material={materials?.['light wood']} position={[1.521, 2.142, -0.719]} />
      <group position={[1.398, 2.66, -0.843]}>
        <mesh geometry={nodes?.Cube013_1?.geometry} material={materials?.book1} />
        <mesh geometry={nodes?.Cube013_2?.geometry} material={materials?.book2} />
        <mesh geometry={nodes?.Cube013_3?.geometry} material={materials?.book3} />
        <mesh geometry={nodes?.Cube013_4?.geometry} material={materials?.book4} />
        <mesh geometry={nodes?.Cube013_5?.geometry} material={materials?.book5} />
        <mesh geometry={nodes?.Cube013_6?.geometry} material={materials?.book6} />
        <mesh geometry={nodes?.Cube013_7?.geometry} material={materials?.white} />
      </group>
      <mesh geometry={nodes?.window?.geometry} material={materials?.wood} position={[0.327, 2.21, -1.901]} rotation={[Math.PI / 2, 0, 0]} scale={[0.571, 0.222, 0.571]} />
      <mesh geometry={nodes?.Cube013?.geometry} material={materials?.['light wood']} position={[0.327, 2.21, -1.901]} scale={0.612} />
      <mesh geometry={nodes?.Cube014?.geometry} material={materials?.['light wood']} position={[0.327, 2.21, -1.901]} rotation={[0, 0, -Math.PI / 2]} scale={0.612} />
      <mesh geometry={nodes?.Icosphere001?.geometry} material={materials?.light} position={[-1.851, 2.866, -1.629]} scale={0.103} />
      <mesh geometry={nodes?.Plane005?.geometry} material={materials?.background} scale={24.587} />
    </group>
  )
}

useGLTF.preload('/models/home/home.gltf')
