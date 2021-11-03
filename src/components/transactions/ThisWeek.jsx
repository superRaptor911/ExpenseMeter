/* eslint-disable react/prop-types */
import {Container} from '@mui/material';
import {isThisWeek} from 'date-fns';
import React from 'react';
import TransItem from './TransItem';

const ThisWeek = ({transactions}) => {
  return (
    <Container
      sx={{
        maxHeight: '70vh',
        minHeight: '50vh',
        overflowY: 'auto',
      }}>
      {transactions &&
        transactions
          .filter(item => isThisWeek(new Date(item.date)))
          .map((item, id) => <TransItem key={id} transaction={item} />)}
    </Container>
  );
};

export default ThisWeek;
