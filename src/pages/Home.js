import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {setUserState} from '../shared/Authentication';

const Home = () => {
  const history = useHistory();
  const [user, setUser] = useState();

  useEffect(() => {
    setUserState(setUser);
  }, []);

  useEffect(() => {
    if (user) {
      console.log('Redirecting to dahboard');
      history.push('/dashboard');
    }
  }, [user]);

  return (
    <div>
      <div>This Is Home Page</div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Home;
