import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Contact" component={Contact}></Route>
          <Route exact path="/About" component={About}></Route>
          {/* <Route exact path="/404" component={NotFound}></Route> */}
          {/* <Route><Redirect to="/404" /></Route> */}
        </Switch>
      </Router>
    </>
  )
}

export default App;
