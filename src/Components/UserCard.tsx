import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";

type Props = {
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  contact_number: string;
};

const UserCard = (props: Props) => {
  const MaleIcon = require("../Assets/male.png");
  const FemaleIcon = require("../Assets/female.png");
  const FinalIcon = props.gender === "Male" ? MaleIcon : FemaleIcon;

  return (
    <section className="card">
      <div className="cardImage">
        <img src={FinalIcon} alt="" />
      </div>
      <div className="cardContent">
        <div>
          <div>
            {props.first_name} {props.last_name}{" "}
          </div>
        </div>
        <div>
          <SiGmail /> : {props.email}
        </div>
        <div>
          <BsFillTelephoneFill /> : +91 {props.contact_number}
        </div>
      </div>
    </section>
  );
};

export default UserCard;