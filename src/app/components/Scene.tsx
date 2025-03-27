"use client";
import {
  MeshWobbleMaterial,
  OrbitControls,
  useHelper,
} from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, DirectionalLight } from "three";
import React from "react";

const Scene = () => {
  const directionalLightRef = useRef<DirectionalLight>(null!);

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white");
  return (
    <>
      <directionalLight
        position={[0, 0, 2]}
        intensity={1.2}
        color={"#FFF"}
        ref={directionalLightRef}
      />
      <ambientLight intensity={0.5} />
      <mesh position={[0, 0, 0]}>
        <torusKnotGeometry args={[1, 0.1, 1000, 50]} />
        <MeshWobbleMaterial color={"#07e5ed"} />
      </mesh>
      <OrbitControls />
    </>
  );
};

export default Scene;
