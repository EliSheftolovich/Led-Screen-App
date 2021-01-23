import React, { Component } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import './AppNavbar.css';

class AppNavbar extends Component {
    render() { 
        return ( 
          <div className="nav">
      <Navbar defaultActiveKey="/home" className="flex-column" >
      <Nav.Link href="">התחבר</Nav.Link>
      <Nav.Link href="/#/PersonalArea">אזור אישי</Nav.Link>
      <Nav.Link href="/#/ScreenBySize">מסך לד לפי מידות</Nav.Link>
      <Nav.Link href="/#/ScreenByAngle">מסך לד לפי זוית</Nav.Link>
      <Nav.Link href="/#/Info">הסבר על מסכי לד</Nav.Link>
      <Nav.Link href="/#/ContactUs">צור קשר</Nav.Link>

    </Navbar>
          </div>



         );
    }
}
 
export default AppNavbar;
