import React from "react";

const MovieCard: React.FC = () => {
  return (
    <div className="rounded-lg shadow p-4 bg-white">
      <h2 className="text-lg font-semibold">Movie Title</h2>
      <p className="text-gray-600">Movie description goes here...</p>
    </div>
  );
};

export default MovieCard;
