import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import './ExerciseDetail.css';

const exerciseData = {
  neck: {
    title: 'Neck Relief Stretches',
    videoUrl: 'https://www.youtube.com/embed/X3-gKPNyrTA?si=dbOm9CYstblhRulW',
    description: 'These gentle stretches are designed to relieve tension and improve flexibility in your neck. Perform them slowly and avoid any movements that cause pain.',
    instructions: [
      'Neck Tilt: Gently tilt your head towards your right shoulder, hold for 15-30 seconds. Repeat on the left side.',
      'Neck Turn: Slowly turn your head to the right, hold for 15-30 seconds. Repeat on the left side.',
      'Forward and Backward Tilt: Tilt your head down to your chest, then look up towards the ceiling. Hold each position for 15 seconds.',
      'Shoulder Rolls: Roll your shoulders backwards and forwards in a circular motion 5 times each way.'
    ]
  },
  back: {
    title: 'Back Strengthening Exercises',
    videoUrl: 'https://www.youtube.com/embed/2eA2Koq6pTI?si=3GfO9yaH9KxR861A',
    description: 'A strong back is crucial for good posture and preventing injuries. These exercises will help you build a resilient back.',
    instructions: [
      'Cat-Cow Stretch: Start on your hands and knees. Inhale as you drop your belly and look up (Cow). Exhale as you round your spine and tuck your chin (Cat). Repeat 10 times.',
      'Bird-Dog: From hands and knees, extend your right arm forward and your left leg back. Hold for a few seconds, then switch sides. Do 10 reps per side.',
      'Bridge: Lie on your back with knees bent. Lift your hips off the floor until your body forms a straight line from shoulders to knees. Hold for 20-30 seconds.',
      'Child\'s Pose: Kneel on the floor, sit back on your heels, and fold forward, resting your forehead on the floor. Hold for 30-60 seconds.'
    ]
  },
  legs: {
    title: 'Leg Strengthening Exercises',
    videoUrl: 'https://www.youtube.com/watch?v=2eA2Koq6pTI',
    description: 'Strong legs are essential for overall mobility and stability. These exercises will help you build leg strength.',
    instructions: [
      'Squats: Stand with feet shoulder-width apart. Lower your body as if sitting back into a chair, keeping your chest up. Hold for a moment, then return to standing. Repeat 10-15 times.',
      'Lunges: Step forward with one leg and lower your hips until both knees are bent at about a 90-degree angle. Push back to the starting position and switch legs. Do 10 reps per leg.'
    ]
  },
  // Add other categories here...
};

function ExerciseDetail({ onNavigate, exerciseId }) {
  const data = exerciseData[exerciseId] || { title: 'Not Found', description: 'Exercise not found.', instructions: [], videoUrl: '' };

  return (
    <div className="exercise-detail-page fade-in">
      <div className="exercise-detail-header">
        <button className="back-btn" onClick={() => onNavigate('exercises')}>
          ← Back to Exercises
        </button>
        <h1>{data.title}</h1>
      </div>
      <div className="exercise-detail-content">
        <div className="video-player-container">
          <VideoPlayer videoUrl={data.videoUrl} title={data.title} />
        </div>
        <div className="instructions-container">
          <h3>Instructions</h3>
          <p>{data.description}</p>
          <ul>
            {data.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetail;
