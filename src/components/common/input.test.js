import React from "react";
import { shallow } from "enzyme";
import Input from "./input";
import "../../../setupTests";

describe("input component test", () => {
  it("should be exported", () => {
    expect(Input).toBeDefined();
  });

  it("provides default props", () => {
    expect(Input.defaultProps.name).toBeDefined();
    expect(Input.defaultProps.label).toBeDefined();
    expect(Input.defaultProps.value).toBeDefined();
    expect(Input.defaultProps.error).toBeDefined();
    expect(Input.defaultProps.onChange()).toBeUndefined();
  });

  it("renders without crashing", () => {
    shallow(<Input />);
  });

  it("renders input type properly", () => {
    const wrapper = shallow(<Input />);
    const text = wrapper.find({ type: "text" });
    expect(text.type()).toBe("input");
  });

  it("onChange method should be called", () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(<Input onChange={onChangeMock} />);
    wrapper.find({ type: "text" }).simulate("change");
    expect(onChangeMock.mock.calls.length).toBe(1);
  });

  it("renders correctly name attribute", () => {
    const text = "blockNumber";
    const wrapper = shallow(<Input name={text} />);
    expect(wrapper.html()).toContain(text);
  });

  it("renders correctly error attribute", () => {
    const error = "something went wrong";
    const wrapper = shallow(<Input error={error} />);
    expect(wrapper.html()).toContain(error);
  });
});
