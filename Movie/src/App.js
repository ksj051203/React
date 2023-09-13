import React, { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import MovieList from './components/MoviesList';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // 초기에는 오류가 없기에 null
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    // 이전에 받았을 에러를 초기화
    setError(null);
    try {
      // fetch API 사용
      const response = await fetch('https://swapi.dev/api/films/')
      if(!response.ok){
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch(error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  let content = <p>Found no Movies</p>

  if(movies.length > 0){
    content = <MovieList movies={movies} />;
  }
  if(error){
    content = <p>{error}</p>
  }
  if(isLoading){
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
