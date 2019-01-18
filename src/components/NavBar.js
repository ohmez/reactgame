import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Nav>
            <NavItem>
                <NavLink active href="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/">Restart</NavLink>
            </NavItem>
        </Nav>
      </div>
    );
  }
}