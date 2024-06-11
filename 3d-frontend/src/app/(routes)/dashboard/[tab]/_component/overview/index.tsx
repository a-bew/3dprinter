import s from './Overview.module.scss';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { MobileMenuOpenAtWidth } from '@/utils/constants';
import DoughnutChart from '@/components/charts/DoughnutChart';
import TransactionTable from './_component/TransactionTable';

interface OverviewProps {
  open: boolean;
}

const Overview: React.FC<OverviewProps> = ({open }) => {

  const { width } = useWindowDimensions()

  const showSlider = width <= MobileMenuOpenAtWidth;


  const pieChartData = [
    { label: 'Bank 1', value: 200, color: '#ff6384' },
    { label: 'Bank 2', value: 120, color: '#36a2eb' },
  ];

  return (
    <div className={`${s["message-list"]} ${s['message-label-items']} `} >


      <div className={s['header']} style={{marginTop: showSlider?65:''}}>
        <span className={s.title}>Jumlec Foodies</span>
        <span  className={s['subtitle']}>
          Access and manage your account and transactions efficiently.
        </span>
      </div>

      <div className={s['doughnut-chart-area']}>
         <div className={s['doughnut-chart']}>
           <DoughnutChart data={pieChartData} />
         </div>
          <div className={s.description}>
            <p className={s['number-of-accounts']}>2 Bank Accounts.</p>

            <div className={s['current-balance']}>
              <span className={s['label']}>Total Current Balance</span>
              <span className={s['amount']}>$ 320.00</span>
            </div>
          </div>
      </div>

      <div className={s['transaction-table']}>
        <div className={s['header']}>
          <span className={s.title}>Recent Transactions</span>
        </div>
        <TransactionTable />
      </div>
     
    </div>
  );
};

export default Overview;