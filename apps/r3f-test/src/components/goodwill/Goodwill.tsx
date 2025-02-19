import React from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

interface ModelProps extends React.ComponentProps<"group"> {}

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF('/models/goodwill/goodwill.gltf') as unknown as {
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.Material>;
  };

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Text001.geometry} material={materials.black} position={[-1.768, 1.051, 0.002]} rotation={[Math.PI / 2, 0.475, 0]} />
      <mesh geometry={nodes.Text002.geometry} material={materials.white} position={[-1.095, 1.278, 0.001]} rotation={[Math.PI / 2, 0.098, 0]} />
      <mesh geometry={nodes.Text003.geometry} material={materials['mild black']} position={[-0.385, 1.293, 0.001]} rotation={[Math.PI / 2, -0.273, 0]} />
      <mesh geometry={nodes.Text004.geometry} material={materials.white} position={[0.257, 1.094, 0]} rotation={[Math.PI / 2, -0.38, 0]} />
      <mesh geometry={nodes.Text005.geometry} material={materials.black} position={[-0.766, 0.409, 0.001]} rotation={[Math.PI / 2, -0.208, 0]} />
      <mesh geometry={nodes.Text006.geometry} material={materials.white} position={[-0.184, 0.248, 0.002]} rotation={[Math.PI / 2, -0.195, 0]} />
      <mesh geometry={nodes.Text007.geometry} material={materials['mild black']} position={[0.276, 0.196, 0.002]} rotation={[Math.PI / 2, 0.157, 0]} />
      <mesh geometry={nodes.Text008.geometry} material={materials.white} position={[0.81, 0.325, 0.001]} rotation={[Math.PI / 2, 0.41, 0]} />
    </group>
  )
}

useGLTF.preload('/models/goodwill/goodwill.gltf')
