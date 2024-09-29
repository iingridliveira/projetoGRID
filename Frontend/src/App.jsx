import React from 'react';
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit/AuthProvider';
import RoutesComponent from './routes';

const store = createStore({
    authName:'_auth',
    authType:'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });

const App = () => {
  return (
    <AuthProvider store={store}>
            <RoutesComponent/>    
     </AuthProvider>
  )
}



export default App;

