import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import AvatarViewer from '../components/AvatarViewer'
import HealthData from '../components/HealthData'
import RecommendationPopup from '../components/RecommendationPopup'
import './HealthCheck.css'

function HealthCheck({ onNavigate }) {
  const [healthData, setHealthData] = useState({
    heartBeat: 72,
    tension: 120,
    temperature: 36.5,
    fatigue: 30,
    cough: 5,
    ambiance: 45
  })
  const [isTesting, setIsTesting] = useState(false)
  const [showRecommendation, setShowRecommendation] = useState(false)
  const [recommendation, setRecommendation] = useState('')

  const generateRandomData = () => {
    const newData = {
      heartBeat: Math.floor(Math.random() * 40) + 60, // 60-100
      tension: Math.floor(Math.random() * 40) + 100, // 100-140
      temperature: (Math.random() * 2 + 35.5).toFixed(1), // 35.5-37.5
      fatigue: Math.floor(Math.random() * 100), // 0-100
      cough: Math.floor(Math.random() * 100), // 0-100
      ambiance: Math.floor(Math.random() * 100) // 0-100
    }
    setHealthData(newData)
    checkRecommendations(newData)
  }

  const checkRecommendations = (data) => {
    const recommendations = []
    
    if (data.heartBeat > 90) {
      recommendations.push("Your heart rate is elevated. Do breathing exercises.")
    }
    if (data.tension > 130) {
      recommendations.push("Your blood pressure is high. Practice relaxing stretches.")
    }
    if (data.temperature > 37.2) {
      recommendations.push("High temperature detected. Rest and hydrate.")
    }
    if (data.fatigue > 70) {
      recommendations.push("High fatigue level. Do relaxation exercises.")
    }
    if (data.cough > 60) {
      recommendations.push("Persistent cough detected. Consult a doctor if necessary.")
    }
    if (data.ambiance > 80) {
      recommendations.push("High ambient noise. Use relaxation techniques.")
    }

    if (recommendations.length > 0) {
      setRecommendation(recommendations[0])
      setShowRecommendation(true)
    }
  }

  const startTest = () => {
    setIsTesting(true)
    let count = 0
    const interval = setInterval(() => {
      generateRandomData()
      count++
      if (count >= 10) {
        clearInterval(interval)
        setIsTesting(false)
      }
    }, 1000)
  }

  return (
    <div className="health-check fade-in">
      <div className="health-header">
        <button className="back-btn" onClick={() => onNavigate('main')}>
          ← Back
        </button>
        <h1>Health Check</h1>
      </div>

      <div className="health-content">
        <div className="health-data-left">
          <HealthData 
            title="Heart Beat" 
            value={healthData.heartBeat} 
            unit="bpm" 
            status={healthData.heartBeat > 90 ? 'warning' : 'normal'}
          />
          <HealthData 
            title="Blood Pressure" 
            value={healthData.tension} 
            unit="mmHg" 
            status={healthData.tension > 130 ? 'warning' : 'normal'}
          />
          <HealthData 
            title="Temperature" 
            value={healthData.temperature} 
            unit="°C" 
            status={healthData.temperature > 37.2 ? 'warning' : 'normal'}
          />
        </div>

        <div className="avatar-container">
          <Canvas
            camera={{ position: [0, 6, 6], fov: 55 }}
            style={{ width: '600px', height: '500px' }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.3} />
            <AvatarViewer gender="male" />
          </Canvas>
          <button 
            className={`test-data-btn ${isTesting ? 'testing' : ''}`}
            onClick={startTest}
            disabled={isTesting}
          >
            {isTesting ? 'Testing...' : 'Test Data'}
          </button>
        </div>

        <div className="health-data-right">
          <HealthData 
            title="Fatigue" 
            value={healthData.fatigue} 
            unit="%" 
            status={healthData.fatigue > 70 ? 'warning' : 'normal'}
          />
          <HealthData 
            title="Cough" 
            value={healthData.cough} 
            unit="%" 
            status={healthData.cough > 60 ? 'warning' : 'normal'}
          />
          <HealthData 
            title="Ambient Noise" 
            value={healthData.ambiance} 
            unit="dB" 
            status={healthData.ambiance > 80 ? 'warning' : 'normal'}
          />
        </div>
      </div>

      {showRecommendation && (
        <RecommendationPopup 
          message={recommendation}
          onClose={() => setShowRecommendation(false)}
          onGoToExercises={() => {
            setShowRecommendation(false)
            onNavigate('exercises')
          }}
        />
      )}
    </div>
  )
}

export default HealthCheck
