import styled from "styled-components";

const FormWrapper = styled.section`
  margin: 1rem 0;
  padding: 1rem;
`;

const InputWrapper = styled.div`
  margin: 0.5rem 0;
`;

const Label = styled.label`
  display: block;
  margin: 0 0 0.5rem;
  text-transform: capitalize;
  color: #28292f;
`;

const InlineLabel = styled(Label)`
  display: inline-block;
`;

const Input = styled.input`
  border: none;
  background-color: #e0e3f9;
  color: black;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;


export {FormWrapper, InputWrapper, Label, InlineLabel, Input}