import React from 'react';
import './ConfirmationPopup.css';

function ConfirmationPopup({ bodyPart, onConfirm, onCancel }) {
  const isPillow = bodyPart === 'pillow';
  const isScent = bodyPart === 'scent';
  const title = isPillow ? 'Pillow Preview' : isScent ? 'Scent Diffuser Preview' : 'Exercise Confirmation';
  const message = isPillow
    ? 'Do you want to preview the 3D pillow?'
    : isScent
    ? 'Do you want to preview the 3D scent diffuser?'
    : 'You want to see special exercises about ';
  return (
    <div className="confirmation-overlay">
      <div className="confirmation-popup">
        <h3>{title}</h3>
        <p>
          {message}
          {!isPillow && !isScent && <><strong>{bodyPart}</strong>?</>}
        </p>
        <div className="popup-buttons">
          <button className="yes-btn" onClick={onConfirm}>Yes</button>
          <button className="no-btn" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPopup;