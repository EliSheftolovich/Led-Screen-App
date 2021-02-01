import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

class SignupPage extends React.Component {
    render() {
        return (
            <Col style={{width: "500px", margin:"auto"}}>
                <h3>הרשם לאתר</h3>

            <div><a href="/#/ScreenBySize"> חזור לעמוד הראשי</a></div>
            <Form>

            <Form.Group controlId="Fname" className="mt-2">
                <Form.Label>שם פרטי</Form.Label>
                <Form.Control type="text" placeholder="שם פרטי" />
            </Form.Group>

            <Form.Group controlId="Lname" className="mt-2">
                <Form.Label>שם משפחה</Form.Label>
                <Form.Control type="text" placeholder="שם משפחה" />
            </Form.Group>


            <Form.Group controlId="formBasicEmail" className="mt-2">
                <Form.Label>כתובת אימייל</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-2">
                <Form.Label>ססמא</Form.Label>
                <Form.Control type="password" placeholder="ססמא" />
            </Form.Group>
 
            <Button variant="primary" type="submit" className="mt-2">
                שלח
            </Button>
            </Form>
            
            </Col>
        )
    }
}
export default SignupPage;