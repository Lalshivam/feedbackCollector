// FeedbackList.jsx
// Component for displaying and filtering the list of feedbacks

import React, { useState } from 'react';
import FeedbackItem from './FeedbackItem';
import { filterFeedbacks } from '../services/FeedbackService';

const FeedbackList = ({ feedbacks, onDelete }) => {
  const [keyword, setKeyword] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const filteredFeedbacks = filterFeedbacks(feedbacks, keyword, dateFilter);
  const hasActiveFilters = Boolean(keyword || dateFilter);

  const clearFilters = () => {
    setKeyword('');
    setDateFilter('');
  };

  return (
    <div>
      <h2 className="list-title">Feedback List</h2>
      <p className="section-note">Search by keyword and narrow results by submission date.</p>

      <div className="filter-controls">
        <input
          type="text"
          placeholder="Search name, email, or message"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
        <button type="button" className="ghost-button" onClick={clearFilters} disabled={!hasActiveFilters}>
          Clear
        </button>
      </div>

      <p className="results-meta">
        Showing {filteredFeedbacks.length} of {feedbacks.length} entries
      </p>

      {filteredFeedbacks.length === 0 ? (
        <div className="empty-state">
          <p>No feedback found for the selected filters.</p>
        </div>
      ) : (
        <div className="feedback-items">
          {filteredFeedbacks.map((feedback) => (
            <FeedbackItem key={feedback.id} feedback={feedback} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackList;