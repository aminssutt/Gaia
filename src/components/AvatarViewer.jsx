import React, { useRef, useEffect, Suspense } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import InteractivePoint from './InteractivePoint';
import * as THREE from 'three';

const pointsData = {
  male: [
    { id: 'head', position: [0, 1.7, 0], label: 'Head' },
    { id: 'neck', position: [0, 1.4, 0], label: 'Neck' },
    { id: 'shoulders', position: [0.3, 1.2, 0], label: 'Shoulders' },
    { id: 'arms', position: [-0.46, 0.9, 0], label: 'Arms' },
    { id: 'wrists', position: [0.76, 0.3, 0.1], label: 'Wrists' },
    { id: 'back', position: [0, 0.5, -0.15], label: 'Back' },
    { id: 'legs', position: [0.2, 0, 0], label: 'Legs' },
  ],
  female: [
    { id: 'head', position: [0, 1.2, -0.03], label: 'Head' },
    { id: 'neck', position: [0, 1.0, -0.04], label: 'Neck' },
    { id: 'shoulders', position: [0.24, 0.8, -0.1], label: 'Shoulders' },
    { id: 'arms', position: [-0.33, 0.6, -0.1], label: 'Arms' },
    { id: 'wrists', position: [0.56, 0.2, -0.01], label: 'Wrists' },
    { id: 'back', position: [0, 0.4, -0.15], label: 'Back' },
    { id: 'legs', position: [0.15, -0.1, 0], label: 'Legs' },
  ],
};

function Model({ gender, onShowConfirmation }) {
  const groupRef = useRef();
  const gltf = useLoader(GLTFLoader, gender === 'male' ? '/avatars/man_muscle_human_body.glb' : '/avatars/female_muscle_human_body.glb');

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} scale={1.5} position={[0, -1.3, 0]} />
      {pointsData[gender].map(point => (
        <InteractivePoint
          key={point.id}
          position={point.position}
          label={point.label}
          onShowConfirmation={onShowConfirmation}
        />
      ))}
    </group>
  );
}

function AvatarViewer({ gender, onNavigate, onShowConfirmation }) {
  return (
    <>
      <Suspense fallback={null}>
        <Model gender={gender} onShowConfirmation={onShowConfirmation} />
      </Suspense>
      <OrbitControls
        minDistance={1}
        maxDistance={8}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />
    </>
  );
}

export default AvatarViewer;