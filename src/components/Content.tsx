import { MovieCard } from "./MovieCard";
import { MovieProps } from '../types';

interface Props {
  movies: MovieProps[];
  title: string;
}

export function Content(props: Props) {
  return (
    <>
      <header>
        <span className="category">
          Categoria:<span> {props.title}</span>
        </span>
      </header>
      <main>
        <div className="movies-list">
          {props.movies.map((movie) => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value}/>
          ))}
        </div>
      </main>
    </>
  );
}