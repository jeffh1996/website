import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Header from './header.js';
import testPage from './page2.js';
import history from './history';
import Homepage from './homePage.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header/>
          <Switch>
            <Route path="/website" exact component={Homepage} />
            <Route path="/website/pagetwo" exact component={testPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
