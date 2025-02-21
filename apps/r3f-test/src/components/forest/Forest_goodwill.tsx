import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface ModelProps extends React.ComponentProps<"group"> {}

export function ForestModel(props: ModelProps) {
  const { nodes, materials } = useGLTF("/forest_goodwill.gltf") as unknown as {
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.Material>;
  };

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes?.fog?.geometry} material={materials?.Material} position={[0.618, 11.473, -2.472]} />
      <mesh geometry={nodes?.terrain_main?.geometry} material={materials?.main_terrain} />
      <mesh geometry={nodes?.pine_cover_01?.geometry} material={materials?.pine_cover} position={[112.79, 0, 101.687]} />
      <mesh geometry={nodes?.pine_cover_02?.geometry} material={materials?.pine_cover} position={[113.19, 0, 101.687]} />
      <mesh geometry={nodes?.rock_moss_set_01_a_lod0?.geometry} material={materials?.rock_moss_set_01} position={[113.878, 0, 101.28]} />
      <mesh geometry={nodes?.rock_moss_set_01_b_lod0?.geometry} material={materials?.rock_moss_set_01} position={[114.232, 0, 101.28]} />
      <mesh geometry={nodes?.rock_moss_set_01_c_lod0?.geometry} material={materials?.rock_moss_set_01} position={[114.611, 0, 101.28]} />
      <mesh geometry={nodes?.rock_moss_set_01_d_lod0?.geometry} material={materials?.rock_moss_set_01} position={[113.891, 0, 101.748]} />
      <mesh geometry={nodes?.rock_moss_set_01_e_lod0?.geometry} material={materials?.rock_moss_set_01} position={[114.251, 0, 101.735]} />
      <mesh geometry={nodes?.rock_moss_set_01_f_lod0?.geometry} material={materials?.rock_moss_set_01} position={[114.586, 0, 101.748]} />
      <mesh geometry={nodes?.tree_trunk_lod0?.geometry} material={materials?.tree_trunk} position={[118.453, 0.007, 100.073]} />
      <mesh geometry={nodes?.tree_trunk_lod1?.geometry} material={materials?.tree_trunk} position={[118.453, 0.007, 100.073]} />
      <mesh geometry={nodes?.dead_tree_lod0?.geometry} material={materials?.dead_tree} position={[119.849, 0, 99.093]} />
      <mesh geometry={nodes?.dead_tree_lod1?.geometry} material={materials?.dead_tree} position={[119.849, 0, 99.093]} />
      <mesh geometry={nodes?.tree_roots_a_lod0?.geometry} material={materials?.tree_roots_01} position={[118.267, 0, 101.331]} />
      <mesh geometry={nodes?.tree_roots_b_lod0?.geometry} material={materials?.tree_roots_02} position={[118.193, 0, 102.592]} />
      <mesh geometry={nodes?.tree_roots_a_lod1?.geometry} material={materials?.tree_roots_01} position={[119.567, 0, 101.331]} />
      <mesh geometry={nodes?.tree_roots_b_lod1?.geometry} material={materials?.tree_roots_02} position={[119.493, 0, 102.592]} />
      <mesh geometry={nodes?.grass_medium_01_large_a_lod0?.geometry} material={materials?.grass_medium_01} position={[112.746, 0, 104.455]} />
      <mesh geometry={nodes?.grass_medium_01_large_c_lod0?.geometry} material={materials?.grass_medium_01} position={[113.546, 0, 104.455]} />
    </group>
  );
}

useGLTF.preload("/forest_goodwill.gltf");
