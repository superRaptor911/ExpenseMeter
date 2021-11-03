import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Transactions from './pages/Transactions';
import {ROUTES} from './Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.home}>
            <Home />
          </Route>

          <Route exact path={ROUTES.login}>
            <Login />
          </Route>

          <Route exact path={ROUTES.dashboard}>
            <Dashboard />
          </Route>

          <Route exact path={ROUTES.transactions}>
            <Transactions />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
