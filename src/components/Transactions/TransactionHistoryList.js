import React from "react";
import PropTypes from "prop-types";
const TransactionHistoryList = ({ type, amount, currency }) => (
  <>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </>
);
TransactionHistoryList.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string
}
export default TransactionHistoryList;
