/* eslint-disable react/prop-types */
import {Typography} from '@mui/material';
import {Paper} from '@mui/material/Paper';
import React from 'react';

const TransItem = ({title, transType, amount, note, category}) => {
  return (
    <Paper sx={{pading: 10}}>
      <div>
        <Typography>{title}</Typography>
      </div>

      <div style={{display: 'flex'}}>
        <Typography>{amount}</Typography>
        <Typography>{transType}</Typography>
      </div>

      <Typography>{note}</Typography>

      <Typography>{category}</Typography>
    </Paper>
  );
};

export default TransItem;
