import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
