import React from 'react'
import './VideoPlayer.css'

function VideoPlayer({ title, description, videoUrl }) {
  return (
    <div className="video-player">
      <div className="video-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      
      <div className="video-container">
        <iframe
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="video-controls">
        <div className="video-info">
          <span className="duration">⏱️ 5:30</span>
          <span className="difficulty">⭐ Facile</span>
        </div>
        <div className="video-actions">
          <button className="control-btn">⏸️</button>
          <button className="control-btn">⏭️</button>
          <button className="control-btn">🔁</button>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
