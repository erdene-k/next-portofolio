/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from "../assets/3d/isometric.glb";
import { a } from "@react-spring/three";

interface IsometricModelProps {
  isRotating: boolean;
  setRotating: React.Dispatch<React.SetStateAction<boolean>>;
}

const IsometricModel: React.FC<IsometricModelProps> = ({
  isRotating,
  setRotating,
}) => {
  const islandRef = useRef<any>();
  const { nodes, materials } = useGLTF(islandScene);
  const { gl, viewport } = useThree();
  const lastX = useRef<number>(0);
  const rotationSpeed = useRef<number>(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setRotating(false);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setRotating(true);

      islandRef.current.rotation.y += 0.008 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setRotating(true);

      islandRef.current.rotation.y -= 0.008 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setRotating(false);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
    }
    if (Math.abs(rotationSpeed.current) < 0.001) {
      rotationSpeed.current = 0;
    }
  });

  return (
    <a.group dispose={null} ref={islandRef}>
      <group position={[1.198, -0.124, -0.827]}>
        <mesh
          castShadow
          geometry={nodes.Cube003.geometry}
          material={materials.Material}
          material-toneMapped={false}
          material-emissiveIntensity={2}
        />
        <mesh
          castShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials.Yeet}
          material-toneMapped={false}
          material-emissiveIntensity={2}
        />
      </group>
    </a.group>
  );
};

export default IsometricModel;