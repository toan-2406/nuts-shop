import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Helmet = (props) => {
  document.title = "Nuts 4U - " + props.title;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>{props.children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
