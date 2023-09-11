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

  const Loader = <h2>Sorry, No Movies is Available!</h2>;

  return (
    <main>
      <MoviesTitle />
      {props.movies.length !== 0 ? MoviesListUi : Loader}
    </main>
  );
};

export default Movies;
