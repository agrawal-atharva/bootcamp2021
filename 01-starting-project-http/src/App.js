import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMoviesHandler = async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch('https://swapi.dev/api/films/');
			if (!response.ok) {
				throw new Error('Something went wrong!');
			}
			const data = response.json();

			const transformedMovies = data.results.map((movieData) => {
				return {
					id: movieData.episode_id,
					title: movieData.title,
					openeingText: movieData.opening_crawl,
					releaseDate: movieData.release_date,
				};
			});
			setMovies(transformedMovies);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	};

	let content = <p>No movies found.</p>;

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}
	if (isLoading) {
		content = <p>Loading...</p>;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}
export default App;
