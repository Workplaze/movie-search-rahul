import styled from "styled-components";
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
  gap: 1rem;
`;
