import { Link } from "react-router-dom";
import useTheme from "../Hooks/useTheme";
import { LinkWithMode } from "../Common/UI";
const DesktopMenu = () => {
  const styles = useTheme();

  return (
    <div className="desktopMenu">
      <LinkWithMode color={styles.color}>
        <Link to={"/user"}> Our Users </Link>
      </LinkWithMode>
      <LinkWithMode color={styles.color}>
        <Link to={""}> 4K Movies </Link>
      </LinkWithMode>
      <LinkWithMode color={styles.color}>
        <Link to={""}> Trending </Link>
      </LinkWithMode>
      <LinkWithMode color={styles.color}>
        <Link to={""}> Hindi Movies </Link>
      </LinkWithMode>
    </div>
  );
};

export default DesktopMenu;
