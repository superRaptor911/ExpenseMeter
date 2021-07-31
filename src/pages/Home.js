import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>This Is Home Page</div>

      <Link to="/login">Login</Link>

      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Home;
