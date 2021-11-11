/* eslint-disable react/prop-types */
import {Paper} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {useStore} from '../../store';
import BarGraphMod from './BarGraphMod';

const groupTransData = (transactions, categoryMap) => {
  let data = [];
  let grp = {};
  transactions &&
    transactions.forEach(item => {
      let name = categoryMap[item.category].title;
      name = name ? name : 'other';

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

const CategoryGraph = ({transactions}) => {
  const [number, setNumber] = useState(7);
  const [categoryMap, setCategoryMap] = useState(null);
  const [data, setData] = useState([]);
  const categories = useStore(state => state.categories);

  useEffect(() => {
    if (categories) {
      const map = {};
      categories.forEach(item => {
        map[item._id] = item;
      });
      setCategoryMap(map);
    }
  }, [categories]);

  useEffect(() => {
    if (transactions && categoryMap) {
      setData(groupTransData(transactions, categoryMap));
    }
  }, [transactions, categoryMap]);

  return (
    <div>
      <Paper sx={{width: 'max-content', margin: 'auto', marginTop: 4}}>
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

      <BarGraphMod number={number} setNumber={setNumber} />
    </div>
  );
};

export default CategoryGraph;
