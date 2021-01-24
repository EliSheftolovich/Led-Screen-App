import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class UserForm extends Component {


    render() { 
        return (
            <Form>
                <h6>קבינט (קוביה)</h6>
            <Form.Group controlId="formBasicRange">
                <Form.Label>אורך</Form.Label>
                <Form.Control size="sm" type="number" />
            </Form.Group>

            <Form.Group controlId="formBasicRange">
                <Form.Label>רוחב</Form.Label>
                <Form.Control size="sm" type="number" />
            </Form.Group>

            <h6>מסך</h6>
            <Form.Group controlId="formBasicRange">
                <Form.Label>מספר קוביות באורך</Form.Label>
                <Form.Control size="sm" type="number" />
            </Form.Group>

            <Form.Group controlId="formBasicRange">
                <Form.Label>מספר קוביות ברוחב</Form.Label>
                <Form.Control size="sm" type="number" />
            </Form.Group>

            <Form.Group controlId="formBasicRange">
                <Form.Label>Range</Form.Label>
                <Form.Control size="sm" type="range" />
            </Form.Group>


            </Form>

          );
    }
}
 
export default UserForm;