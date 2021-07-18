import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MyProfile from './MyProfile';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav">
            <li>
              <Link to="/myprofile">My Profile</Link>
            </li>
            &nbsp;•&nbsp;
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <div className="display">
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/myprofile">
              <MyProfile />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
