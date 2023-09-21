import { useState } from "react";
import MobileModal from "./MobileModal";
import { CiMenuKebab } from "react-icons/ci";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const openMenuHandler = () => {
    setShowMenu(true);
  };
  const closeMenuHandler = () => {
    setShowMenu(false);
  };
  return (
    <>
      <div className="mobileMenu">
        <CiMenuKebab size={"2rem"} onClick={openMenuHandler} />
      </div>
      {showMenu && <MobileModal closeModal={closeMenuHandler} />}
    </>
  );
};

export default MobileMenu;
