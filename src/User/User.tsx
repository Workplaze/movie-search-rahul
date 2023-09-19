import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { IoCreate } from "react-icons/io5";
import { GET_USER } from "../Queries/queries";

// Modal
import { Modal } from "react-responsive-modal";

import UserCard from "./UserCard";
import NewUserForm from "./NewUserForm";
import Loader from "../Components/Loader";
import { ButtonAction } from "../Components/Button";

import styled from "styled-components";
import { TitleWrapper } from "../Components/Title";

const UserWrapper = styled.section`
  margin: 1rem auto;
  padding: 1rem;
  max-width: 1080px;
`;

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const User = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const { loading, data } = useQuery(GET_USER);
  // const [mutationFn] = useMutation(CREATE_USER);
  const closeModalHandler = () => {
    setModalStatus(false);
  };
  const createNewUserHandler = () => {
    setModalStatus(true);
  };
  if (loading) return <Loader />;
  return (
    <React.Fragment>
      <TitleWrapper>
        <h2>User List</h2>
      </TitleWrapper>
      <UserWrapper>
        <div>
          <ButtonAction onClick={createNewUserHandler} color="#000000">
            Create New User <IoCreate size={"1rem"} />
          </ButtonAction>
          {modalStatus && (
            <Modal open={modalStatus} onClose={closeModalHandler} center>
              <div>
                <NewUserForm closeModal={closeModalHandler} />
              </div>
            </Modal>
          )}
        </div>
        <div>
          <UL>
            {data?.user?.map((user: any) => (
              <UserCard
                key={user.id}
                first_name={user.first_name}
                last_name={user.last_name}
                id={user.id}
              />
            ))}
          </UL>
        </div>
      </UserWrapper>
    </React.Fragment>
  );
};

export default User;
