/* eslint-disable react/prop-types */
import {Container} from '@mui/material';
import {isThisMonth} from 'date-fns';
import React from 'react';
import TransItem from './TransItem';

const ThisMonth = ({transactions}) => {
  return (
    <Container
      sx={{
        maxHeight: '70vh',
        minHeight: '50vh',
        overflowY: 'auto',
      }}>
      {transactions &&
        transactions
          .filter(item => isThisMonth(new Date(item.date)))
          .map((item, id) => <TransItem key={id} transaction={item} />)}
    </Container>
  );
};

export default ThisMonth;
