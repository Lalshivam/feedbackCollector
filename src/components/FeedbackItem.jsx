// FeedbackItem.jsx
// Component for displaying a single feedback entry

import React from 'react';

const FeedbackItem = ({ feedback, onDelete }) => {
  const authorInitial = feedback.name?.trim()?.charAt(0)?.toUpperCase() || 'U';

  return (
    <article className="feedback-item">
      <div className="feedback-item-head">
        <div className="person">
          <span className="avatar" aria-hidden="true">{authorInitial}</span>
          <div className="identity">
            <h3>{feedback.name}</h3>
            <p>{feedback.email}</p>
          </div>
        </div>

        <button type="button" onClick={() => onDelete(feedback.id)} className="danger-button">
          Delete
        </button>
      </div>

      <p className="feedback-message">{feedback.message}</p>
      <p className="feedback-date">Submitted on {new Date(feedback.date).toLocaleString()}</p>
    </article>
  );
};

export default FeedbackItem;