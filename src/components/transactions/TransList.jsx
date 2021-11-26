/* eslint-disable react/prop-types */
import {Button, Container} from '@mui/material';
import React, {useState} from 'react';
import TransItem from './TransItem';

const TransList = ({transactions}) => {
  const [limit, setLimit] = useState(20);

  return (
    <Container
      sx={{
        maxHeight: '70vh',
        minHeight: '50vh',
        overflowY: 'auto',
      }}>
      {transactions &&
        transactions
          .slice(0, limit)
          .map((item, id) => <TransItem key={id} transaction={item} />)}
      <div style={{width: 'max-content', margin: 'auto'}}>
        {transactions && transactions.length > limit && (
          <Button
            onClick={() => {
              setLimit(limit + 10);
            }}>
            Load More
          </Button>
        )}
      </div>
    </Container>
  );
};

export default TransList;
