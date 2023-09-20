import { useState } from "react";

import { useQuery } from "@apollo/client";
import { IoCreate } from "react-icons/io5";
import { LuFilterX } from "react-icons/lu";

import { GET_USER, GET_USER_ROLE_AND_STATUS } from "../Queries/queries";

import { Modal } from "react-responsive-modal";

import UserCard from "./UserCard";
import NewUserForm from "./NewUserForm";
import Loader from "../Components/Loader";
import { ButtonAction } from "../Components/Button";

import styled from "styled-components";
import useTheme from "../Hooks/useTheme";
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

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid #9f72f1;
`;

const Select = styled.select`
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-color: #d1d1d1;
  border-style: solid;
  
`;

const FilterMenu = styled.section`
  display: flex;
  align-items: center;
`;

const User = () => {
  const theme = useTheme();
  const { loading, data } = useQuery(GET_USER);
  const [filterValues, setFilterValues] = useState({
    role: "",
    status: "",
  });
  const [modalStatus, setModalStatus] = useState(false);
  const { data: otherData } = useQuery(GET_USER_ROLE_AND_STATUS);

  const filteredUsers =
    filterValues.role && filterValues.status
      ? data?.user?.filter(
          (user: any) =>
            user?.user_role?.role === filterValues.role &&
            user?.user_status?.status === filterValues.status
        )
      : data?.user;
  console.log(filteredUsers);
  const resetFilter = () => {
    setFilterValues({
      role: "",
      status: "",
    });
  };
  const roleChangeHandler = (event: any) => {
    setFilterValues({
      ...filterValues,
      role: event.target.value,
    });
  };
  const statusChangeHandler = (event: any) => {
    setFilterValues({
      ...filterValues,
      status: event.target.value,
    });
  };

  const closeModalHandler = () => {
    setModalStatus(false);
  };
  const createNewUserHandler = () => {
    setModalStatus(true);
  };

  if (loading) return <Loader />;
  return (
    <UserWrapper>
      <FilterWrapper style={theme}>
        <FilterMenu>
           Filter User
        </FilterMenu>
        <FilterMenu>
          <Select onChange={roleChangeHandler}>
            {otherData?.user_role?.map((r: any) => (
              <option key={r.role} value={r.role}>
                {r.role?.toUpperCase()}
              </option>
            ))}
          </Select>
          <Select onChange={statusChangeHandler}>
            {otherData?.user_status?.map((s: any) => (
              <option key={s.status} value={s.status}>
                {s.status?.toUpperCase()}
              </option>
            ))}
          </Select>
          <LuFilterX size={"1.5rem"} onClick={resetFilter} />
        </FilterMenu>
      </FilterWrapper>
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
          {filteredUsers?.map((user: any) => (
            <UserCard
              key={user.id}
              first_name={user.first_name}
              last_name={user.last_name}
              id={user.id}
              role={user.user_role.role}
              status={user?.user_status?.status}
            />
          ))}
        </UL>
      </div>
    </UserWrapper>
  );
};

export default User;
