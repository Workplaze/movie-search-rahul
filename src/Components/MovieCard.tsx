import { useState } from "react";
import styled from "styled-components";
import useTheme from "../Hooks/useTheme";
import { FcRating } from "react-icons/fc";

const MovieWrapper = styled.section<{ $bgColor: string; $color: string }>`
  position: relative;
  z-index: 100;
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgColor};
  border: 2px solid ${(props) => props.$color};
  border-radius: 1rem;
  transition: all 400ms;
  cursor: pointer;
  &:hover,
  &:active {
    transform: scale(1.1);
  }
`;

const MovieImage = styled.div`
  height: 400px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
`;

const MovieText = styled.div<{ $bgColor: string; $color: string }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  border-radius: 0 0 1rem 1rem;
  color: ${(props) => props.$color};
  background-color: ${(props) => {
    return props.$bgColor === "#fff" ? "#ffffffe4" : "#000000c1";
  }};
  & h2,
  & p {
    margin: 0.5rem;
  }
  & h2 {
    font-weight: bold;
    font-size: 1rem;
    text-transform: capitalize;
  }
  & p {
    font-size: 0.8rem;
    line-height: 1.6;
  }
`;

const MovieRating = styled.div`
  font-variant: small-caps;
  padding: 0 0.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

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
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const mouseEnterHandler = () => {
    setIsVisible(true);
  };
  const mouseLeaveHandler = () => {
    setIsVisible(false);
  };
  return (
    <MovieWrapper
      $bgColor={theme.background}
      $color={theme.color}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <MovieImage>
        <img src={image.original} alt={name} />
      </MovieImage>
      {isVisible && (
        <MovieText $bgColor={theme.background} $color={theme.color}>
          <h2>{name}</h2>
          <div dangerouslySetInnerHTML={{ __html: summary }} />
          <MovieRating>
            <FcRating size='1.5rem' /> {rating.average} Ratings
          </MovieRating>
        </MovieText>
      )}
    </MovieWrapper>
  );
};

export default MovieCard;
