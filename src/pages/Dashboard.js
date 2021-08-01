import React, {useEffect, useState} from 'react';
import {setUserState} from '../shared/Authentication';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUserState(setUser);
  }, []);

  return (
    <div>
      <div>This is dashboard</div>
      <div>User = {user && user.uid}</div>
    </div>
  );
};

export default Dashboard;
