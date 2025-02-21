import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group } from "three";

interface CardModelProps extends React.ComponentProps<"group"> {}

export function CardModel(props: CardModelProps) {
  const groupRef = useRef<Group>(null);
  const { scene, animations } = useGLTF("/models/card/card.glb");
  const { actions } = useAnimations(animations, groupRef);

  // 애니메이션 실행
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => action?.play()); // 모든 애니메이션 실행
    }
  }, [actions]);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/card/card.glb"); // 미리 로드하여 성능 향상
