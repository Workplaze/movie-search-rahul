import styled from "styled-components";

const FormWrapper = styled.section`
  margin: 1rem 0;
  padding: 1rem;
`;

const InputControlWrapper = styled.section`
  padding: 0.5rem;
  margin: 1rem 0;
  border-bottom: 2px solid #a979ff;
  border-radius: 5px;
  background: #9028df12;
`;
const InputWrapper = styled.div`
  margin: 0.5rem 0;
`;

export const InputGroupTitle = styled.div`
  font-weight: bold;
`;

const Label = styled.label`
  display: block;
  margin: 0 0 0.5rem;
  text-transform: capitalize;
  color: #28292f;
`;

const InlineLabel = styled(Label)`
  display: inline-block;
  font-variant: all-small-caps;
  font-weight: 400;
`;

const Input = styled.input`
  border: none;
  background-color: #e0e3f9;
  color: black;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;
export const Select = styled.select`
  display: inline-block;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 2px solid #9028df;
`;
export {
  FormWrapper,
  InputWrapper,
  Label,
  InlineLabel,
  Input,
  InputControlWrapper,
};
