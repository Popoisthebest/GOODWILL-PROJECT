import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface ModelProps extends React.ComponentProps<"group"> {}

export default function Model(props: ModelProps) {
    const { nodes, materials } = useGLTF("public/models/moon/space.glb") as unknown as {
        nodes: Record<string, THREE.Mesh>;
        materials: Record<string, THREE.Material>;
    };

    // 재질이 MeshStandardMaterial라고 가정하고, 해당 재질의 속성 조정
    const blackMetal = materials["black metal"] as THREE.MeshStandardMaterial;
    if (blackMetal) {
        blackMetal.metalness = 1.0;       // 금속 느낌 극대화
        blackMetal.roughness = 0.1;       // 광택 효과 부여 (거칠기 낮춤)
        blackMetal.envMapIntensity = 1.0; // 환경맵 반사 강도
    }

    const rainbow = materials.rainbow as THREE.MeshStandardMaterial;
    if (rainbow) {
        rainbow.metalness = 0.5;
        rainbow.roughness = 0.2;
        rainbow.envMapIntensity = 1.0;
    }

    const jab = materials.jab as THREE.MeshStandardMaterial;
    if (jab) {
        jab.metalness = 0.7;
        jab.roughness = 0.3;
        jab.envMapIntensity = 1.0;
    }

    return (
        <group {...props} dispose={null}>
            <group rotation={[-0.001, -0.526, -0.648]} scale={5}>
                <mesh geometry={nodes.Icosphere_1.geometry} material={blackMetal} />
                <mesh geometry={nodes.Icosphere_2.geometry} material={rainbow} />
            </group>
            {[...Array(98)].map((_, i) => {
                const cubeKey = `Cube${i < 10 ? "00" + i : "0" + i}`;
                return (
                    <mesh
                        key={cubeKey}
                        geometry={nodes[cubeKey]?.geometry}
                        material={jab}
                        position={nodes[cubeKey]?.position?.toArray() || [0, 0, 0]}
                        rotation={nodes[cubeKey]?.rotation?.toArray() || [0, 0, 0]}
                        scale={nodes[cubeKey]?.scale?.toArray() || [1, 1, 1]}
                    />
                );
            })}
        </group>
    );
}

useGLTF.preload("public/models/moon/space.glb");
