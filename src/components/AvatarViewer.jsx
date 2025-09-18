import React, { useRef, useEffect, Suspense } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import InteractivePoint from './InteractivePoint';
import * as THREE from 'three';

const pointsData = {
  male: [
    { id: 'neck', position: [0, 1.6, 0], label: 'Neck' },
    { id: 'back', position: [0, 1.2, -0.15], label: 'Back' },
    { id: 'shoulders', position: [0.3, 1.5, 0], label: 'Shoulders' },
    { id: 'legs', position: [0.2, 0.5, 0], label: 'Legs' },
    { id: 'wrists', position: [0.6, 0.8, 0.1], label: 'Wrists' },
    { id: 'arms', position: [0.5, 1.1, 0], label: 'Arms' },
  ],
  female: [
    { id: 'neck', position: [0, 1.5, 0], label: 'Neck' },
    { id: 'back', position: [0, 1.1, -0.15], label: 'Back' },
    { id: 'shoulders', position: [0.25, 1.4, 0], label: 'Shoulders' },
    { id: 'legs', position: [0.15, 0.5, 0], label: 'Legs' },
    { id: 'wrists', position: [0.5, 0.7, 0.1], label: 'Wrists' },
    { id: 'arms', position: [0.4, 1.0, 0], label: 'Arms' },
  ],
};

function Model({ gender, onNavigate }) {
  const groupRef = useRef();
  const gltf = useLoader(GLTFLoader, gender === 'male' ? '/avatars/man_muscle_human_body.glb' : '/avatars/female_muscle_human_body.glb');
  const { camera, controls } = useThree();
  const [target, setTarget] = React.useState(null);
  const initialCameraPos = React.useMemo(() => new THREE.Vector3(0, 1, 5), []);
  const initialTarget = React.useMemo(() => new THREE.Vector3(0, 1, 0), []);

  const handleZoom = (pointPosition) => {
    setTarget({
      camera: pointPosition.clone().add(new THREE.Vector3(0, 0, 1.5)),
      lookAt: pointPosition,
    });
  };
  
  const handleUnzoom = () => {
    setTarget(null);
  }

  useFrame(() => {
    if (controls) {
        if (target) {
            camera.position.lerp(target.camera, 0.05);
            controls.target.lerp(target.lookAt, 0.05);
        } else {
            camera.position.lerp(initialCameraPos, 0.05);
            controls.target.lerp(initialTarget, 0.05);
        }
    }
  });

  return (
    <group ref={groupRef} onPointerMiss={handleUnzoom}>
      <primitive object={gltf.scene} scale={1.5} position={[-0.3, -0.3, 0]} />
      {pointsData[gender].map(point => (
        <InteractivePoint
          key={point.id}
          position={point.position}
          label={point.label}
          onZoom={() => handleZoom(new THREE.Vector3(...point.position))}
          onNavigate={() => onNavigate('exerciseDetail', { exerciseId: point.id })}
        />
      ))}
    </group>
  );
}

function AvatarViewer({ gender, onNavigate }) {
  return (
    <>
      <Suspense fallback={null}>
        <Model gender={gender} onNavigate={onNavigate} />
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