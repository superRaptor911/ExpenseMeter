/* eslint-disable react/prop-types */
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

const ItemCard = ({name, link}) => {
  return (
    <Link to={link}>
      <Paper sx={{width: 300, margin: 10, display: 'flex', height: 250}}>
        <div
          style={{
            width: 'max-content',
            height: 'max-content',
            margin: 'auto',
          }}>
          <Typography>{name}</Typography>
        </div>
      </Paper>
    </Link>
  );
};

const Cards = [
  {name: 'Transactions', link: '/transactions'},
  {name: 'Categories', link: '/categories'},
  {name: 'Budget', link: '/budget'},
];

const Dashboard = () => {
  return (
    <div>
      <div style={{display: 'flex', margin: 'auto'}}>
        {Cards.map((item, id) => (
          <ItemCard name={item.name} link={item.link} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
