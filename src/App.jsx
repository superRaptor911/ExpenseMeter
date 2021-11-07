import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import SideDrawer from './components/SideDrawer';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import {ROUTES} from './Routes';
import {useStore} from './store';

const Transactions = lazy(() => import('./pages/Transactions'));
const Categories = lazy(() => import('./pages/Categories'));
const Summary = lazy(() => import('./pages/Summary'));

function App() {
  const cred = useStore(state => state.credential);
  return (
    <div className="App">
      <Router>
        <Header />
        <SideDrawer />
        <Switch>
          <Route exact path={ROUTES.home}>
            <Home />
          </Route>

          <Route exact path={ROUTES.login}>
            <Login />
          </Route>

          {cred && (
            <>
              <Route exact path={ROUTES.dashboard}>
                <Dashboard />
              </Route>

              <Suspense fallback={<div>Loading...</div>}>
                <Route
                  exact
                  path={ROUTES.transactions}
                  component={Transactions}
                />
                <Route exact path={ROUTES.categories} component={Categories} />
                <Route exact path={ROUTES.summary} component={Summary} />
              </Suspense>
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
