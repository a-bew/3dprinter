// src/components/DoughnutChart/DoughnutChart.tsx
import React from 'react';
import styles from './DoughnutChart.module.scss';

interface DoughnutChartProps {
  data: { label: string, value: number, color: string }[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data }) => {
  const total = data.reduce((sum, { value }) => sum + value, 0);
  let cumulativeValue = 0;

  return (
    <div className={styles.doughnutChartContainer}>
      <svg viewBox="0 0 32 32" className={styles.doughnutChart}>
        {data.map(({ label, value, color }) => {
          const startAngle = (cumulativeValue / total) * 360;
          cumulativeValue += value;
          const endAngle = (cumulativeValue / total) * 360;
          const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

          const startX = 16 + 16 * Math.cos((startAngle - 90) * Math.PI / 180);
          const startY = 16 + 16 * Math.sin((startAngle - 90) * Math.PI / 180);
          const endX = 16 + 16 * Math.cos((endAngle - 90) * Math.PI / 180);
          const endY = 16 + 16 * Math.sin((endAngle - 90) * Math.PI / 180);

          return (
            <path
              key={label}
              d={`M16,16 L${startX},${startY} A16,16 0 ${largeArcFlag},1 ${endX},${endY} z`}
              fill={color}
              stroke="#fff"
              strokeWidth="0.5"
            />
          );
        })}
        <circle cx="16" cy="16" r="10" fill="#fff" />
      </svg>
      
    </div>
  );
};

export default DoughnutChart;
