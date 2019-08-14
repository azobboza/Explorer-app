import React from "react";
import PropTypes from "prop-types";
import TransactionTable from "./transactionsTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

const Transactions = ({
  currentPage,
  pageSize,
  data,
  handlePageChange
}) => {
  const { length: count } = data;
  if (count === 0) return <p>There are no data in the database for given account. </p>;

  const d = paginate(data, currentPage, pageSize);
  return (
    <div className="row">
      <div className="col">
        <p>Showing {count} data in the database for address {data[0].address}</p>
        <TransactionTable data={d} />
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

Transactions.propTypes = {
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  data: PropTypes.array,
  onChange: PropTypes.func
};
Transactions.defaultProps = {
  currentPage: 1,
  pageSize: 1,
  data: [],
  onChange: () => {}
};

export default Transactions;
