import { DoubleContainer, TextWithIconWrapper } from "../Common/UI";
import { MdLocalMovies } from "react-icons/md";

const HighDefinition = () => {
  return (
    <DoubleContainer>
      {" "}
      <TextWithIconWrapper>
        <MdLocalMovies size={'2rem'} /> <h2> 4K Movies coming soon.. </h2>
      </TextWithIconWrapper>{" "}
    </DoubleContainer>
  );
};

export default HighDefinition;
