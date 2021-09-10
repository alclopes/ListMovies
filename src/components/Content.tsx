import { useEffect, useState } from 'react';

import { api } from '../services/api';

import { MovieCard } from "./MovieCard"
import { MovieProps, GenreResponseProps } from '../types'

import '../styles/content.scss';

interface Props {
  selectedGenreId: number
}

export function Content({selectedGenreId}: Props) {

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then(response => {
        setMovies(response.data);
    });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then(response => {
        setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);


  return (
    <>
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>
      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard 
              key={movie.imdbID} 
              title={movie.Title} 
              poster={movie.Poster} 
              runtime={movie.Runtime} 
              rating={movie.Ratings[0].Value}/>
          ))}
        </div>
      </main>
    </>
  );
}