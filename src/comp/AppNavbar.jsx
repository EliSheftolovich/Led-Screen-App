import {Nav, Navbar } from 'react-bootstrap';
import './AppNavbar.css';

  const AppNavbar = function(props) {
    const {activeUser, handleLogout} = props;

    const loginEl = ( ! activeUser)  ?  <Nav.Link href="/#/login">התחבר</Nav.Link>  : null;
    const signupEl = ( ! activeUser) ?  <Nav.Link href="/#/signup">הרשם</Nav.Link>  : null;
    const logoutEl = (activeUser) ?  <Nav.Link onClick={handleLogout}>התנתק</Nav.Link> : null;
        return ( 
          <div className="nav">
    <Navbar className="flex-column" >
    {signupEl}
     {loginEl}
      <Nav.Link href="/#/PersonalArea">אזור אישי</Nav.Link>
      <Nav.Link href="/#/ScreenBySize">מסך לד לפי מידות</Nav.Link>
      <Nav.Link href="/#/ScreenByAngle">מסך לד לפי זוית</Nav.Link>
      <Nav.Link href="/#/Info">הסבר על מסכי לד</Nav.Link>
      <Nav.Link href="/#/ContactUs">צור קשר</Nav.Link>
      
      {logoutEl}
      <Nav className="ml-auto">

    </Nav>
    </Navbar>
          </div>
          
         );
    
}
 
export default AppNavbar;
