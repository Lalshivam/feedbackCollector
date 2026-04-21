// FeedbackService.js
// Service for managing feedback data using localStorage

const STORAGE_KEY = 'feedbacks';

export const getFeedbacks = () => {
  const feedbacks = localStorage.getItem(STORAGE_KEY);
  return feedbacks ? JSON.parse(feedbacks) : [];
};

export const addFeedback = (feedback) => {
  const feedbacks = getFeedbacks();
  const newFeedback = {
    id: Date.now().toString(),
    ...feedback,
    date: new Date().toISOString(),
  };
  feedbacks.push(newFeedback);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbacks));
  return newFeedback;
};

export const deleteFeedback = (id) => {
  const feedbacks = getFeedbacks();
  const updatedFeedbacks = feedbacks.filter(fb => fb.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFeedbacks));
};

export const filterFeedbacks = (feedbacks, keyword, dateFilter) => {
  let filtered = feedbacks;

  if (keyword) {
    filtered = filtered.filter(fb =>
      fb.name.toLowerCase().includes(keyword.toLowerCase()) ||
      fb.email.toLowerCase().includes(keyword.toLowerCase()) ||
      fb.message.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  if (dateFilter) {
    const filterDate = new Date(dateFilter).toDateString();
    filtered = filtered.filter(fb => new Date(fb.date).toDateString() === filterDate);
  }

  return filtered;
};