import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onKeyDown={props.onKeyDown}
      ref={props.ref}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onKeyDown: PropTypes.func,
  ref: PropTypes.string,
};

const forwardInput = React.forwardRef(Input);

export default forwardInput;
