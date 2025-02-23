import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

// 📌 3D 모델 파일 경로
const MODEL_PATH = "/models/moon/space.glb"; // 👉 여기에 glb 또는 glTF 파일 경로 지정

// 📌 모델 개수 및 자석 효과 설정
const MODEL_COUNT = 1;
const CENTER_FORCE = 0.001; // 📌 자석 효과 (복원력)
const DAMPING = 0.99; // 📌 점진적 감속 비율
const MIN_DISTANCE = 3; // 📌 모델 간 최소 거리
const ROTATION_SPEED = 1; // 📌 회전 속도 조절

interface ModelProps {
  position: THREE.Vector3;
  modelsRef: React.MutableRefObject<THREE.Group[]>;
}

function Model({ position, modelsRef }: ModelProps) {
  const modelRef = useRef<THREE.Group>(null);
  const velocity = useRef(new THREE.Vector3(
    (Math.random() - 0.5) * 0.1,  // 📌 X축 초기 속도 추가
    (Math.random() - 0.5) * 0.1,  // 📌 Y축 초기 속도 추가
    (Math.random() - 0.5) * 0.1   // 📌 Z축 초기 속도 추가
  ));

  // 📌 모델 로드 (한 번만 로드하고 재사용)
  const { scene } = useGLTF(MODEL_PATH);

  useFrame(({ mouse }) => {
    if (!modelRef.current) return;

    let modelPosition = modelRef.current.position.clone();
    let direction = new THREE.Vector3();

    // 📌 마우스와의 거리 계산 (Z축도 고려)
    const mouseWorldPos = new THREE.Vector3(mouse.x * 5, mouse.y * 5, (Math.random() - 0.5) * 5);
    const distanceToMouse = modelPosition.distanceTo(mouseWorldPos);

    if (distanceToMouse < 1) {
      direction.subVectors(modelPosition, mouseWorldPos).normalize().multiplyScalar(0.05);
      velocity.current.add(direction);
    }

    // 📌 모델 간 충돌 감지 (Z축 포함)
    modelsRef.current.forEach((otherModel) => {
      if (otherModel !== modelRef.current) {
        const otherPosition = otherModel.position.clone();
        const distance = modelPosition.distanceTo(otherPosition);

        if (distance < MIN_DISTANCE) {
          const pushDir = modelPosition.clone().sub(otherPosition).normalize().multiplyScalar(0.05);
          velocity.current.add(pushDir);
        }
      }
    });

    // 📌 자석 효과: 시간이 지나면 모델들이 (0,0,0)로 돌아옴 (Z축 포함)
    const centerDirection = new THREE.Vector3().sub(modelPosition).normalize().multiplyScalar(CENTER_FORCE);
    velocity.current.add(centerDirection);

    // 📌 속도 적용 및 점진적 감속
    modelRef.current.position.add(velocity.current);
    velocity.current.multiplyScalar(DAMPING);

    // 📌 이동 속도에 비례하여 회전 추가 (Z축 포함)
    const rotationChange = new THREE.Euler(
      velocity.current.y * ROTATION_SPEED,
      velocity.current.x * ROTATION_SPEED,
      velocity.current.z * ROTATION_SPEED
    );
    modelRef.current.rotation.x += rotationChange.x;
    modelRef.current.rotation.y += rotationChange.y;
    modelRef.current.rotation.z += rotationChange.z;
  });

  // 📌 모델을 관리하는 배열에 추가
  if (modelRef.current && !modelsRef.current.includes(modelRef.current)) {
    modelsRef.current.push(modelRef.current);
  }

  return (
    <group ref={modelRef} position={position} scale={[0.5, 0.5, 0.5]}>
      <primitive object={scene.clone()} />
    </group>
  );
}

// 📌 모델이 기존 모델과 겹치는지 확인하는 함수 (Z축 포함)
function isOverlapping(position: THREE.Vector3, positions: THREE.Vector3[]) {
  return positions.some((existingPos) => existingPos.distanceTo(position) < MIN_DISTANCE);
}

// 📌 여러 개의 모델을 생성하는 컴포넌트
export default function ModelSimulation() {
  const modelsRef = useRef<THREE.Group[]>([]);
  const [positions, setPositions] = useState<THREE.Vector3[]>([]);

  useEffect(() => {
    const newPositions: THREE.Vector3[] = [];

    for (let i = 0; i < MODEL_COUNT; i++) {
      let newPosition;

      // 📌 새로운 위치가 기존 위치와 겹치지 않을 때까지 무한 반복
      while (true) {
        newPosition = new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10  // 📌 Z축도 랜덤 배치
        );

        if (!isOverlapping(newPosition, newPositions)) {
          break; // 💡 겹치지 않는 위치를 찾으면 루프 종료
        }
      }

      newPositions.push(newPosition);
    }

    setPositions(newPositions);
  }, []); // ✅ 한 번만 실행되도록 빈 `[]` 배열 설정

  return (
    <>
      {positions.map((pos, idx) => (
        <Model key={idx} position={pos} modelsRef={modelsRef} />
      ))}
    </>
  );
}
