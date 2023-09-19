import { useOutletContext } from "react-router-dom";
import Movies from "../Movies/Movies";

const Home = () => {
  const [filteredMovies] = useOutletContext<any>();
  return <Movies movies={filteredMovies} />;
};

export default Home;
