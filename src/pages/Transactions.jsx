/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {useStore} from '../store';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TransList from '../components/transactions/TransList';
import AddTrans from '../components/transactions/AddTrans';
import Today from '../components/transactions/Today';
import ThisWeek from '../components/transactions/ThisWeek';
import ThisMonth from '../components/transactions/ThisMonth';

const Panel = ({tabIndex, id, children}) => {
  return <>{tabIndex === id && children}</>;
};

const Transactions = () => {
  const transactions = useStore(state => state.transactions);
  const loadTransactions = useStore(state => state.loadTransactions);
  const cred = useStore(state => state.credential);

  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (_event, newVal) => {
    setTabIndex(newVal);
  };

  useEffect(() => {
    loadTransactions(cred);
  }, [cred]);

  return (
    <div>
      <div>
        <Tabs
          centered
          value={tabIndex}
          onChange={handleChange}
          aria-label="Transactions">
          <Tab label="All" />
          <Tab label="Today" />
          <Tab label="This Week" />
          <Tab label="This Month" />
        </Tabs>
      </div>

      <Panel tabIndex={tabIndex} id={0}>
        <TransList transactions={transactions} />
      </Panel>

      <Panel tabIndex={tabIndex} id={1}>
        <Today transactions={transactions} />
      </Panel>

      <Panel tabIndex={tabIndex} id={2}>
        <ThisWeek transactions={transactions} />
      </Panel>

      <Panel tabIndex={tabIndex} id={3}>
        <ThisMonth transactions={transactions} />
      </Panel>
      <AddTrans />
    </div>
  );
};

export default Transactions;
