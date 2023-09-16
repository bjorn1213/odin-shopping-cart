import PropTypes from "prop-types";
import NavBar from "./NavBar";
import "./PageHeader.css";

function PageHeader({ children }) {
  return (
    <>
      <div className="page-header">
        <h1>ShoppyShop</h1>
        {children}
      </div>
    </>
  );
}

PageHeader.propTypes = {
  children: PropTypes.object,
};

export default PageHeader;
