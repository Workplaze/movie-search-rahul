import { useQuery } from "@apollo/client";
import { IoCreate } from "react-icons/io5";
import { GET_USER } from "../Queries/queries";

import UserCard from "./UserCard";
import Loader from "../Components/Loader";
import { ButtonAction } from "../Components/Button";

const User = () => {
  const { loading, data } = useQuery(GET_USER);
  return loading ? (
    <Loader />
  ) : (
    <div>
      <div>
        <ButtonAction>
          Create <IoCreate size={"1rem"} />
        </ButtonAction>
      </div>
      <div>
        <ul>
          {data?.user?.map((user: any) => (
            <UserCard
              key={user.id}
              first_name={user.first_name}
              last_name={user.last_name}
              id={user.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
