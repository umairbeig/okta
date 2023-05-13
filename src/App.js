import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Homepage from './components/pages/Homepage';
import Login from './components/auth/Login';
import Staff from './components/pages/Staff';
import { configokta } from "./configokta"
import './App.css';
import Navbar from './components/layouts/Navbar';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const oktaAuth = new OktaAuth(configokta);

const App = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Staff login</p>

        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home"></Redirect>
            </Route>
            <Route path="/home" component={Homepage} />

            <Route path='/login' render={
              () => <Login config={configokta} />
            } />
            <Route path="/login/callback" component={LoginCallback} />
            <SecureRoute path="/staff" component={Staff} />
          </Switch>
        </Security>
      </header>
    </div>
  );
};

export default App;
