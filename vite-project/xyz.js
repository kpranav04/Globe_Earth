import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../../assets/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/8k_earth_clouds.jpg";
import EarthSatMap from "../../assets/earth.png";
// import x from '../../'
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

  const places = [
    { name: 'Place 1', latitude: 35, longitude: 45 },
    { name: 'Place 2', latitude: -20, longitude: 10 },
    // Add more places with their coordinates
  ];

  return (
    <>
      <ambientLight intensity={1.6} />
      {/* <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1} /> */}
      {/* <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      /> */}
      <mesh
       ref={cloudsRef} 
      //  position={[0, 0, -3]}
       >
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
        // color="red"
          map={cloudsMap}
          opacity={0}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh 
      ref={earthRef} 
      // position={[0, 0, -3]}
      >
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