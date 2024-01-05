import React, { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../../assets/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 10;
    cloudsRef.current.rotation.y = elapsedTime / 10;
  });

  const pointers = [
    { position: [35, 45], text: "Place 1", link: "https://google.com" },
    { position: [-20, 10], text: "Place 2", link: "https://link2.com" },
    // Add more pointers with their respective coordinates, text, and links
  ];

  const createPointer = ({ position, text, link }) => {
    const phi = THREE.MathUtils.degToRad(90 - position[0]);
    const theta = THREE.MathUtils.degToRad(position[1]);

    const pointerGeometry = new THREE.ConeGeometry(0.05, 0.3, 4); // Adjust pointer size and shape
    const pointerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Adjust pointer color
    const pointerMesh = new THREE.Mesh(pointerGeometry, pointerMaterial);
    // pointerMesh.style.cursor = "pointer";
    pointerMesh.position.setFromSphericalCoords(1, phi, theta);
    pointerMesh.rotation.x = Math.PI / 2; // Orient pointer upward

    pointerMesh.onClick = () => {
      console.log("HELLO");
      window.open(link, "_blank"); // Opens link in a new tab
    };

    return pointerMesh;
  };

  useEffect(() => {
    pointers.forEach(pointer => {
      const pointerMesh = createPointer(pointer);
      earthRef.current.add(pointerMesh);
    });
  }, [pointers]);

  return (
    <>
      <ambientLight intensity={4} />
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}
