import React from "react";
import "../style/header.css";
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar } from '@material-ui/core';

class Header extends React.Component {
  render() {
    return (
      <AppBar position="sticky" className="nav-bar">
        <Toolbar variant="dense">
        <span>
          <Link to = "/website"  className="button-links">
            <Button>
                Home
            </Button>
          </Link>
        </span>
        <span className="right-menu">
          <Link to = "/resume" className="button-links">
            <Button>
                Resume
            </Button>            
          </Link>
          <Link to = "/projects" className="button-links">
            <Button>
                Projects
            </Button>
          </Link>
          <Link to = "/about" className="button-links">
            <Button>
                About Me
            </Button>
          </Link>
        </span>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header