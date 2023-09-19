import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  color: ${(props) => props.color};
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-weight: bold;
  text-transform: capitalize;
  padding: 0.5rem 1rem;
  transition: transform 300ms;
  border-color: ${(props) => props.color};
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

const BadgeButton = styled.div`
  padding: 5px 10px;
  border: 1px solid black;
  background-color: #fbfbfb;
  color: black;
  font-size: 10px;
  font-weight: bold;
  margin: 0 5px;
  border-radius: 1rem;
`;

export { Button, ButtonAction, BadgeButton };
