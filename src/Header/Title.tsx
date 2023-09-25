import { Link } from "react-router-dom";
import useTheme from "../Hooks/useTheme";

import styled from "styled-components";
const Wrapper = styled.div`
  flex: 1;
  text-align: center;

  & h2 {
    font-size: 1.2rem;
    @media (min-width: 700px) {
      font-size: 1.5rem;
    }
  }
`;

const Title = () => {
  const styles = useTheme();
  return (
    <Wrapper>
      <Link to={"/"} style={styles}>
        <h2> V-Enjoy </h2>
      </Link>
    </Wrapper>
  );
};

export default Title;
