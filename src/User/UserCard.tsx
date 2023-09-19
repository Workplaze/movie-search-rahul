import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ButtonAction } from "../Components/Button";
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";
import { DELETE_USER_BY_ID, GET_USER } from "../Queries/queries";

// Modal
import { Modal } from "react-responsive-modal";

import styled from "styled-components";
import Loader from "../Components/Loader";
// import NewUserForm from "./NewUserForm";
import UpdateUserForm from "./UpdateUserForm";
import useTheme from "../Hooks/useTheme";
import { LinkWithMode } from "../Common/UI";

const UserCardWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.color};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  /* & a {
    font-weight: bold;
    display: block;
    width: 100%;
    color: #121212;
  }

  & a:hover {
    text-decoration: underline;
  } */
`;

const UserButtonWrapper = styled(UserCardWrapper)`
  margin: 0;
  gap: 0.5rem;
`;

type Props = {
  first_name: string;
  last_name: string;
  role: string;
  status: string;
  id: string;
};

const UserCard = ({ id, first_name, last_name, role, status }: Props) => {
  const theme = useTheme();
  const [modalStatus, setModalStatus] = useState(false);

  const [mutateFunction, { loading }] = useMutation(DELETE_USER_BY_ID);

  const modalCloseHandler = () => {
    setModalStatus(false);
  };
  const modalOpenHandler = () => {
    setModalStatus(true);
  };

  const deleteUserHandler = () => {
    mutateFunction({
      variables: { id },
      refetchQueries: [{ query: GET_USER }],
    });
  };

  if (loading) return <Loader />;
  return (
    <UserCardWrapper color={theme.color}>
      <LinkWithMode color={theme?.background}>
      <Link to={id}>
        {first_name} {last_name} 
      </Link>
      </LinkWithMode>
      <UserButtonWrapper>
        <ButtonAction onClick={modalOpenHandler} color="dodgerblue">
          Update <AiFillEdit />
        </ButtonAction>
        {modalStatus && (
          <Modal open={modalStatus} onClose={modalCloseHandler} center>
            <UpdateUserForm defaultValues={{first_name, last_name}} closeModal={modalCloseHandler} id={id} />
          </Modal>
        )}
        <ButtonAction color="red" onClick={deleteUserHandler}>
          Delete <AiTwotoneDelete />
        </ButtonAction>
      </UserButtonWrapper>
    </UserCardWrapper>
  );
};

export default UserCard;
