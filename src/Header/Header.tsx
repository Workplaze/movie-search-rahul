import { useEffect, useState } from "react";

import Title from "./Title";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Header = (props: {searchQuery : string, onSearchChange: any}) => {
  
  const [isMobileVersion, setIsMobileVersion] = useState(true);

  useEffect(() => {
    const updateMobileView = (): void => {
      if (window.innerWidth >= 800) {
        setIsMobileVersion(false);
      } else {
        setIsMobileVersion(true);
      }
    };

    updateMobileView();

    window.addEventListener("resize", updateMobileView);

    return () => {
      window.removeEventListener("resize", updateMobileView);
    };

  }, []);

  return (
    <header className="globalHeader">
      <Title />
      <SearchBar searchQuery={props.searchQuery} onSearchChange={props.onSearchChange} />
      {isMobileVersion ? <MobileMenu /> : <DesktopMenu />}
    </header>
  );
};

export default Header;
