import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const navItems = [
  { text: "Home", target: "/" },
  { text: "Products", target: "/products" },
  { text: "Cart", target: "/cart" },
];

function NavBar() {
  return (
    <>
      <nav className={styles.navBar}>
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
