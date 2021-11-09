/* eslint-disable react/prop-types */
import {Typography} from '@mui/material';
import React from 'react';
import {getCategoryColor, getCategoryTitle} from '../transactions/helper';
import Tooltip from '@mui/material/Tooltip';

const SumTransItem = ({trans, categories}) => {
  return (
    <Tooltip title={getCategoryTitle(trans.category, categories)} followCursor>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 10,
          borderColor: getCategoryColor(trans.category, categories),
          borderRadius: 4,
          borderWidth: 2,
          borderStyle: 'solid',
          marginBottom: 5,
        }}>
        <Typography
          sx={{
            textTransform: 'capitalize',
          }}>
          {trans.title}
        </Typography>
        <Typography
          sx={{color: trans.transType === 'EXPENSE' ? 'red' : 'green'}}>
          ₹{trans.amount}
        </Typography>
      </div>
    </Tooltip>
  );
};

export default SumTransItem;
