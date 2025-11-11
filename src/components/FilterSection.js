import React from "react";

const FilterSection = ({ onFilter, dateFilter, onClear }) => {
  const handleStartDateChange = (e) => {
    onFilter(e.target.value, dateFilter.end);
  };

  const handleEndDateChange = (e) => {
    onFilter(dateFilter.start, e.target.value);
  };

  const hasActiveFilters = dateFilter.start || dateFilter.end;

  return (
    <div className="filter-section">
      <div className="filter-header">
        <span className="filter-title">Joined Date Range</span>
        {hasActiveFilters && (
          <button className="small-clear-btn" onClick={() => onFilter("", "")}>
            Clear
          </button>
        )}
      </div>

      <div className="date-inputs">
        <div className="input-group">
          <label htmlFor="start-date">From</label>
          <input
            id="start-date"
            type="date"
            value={dateFilter.start}
            onChange={handleStartDateChange}
            className="date-input"
          />
        </div>

        <div className="input-group">
          <label htmlFor="end-date">To</label>
          <input
            id="end-date"
            type="date"
            value={dateFilter.end}
            onChange={handleEndDateChange}
            className="date-input"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
