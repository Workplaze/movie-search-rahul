import { MdLocalMovies } from "react-icons/md";
import styled from "styled-components";
import useTheme from "../Hooks/useTheme";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 700px) {
    font-size: 1rem;
    gap: 0.5rem;
  }
`;

const Hr = styled.hr<{ $color: string }>`
  border: 2px solid ${(props) => props.$color};
  border-radius: 1rem;
`;

const MoviesTitle = ({ numberOfMovies }: { numberOfMovies: number }) => {
  const theme = useTheme();
  return (
    <section className="moviesTitle">
      <Wrapper>
        <MdLocalMovies /> Latest Movies : {numberOfMovies} Available
      </Wrapper>
      <Hr $color={theme.color} />
    </section>
  );
};

export default MoviesTitle;
