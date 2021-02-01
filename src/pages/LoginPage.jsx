import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import users from '../data/users.json';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        
        // Controlled component steps
        // 1. Add key to state
        // 2. map to value
        // 3. update using onChange
        this.state = {
            email: '',
            pwd: ''
        }
    }
    validateLogin = () => {
        for( let i = 0; i< users.length; i++) {
            if( users[i].pwd == this.state.pwd && users[i].email == this.state.email) {
                this.props.handleLogin(users[i]);
                window.location.href = '/#/ScreenBySize'
                return;
                // We will login the user
                // return the found user
        }
  
        alert('user not found');
        // alert that the user does not exist
        }
    }
    render() {
        // Steps to login
        // 1. if the user exists in the user.json?
        // 2. if the user password matches
        // 3. update the activeUser state in <App> (using handleLogin() prop)
        return (
            <Col className="c-login-page col-6 m-auto">
                <h1>התחבר</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>כתובת email:</Form.Label>
                <Form.Control type="email" 
                onChange={(event) => {this.setState({email: event.target.value})}} 
                placeholder="הכנס כתובת email" value={this.state.email} />
                </Form.Group>
                
                <Form.Group controlId="formBasicPassword">
                <Form.Label>ססמא:</Form.Label>
                <Form.Control type="password"
                 onChange={(event) => {this.setState({pwd: event.target.value})}} 
                 placeholder="ססמא"  value={this.state.pwd}/>
                </Form.Group>
                <Button onClick={this.validateLogin}  variant="primary" type="button" className= "m-2">
                התחבר
                </Button>
                <Button href="/#/signup" variant="primary" type="button" className= "m-2">
                הרשם
                </Button>
            </Form> 
            </Col>
            )
        }
    }
    export default LoginPage;