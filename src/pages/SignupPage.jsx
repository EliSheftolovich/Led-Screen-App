import React from 'react';
import { Button, Form } from 'react-bootstrap';

class SignupPage extends React.Component {
    render() {
        return (
            <div style={{width: "500px", margin:"auto"}}>Signup Page
            <div><a href="/#/ScreenBySize"> חזור לעמוד הראשי</a></div>
            <Form>

            <Form.Group controlId="Fname">
                <Form.Label>שם פרטי</Form.Label>
                <Form.Control type="text" placeholder="שם פרטי" />
            </Form.Group>

            <Form.Group controlId="Lname">
                <Form.Label>שם משפחה</Form.Label>
                <Form.Control type="text" placeholder="שם משפחה" />
            </Form.Group>


            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
 
            <Button variant="primary" type="submit" className="mt-3">
                שלח
            </Button>
            </Form>
            
            </div>
        )
    }
}
export default SignupPage;