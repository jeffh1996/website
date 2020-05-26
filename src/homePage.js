import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class Homepage extends React.Component {
  render() {
    return (
      <div className="body">
        <img src={"https://i.pinimg.com/originals/20/96/a8/2096a814ec36007159260d1e8de5b6ae.jpg"} className="App-logo" alt="logo" />
        <p>
          body text
        </p>
        <Link to = "/website/pagetwo" >
          Go to other page
        </Link>
      </div>
    )
  }
}

export default Homepage