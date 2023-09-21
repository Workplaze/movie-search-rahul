// import useTheme from "../Hooks/useTheme";
import { FaRegSadCry } from "react-icons/fa";

import MovieCard from "../Components/MovieCard";
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

const Movies = ({ movies }: Props) => {
  // const styles = useTheme();

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
    <>
      <MoviesTitle numberOfMovies={movies?.length} />
      {movies?.length !== 0 ? MoviesListUi : Loader}
    </>
  );
};

export default Movies;
