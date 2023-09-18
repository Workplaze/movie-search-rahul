import React , {useState} from "react";
import { useMutation, useQuery } from "@apollo/client";
import { IoCreate } from "react-icons/io5";
import { GET_USER , CREATE_USER} from "../Queries/queries";

// Modal
import {Modal} from 'react-responsive-modal';

import UserCard from "./UserCard";
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
  const [mutationFn] = useMutation(CREATE_USER);
  const closeModalHandler = () => {
    setModalStatus(false);
  }
  const createNewUserHandler = () => {
    setModalStatus(true);
    // mutationFn({
    //   variables: {
    //     input: {
    //       first_name: "V",
    //       last_name: "R",
    //       dob: "2000-12-12",
    //       age: "22",
    //       contact_number: "9999966666",
    //       email: "vrSomething@gmail.com",
    //       gender: "Male",
    //       role_id: 'd97e22e2-4573-4e6c-a3f4-1893b2fed610',
    //       status_id: 'af2e74cd-feec-4f08-b703-8eb7d32ff29e',
    //     },
    //     userRoleInput: {
    //       role: 'free'
    //     }
    //   },
    // });
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
          <Modal open={modalStatus} onClose={closeModalHandler} center>
            <h1> Hi</h1>
          </Modal>
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
