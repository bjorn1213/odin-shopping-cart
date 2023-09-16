import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavBar({ navItems }) {
  return (
    <>
      <nav>
        <ul>
          {navItems.map((navItem) => {
            return (
              <li key={navItem.target}>
                <Link to={navItem.target}>{navItem.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  navItems: PropTypes.any,
};

export default NavBar;
