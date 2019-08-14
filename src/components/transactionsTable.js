import React from "react";
import PropTypes from "prop-types";

const TransactionsTable = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>          
          <th>Block Number</th>
          <th>From</th>
          <th>To</th>
          <th>Eth</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map(d => (
          <tr key={d._id}>
            <td>{d.blockNumber}</td>
            <td>{d.from}</td>
            <td>{d.to}</td>
            <td>{d.eth}</td>
            <td>{d.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionsTable.propTypes = {
  data: PropTypes.array
};

TransactionsTable.defaultProps = {
  data: []
};

export default TransactionsTable;
