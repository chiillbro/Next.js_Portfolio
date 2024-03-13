"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Goku(props) {
  const modelRef = useRef();
  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y =
      -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
  });
  const { nodes, materials } = useGLTF("/models/scene-transformed.glb");
  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[0, -1.5, 0]}
      scale={[6, 6, 6]}
      rotation={[0.3, 3.5, 0]}
    >
      <mesh
        name="Object_2"
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.019, 0, -0.013]}
        rotation={[-Math.PI / 2, 0, 2.999]}
      />
    </group>
  );
}

useGLTF.preload("/models/scene-transformed.glb");
