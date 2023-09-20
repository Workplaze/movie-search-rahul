import { Link } from "react-router-dom";
import useTheme from "../Hooks/useTheme";
import styled from "styled-components";
const Tag = styled.h2`
  font-size: 1.2rem;
  @media (min-width: 700px) {
    font-size: 1.5rem;
  }
`
const Title = () => {
  const styles = useTheme();
  return (
    <div className="title">
      <Link to={"/"} style={styles}>
        <Tag> V-Enjoy </Tag>
      </Link>
    </div>
  );
};

export default Title;
