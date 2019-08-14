import React from "react";
import PropTypes from "prop-types";
import Input from "./common/input";

const SearchForm = ({ account, errors, handleSubmit, handleChange, loading }) => {
  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="address"
          value={account.address}
          label="Address"
          error={errors.address}
          onChange={handleChange}
        />
        <button className="btn btn-primary" disabled={loading}>Submit</button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  account: PropTypes.object,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
};

SearchForm.defaultProps = {
  account: {},
  errors: {},
  handleSubmit: () => {},
  handleChange: () => {}
};

export default SearchForm;
