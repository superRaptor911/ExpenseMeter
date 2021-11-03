import React, {useEffect, useState} from 'react';
import {useStore} from '../store';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Transactions = () => {
  const transactions = useStore(state => state.transactions);
  const loadTransactions = useStore(state => state.loadTransactions);
  const cred = useStore(state => state.credential);

  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (event, newVal) => {
    setTabIndex(newVal);
  };

  useEffect(() => {
    loadTransactions(cred);
  }, [cred]);

  return (
    <div>
      <div>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="basic tabs example">
          <Tab label="Transactions" />
          <Tab label="Today" />
          <Tab label="This Week" />
          <Tab label="This Month" />
        </Tabs>
      </div>
    </div>
  );
};

export default Transactions;
