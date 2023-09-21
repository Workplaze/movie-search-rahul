import { NavLink } from "react-router-dom";
import useTheme from "../Hooks/useTheme";
import { LinkWithMode } from "../Common/UI";
const DesktopMenu = () => {
  const styles = useTheme();
  const activeClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "active" : "";
  };
  return (
    <div className="desktopMenu">
      <LinkWithMode color={styles.color}>
        <NavLink className={activeClass} to={""}>
          Latest Movies
        </NavLink>
      </LinkWithMode>
      <LinkWithMode color={styles.color}>
        <NavLink className={activeClass} to={"/user"}>
          
          Our Users
        </NavLink>
      </LinkWithMode>
      <LinkWithMode color={styles.color}>
        <NavLink className={activeClass} to={"/4kVideos"}>
          {" "}
          4K Cinema{" "}
        </NavLink>
      </LinkWithMode>
      <LinkWithMode color={styles.color}>
        <NavLink className={activeClass} to={"/hindiMovies"}>
          {" "}
          Hindi Movies{" "}
        </NavLink>
      </LinkWithMode>
    </div>
  );
};

export default DesktopMenu;
