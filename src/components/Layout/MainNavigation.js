import { Link } from 'react-router-dom';
import React from 'react';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authctx=useContext(AuthContext);
  const isloggedIn=authctx.isLoggenIn;
  const logout=()=>{
    authctx.logout();
         
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isloggedIn &&
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          }
          {isloggedIn&&

          <li>
            <Link to='/profile'>Profile</Link>
          </li> }
          { isloggedIn &&
          <li>
            <button onClick={logout}>Logout</button>
          </li>
             }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
