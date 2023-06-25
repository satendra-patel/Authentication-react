import { Switch, Route, Redirect } from 'react-router-dom';
import React,{useContext} from 'react';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';

function App() {
  const AuthCtx=useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!AuthCtx.isLoggenIn && <Route path='/auth'>
          <AuthPage />
        </Route>}
        {AuthCtx.isLoggenIn && <Route path='/profile'>
          <UserProfile />
        </Route>}
        <Route path='*'>
          <Redirect  to='/'/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
