/* eslint-disable react/prop-types */
import React from 'react';
import TransItem from './TransItem';

const TransList = ({transactions}) => {
  return (
    <div>
      {transactions &&
        transactions.map((item, id) => (
          <TransItem key={id} transaction={item} />
        ))}
    </div>
  );
};

export default TransList;
