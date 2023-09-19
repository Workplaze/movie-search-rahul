import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../Queries/queries";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import UserCard from "../Components/UserCard";
import { TitleWrapper } from "../Components/Title";

const UserDetails = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_USER_BY_ID, {
    variables: {
      id,
    },
  });
  if (loading) return <Loader />;

  return (
    <div>
      <TitleWrapper>
        <h2>User Info</h2>
      </TitleWrapper>
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
