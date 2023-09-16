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
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      target: PropTypes.string,
    })
  ),
};

export default NavBar;
