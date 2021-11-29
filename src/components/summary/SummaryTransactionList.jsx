/* eslint-disable react/prop-types */
import {Button} from '@mui/material';
import React, {useState} from 'react';
import SumTransItem from './SumTransItem';

const SummaryTransactionList = ({transactions, categories}) => {
  const [limit, setLimit] = useState(5);

  const onLoadMore = () => {
    setLimit(limit + 5);
  };
  return (
    <div>
      {transactions &&
        transactions
          .slice(0, limit)
          .map(item => (
            <SumTransItem trans={item} key={item._id} categories={categories} />
          ))}

      {transactions && transactions.length > limit && (
        <div style={{width: 'max-content', margin: 'auto'}}>
          <Button onClick={onLoadMore}>Load More</Button>
        </div>
      )}
    </div>
  );
};

export default SummaryTransactionList;
