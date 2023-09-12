import useTheme from "../Hooks/useTheme";
import { FaRegSadCry } from "react-icons/fa";

import MovieCard from "./MovieCard";
import MoviesTitle from "./MoviesTitle";

interface MovieObject {
  id: number;
  name: string;
  image: string;
  rating: string;
  summary: string;
}

type Props = {
  movies: MovieObject[];
};

const Movies = (props: Props) => {
  const styles = useTheme();

  const MoviesListUi = (
    <section className="moviesContainer">
      {props.movies.length !== 0 &&
        props.movies.map((movie) => {
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

  const Loader = (
    <div className="wrapper">
      <h2>
        Sorry <FaRegSadCry /> No Movie is Available!
      </h2>
    </div>
  );

  return (
    <main style={styles}>
      <MoviesTitle numberOfMovies={props.movies.length} />
      {props.movies.length !== 0 ? MoviesListUi : Loader}
    </main>
  );
};

export default Movies;
