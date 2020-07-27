import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Header from './components/header.js';
import placeholderPage from './components/underconstruction.js';
import history from './components/history';
import Homepage from './components/homePage.js'
import aboutPage from './components/about.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header/>
          <Switch>
            <Route path="/website" exact component={Homepage} />
            <Route path="/about" exact component={aboutPage} />
            <Route path="/website/placeholder" exact component={placeholderPage} />
            <Route path="*" component={placeholderPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
