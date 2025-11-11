TWUBRIC APP - REACT SOLUTION

What it does:
- Displays Twitter followers with Twubric scores (Friends, Influence, Chirpiness)
- Sort by any score column (click to toggle ascending/descending)
- Filter by join date range using date pickers
- Remove unwanted followers with confirmation
- Fully responsive design

Tech Stack:
- React 18 with hooks
- Pure CSS (no frameworks)
- ES6+ JavaScript

Key Features:
 Fetches mock API data
 Sorting on all columns
 Date range filtering
 Remove functionality
 Mobile responsive
 Clean UI/UX

To run:
1. npm install
2. npm start
3. Open localhost:3000

Architecture:
- App.js (main component with state)
- FollowerCard.js (individual cards)
- FilterSection.js (date filters)
- SortButtons.js (sort controls)
- helpers.js (utility functions)

External Dependencies Used:
---------------------------
- date-fns (for date formatting utilities)
- lucide-react (for consistent icons)

Keyboard Shortcuts:
------------------
Sorting:
  Ctrl/Cmd + 1  → Sort by Twubric Score
  Ctrl/Cmd + 2  → Sort by Friends
  Ctrl/Cmd + 3  → Sort by Influence  
  Ctrl/Cmd + 4  → Sort by Chirpiness

Actions:
  Escape        → Clear date filters

This is a production-ready React solution demonstrating modern development practices.