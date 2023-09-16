import PropTypes from "prop-types";
import styles from "./PageHeader.module.css";

function PageHeader({ children }) {
  return (
    <>
      <div className={styles.pageHeader}>
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
