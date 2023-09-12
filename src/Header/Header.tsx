import { useContext, useEffect, useState } from "react";
import {ThemeContext} from '../context/Theme';

import { lightTheme, darkTheme } from "../util/themeStyles";
import {MdDarkMode} from 'react-icons/md';
import {BsFillSunFill} from 'react-icons/bs';

import Title from "./Title";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";



const ThemeIcon = () => {
  const theme = useContext(ThemeContext);
  const icon = theme.mode === 'light' ? <MdDarkMode/> : <BsFillSunFill/>;
  return (
    <div onClick={theme.modeHandler}>
      {icon}
    </div>
  );
}

const Header = (props: {searchQuery : string, onSearchChange: any}) => {
  
  const [isMobileVersion, setIsMobileVersion] = useState(true);
  const theme = useContext(ThemeContext);

  const styles = theme.mode === 'light' ? lightTheme : darkTheme;
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
    <header className="globalHeader" style={styles}>
      <Title />
      <SearchBar searchQuery={props.searchQuery} onSearchChange={props.onSearchChange} />
      <ThemeIcon />
      {isMobileVersion ? <MobileMenu /> : <DesktopMenu />}
    </header>
  );
};

export default Header;
