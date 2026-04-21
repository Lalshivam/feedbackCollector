// App.jsx
// Main application component for Feedback Collector

import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import ModalComponent from './components/ModalComponent';
import { getFeedbacks, addFeedback, deleteFeedback } from './services/FeedbackService';
import './App.css';

function App() {
  const [feedbacks, setFeedbacks] = useState(() => getFeedbacks());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbackToDelete, setFeedbackToDelete] = useState(null);

  const handleAddFeedback = (feedback) => {
    const newFeedback = addFeedback(feedback);
    setFeedbacks([...feedbacks, newFeedback]);
  };

  const handleDeleteClick = (id) => {
    setFeedbackToDelete(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (feedbackToDelete) {
      deleteFeedback(feedbackToDelete);
      setFeedbacks(feedbacks.filter(fb => fb.id !== feedbackToDelete));
      setIsModalOpen(false);
      setFeedbackToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setFeedbackToDelete(null);
  };

  return (
    <div className="app-shell">
      <div className="bg-orb bg-orb-one" aria-hidden="true"></div>
      <div className="bg-orb bg-orb-two" aria-hidden="true"></div>

      <header className="app-header">
        <p className="eyebrow">Customer Insights</p>
        <h1>Feedback Collector</h1>
        <p className="subtitle">Capture, review, and manage user feedback in one streamlined workspace.</p>
      </header>

      <main className="app-grid">
        <section className="panel panel-form" aria-label="Submit feedback section">
          <FeedbackForm onAddFeedback={handleAddFeedback} />
        </section>

        <section className="panel panel-list" aria-label="Feedback list section">
          <FeedbackList feedbacks={feedbacks} onDelete={handleDeleteClick} />
        </section>
      </main>

      <footer className="app-footer">
        <span>Total entries</span>
        <strong>{feedbacks.length}</strong>
      </footer>

      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this feedback?"
      />
    </div>
  );
}

export default App;
