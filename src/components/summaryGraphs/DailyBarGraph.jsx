/* eslint-disable react/prop-types */
import {Paper} from '@mui/material';
import {format} from 'date-fns';
import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const groupTransData = transactions => {
  let data = [];
  let grp = {};
  transactions &&
    transactions.forEach(item => {
      const name = format(new Date(item.date), 'dd-MM-yyyy');
      if (grp[name]) {
        grp[name].push(item);
      } else {
        grp[name] = [item];
      }
    });

  for (const i in grp) {
    const trans = grp[i];
    let expense = 0;
    let income = 0;

    trans.forEach(item => {
      if (item.transType === 'EXPENSE') {
        expense += item.amount;
      } else {
        income += item.amount;
      }
    });

    data.push({name: i, expense: expense, income: income});
  }
  return data;
};

const DailyBarGraph = ({transactions}) => {
  const data = groupTransData(transactions);
  return (
    <Paper sx={{width: 'max-content', margin: 'auto'}}>
      <BarChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="expense" fill="#8884d8" />
        <Bar dataKey="income" fill="#82ca9d" />
      </BarChart>
    </Paper>
  );
};

export default DailyBarGraph;
