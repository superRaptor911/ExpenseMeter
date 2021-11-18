import React, {Suspense, lazy, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {loginUser} from './api/api';
import Header from './components/Header';
import Loading from './components/Loading';
import SideDrawer from './components/SideDrawer';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {ROUTES} from './Routes';
import {useStore} from './store';

const Transactions = lazy(() => import('./pages/Transactions'));
const Categories = lazy(() => import('./pages/Categories'));
const Summary = lazy(() => import('./pages/Summary'));

function App() {
  const cred = useStore(state => state.credential);
  const setCred = useStore(state => state.setCred);

  useEffect(() => {
    if (cred) {
      loginUser(cred.name, cred.password).then(result => {
        if (!(result && result.status)) {
          setCred(null);
        }
      });
    }
  }, []);

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

          <Route exact path={ROUTES.register}>
            <Register />
          </Route>

          {cred && (
            <>
              <Route exact path={ROUTES.dashboard}>
                <Dashboard />
              </Route>

              <Suspense fallback={<Loading />}>
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
