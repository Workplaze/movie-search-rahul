import { FaRegSadCry } from "react-icons/fa";
import { MovieObject } from "../Common/types";
import MovieCard from "../Components/MovieCard";
import MoviesTitle from "./MoviesTitle";

type Props = {
  movies: MovieObject[];
};

const Movies = ({ movies }: Props) => {
  const MoviesListUi = (
    <section className="moviesContainer">
      {movies?.length !== 0 &&
        movies?.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              name={movie.name}
              image={movie.image}
              rating={movie.rating}
              summary={movie.summary?.slice(0, 100)?.concat("...")}
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
    <>
      <MoviesTitle numberOfMovies={movies?.length} />
      {movies?.length !== 0 ? MoviesListUi : Loader}
    </>
  );
};

export default Movies;
