import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      {movie.posterURL ? (
        <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
      ) : (
        <div className="placeholder-poster">No Image Available</div>
      )}
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
