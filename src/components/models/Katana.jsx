"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Katana(props) {
  const modelRef = useRef();
  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });
  const { nodes, materials } = useGLTF("/models/katana-transformed.glb");
  return (
    <group
      {...props}
      dispose={null}
      scale={[0.1, 0.1, 0.1]}
      position={[1, -17, 0]}
      ref={modelRef}
    >
      <mesh
        name="Blade_low_Katana_0"
        castShadow
        receiveShadow
        geometry={nodes.Blade_low_Katana_0.geometry}
        material={materials.Katana}
        position={[1.816, 158.33, 0]}
        scale={14}
      />
    </group>
  );
}

useGLTF.preload("/models/katana-transformed.glb");
