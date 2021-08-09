import React, {useEffect, useState} from 'react';
import {useAuth} from '../components/AuthProvider';
import {setUserState} from '../shared/Authentication';
import {getUserInfo} from '../shared/UserDatabase';
import {createTestUser, testFirestore} from '../temp/firebase-temp';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const user = useAuth();

  useEffect(() => {
    getUserInfo(user.uid).then(data => {
      setUsername(data.username);
    });
  });

  return (
    <div>
      <h2>Welcome {username}</h2>
      <div>User = {user && user.uid}</div>
    </div>
  );
};

export default Dashboard;
