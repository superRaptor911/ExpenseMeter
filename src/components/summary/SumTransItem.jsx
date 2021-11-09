/* eslint-disable react/prop-types */
import {Typography} from '@mui/material';
import React from 'react';

const SumTransItem = ({trans}) => {
  return (
    <div
      style={{display: 'flex', justifyContent: 'space-between', padding: 10}}>
      <Typography sx={{textTransform: 'capitalize'}}>{trans.title}</Typography>
      <Typography sx={{color: trans.transType === 'EXPENSE' ? 'red' : 'green'}}>
        ₹{trans.amount}
      </Typography>
    </div>
  );
};

export default SumTransItem;
