import React, { useState, useEffect } from "react";
import FollowerCard from "./components/FollowerCard";
import FilterSection from "./components/FilterSection";
import SortButtons from "./components/SortButtons";
import { sortFollowers, filterByDateRange } from "./utils/helpers";
import followersData from "./data/followers.json";
import "./styles/app.css";
import { useKeyboardShortcuts } from "./hooks/useKeyboardShortcuts";

function App() {
  const [followers, setFollowers] = useState([]);
  const [displayFollowers, setDisplayFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ by: "total", order: "desc" });
  const [dateFilter, setDateFilter] = useState({ start: "", end: "" });

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setFollowers(followersData);
      setDisplayFollowers(followersData);
      setLoading(false);
    };

    loadData();
  }, []);

  const handleSort = (sortBy) => {
    let newOrder = "desc";

    if (sortConfig.by === sortBy) {
      newOrder = sortConfig.order === "desc" ? "asc" : "desc";
    }

    const sorted = sortFollowers(displayFollowers, sortBy, newOrder);
    setDisplayFollowers(sorted);
    setSortConfig({ by: sortBy, order: newOrder });
  };

  const handleDateFilter = (start, end) => {
    setDateFilter({ start, end });

    let filtered = followers;
    if (start || end) {
      filtered = filterByDateRange(followers, start, end);
    }

    const sorted = sortFollowers(filtered, sortConfig.by, sortConfig.order);
    setDisplayFollowers(sorted);
  };

  const removeFollower = (id) => {
    const updatedFollowers = followers.filter((f) => f.id !== id);
    const updatedDisplay = displayFollowers.filter((f) => f.id !== id);

    setFollowers(updatedFollowers);
    setDisplayFollowers(updatedDisplay);
  };

  const clearFilters = () => {
    setDateFilter({ start: "", end: "" });
    setDisplayFollowers(sortFollowers(followers, "total", "desc"));
    setSortConfig({ by: "total", order: "desc" });
  };

  useKeyboardShortcuts({
    onSort: handleSort,
    onRemove: removeFollower,
    followers: displayFollowers,
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading your followers...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Twubric Manager</h1>
        <p>Manage your Twitter followers effectively</p>
      </header>

      <main className="main-content">
        <div className="controls-row">
          <SortButtons onSort={handleSort} sortConfig={sortConfig} />

          <FilterSection
            onFilter={handleDateFilter}
            dateFilter={dateFilter}
            onClear={clearFilters}
          />
        </div>

        <div className="followers-count">
          Showing {displayFollowers.length} of {followers.length} followers
          {(dateFilter.start || dateFilter.end) && (
            <button className="clear-filters-btn" onClick={clearFilters}>
              Clear filters
            </button>
          )}
        </div>

        {displayFollowers.length === 0 ? (
          <div className="empty-state">
            <p>No followers match your current filters.</p>
            <button className="primary-btn" onClick={clearFilters}>
              Show all followers
            </button>
          </div>
        ) : (
          <div className="followers-grid">
            {displayFollowers.map((follower) => (
              <FollowerCard
                key={follower.id}
                follower={follower}
                onRemove={removeFollower}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
