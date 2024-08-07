import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'The Dark Knight', description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', posterURL: 'https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510027_640.png', rating: 8.8 },
    { title: 'The Lion King', description: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.', posterURL: 'https://cdn.pixabay.com/photo/2023/04/03/00/11/animal-7895662_640.jpg', rating: 8.6 },
    { title: 'Avengers: Endgame', description: 'The Avengers assemble once more to undo Thanos\' actions and restore order to the universe.', posterURL: 'https://cdn.pixabay.com/photo/2024/05/07/00/59/hulk-8744607_640.jpg', rating: 8.4 },
    { title: 'Godzilla vs. Kong', description: 'The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against one another.', posterURL: 'https://cdn.pixabay.com/photo/2024/05/06/11/44/monster-8743172_640.jpg', rating: 6.4 }
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
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies); // Update filtered movies to include the new movie
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
