/* eslint-disable react/prop-types */
import React, {Suspense, useEffect, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useStore} from '../store';
import {
  getDailyTransactions,
  getMonthlyTransaction,
  getWeeklyTransaction,
  getYesterdaysTransaction,
} from '../components/summary/helper';
import DailySummary from '../components/summary/DailySummary';
import WeeklySummary from '../components/summary/WeeklySummary';
import MonthlySummary from '../components/summary/MonthlySummary';
import YesterdaysSummary from '../components/summary/YesterdaysSummary';

const SummaryGraphController = React.lazy(() =>
  import('../components/summaryGraphs/SummaryGraphController'),
);

const Panel = ({tabIndex, id, children}) => {
  return <>{tabIndex === id && children}</>;
};

const Summary = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const transactions = useStore(state => state.transactions);
  const categories = useStore(state => state.categories);

  const [dailyTrans, setDailyTrans] = useState();
  const [weeklyTrans, setWeeklyTrans] = useState();
  const [monthlyTrans, setMonthlyTrans] = useState();
  const [yesterdaysTransactions, setYesterdaysTransactions] = useState();

  useEffect(() => {
    if (transactions) {
      setDailyTrans(getDailyTransactions(transactions));
      setWeeklyTrans(getWeeklyTransaction(transactions));
      setMonthlyTrans(getMonthlyTransaction(transactions));
      setYesterdaysTransactions(getYesterdaysTransaction(transactions));
    }
  }, [transactions]);

  const handleChange = (_event, newVal) => {
    setTabIndex(newVal);
  };

  return (
    <div>
      <div style={{marginTop: 10, marginBottom: 20}}>
        <Tabs
          centered
          value={tabIndex}
          onChange={handleChange}
          aria-label="Summary">
          <Tab label="Summary" />
          <Tab label="Graph" />
          <Tab label="Comparison" />
        </Tabs>
      </div>

      <div style={{overflowY: 'auto', height: 'calc(100vh - 150px)'}}>
        <Panel tabIndex={tabIndex} id={0}>
          <DailySummary
            dailyTransactions={dailyTrans}
            categories={categories}
          />
          <YesterdaysSummary
            yesterdaysTransactions={yesterdaysTransactions}
            categories={categories}
          />
          <WeeklySummary
            weeklyTransactions={weeklyTrans}
            categories={categories}
          />
          <MonthlySummary
            monthlyTransactions={monthlyTrans}
            categories={categories}
          />
        </Panel>

        <Panel tabIndex={tabIndex} id={1}>
          <Suspense fallback={<h1>Loading</h1>}>
            <SummaryGraphController transactions={transactions} />
          </Suspense>
        </Panel>
      </div>
    </div>
  );
};

export default Summary;
