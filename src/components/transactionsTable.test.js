import React from "react";
import { shallow } from "enzyme";
import TransactionsTable from "./transactionsTable";
import "../../setupTests";

describe("transactions table component test", () => {
  const data = [
    {
      _id: '5b21ca3eeb7f6fbccd471817',
      address: '0xcfab827309f462b2800EF4ae4CCA97E19F7600A3',
      blockNumber: 4796915,
      from: '0xcfab827309f462b2800EF4ae4CCA97E19F7600A3',
      to: '0x2Ca3293a09CAB6638dFf809d9b06Bf9499b95639',
      eth: 0,
      date: '2019-07-25T21:04:43.238+00:00'
    },
    {
      _id: '5b21ca3eeb7f6fbccd471817',
      address: '0xcfab827309f462b2800EF4ae4CCA97E19F7600A3',
      blockNumber: 4796915,
      from: '0xcfab827309f462b2800EF4ae4CCA97E19F7600A3',
      to: '0x2Ca3293a09CAB6638dFf809d9b06Bf9499b95639',
      eth: 0,
      date: '2019-07-25T21:04:43.238+00:00'
    }
  ];

  it("should be exported", () => {
    expect(shallow(<TransactionsTable data={data} />)).toBeDefined();
  });

  it("provides default props", () => {
    expect(TransactionsTable.defaultProps.data).toBeDefined();
  });

  it("renders without crashing", () => {
    shallow(<TransactionsTable data={data} />);
  });

  it("should renders 2 rows in a body", () => {
    const wrapper = shallow(<TransactionsTable data={data} />);
    expect(wrapper.find("tbody").find("tr").length).toBe(2);
  });
});
