import React, {useEffect, useState} from 'react';
import {useAuth} from '../components/AuthProvider';
import {setUserState} from '../shared/Authentication';

const Dashboard = () => {
  const user = useAuth();

  return (
    <div>
      <div>This is dashboard</div>
      <div>User = {user && user.uid}</div>
    </div>
  );
};

export default Dashboard;
