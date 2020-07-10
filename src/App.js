import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom'
import LoginPage from './views/pages/LoginPage'
import HomePage from './views/pages/HomePage'
import DefaultLayout from './views/layouts/DefaultLayout';
import PrivateRoute from './views/routers/PrivateRoute'

function App(){
  return(
    <Router>
      {/* header */}
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Home Page</Link>
            </li>
          </ul>
        </nav>
      </div> */}
      {/* body */}
      <Switch>
          <Route path="/login"><LoginPage/></Route>
          <PrivateRoute path="/">
              <DefaultLayout/>
          </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
