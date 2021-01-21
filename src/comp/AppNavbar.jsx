import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import './AppNavbar.css';

class AppNavbar extends React.Component {
    render() { 
        return ( 
          <div className="nav">
      <Navbar defaultActiveKey="/home" className="flex-column" >
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link href="/home">Active</Nav.Link>

    </Navbar>
          </div>



         );
    }
}
 
export default AppNavbar;
