import { useQuery } from "@apollo/client";
import { IoCreate } from "react-icons/io5";
import { GET_USER } from "../Queries/queries";

import UserCard from "./UserCard";
import Loader from "../Components/Loader";
import { ButtonAction } from "../Components/Button";

import styled from "styled-components";

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
  const { loading, data } = useQuery(GET_USER);
  return loading ? (
    <Loader />
  ) : (
    <UserWrapper>
      <div>
        <ButtonAction>
          Create <IoCreate size={"1rem"} />
        </ButtonAction>
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
  );
};

export default User;
