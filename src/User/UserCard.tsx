import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";

const UserCard = () => {
  return (
    <div>
      <div>Rahul Keshri</div>
      <div>
        <button>
          Update <AiFillEdit />
        </button>
        <button>
          Delete <AiTwotoneDelete />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
