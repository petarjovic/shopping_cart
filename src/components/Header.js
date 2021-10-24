import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showForm }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showForm ? "darkred" : "green"}
        text={showForm ? "Stop Adding" : "Add Items"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Shopping Cart",
};

Header.propTyps = {
  title: PropTypes.string,
};

export default Header;
