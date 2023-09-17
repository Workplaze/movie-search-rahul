import { Link } from "react-router-dom";
import { ButtonAction } from "../Components/Button";
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";

import styled from "styled-components";

const UserCardWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #edf1fa;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  & a {
      font-weight: bold;
    display: block;
    width: 100%;
    color: #121212;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

const UserButtonWrapper = styled(UserCardWrapper)`
  margin: 0;
  gap: 0.5rem;
`;

type Props = {
  first_name: string;
  last_name: string;
  id: string;
};

const UserCard = (props: Props) => {
  return (
    <UserCardWrapper>
      <Link to={props.id}>
        {props.first_name} {props.last_name}
      </Link>
      <UserButtonWrapper>
        <ButtonAction>
          Update <AiFillEdit />
        </ButtonAction>
        <ButtonAction>
          Delete <AiTwotoneDelete />
        </ButtonAction>
      </UserButtonWrapper>
    </UserCardWrapper>
  );
};

export default UserCard;
