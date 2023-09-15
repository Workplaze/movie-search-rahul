import { useQuery, gql } from "@apollo/client";

import UserCard from "../Components/UserCard";

const GET_USER = gql`
  query MyQuery {
    user {
      id
      first_name
      last_name
      gender
      email
      contact_number
    }
  }
`;

const User = () => {
  const { loading, error, data } = useQuery(GET_USER);
  const LoadingUI = <h1> Loading...</h1>;
  const UserList = data?.user?.map((userInfo: any) => (
    <UserCard
      key={userInfo.id}
      first_name={userInfo.first_name}
      last_name={userInfo.last_name}
      gender={userInfo.gender}
      email={userInfo.email}
      contact_number={userInfo.contact_number}
    />
  ));
  return loading ? LoadingUI : UserList;
};

export default User;
