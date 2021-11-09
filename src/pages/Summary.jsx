/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useStore} from '../store';
import {
  getDailyTransactions,
  getMonthlyTransaction,
  getWeeklyTransaction,
} from '../components/summary/helper';
import DailySummary from '../components/summary/DailySummary';
import WeeklySummary from '../components/summary/WeeklySummary';
import MonthlySummary from '../components/summary/MonthlySummary';
import DailyBarGraph from '../components/summaryGraphs/DailyBarGraph';

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

  useEffect(() => {
    if (transactions) {
      setDailyTrans(getDailyTransactions(transactions));
      setWeeklyTrans(getWeeklyTransaction(transactions));
      setMonthlyTrans(getMonthlyTransaction(transactions));
    }
  }, [transactions]);

  const handleChange = (_event, newVal) => {
    setTabIndex(newVal);
  };

  return (
    <div>
      <div>
        <Tabs
          centered
          value={tabIndex}
          onChange={handleChange}
          aria-label="Summary">
          <Tab label="Summary" />
          <Tab label="Graph" />
        </Tabs>
      </div>
      <Panel tabIndex={tabIndex} id={0}>
        <DailySummary dailyTransactions={dailyTrans} categories={categories} />
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
        <DailyBarGraph transactions={transactions} />
      </Panel>
    </div>
  );
};

export default Summary;
