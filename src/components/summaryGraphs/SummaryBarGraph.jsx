/* eslint-disable react/prop-types */
import {Paper} from '@mui/material';
import {format} from 'date-fns';
import React, {useState} from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import BarGraphMod from './BarGraphMod';

const groupTransData = (transactions, graphType) => {
  let data = [];
  let grp = {};
  transactions &&
    transactions.forEach(item => {
      let name = '';
      if (graphType === 'DAILY') {
        name = format(new Date(item.date), 'dd-MM-yyyy');
      } else {
        name = format(new Date(item.date), 'MMM-yyyy');
      }
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

const SummaryBarGraph = ({transactions}) => {
  const [graphType, setGraphType] = useState('DAILY');
  const [number, setNumber] = useState(7);

  const data = groupTransData(transactions, graphType);

  return (
    <div>
      <Paper sx={{width: 'max-content', margin: 'auto', marginTop: 8}}>
        <BarChart width={1200} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expense" fill="#8884d8" />
          <Bar dataKey="income" fill="#82ca9d" />
        </BarChart>
      </Paper>

      <BarGraphMod
        graphType={graphType}
        setGraphType={setGraphType}
        number={number}
        setNumber={setNumber}
      />
    </div>
  );
};

export default SummaryBarGraph;
