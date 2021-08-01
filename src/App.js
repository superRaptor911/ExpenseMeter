import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import LoginPageMobile from './pages/LoginPageMobile';
import SignupPage from './pages/SignupPage';
import SignupMobile from './pages/SignupPageMobile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
