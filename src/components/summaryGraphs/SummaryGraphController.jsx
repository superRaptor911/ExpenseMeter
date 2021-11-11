/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SummaryBarGraph from './SummaryBarGraph';
import CategoryGraph from './CategoryGraph';

const Panel = ({tabIndex, id, children}) => {
  return <>{tabIndex === id && children}</>;
};

const SummaryGraphController = ({transactions}) => {
  const [tabIndex, setTabIndex] = useState(0);

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
          aria-label="Graphs">
          <Tab label="Expenses" />
          <Tab label="Categories" />
        </Tabs>
      </div>

      <Panel tabIndex={tabIndex} id={0}>
        <SummaryBarGraph transactions={transactions} />
      </Panel>

      <Panel tabIndex={tabIndex} id={1}>
        <CategoryGraph transactions={transactions} />
      </Panel>
    </div>
  );
};

export default SummaryGraphController;
