import { ThreeDots } from "react-loader-spinner";
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
  const { loading, data } = useQuery(GET_USER);
  const LoadingUI = (
    <div className="Loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#000"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
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
  return loading ? (
    LoadingUI
  ) : (
    <div className="user">
      <h2>User's List</h2>
      <div className="cardWrapper">{UserList}</div>
    </div>
  );
};

export default User;
