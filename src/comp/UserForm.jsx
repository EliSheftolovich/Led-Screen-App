import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class UserForm extends Component {

    render() { 
        return (
            <Form>
                <h6>קבינט (קוביה)</h6>
            <Form.Group controlId="formBasicRange">
                <Form.Label className="me-2">אורך (ס"מ)</Form.Label>
                <Form.Control  
                 value={this.props.cabinetLength} 
                 onChange={this.props.cabinetLengthChange}
                 min="1" max="200"
                size="sm" type="range" />
                
                <Form.Control 
                value={this.props.cabinetLength} 
                onChange={this.props.cabinetLengthChange}
                min="1" max="5"
                size="sm" type="number" />
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

            {/* <Form.Group controlId="formBasicRange">
                <Form.Label>Range</Form.Label>

            </Form.Group> */}


            </Form>

          );
    }
}
 
export default UserForm;