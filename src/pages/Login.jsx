import React, {useRef, useState} from 'react';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {loginUser} from '../api/api';
import {useStore} from '../store';
import {useHistory} from 'react-router-dom';
import {ROUTES} from '../Routes';
import Alert from '@mui/material/Alert';

const Login = () => {
  const history = useHistory();
  const nameRef = useRef('');
  const passwordRef = useRef();

  const setCred = useStore(state => state.setCred);

  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const username = nameRef.current.value;
    const password = passwordRef.current.value;

    const result = await loginUser(username, password);
    if (result && result.status) {
      console.log('GG!');
      setCred({name: username, password: password});
      history.push(ROUTES.dashboard);
    } else {
      setError(result.message);
    }
  };

  return (
    <div>
      <Paper
        style={{
          maxWidth: 500,
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          padding: 20,
          marginTop: '10%',
        }}>
        <Input placeholder="Username" inputRef={nameRef} />
        <div style={{marginTop: 40}} />
        <Input placeholder="Password" inputRef={passwordRef} type="password" />
        <div style={{marginTop: 40}} />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        {error && (
          <Alert severity="error" sx={{marginTop: 2}}>
            {error}
          </Alert>
        )}
      </Paper>
    </div>
  );
};

export default Login;
