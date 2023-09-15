import {Link} from 'react-router-dom';

const DesktopMenu = () => {
  return (
    <div className="desktopMenu">
        <Link to={"/user"}>
          User Page
        </Link>
        <li>4K</li>
        <li>Trending</li>
        <li>Browser Movies</li>
    </div>
  );
};

export default DesktopMenu;
