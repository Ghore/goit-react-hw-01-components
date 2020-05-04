import React from "react";
import TransactionHistoryList from "./TransactionHistoryList";
import styles from "./Transactions.module.css";
import PropTypes from "prop-types";
const TransactionHistory = ({ items }) => (
  <>
    <table className={styles.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TransactionHistoryList key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  </>
);

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
export default TransactionHistory;
