import React from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

interface ModelProps extends React.ComponentProps<'group'> {}

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF('/models/furry/scene.gltf') as unknown as {
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.Material>;
  };

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Metal} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.Head} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Body} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Cloth2_1} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.Cloth2_1} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.Cloth1} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.Hair} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.Hair} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.Head} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.Head} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.Cloth1} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.Cloth1} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.Cloth1} />
    </group>
  );
}

useGLTF.preload('/models/scene.gltf');
