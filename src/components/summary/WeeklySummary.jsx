/* eslint-disable react/prop-types */
import {Paper, Typography} from '@mui/material';
import React from 'react';
import {getCategoryLimit, getTotalSpent} from './helper';

const WeeklySummary = ({weeklyTransactions, categories}) => {
  const transCount = weeklyTransactions ? weeklyTransactions.length : 0;
  const totalSpent = getTotalSpent(weeklyTransactions);
  const limit = getCategoryLimit(categories, 'WEEKLY');

  return (
    <Paper sx={{maxWidth: 800, margin: 'auto', padding: 2, marginTop: 5}}>
      <Typography variant="h5" textAlign="center">
        This Week
      </Typography>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography>Total Transactions:</Typography>
        <Typography>{transCount}</Typography>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography>Total Spent:</Typography>
        <Typography>₹{totalSpent}</Typography>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography>Limit:</Typography>
        <Typography>₹{limit}</Typography>
      </div>
    </Paper>
  );
};

export default WeeklySummary;
