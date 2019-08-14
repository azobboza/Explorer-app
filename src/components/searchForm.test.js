import React from "react";
import { shallow } from "enzyme";
import SearchForm from "./searchForm";
import "../../setupTests";

describe("SearchForm component test", () => {
  it("should be rendered", () => {
    expect(<SearchForm />).toBeDefined();
  });

  it("provides default props", () => {
    expect(SearchForm.defaultProps.account).toBeDefined();
    expect(SearchForm.defaultProps.errors).toBeDefined();
    expect(SearchForm.defaultProps.handleSubmit()).toBeUndefined();
    expect(SearchForm.defaultProps.handleChange()).toBeUndefined();
  });

  it("renders without crashing", () => {
    shallow(<SearchForm />);
  });

  it("onChange method should be called", () => {
    const mockOnChange = jest.fn();
    const wrapper = shallow(<SearchForm handleChange={mockOnChange} />);
    wrapper.find({ name: "address" }).simulate("change");
    expect(mockOnChange.mock.calls.length).toBe(1);
  });
});
