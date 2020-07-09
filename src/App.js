import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom'
import LoginPage from './views/pages/LoginPage'
import HomePage from './views/pages/HomePage'

function App(){
  return(
    <Router>
      {/* header */}
      <div>
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
      </div>
      {/* body */}
      <Switch>
          <Route path="/login"><LoginPage/></Route>
          <Route path="/"><HomePage/></Route>
      </Switch>
    </Router>
  );
}

export default App;
