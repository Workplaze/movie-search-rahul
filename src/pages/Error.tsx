import styled from "styled-components";
import { BiSolidErrorCircle } from "react-icons/bi";
import { TextWithIconWrapper } from "../Common/UI";

const ErrorContainer = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: red;
  color: #fff;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <TextWithIconWrapper>
        <h2> Oops! </h2>
        <BiSolidErrorCircle size={'2rem'} />
      </TextWithIconWrapper>
        <p>
        There are some Errors also , watching movies with us.
        </p>
    </ErrorContainer>
  );
};

export default ErrorPage;
