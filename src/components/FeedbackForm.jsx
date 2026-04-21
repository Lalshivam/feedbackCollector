// FeedbackForm.jsx
// Component for submitting new feedback

import React, { useState } from 'react';

const FeedbackForm = ({ onAddFeedback }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const isFormValid = name.trim() && email.trim() && message.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onAddFeedback({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2 className="form-title">Submit Feedback</h2>
      <p className="section-note">Share detailed feedback to help your team act faster.</p>

      <div className="field">
        <label htmlFor="feedback-name">Name</label>
        <input
          id="feedback-name"
          type="text"
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={80}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="feedback-email">Email</label>
        <input
          id="feedback-email"
          type="email"
          placeholder="jane@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="feedback-message">Message</label>
        <textarea
          id="feedback-message"
          placeholder="Tell us what worked well and what can be improved."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          maxLength={400}
        />
        <div className="message-meta">{message.length}/400</div>
      </div>

      <div className="button-row">
        <span className="section-note">All fields are required.</span>
        <button type="submit" className="primary-button" disabled={!isFormValid}>
          Add Feedback
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;