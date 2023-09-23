import { useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import useTheme from "../Hooks/useTheme";

import { IoCreate } from "react-icons/io5";
import { FcClearFilters } from "react-icons/fc";

import {
  GET_USER,
  GET_USER_ROLE_AND_STATUS,
  GET_USER_BY_ROLE_AND_STATUS,
} from "../Queries/queries";

import { Modal } from "react-responsive-modal";
import { FilterContext } from "../context/FilterContext";

import UserCard from "./UserCard";
import NewUserForm from "./NewUserForm";
import Loader from "../Components/Loader";

import styled from "styled-components";
import { TextWithIconWrapper } from "../Common/UI";
import { ButtonAction } from "../Components/Button";

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
  margin: 0 0.4rem;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  border-color: #d1d1d1;
  border-style: solid;
  & option {
    padding: 1rem;
    text-transform: capitalize;
  }
`;

const FilterMenu = styled.section`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.div`
  font-weight: bold;
  text-transform: capitalize;
`;

const FilterButtons = styled.div`
  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const NoUser = styled.div`
  text-align: center;
  font-weight: bold;
  margin: 2rem 0;
`;

const User = () => {
  const theme = useTheme();
  const contextFilter = useContext(FilterContext);
  const [modalStatus, setModalStatus] = useState(false);

  const isFiltered = contextFilter?.state.isFiltered;
  const { loading, data } = useQuery(GET_USER);
  const { data: otherData } = useQuery(GET_USER_ROLE_AND_STATUS);
  const { loading: filterLoading, data: filterData } = useQuery(
    GET_USER_BY_ROLE_AND_STATUS,
    {
      variables: {
        role: contextFilter?.state.role,
        status: contextFilter?.state.status,
      },
    }
  );

  const clearFilterHandler = () => {
    contextFilter?.dispatch({ type: "clearFilter" });
  };
  const closeModalHandler = () => {
    setModalStatus(false);
  };
  const createNewUserHandler = () => {
    setModalStatus(true);
  };

  if (loading || filterLoading) return <Loader />;

  return (
    <UserWrapper>
      <FilterWrapper style={theme}>
        <FilterTitle>Filter User</FilterTitle>
        <FilterMenu>
          <Select
            value={contextFilter?.state.role}
            onChange={(e) =>
              contextFilter?.dispatch({
                type: "updateRole",
                payload: { value: e.target.value },
              })
            }
          >
            {otherData?.user_role?.map((r: any) => (
              <option key={r.id} value={r.role}>
                {r.role}
              </option>
            ))}
          </Select>
          <Select
            value={contextFilter?.state.status}
            onChange={(e) =>
              contextFilter?.dispatch({
                type: "updateStatus",
                payload: { value: e.target.value },
              })
            }
          >
            {otherData?.user_status?.map((s: any) => (
              <option key={s.id} value={s.status}>
                {s.status}
              </option>
            ))}
          </Select>
        </FilterMenu>
        <FilterButtons>
          <ButtonAction onClick={clearFilterHandler}>
            <TextWithIconWrapper>
              <FcClearFilters size={"1.5rem"} /> Clear
            </TextWithIconWrapper>
          </ButtonAction>
        </FilterButtons>
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
          {!isFiltered &&
            data?.user?.map((u: any) => (
              <UserCard
                key={u.id}
                dob={u.dob}
                age={u.age}
                first_name={u.first_name}
                last_name={u.last_name}
                id={u.id}
                gender={u.gender}
                role={u.user_role.id}
                status={u?.user_status?.id}
                email={u?.email}
                contact_number={u?.contact_number}
              />
            ))}
          {isFiltered &&
            filterData?.user?.map((u: any) => (
              <UserCard
                gender={u.gender}
                key={u.id}
                dob={u.dob}
                age={u.age}
                first_name={u.first_name}
                last_name={u.last_name}
                id={u.id}
                role={u.user_role?.id}
                status={u?.user_status?.id}
                email={u?.email}
                contact_number={u?.contact_number}
              />
            ))}
          {isFiltered && filterData?.user?.length === 0 && (
            <NoUser>Sorry, No User Found!</NoUser>
          )}
        </UL>
      </div>
    </UserWrapper>
  );
};

export default User;
