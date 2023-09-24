import { useOutletContext } from "react-router-dom";


import Movies from "../Movies/Movies";
import useTheme from "../Hooks/useTheme";
import { V_INFO } from "../util/constant";

import styled from "styled-components";
const HeroWrapper = styled.section<{ $color: string; $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
  background-image: url(${require("../Assets/Banner.jpg")});
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroContent = styled.div`
  background-color: #000000bb;
  color: #fff;
  padding: 4rem;
  margin: 1rem;
  border-radius: 1rem;
  & h1 {
    font-size: 3rem;
    font-weight: bold;
    text-transform: capitalize;
  }
  & span {
    color: #a979ff;
  }
  & p {
    text-transform: capitalize;
    line-height: 1.6;
  }
`;

const Home = () => {
  const [filteredMovies] = useOutletContext<any>();
  const theme = useTheme();
  return (
    <>
      <HeroWrapper $bgColor={theme.background} $color={theme.color}>
        <HeroContent>
          <h1>
            V-<span>Enjoy </span>
          </h1>
          <p>{V_INFO}</p>
        </HeroContent>
      </HeroWrapper>
      <Movies movies={filteredMovies} />
    </>
  );
};

export default Home;
