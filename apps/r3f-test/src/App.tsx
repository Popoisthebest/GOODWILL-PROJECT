import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./components/moon/Space.tsx";

export default function App() {
    return (
        <Canvas
            camera={{ position: [0, 2, 5], fov: 50 }}
            style={{ width: "100vw", height: "100vh" }}
            // 캔버스 생성 시 배경색을 검정색으로 설정
            onCreated={({ gl }) => gl.setClearColor("black")}
        >
            {/* 은은한 ambient light */}
            <ambientLight intensity={0.2} />
            {/* 방향성이 있는 빛으로 모델에 강한 하이라이트를 주고, 우주 느낌 연출 */}
            <directionalLight position={[10, 10, 10]} intensity={1.5} color="white" />
            {/* 추가적으로 포인트 라이트를 활용하여 부드러운 그림자 및 깊이감을 부여 */}
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="white" />

            <Model />
            <OrbitControls />
        </Canvas>
    );
}
