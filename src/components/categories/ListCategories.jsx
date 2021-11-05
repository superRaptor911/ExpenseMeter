/* eslint-disable react/prop-types */
import {Typography} from '@mui/material';
import React from 'react';
import CategoryItem from './CategoryItem';

const ListCategories = ({categories}) => {
  const emptyCategories = !categories || categories.length === 0;
  return (
    <div
      style={{
        maxHeight: '70vh',
        minHeight: '50vh',
        overflowY: 'auto',
        marginTop: 50,
      }}>
      {emptyCategories && (
        <Typography variant="h6" textAlign="center">
          Add new category by clicking + button
        </Typography>
      )}
      {categories &&
        categories.map((item, id) => <CategoryItem key={id} item={item} />)}
    </div>
  );
};

export default ListCategories;
