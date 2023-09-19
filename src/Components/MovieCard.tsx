import { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import { lightTheme, darkTheme } from "../util/themeStyles";

const MovieCard = ({
  image,
  name,
  summary,
  rating,
}: {
  name: string;
  image: any;
  summary: string;
  rating: any;
}) => {
  const theme = useContext(ThemeContext);
  const styles = theme.mode === "light" ? lightTheme : darkTheme;

  return (
    <section className="movieCard" style={styles}>
      <div className="movieImage">
        <img src={image.original} alt={name} />
      </div>
      <div className="movieText">
        <h2>{name}</h2>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div>{rating.average}</div>
      </div>
    </section>
  );
};

export default MovieCard;
