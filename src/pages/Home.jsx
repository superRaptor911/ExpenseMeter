import {Button, Typography} from '@mui/material';
import React from 'react';
import {useHistory} from 'react-router';
import mainImg from '../media/images/piggyWithSheet.png';
import {ROUTES} from '../Routes';

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <div style={{width: 'max-content', margin: 'auto', marginTop: 30}}>
        <img src={mainImg} alt="gg" />
      </div>
      <Typography textAlign="center">
        Save money by tracking your spending! Use ExpenseMeter to track your
        spending
      </Typography>

      <div style={{width: 'max-content', margin: 'auto', marginTop: 30}}>
        <Button
          variant="contained"
          onClick={() => {
            history.push(ROUTES.register);
          }}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Home;
