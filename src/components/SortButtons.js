import React from "react";

const SortButtons = ({ onSort, sortConfig }) => {
  const sortOptions = [
    { key: "total", label: "Twubric Score" },
    { key: "friends", label: "Friends" },
    { key: "influence", label: "Influence" },
    { key: "chirpiness", label: "Chirpiness" },
  ];

  const getSortIndicator = (key) => {
    if (sortConfig.by !== key) return null;
    return sortConfig.order === "desc" ? " ↓" : " ↑";
  };

  return (
    <div className="sort-section">
      <span className="sort-label">Sort by:</span>
      <div className="sort-buttons">
        {sortOptions.map(({ key, label }) => (
          <button
            key={key}
            className={`sort-btn ${sortConfig.by === key ? "active" : ""}`}
            onClick={() => onSort(key)}
          >
            {label}
            {getSortIndicator(key)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortButtons;
