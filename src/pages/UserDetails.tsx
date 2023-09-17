import { useQuery, gql } from "@apollo/client";
import { GET_USER_BY_ID } from "../Queries/queries";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import UserCard from "../Components/UserCard";

const UserDetails = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_USER_BY_ID, {
    variables: {
      id,
    },
  });
  console.log(data);
  if (loading) return <Loader />;

  return (
    <div>
      <UserCard
        first_name={data?.user_by_pk?.first_name}
        last_name={data?.user_by_pk?.last_name}
        gender={data?.user_by_pk?.gender}
        contact_number={data?.user_by_pk?.contact_number}
        email={data?.user_by_pk?.email}
      />
    </div>
  );
};

export default UserDetails;
