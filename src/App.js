import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Header from './header.js';
import placeholderPage from './underconstruction.js';
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
            <Route path="/website/placeholder" exact component={placeholderPage} />
            <Route path="*" component={placeholderPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
