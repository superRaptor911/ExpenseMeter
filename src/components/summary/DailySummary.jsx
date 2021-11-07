/* eslint-disable react/prop-types */
import {Paper, Typography} from '@mui/material';
import React from 'react';
import {getTotalSpent} from './helper';

const DailySummary = ({dailyTransactions}) => {
  const transCount = dailyTransactions ? dailyTransactions.length : 0;
  const totalSpent = getTotalSpent(dailyTransactions);

  return (
    <Paper sx={{maxWidth: 800, margin: 'auto', padding: 2, marginTop: 5}}>
      <Typography variant="h5" textAlign="center">
        Daily Summary
      </Typography>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography>Total Transactions:</Typography>
        <Typography>{transCount}</Typography>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography>Total Spent:</Typography>
        <Typography>{totalSpent}</Typography>
      </div>
    </Paper>
  );
};

export default DailySummary;
