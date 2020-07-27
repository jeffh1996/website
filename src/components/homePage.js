import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import linkedinLogo from '../assets/LI-In-Bug.png'

class Homepage extends React.Component {
  render() {
    return (
      <div className="body">
        Placeholder Image
        <img src={"https://i.pinimg.com/originals/20/96/a8/2096a814ec36007159260d1e8de5b6ae.jpg"} className="App-logo" alt="logo" />
        <p>
          Welcome to my website
        </p>
        <a href="https://www.linkedin.com/in/jeffery-huo-115165145/" >
          <img src={linkedinLogo} className="App-logo" alt="logo"/>
        </a>
      </div>
    )
  }
}

export default Homepage