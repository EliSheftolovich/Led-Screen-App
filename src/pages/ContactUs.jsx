import React, { Component } from 'react';
import { Button, Col, Form} from 'react-bootstrap';

class ContactUs extends Component {
  render() { 
    return ( 
    
      

      <Col xs={10} style={{width: "500px", margin:"auto"}}>
      <h3>צור קשר</h3>
            <Form>

            <Form.Group controlId="Fname">
                <Form.Label>שם פרטי</Form.Label>
                <Form.Control type="text" placeholder="שם פרטי" />
            </Form.Group>

            <Form.Group controlId="Lname">
                <Form.Label>שם משפחה</Form.Label>
                <Form.Control type="text" placeholder="שם משפחה" />
            </Form.Group>

            <Form.Group controlId="Lname">
                <Form.Label>טלפון</Form.Label>
                <Form.Control type="number" placeholder="טלפון" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={3} />
            </Form.Group>

 
            <Button variant="primary" type="submit" className="mt-3">
                שלח
            </Button>
            </Form>
            
            </Col>

      );
  }
}
 

export default ContactUs;

