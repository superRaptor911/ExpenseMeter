import {Button, Typography} from '@mui/material';
import React, {useEffect} from 'react';
import {useHistory} from 'react-router';
import mainImg from '../media/images/piggyWithSheet.png';
import {ROUTES} from '../Routes';
import {useStore} from '../store';

const Home = () => {
  const history = useHistory();
  const cred = useStore(state => state.credential);

  useEffect(() => {
    if (cred) {
      history.push(ROUTES.dashboard);
    }
  }, []);

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
