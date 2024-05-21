import React from 'react';
import styles from './SummaryCards.module.scss';

const SummaryCards: React.FC = () => {
  return (
    <div className={styles.summaryCards}>
      <div className={styles.card}>
        <div className={styles.cardSubject}>Total Order</div>
        <div className={styles.cardValue}>120</div>
        <div className={styles.cardChange}>
          <span className={styles.changeIcon}>▲</span> +15% from yesterday
        </div>
        <div className={styles.cardIcon}>📦</div>
      </div>
      {/* Render other summary cards similarly */}
    </div>
  );
};

export default SummaryCards;
