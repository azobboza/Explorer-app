import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, label, value, error, onChange, loading }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
        disabled={loading}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func
};
Input.defaultProps = {
  name: "",
  label: "",
  value: "",
  error: "",
  onChange: () => {}
};

export default Input;
