import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ButtonAction } from "../Components/Button";
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";
import {DELETE_USER_BY_ID} from '../Queries/queries';

import styled from "styled-components";
import Loader from "../Components/Loader";

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
  const [mutateFunction, {loading}] = useMutation(DELETE_USER_BY_ID);
  const deleteUserHandler = () => {
    mutateFunction({variables: {id: props.id}});
  }
  if(loading) return <Loader/>
  return (
    <UserCardWrapper>
      <Link to={props.id}>
        {props.first_name} {props.last_name}
      </Link>
      <UserButtonWrapper>
        <ButtonAction color="dodgerblue">
          Update <AiFillEdit />
        </ButtonAction>
        <ButtonAction color="red" onClick={deleteUserHandler}>
          Delete <AiTwotoneDelete />
        </ButtonAction>
      </UserButtonWrapper>
    </UserCardWrapper>
  );
};

export default UserCard;
