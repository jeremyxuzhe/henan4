import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="container">
        <Navbar light expand="md">
          <Link to='/' className="navbar-brand">河南同乡会</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/' className="nav-link">首页</Link>
              </NavItem>
              <NavItem>
                <Link to='/introduction' className="nav-link">介绍</Link>
              </NavItem>
              <NavItem>
                <Link to='/' className="nav-link">活动</Link>
              </NavItem>
              <NavItem>
                <Link to='/contact' className="nav-link">联系</Link>
              </NavItem>
              {/*<NavItem>
                <Link to='/components' className="nav-link">Components</Link>
              </NavItem>*/}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
