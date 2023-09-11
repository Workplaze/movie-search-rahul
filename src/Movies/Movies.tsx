import { useEffect, useState } from "react";
import { FETCH_ALL_SHOWS } from '../config';

import MovieCard from "./MovieCard";
import MoviesTitle from "./MoviesTitle";

interface MovieObject {
  id: number;
  name: string;
  image: string;
  rating: string;
  summary: string;
}

const Movies = () => {

  const [moviesData, setMoviesData] = useState<MovieObject[]>([]);

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const res = await fetch(FETCH_ALL_SHOWS);
        if (res.ok) {
          const data = await res.json();
          setMoviesData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getMoviesData();
  }, []);
 

  const MoviesListUi = (
    <section className="moviesContainer">
      {moviesData.length !== 0 &&
        moviesData.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              name={movie.name}
              image={movie.image}
              rating={movie.rating}
              summary={movie.summary}
            />
          );
        })}
    </section>
  );

  const Loader = <h2>Please Wait a Moment!</h2>;

  return (
    <main>
      <MoviesTitle />
      {moviesData.length !== 0 ? MoviesListUi : Loader}
    </main>
  );
};

export default Movies;
