import { Link } from "react-router-dom";
const Title = () => {
  return (
    <div className="title">
      <Link to={"/"}>
        <h1> YTS.In</h1>
      </Link>
    </div>
  );
};

export default Title;
