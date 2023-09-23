import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ButtonAction } from "../Components/Button";
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";
import { FcApproval, FcDecision } from "react-icons/fc";
import { DELETE_USER_BY_ID, GET_USER } from "../Queries/queries";

import { toast } from "react-toastify";
import { Modal } from "react-responsive-modal";

import styled from "styled-components";
import Loader from "../Components/Loader";
import UpdateUserForm from "./UpdateUserForm";
import useTheme from "../Hooks/useTheme";
import { LinkWithMode, TextWithIconWrapper } from "../Common/UI";

const UserCardWrapper = styled.div<{ $bgColor?: string }>`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.color};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  & a {
    font-weight: bold;
    display: block;
    width: 100%;
    color: ${(props) => props.$bgColor};
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
  dob: string;
  age:string;
  role: string;
  status: string;
  email:string;
  contact_number: string;
  id: string;
  gender: string;
};

const UserCard = ({ id, first_name, last_name, role, status, dob, email, contact_number, age,gender }: Props) => {
  const theme = useTheme();
  const [modalStatus, setModalStatus] = useState(false);

  const [deleteUser, { loading }] = useMutation(DELETE_USER_BY_ID);

  const modalCloseHandler = () => {
    setModalStatus(false);
  };
  const modalOpenHandler = () => {
    setModalStatus(true);
  };

  const deleteUserHandler = () => {
    deleteUser({
      variables: { id },
      refetchQueries: [{ query: GET_USER }],
    });
    toast.success("User Deleted!");
  };

  if (loading) return <Loader />;
  return (
    <UserCardWrapper $bgColor={theme.background} color={theme.color}>
      <LinkWithMode color={theme?.background}>
        <Link to={id}>
          <TextWithIconWrapper>
            {first_name} {last_name}
            {status === "registered" ? <FcApproval /> : <FcDecision />}
          </TextWithIconWrapper>
        </Link>
      </LinkWithMode>
      <UserButtonWrapper>
        <ButtonAction onClick={modalOpenHandler} color="dodgerblue">
          Update <AiFillEdit />
        </ButtonAction>
        {modalStatus && (
          <Modal open={modalStatus} onClose={modalCloseHandler} center>
            <UpdateUserForm
              defaultValues={{ id, first_name, last_name, age, dob , email, role, status, contact_number, gender}}
              closeModal={modalCloseHandler}
              id={id}
            />
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
