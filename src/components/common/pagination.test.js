import React from "react";
import { shallow } from "enzyme";
import Pagination from "./pagination";
import "../../../setupTests";

describe("pagination component test", () => {

  const props = {
    itemsCount: 20,
    pageSize: 5,
    currentPage: 1,
    onPageChange: jest.fn()    
  }

  it("should be exported", () => {
    expect(Pagination).toBeDefined();
  });

  it("should be empty object", () => {
    const itemsCount = 3;
    const pageSize = 4;
    const wrapper = shallow(<Pagination {...props} itemsCount={itemsCount} pageSize={pageSize} />);
    expect(wrapper).toEqual({});
  });

  it("renders without crashing", () => {
    shallow(<Pagination {...props}/>);
  });

  it("there should be 4 pages", () => {
    const result = props.itemsCount / props.pageSize;
    const wrapper = shallow(
      <Pagination {...props} />
    );
    expect(wrapper.find("li").length).toBe(result);
  });
});
