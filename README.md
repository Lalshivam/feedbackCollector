# Feedback Collector

A React application for collecting and managing user feedback. Built with Vite and React.

## Features

- Submit feedback with name, email, and message
- View list of all feedback entries
- Filter feedback by keyword (searches name, email, message)
- Filter feedback by date
- Delete feedback with confirmation modal

## Project Structure

```
src/
- components/
  - FeedbackForm.jsx      # Form for submitting new feedback
  - FeedbackList.jsx      # List component with filtering
  - FeedbackItem.jsx      # Individual feedback display
  - ModalComponent.jsx    # Reusable modal for confirmations
- services/
  - FeedbackService.js    # Service for localStorage operations
- utils/                  # Utility functions (if needed)
- assets/                 # Static assets
- App.jsx                 # Main application component
- main.jsx                # Application entry point
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
