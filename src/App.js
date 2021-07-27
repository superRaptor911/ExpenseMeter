import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SignupPageDesktop from './pages/SignipPageDesktop';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" />
        <Route path="/signup" component={SignupPageDesktop} />
        <Route path="/login" component={LoginPage} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
