import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    // Sample movies
    { title: 'Pantheon', description: 'A mind-bending animation', posterURL: 'https://m.media-amazon.com/images/M/MV5BYWRiZGUyNWYtOGQ0Ny00YWY3LWIwN2MtYjhhMmExNDE3YzY4XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX380_CR0,4,380,562_.jpg', rating: 8.8 },
    { title: 'Intergalactic', description: 'Space exploration epic animation', posterURL: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Spiderman-Into-The-Spider-Verse-Intergalactic.jpg', rating: 8.6 }
  ]);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = (title, rating) => {
    setFilteredMovies(
      movies.filter(movie =>
        (title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true) &&
        (rating ? movie.rating >= parseFloat(rating) : true)
      )
    );
  };

  const addMovie = () => {
    const newMovie = {
      title: 'New Movie',
      description: 'A new movie description',
      posterURL: 'https://via.placeholder.com/150',
      rating: 7.5
    };
    setMovies([...movies, newMovie]);
    handleFilterChange('', ''); // Reset filters after adding a new movie
  };

  return (
    <div className="App">
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <button onClick={addMovie}>Add Movie</button>
    </div>
  );
};

export default App;
