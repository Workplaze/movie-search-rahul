import styled from "styled-components";
import useTheme from "../Hooks/useTheme";
import { Link } from "react-router-dom";
import { LinkWithMode } from "../Common/UI";
import { AiFillCloseCircle } from "react-icons/ai";

const Wrapper = styled.section<{ $bgColor: string; $color: string }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 111000;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
`;

const MenuHeader = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #993bf7;
  margin: 0 0 2rem;
  & span {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

const MenuBody = styled.div`
  text-align: center;
  & a {
    display: block;
    transition: transform 400ms;
    padding: 0.5rem 1rem;
    margin: 0.5rem 1rem;
    font-weight: bold;
  }
  & a:hover,
  & a:active {
    transform: scale(1.1);
  }
`;

const MobileModal = ({ closeModal }: { closeModal: () => void }) => {
  const theme = useTheme();
  return (
    <Wrapper $bgColor={theme?.background} $color={theme?.color}>
      <MenuHeader>
        <span>Menu</span>
        <span>
          <AiFillCloseCircle size={"2rem"} onClick={closeModal} />
        </span>
      </MenuHeader>
      <MenuBody onClick={closeModal}>
        <LinkWithMode color={theme.color}>
          <Link to={"/user"}>Our Users</Link>
        </LinkWithMode>
        <LinkWithMode color={theme.color}>
          <Link to={""}>4K Videos</Link>
        </LinkWithMode>
        <LinkWithMode color={theme.color}>
          <Link to={""}>Trending Movies</Link>
        </LinkWithMode>
        <LinkWithMode color={theme.color}>
          <Link to={""}> Hindi Movies</Link>
        </LinkWithMode>
      </MenuBody>
    </Wrapper>
  );
};

export default MobileModal;
