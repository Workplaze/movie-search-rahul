import styled from "styled-components";
export const LinkWithMode = styled.div`
  & a {
    color: ${(props) => props.color};
  }
`;