import React from 'react'
import './MainPage.css'

function MainPage({ onNavigate }) {
  return (
    <div className="main-page fade-in">
      <div className="header">
        <h1 className="app-title">AUTO</h1>
        <p className="app-subtitle">Fitness & Health Companion</p>
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
        <h2>Accessories</h2>
        <div className="accessories-grid">
          <div className="accessory-card" onClick={() => onNavigate('accessories')}>
            <div className="accessory-icon">🛏️</div>
            <h4>Pillow Massage</h4>
            <p>Comfort & relaxation</p>
          </div>
          <div className="accessory-card" onClick={() => onNavigate('accessories')}>
            <div className="accessory-icon">🌸</div>
            <h4>Scent</h4>
            <p>Aromatherapy</p>
          </div>
          <div className="accessory-card" onClick={() => onNavigate('accessories')}>
            <div className="accessory-icon">💨</div>
            <h4>Fresh Air</h4>
            <p>Air purification</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
