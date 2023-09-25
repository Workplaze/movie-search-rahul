import styled from "styled-components";

export const TopNavigation = styled.header<{
  $bgColor: string;
  $color: string;
}>`
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-bottom: 4px solid #a979ff;
  transition: all 400ms;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const LinkWithMode = styled.div`
  & a {
    color: ${(props) => props.color};
  }
`;

export const DoubleContainer = styled.div`
  margin: 1rem;
  max-width: 1080px;
  @media (min-width: 800px) {
    margin: 2rem auto;
  }
`;

export const TextWithIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
