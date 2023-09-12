import { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import { lightTheme, darkTheme } from "../util/themeStyles";

const MovieCard = (props: {
  name: string;
  image: any;
  summary: string;
  rating: any;
}) => {

  const theme = useContext(ThemeContext);
  const styles = theme.mode === 'light' ? lightTheme : darkTheme;

  return (
    <section className="movieCard" style={styles}>
      <div className="movieImage">
        <img src={props.image.original} alt={props.name} />
      </div>
      <div className="movieText">
        <h2>{props.name}</h2>
        <div dangerouslySetInnerHTML={{__html: props.summary}} />
        <div>{props.rating.average}</div>
      </div>
    </section>
  );
};

export default MovieCard;
