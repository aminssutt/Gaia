import React from 'react';
import './ConfirmationPopup.css';

function ConfirmationPopup({ bodyPart, onConfirm, onCancel }) {
  return (
    <div className="confirmation-overlay">
      <div className="confirmation-popup">
        <h3>Exercise Confirmation</h3>
        <p>You want to see special exercises about <strong>{bodyPart}</strong>?</p>
        <div className="popup-buttons">
          <button className="yes-btn" onClick={onConfirm}>
            Yes
          </button>
          <button className="no-btn" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPopup;