import React, { useEffect, useRef } from "react";
import * as Matter from "matter-js";

const GravityMousePage: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const engine = Matter.Engine.create();
    const world = engine.world;
    const runner = Matter.Runner.create();

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "#f0f0f0",
      },
    });

    // 화면 바깥으로 나가지 않도록 제약 추가
    const boundaries = [
      Matter.Bodies.rectangle(window.innerWidth / 2, -25, window.innerWidth, 50, { isStatic: true }), // 상단
      Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 25, window.innerWidth, 50, { isStatic: true }), // 하단
      Matter.Bodies.rectangle(-25, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true }), // 왼쪽
      Matter.Bodies.rectangle(window.innerWidth + 25, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true }) // 오른쪽
    ];
    
    Matter.World.add(world, boundaries);

    // 도형들을 일정 간격으로 화면 중앙에서 떨어지게 설정 (더 물 같은 느낌 추가)
    const spawnY = 50;
    const spawnInterval = 0; // 밀리초 단위
    let shapeCount = 0;

    const spawnShape = () => {
      if (shapeCount >= 5000) return; // 최대 생성 개수 제한
      
      const x = 1000; // 좁은 범위에서 생성
      const shape = Matter.Bodies.circle(x, spawnY, 10, {
        restitution: 0.1, // 물 같은 탄성을 낮춤
        friction: 0.05,
        density: 0.01,
      });
      Matter.World.add(world, shape);
      shapeCount++;
      setTimeout(spawnShape, spawnInterval);
    };
    spawnShape();

    // 마우스에 보이지 않는 원을 추가하여 밀어내는 효과
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseRadius = 50; // 마우스의 영향 반경
    
    Matter.Events.on(engine, "beforeUpdate", () => {
      const mousePos = mouse.position;
      world.bodies.forEach((body) => {
        const dx = body.position.x - mousePos.x;
        const dy = body.position.y - mousePos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouseRadius) {
          const forceMagnitude = 0.02 * (mouseRadius - distance);
          Matter.Body.applyForce(body, body.position, {
            x: forceMagnitude * (dx / distance),
            y: forceMagnitude * (dy / distance),
          });
        }
      });
    });

    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    const resizeHandler = () => {
      render.options.width = window.innerWidth;
      render.options.height = window.innerHeight;
      Matter.Render.setPixelRatio(render, window.devicePixelRatio);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
      Matter.Runner.stop(runner);
      render.canvas.remove();
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return <div ref={sceneRef} className="w-full h-screen" />;
};

export default GravityMousePage;
