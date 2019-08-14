import React from "react";
import { shallow } from "enzyme";
import Transactions from "./transactions"
import "../../setupTests";

describe("transactions componentr tests", () => {

    const data = [
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

    it("should be rendered", () => {
        expect(<Transactions data={data} />).toBeDefined();
    });
    it("should not be rendered", () => {
        const data = [];
        const result = "There are no data in the database for given account.";
        const wrapper = shallow(<Transactions data={data}/>)
        expect(wrapper.html()).toContain(result);
    });
    it("provides default props", () => {
        expect(Transactions.defaultProps.currentPage).toBeDefined();
        expect(Transactions.defaultProps.pageSize).toBeDefined();
        expect(Transactions.defaultProps.data).toBeDefined();
        expect(Transactions.defaultProps.onChange()).toBeUndefined();
      });
    
      it("renders without crashing", () => {
        shallow(<Transactions data={data}/>);
      });
})