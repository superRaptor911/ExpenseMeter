/* eslint-disable react/prop-types */
import {Container} from '@mui/material';
import React from 'react';
import TransItem from './TransItem';

const TransList = ({transactions}) => {
  return (
    <Container
      sx={{
        maxHeight: '70vh',
        overflowY: 'auto',
      }}>
      {transactions &&
        transactions.map((item, id) => (
          <TransItem key={id} transaction={item} />
        ))}
    </Container>
  );
};

export default TransList;
