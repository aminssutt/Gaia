import React from 'react'
import './MainPage.css'

function MainPage({ onNavigate, onGenderChange, gender }) {
  return (
    <div className="main-page fade-in">
      <div className="header">
        <h1 className="app-title">GAÏA</h1>
        <p className="app-subtitle">Fitness & Health Companion</p>
      </div>

      <div className="gender-selection">
        <button 
          className={`gender-btn ${gender === 'male' ? 'active' : ''}`} 
          onClick={() => onGenderChange('male')}
        >
          Homme
        </button>
        <button 
          className={`gender-btn ${gender === 'female' ? 'active' : ''}`} 
          onClick={() => onGenderChange('female')}
        >
          Femme
        </button>
      </div>

      <div className="main-options">
        <div className="option-card" onClick={() => onNavigate('exercises')}>
          <div className="option-icon">💪</div>
          <h3>Exercises & Stretching</h3>
          <p>Workout routines & flexibility</p>
        </div>

        <div className="option-card" onClick={() => onNavigate('health')}>
          <div className="option-icon">❤️</div>
          <h3>Health Check</h3>
          <p>Monitor your vitals</p>
        </div>
      </div>
      
      <div className="accessories-section">
        <div className="option-card accessories-card" onClick={() => onNavigate('accessories')}>
            <div className="option-icon">✨</div>
            <h3>Accessories</h3>
            <p>Enhance your experience</p>
        </div>
      </div>
    </div>
  )
}

export default MainPage
