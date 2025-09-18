import React, { useRef, useEffect, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'

function AvatarViewer({ gender }) {
  const meshRef = useRef()
  const [model, setModel] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const loader = new GLTFLoader()
    
    const modelPath = gender === 'male' 
      ? '/avatars/man_muscle_human_body.glb' 
      : '/avatars/female_muscle_human_body.glb'
    
    loader.load(
      modelPath,
      (gltf) => {
        setModel(gltf.scene)
        setLoading(false)
      },
      (progress) => {
        console.log('Chargement:', (progress.loaded / progress.total * 100) + '%')
      },
      (error) => {
        console.error('Erreur lors du chargement du modèle:', error)
        setLoading(false)
      }
    )
  }, [gender])

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotation douce automatique
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  if (loading) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#4f46e5" wireframe />
      </mesh>
    )
  }

  if (!model) {
    return null
  }

  return (
    <>
      <primitive 
        ref={meshRef}
        object={model.clone()} 
        scale={[1.5, 1.5, 1.5]}
        position={[-0.3, -0.3, 0]}
      />
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={8}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
        panSpeed={0.8}
        rotateSpeed={0.5}
        zoomSpeed={0.6}
      />
    </>
  )
}

export default AvatarViewer
