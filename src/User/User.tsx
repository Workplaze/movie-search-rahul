import { IoCreate } from "react-icons/io5";
import UserCard from "./UserCard";

const User = () => {
  return (
    <div>
      <div>
        <button>
          Create <IoCreate size={'1rem'} />
        </button>
      </div>
      <div>
        <ul>
            <li>
                <UserCard />
            </li>
            <li>
                <UserCard />
            </li>
            <li>
                <UserCard />
            </li>
            <li>
                <UserCard />
            </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
