import { MdLocalMovies } from "react-icons/md";

const MoviesTitle = ({ numberOfMovies }: { numberOfMovies: number }) => {
  return (
    <section className="moviesTitle">
      <div>
        <h2>
          <MdLocalMovies /> Popular Movies : {numberOfMovies} Available
        </h2>
        <hr />
      </div>
    </section>
  );
};

export default MoviesTitle;
