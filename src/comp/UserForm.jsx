import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class UserForm extends Component {


    render() { 
        return (
            <Form>
                Hello
                <h6>קבינט (קוביה)</h6>
            <Form.Group controlId="formBasicRange">
                <Form.Label>אורך</Form.Label>
                <Form.Control type="number" />
            </Form.Group>

            <Form.Group controlId="formBasicRange">
                <Form.Label>רוחב</Form.Label>
                <Form.Control type="number" />
            </Form.Group>

            <Form.Group controlId="formBasicRange">
                <Form.Label>Range</Form.Label>
                <Form.Control type="range" />
            </Form.Group>


            </Form>

          );
    }
}
 
export default UserForm;