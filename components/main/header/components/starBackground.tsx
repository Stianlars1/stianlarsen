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
  const ref: any = useRef();
  const { isDarkmodeActive } = useIsDarkmodeActive();
  const [delta, setDelta] = useState(0);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
  );

  const scrollPos = props && props.scrollPosition;

  useFrame((state, delta) => {
    const pos1 =
      scrollPos > 2.5
        ? !isDarkmodeActive
          ? 75
          : 200
        : scrollPos > 2
          ? !isDarkmodeActive
            ? 50
            : 100
          : 10;
    const pos2 =
      scrollPos > 2.5
        ? !isDarkmodeActive
          ? 75
          : 250
        : scrollPos > 2
          ? !isDarkmodeActive
            ? 50
            : 150
          : 15;
    setDelta(delta);
    ref.current.rotation.x -= delta / pos1;
    ref.current.rotation.y -= delta / pos2;
  });

  const pointOpacity = scrollPos > 3 ? 0.45 : 1;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          opacity={pointOpacity}
          transparent
          color={
            isDarkmodeActive ? "#fff" : scrollPos > 2.5 ? "#424242" : "#000"
          }
          size={
            scrollPos > 2.5
              ? !isDarkmodeActive
                ? 0.005
                : 0.0011
              : scrollPos > 2
                ? !isDarkmodeActive
                  ? 0.008
                  : 0.0022
                : !isDarkmodeActive
                  ? 0.01
                  : 0.0055
          }
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};
const StarsCanvas = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(1);
  // Define the ref with the correct type
  const cameraRef = useRef<PerspectiveCamera>(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Adjust this to control how quickly the camera moves towards the sphere
    const scrollFactor = 500;

    // Start at 10 and move towards 1 as the user scrolls down
    const newZ = Math.max(1, 1 + scrollY / scrollFactor);
    if (cameraRef.current && newZ <= 3) {
      setScrollPosition(newZ);
      cameraRef.current.position.z = newZ;
    }
  };

  setTimeout(() => {
    setShowCanvas(true);
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-auto fixed inset-0 z-[-1] pointer-events-none canvas ${
        showCanvas ? "showCanvas" : ""
      }`}
    >
      <Canvas>
        <perspectiveCamera ref={cameraRef} position={[0, 0, 1]}>
          <Suspense fallback={null}>
            {showCanvas && <StarBackground scrollPosition={scrollPosition} />}
          </Suspense>
        </perspectiveCamera>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
