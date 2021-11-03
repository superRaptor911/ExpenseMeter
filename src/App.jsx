import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import {ROUTES} from './Routes';

const Transactions = lazy(() => import('./pages/Transactions'));

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

          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path={ROUTES.transactions} component={Transactions} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
