import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';

class Header extends React.Component {
  render() {
    return (
      <AppBar position="fixed" className="nav-bar">
        <Toolbar variant="dense">
        <span>
          <Link to = "/website" >
            Home
          </Link>
        </span>
        <span className="right-items">
          <Link to = "/about" >
            About
          </Link>
        </span>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header