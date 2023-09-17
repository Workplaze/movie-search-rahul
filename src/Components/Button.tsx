import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  color: black;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-weight: bold;
  text-transform: capitalize;
  padding: 0.5rem 1rem;
  transition: transform 300ms;
  &:hover {
    transform: scale(1.1);
  }
  `;

const ButtonAction = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
`;


export {Button, ButtonAction};