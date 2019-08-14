import React from "react";
import { shallow } from "enzyme";
import TransactionsTable from "./transactionsTable";
import "../../setupTests";

describe("transactions table component test", () => {
  const movies = [
    {
      _id: "5b21ca3eeb7f6fbccd471816",
      title: "Die Hard",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      numberInStock: 5,
      dailyRentalRate: 2.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd471817",
      title: "Get Out",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
      numberInStock: 8,
      dailyRentalRate: 3.5
    }
  ];

  it("should be exported", () => {
    expect(shallow(<TransactionsTable movies={movies} />)).toBeDefined();
  });

  it("provides default props", () => {
    expect(TransactionsTable.defaultProps.movies).toBeDefined();
  });

  it("renders without crashing", () => {
    shallow(<TransactionsTable movies={movies} />);
  });

  it("should renders 2 rows in a body", () => {
    const wrapper = shallow(<TransactionsTable movies={movies} />);
    expect(wrapper.find("tbody").find("tr").length).toBe(2);
  });
});
