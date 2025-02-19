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

    // 바닥과 벽 추가
    const ground = Matter.Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight - 25,
      window.innerWidth,
      50,
      { isStatic: true }
    );
    const leftWall = Matter.Bodies.rectangle(0, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true });
    const rightWall = Matter.Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true });
    
    Matter.World.add(world, [ground, leftWall, rightWall]);

    // 도형들을 일정 간격으로 화면 중앙에서 떨어지게 설정
    const centerX = window.innerWidth / 2;
    const spawnY = 50;
    const spawnInterval = 10; // 밀리초 단위
    let shapeCount = 0;

    const spawnShape = () => {
      if (shapeCount >= 1000) return; // 최대 30개까지만 생성
      
      const x = centerX + (Math.random() - 0.5) * 100; // 약간의 랜덤 오프셋 추가
      const shape = Math.random() > 0.5
        ? Matter.Bodies.circle(x, spawnY, 10, { restitution: 0.7 })
        : Matter.Bodies.rectangle(x, spawnY, 20, 20, { restitution: 0.7 });
      Matter.World.add(world, shape);
      shapeCount++;
      setTimeout(spawnShape, spawnInterval);
    };
    spawnShape();

    // 마우스와 상호작용 추가 (밀어내는 힘 적용)
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Matter.World.add(world, mouseConstraint);

    Matter.Events.on(mouseConstraint, "mousemove", (event) => {
      world.bodies.forEach((body) => {
        if (Matter.Bounds.contains(body.bounds, event.mouse.position)) {
          Matter.Body.applyForce(
            body,
            body.position,
            {
              x: (body.position.x - event.mouse.position.x) * 0.006,
              y: (body.position.y - event.mouse.position.y) * 0.006,
            }
          );
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
