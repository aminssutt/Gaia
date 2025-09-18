import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

function InteractivePoint({ position, label, onZoom, onNavigate }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clickedOnce, setClickedOnce] = useState(false);
  const clickTimeout = useRef(null);

  useFrame(({ camera }) => {
    if (meshRef.current) {
      meshRef.current.quaternion.copy(camera.quaternion);
    }
  });

  const handleClick = (e) => {
    e.stopPropagation();

    if (clickedOnce) {
      clearTimeout(clickTimeout.current);
      onNavigate();
      setClickedOnce(false);
    } else {
      onZoom();
      setClickedOnce(true);
      clickTimeout.current = setTimeout(() => {
        setClickedOnce(false);
      }, 1500); // Reset after 1.5 seconds if no second click
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={handleClick}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
    >
      <circleGeometry args={[0.05, 32]} />
      <meshBasicMaterial
        color={hovered ? '#ff6b6b' : '#4f46e5'}
        transparent
        opacity={hovered || clickedOnce ? 1 : 0.8}
        depthTest={false} // Make sure points are always visible
      />
    </mesh>
  );
}

export default InteractivePoint;
