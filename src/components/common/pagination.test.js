import React from "react";
import { shallow } from "enzyme";
import Pagination from "./pagination";
import "../../../setupTests";

describe("pagination component test", () => {
  it("should be exported", () => {
    expect(Pagination).toBeDefined();
  });

  it("should be empty object", () => {
    const itemsCount = 3;
    const pageSize = 4;
    const wrapper = shallow(
      <Pagination itemsCount={itemsCount} pageSize={pageSize} />
    );
    expect(wrapper).toEqual({});
  });

  it("renders without crashing", () => {
    shallow(<Pagination />);
  });

  it("onPageChange method shoud be called", () => {
    const mockOnClick = jest.fn();
    const wrapper = shallow(<Pagination onPageChange={mockOnClick} />);
    wrapper.find({ name: "pageLink" }).simulate("click");
    expect(mockOnClick.mock.calls.length).toBe(1);
  });

  it("there should be 4 pages", () => {
    const itemsCount = 20;
    const pageSize = 5;
    const result = itemsCount / pageSize;
    const wrapper = shallow(
      <Pagination itemsCount={itemsCount} pageSize={pageSize} />
    );
    expect(wrapper.find("li").length).toBe(result);
  });
});
