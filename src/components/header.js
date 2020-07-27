import React from "react";
import "../style/header.css";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';

class Header extends React.Component {
  render() {
    return (
      <AppBar position="sticky" className="nav-bar">
        <Toolbar variant="dense">
        <span>
          <Link to = "/website" >
            Home
          </Link>
        </span>
        <span className="right-items">
          <Link to = "/projects" className="right-items">
            Projects
          </Link>
          <Link to = "/about" className="right-items">
            About Me
          </Link>
        </span>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header