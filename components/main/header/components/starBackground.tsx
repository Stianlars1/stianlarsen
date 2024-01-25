"use client";

import { useIsDarkmodeActive } from "@/lib/useIsDarkmodeActive";
import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { PerspectiveCamera } from "three";
import "./starBackground.css";
extend({ PerspectiveCamera });

// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  console.log("StarBackground");
  const ref: any = useRef();
  const { isDarkmodeActive } = useIsDarkmodeActive();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={isDarkmodeActive ? "#fff" : "#000"}
          size={0.0022}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};
const StarsCanvas = () => {
  console.log("StarsCanvas");
  // Define the ref with the correct type
  const cameraRef = useRef<PerspectiveCamera>(null);

  const handleScroll = () => {
    const scrollY = parseFloat(`-${window.scrollY}`);
    // Adjust this to control how quickly the camera moves towards the sphere
    const scrollFactor = 500;

    // Start at 10 and move towards 1 as the user scrolls down
    const newZ = Math.max(1, 1 - scrollY / scrollFactor);
    if (cameraRef.current) {
      cameraRef.current.position.z = newZ;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-auto fixed inset-0 z-[-1] pointer-events-none ">
      <Canvas>
        <perspectiveCamera ref={cameraRef} position={[0, 0, 1]}>
          <Suspense fallback={null}>
            <StarBackground />
          </Suspense>
        </perspectiveCamera>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
