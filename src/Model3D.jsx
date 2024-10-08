import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import React, { useRef, useEffect } from "react";

const FetchModel = ({ path, fovPercentage, texturePath }) => {
  const { scene } = useGLTF(path);
  const modelRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (texturePath) {
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(
        texturePath,
        (texture) => {
          console.log("Texture loaded:", texture);
          modelRef.current.traverse((child) => {
            if (child.isMesh) {
              child.material.map = texture;
              child.material.needsUpdate = true;
            }
          });
        },
        undefined,
        (error) => {
          console.error("Error loading texture:", error);
        }
      );
    } else {
      console.error("Texture path is not provided.");
    }
  }, [texturePath]);

  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const size = new THREE.Vector3();
      box.getSize(size);

      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let distance = Math.abs(maxDim / (2 * Math.tan(fov / fovPercentage)));
      distance *= 1.2;

      camera.position.set(0, 0, distance);
      camera.updateProjectionMatrix();
    }
  }, [modelRef, camera]);

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={[0.5, 0.5, 0.5]}
      position={[0, 0, 0]}
    />
  );
};

const Model3D = ({ path, texturePath, fovPercentage }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 10]} intensity={1} />
      <directionalLight position={[-5, -5, 15]} intensity={1} />
      <FetchModel path={path} texturePath={texturePath} fovPercentage={fovPercentage} />
      <OrbitControls enableZoom={false} enableRotate={true} />
    </Canvas>
  );
};

export default Model3D;
