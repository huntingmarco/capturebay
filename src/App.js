import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import ContactUsPage from './pages/contactus';
import PortfolioPage from './pages/portfolio';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path='/contactus' component={ContactUsPage} exact />
        <Route path='/portfolio' component={PortfolioPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
