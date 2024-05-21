import React from 'react';
import styles from './TableSection.module.scss';

const TableSection: React.FC = () => {
  return (
    <div className={styles.tableSection}>
      <div className={styles.recentSales}>
        <h2>Recent Sales</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Render table rows with data */}
          </tbody>
        </table>
      </div>
      <div className={styles.topSellingProduct}>
        <h2>Top Selling Product</h2>
        <div className={styles.product}>
          {/* Render top selling product details */}
        </div>
      </div>
    </div>
  );
};

export default TableSection;
