// src/components/TransactionTable/TransactionTable.tsx
import React, { useState } from 'react';
import styles from './TransactionTable.module.scss';
import { AiOutlineCaretDown } from 'react-icons/ai';
import MobileTransactionItem from './MobileTransactionItem';
import uuid from 'react-uuid';
import useWindowDimensions from '@/hooks/useWindowDimensions';

const transactions:any = [
  { id: 1, amount: -100, status: 'Processing', date: 'Mon, Apr 29, 7:56PM', category: 'Charity - The Nesters' },
  { id: 2, amount: 50.40, status: 'Success', date: 'Date', category: 'Venture - Seun Ventures' },
  { id: 3, amount: -500, status: 'Success', date: 'Date', category: 'Channel' },
  { id: 4, amount: -72, status: 'Success', date: 'Date', category: 'Channel' },
  { id: 5, amount: null, status: 'Failed', date: 'Date', category: 'Channel' },
];

  
const TransactionTable: React.FC = () => {
    const { width } = useWindowDimensions()
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <div className={styles.transactionTable}>
      
      <div className={styles.filters}>
        {['All', 'Week', 'Month', 'Year'].map((tab) => (
          <button
            key={tab}
            className={filter === tab ? styles.active : ''}
            onClick={() => handleFilterChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>


      {width > 1000 ? <table
        
      >
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: any) => (
            <tr key={transaction.id}>
              <td>Transaction</td>
              <td className={transaction.amount < 0 ? styles.negative : styles.positive}>
                {transaction.amount !== null ? `$${transaction.amount.toFixed(2)}` : '--'}
              </td>
              <td className={`${styles[transaction.status.toLowerCase()]}`}> <span className={`${styles['status']} ${styles[transaction.status.toLowerCase()]}${styles['status-'+transaction.status.toLowerCase()]}`}>{transaction.status}</span></td>
              <td>{transaction.date}</td>
              <td>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>:
      <div  className={styles.transactionTable} >

        {/* <div className = {s['currency-transaction-table-title']}>
    
            <p className = {s.tabformheading} style = {{marginTop: '30px', marginBottom: '0px'}} >Transactions</p>
            {!showAll && (
                    <button onClick={handleViewAll} style={{ marginTop: '10px', color }}>
                    View all
                    </button>
                )}
        </div> */}
    
    
            { transactions.map((item:any, index:any) => (
                <MobileTransactionItem key={uuid()} item={item} index={index} />
            ))}
  
  
      </div>
  
      }
    </div>
  );
};

export default TransactionTable;