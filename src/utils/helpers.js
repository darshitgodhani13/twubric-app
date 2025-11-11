// Simple date formatting - no external libraries
export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Get score level for styling
export const getScoreLevel = (score) => {
  if (score >= 2.5) return "high";
  if (score >= 1.5) return "average";
  return "low";
};

// Sort followers based on criteria
export const sortFollowers = (followers, sortBy, sortOrder) => {
  return [...followers].sort((a, b) => {
    let aVal, bVal;

    if (sortBy === "total") {
      aVal = a.twubric.total;
      bVal = b.twubric.total;
    } else {
      aVal = a.twubric[sortBy];
      bVal = b.twubric[sortBy];
    }

    if (sortOrder === "asc") {
      return aVal - bVal;
    }
    return bVal - aVal;
  });
};

// Filter followers by date range
export const filterByDateRange = (followers, startDate, endDate) => {
  if (!startDate && !endDate) return followers;

  return followers.filter((follower) => {
    const joinDate = new Date(follower.join_date * 1000);
    const startMatch = !startDate || joinDate >= new Date(startDate);
    const endMatch = !endDate || joinDate <= new Date(endDate);
    return startMatch && endMatch;
  });
};
