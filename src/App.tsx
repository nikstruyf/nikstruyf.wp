import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './App.css';
import TopNavBar from './components/topNavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Resume from './pages/Resume';
import Skills from './pages/Skills'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/resume" component={Resume}></Route>
          <Route exact path="/skills" component={Skills}></Route>
          {/* <Route exact path="/404" component={NotFound}></Route> */}
          {/* <Route><Redirect to="/404" /></Route> */}
        </Switch>
      </Router>
    </>
  )
}

export default App;
