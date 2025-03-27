"use client";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";

export default function Home() {
  return (
    <>
      <Canvas>
        <Scene />
      </Canvas>
    </>
  );
}
