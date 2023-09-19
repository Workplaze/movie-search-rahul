import { Link } from "react-router-dom";
import useTheme from "../Hooks/useTheme";

const Title = () => {
  const styles = useTheme();
  return (
    <div className="title">
      <Link to={"/"} style={styles}>
        <h1> YTS.In</h1>
      </Link>
    </div>
  );
};

export default Title;
