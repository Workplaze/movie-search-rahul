import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";

import styled from "styled-components";

const Name = styled.div`
  color: lime;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
`

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
`

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
          <Name>
            {props.first_name} {props.last_name}{" "}
          </Name>
        </div>
        <Box>
          <SiGmail /> {props.email}
        </Box>
        <Box>
          <BsFillTelephoneFill /> +91 {props.contact_number}
        </Box>
      </div>
    </section>
  );
};

export default UserCard;
