import React from "react";
import { formatDate, getScoreLevel } from "../utils/helpers";

const FollowerCard = ({ follower, onRemove }) => {
  const { id, username, full_name, twubric, join_date } = follower;

  const handleRemove = () => {
    if (window.confirm(`Remove ${full_name} from your followers?`)) {
      onRemove(id);
    }
  };

  return (
    <div className="follower-card">
      <div className="card-header">
        <div className="user-info">
          <h3 className="user-name">{full_name}</h3>
          <span className="user-handle">@{username}</span>
        </div>
        <div className="total-score">{twubric.total}</div>
      </div>

      <div className="scores-section">
        <div className="score-row">
          <span className="score-label">Friends:</span>
          <span className={`score-value ${getScoreLevel(twubric.friends)}`}>
            {twubric.friends} ({getScoreLevel(twubric.friends)})
          </span>
        </div>

        <div className="score-row">
          <span className="score-label">Influence:</span>
          <span className={`score-value ${getScoreLevel(twubric.influence)}`}>
            {twubric.influence} ({getScoreLevel(twubric.influence)})
          </span>
        </div>

        <div className="score-row">
          <span className="score-label">Chirpiness:</span>
          <span className={`score-value ${getScoreLevel(twubric.chirpiness)}`}>
            {twubric.chirpiness} ({getScoreLevel(twubric.chirpiness)})
          </span>
        </div>
      </div>

      <div className="card-footer">
        <span className="join-date">Joined {formatDate(join_date)}</span>
        <button
          className="remove-btn"
          onClick={handleRemove}
          title={`Remove ${full_name}`}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FollowerCard;
