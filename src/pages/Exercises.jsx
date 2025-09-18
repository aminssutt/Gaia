import React from 'react';
import './Exercises.css';

function Exercises({ onNavigate }) {
  const categories = [
    { id: 'neck', name: 'Neck', icon: '🦴', description: 'Stretches and exercises for neck pain and stiffness.' },
    { id: 'back', name: 'Back', icon: '🦾', description: 'Strengthen your back and improve your posture.' },
    { id: 'legs', name: 'Legs', icon: '🦵', description: 'Workouts for stronger and more flexible legs.' },
    { id: 'wrists', name: 'Wrists', icon: '✋', description: 'Improve mobility and prevent wrist injuries.' },
    { id: 'shoulders', name: 'Shoulders', icon: '💪', description: 'Exercises for shoulder mobility and strength.' },
    { id: 'arms', name: 'Arms', icon: '💪', description: 'Tone and strengthen your arms.' },
    { id: 'breathing', name: 'Breathing', icon: '🫁', description: 'Techniques for relaxation and better breathing.' }
  ];

  const handleCategoryClick = (categoryId) => {
    onNavigate('exerciseDetail', { exerciseId: categoryId });
  };

  return (
    <div className="exercises-page fade-in">
      <div className="exercises-header">
        <button className="back-btn" onClick={() => onNavigate('main')}>
          ← Back
        </button>
        <h1>Exercises & Stretching</h1>
      </div>

      <div className="exercises-content">
        <div className="exercise-grid">
          {categories.map(category => (
            <div
              key={category.id}
              className="exercise-card"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="exercise-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Exercises;