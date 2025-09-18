import React, { useState } from 'react'
import VideoPlayer from '../components/VideoPlayer'
import HistoryPopup from '../components/HistoryPopup'
import './Exercises.css'

function Exercises({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('neck')
  const [showHistory, setShowHistory] = useState(false)

  const categories = [
    { id: 'neck', name: 'Neck', icon: '🦴' },
    { id: 'back', name: 'Back', icon: '🦴' },
    { id: 'legs', name: 'Legs', icon: '🦵' },
    { id: 'wrists', name: 'Wrists', icon: '✋' },
    { id: 'shoulders', name: 'Shoulders', icon: '💪' },
    { id: 'arms', name: 'Arms', icon: '💪' },
    { id: 'breathing', name: 'Breathing', icon: '🫁' }
  ]

  const videos = {
    neck: {
      title: 'Neck Exercises',
      description: 'Stretching and strengthening for the neck',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    },
    back: {
      title: 'Back Exercises',
      description: 'Back strengthening and stretching',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    legs: {
      title: 'Leg Exercises',
      description: 'Leg stretching and strengthening',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    wrists: {
      title: 'Wrist Exercises',
      description: 'Mobility and strengthening for wrists',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    shoulders: {
      title: 'Shoulder Exercises',
      description: 'Shoulder stretching and strengthening',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    arms: {
      title: 'Arm Exercises',
      description: 'Arm strengthening and stretching',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    breathing: {
      title: 'Breathing Exercises',
      description: 'Breathing techniques and relaxation',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  }

  return (
    <div className="exercises-page fade-in">
      <div className="exercises-header">
        <button className="back-btn" onClick={() => onNavigate('main')}>
          ← Back
        </button>
        <h1>Exercises & Stretching</h1>
      </div>

      <div className="exercises-content">
        <div className="categories-nav">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="video-section">
          <VideoPlayer 
            title={videos[selectedCategory].title}
            description={videos[selectedCategory].description}
            videoUrl={videos[selectedCategory].videoUrl}
          />
          
          <button 
            className="history-btn"
            onClick={() => setShowHistory(true)}
          >
            📊 Recommendation History
          </button>
        </div>
      </div>

      {showHistory && (
        <HistoryPopup 
          onClose={() => setShowHistory(false)}
        />
      )}
    </div>
  )
}

export default Exercises
