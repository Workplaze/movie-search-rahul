import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
  query MyQuery {
    user {
      first_name
      age
      contact_number
      dob
      email
      gender
      id
      last_name
      role_id
      status_id
    }
  }
`;

const User = () => {
  const { loading, error, data } = useQuery(GET_USER);
  const LoadingUI = <h1> Loading...</h1>
  const UserList = data?.user?.map((userInfo: any) => <div key={userInfo.id}>
    <h2>{userInfo.first_name}</h2>
  </div>)
  return loading ? LoadingUI : UserList;
};

export default User;
