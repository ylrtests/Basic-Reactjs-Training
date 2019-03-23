import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from './Routes';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
        <Router>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/">Inicio</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/usuarios">Usuarios</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/blog">Blog</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <div className="container-fluid">
            <div><h1>esto aparece en todos</h1></div>
            <Routes />
          </div>
        </Router>
    );
  }
}

export default App;
