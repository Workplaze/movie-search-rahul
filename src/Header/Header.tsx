import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

import useDevice from "../Hooks/useDevice";

import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

import Title from "./Title";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import useTheme from "../Hooks/useTheme";

const ThemeIcon = () => {
  const theme = useContext(ThemeContext);
  const icon = theme.mode === "light" ? <MdDarkMode size='2rem' /> : <BsFillSunFill size='2rem' />;

  return <div onClick={theme.modeHandler}>{icon}</div>;
};

const Header = (props: { searchQuery: string; onSearchChange: any }) => {

  const styles = useTheme();
  const isMobileVersion = useDevice();

  return (
    <header className="globalHeader" style={styles}>
      <Title />
      <SearchBar
        searchQuery={props.searchQuery}
        onSearchChange={props.onSearchChange}
      />
      <ThemeIcon />
      {isMobileVersion ? <MobileMenu /> : <DesktopMenu />}
    </header>
  );
};

export default Header;
