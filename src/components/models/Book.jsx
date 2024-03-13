"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Book(props) {
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });
  const { nodes, materials } = useGLTF("/models/about-transformed.glb");
  return (
    <group
      {...props}
      dispose={null}
      scale={[8, 8, 8]}
      rotation={[0.2, -1, 0]}
      position={[0, 1, 0]}
      ref={modelRef}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["����������_����������_0"].geometry}
        material={materials.material}
        position={[-0.036, 0.005, -0.009]}
        rotation={[3.142, -1.565, 3.132]}
        scale={0.408}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["����������_����������������_0"].geometry}
        material={materials.material_1}
        position={[-0.036, 0.005, -0.009]}
        rotation={[3.142, -1.565, 3.132]}
        scale={0.408}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["����������_������������_����������_������_����������001_0"]
            .geometry
        }
        material={materials[".001"]}
        position={[-0.036, 0.005, -0.009]}
        rotation={[3.142, -1.565, 3.132]}
        scale={0.408}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["����������_����������001_0"].geometry}
        material={materials[".001_3"]}
        position={[-0.036, 0.005, -0.009]}
        rotation={[3.142, -1.565, 3.132]}
        scale={0.408}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["����������_��������������_0"].geometry}
        material={materials.material_4}
        position={[-0.036, 0.005, -0.009]}
        rotation={[3.142, -1.565, 3.132]}
        scale={0.408}
      />
    </group>
  );
}

useGLTF.preload("/models/about-transformed.glb");
