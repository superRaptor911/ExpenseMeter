import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../components/AuthProvider';

const Home = () => {
  const history = useHistory();
  const user = useAuth();

  if (user) {
    console.log('Redirecting to dahboard');
    history.push('/dashboard');
  }
  return (
    <div>
      <div>This Is Home Page</div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Home;
