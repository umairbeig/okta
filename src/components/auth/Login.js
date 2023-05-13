import React from 'react';
import { Redirect } from 'react-router-dom';
import OktaSignin from '././OktaSignin';
import { useOktaAuth } from '@okta/okta-react';

const Login = ( config ) => {
  const { oktaAuth, authState } = useOktaAuth();
  const onSuccess = (tokens) => {
    oktaAuth.handleLoginRedirect(tokens);
  
  };

  const onError = (err) => {
    console.log('Sign in error:', err);
  };
    

  if (!authState) {
    return <div>Loading ... </div>;
  }
  
  return authState.isAuthenticated ?

    <Redirect to={{ pathname: '/' }}/> 
    :
    <OktaSignin config={config} onSuccess={onSuccess} onError={onError}/>;
};

export default Login;
