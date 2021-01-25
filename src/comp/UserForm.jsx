import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class UserForm extends Component {

    render() { 
        return (
            <Form>
                <h6>קבינט (קוביה)</h6>
            <Form.Group controlId="cabinetLength">
                <Form.Label className="mx-auto">אורך (ס"מ)</Form.Label>
                <Form.Control  
                 value={this.props.cabinetLength} 
                 onChange={this.props.cabinetLengthChange}
                 min="5" max="200"
                size="sm" type="range" />
                
                <Form.Control 
                value={this.props.cabinetLength} 
                onChange={this.props.cabinetLengthChange}
                min="5" max="200"
                size="sm" type="number" />
            </Form.Group>

            <Form.Group controlId="cabinetWidth">
                <Form.Label className="me-2">רוחב (ס"מ)</Form.Label>
                <Form.Control  
                 value={this.props.cabinetWidth} 
                 onChange={this.props.cabinetWidthChange}
                 min="5" max="200"
                size="sm" type="range" />
                
                <Form.Control 
                value={this.props.cabinetWidth} 
                onChange={this.props.cabinetWidthChange}
                min="5" max="200"
                size="sm" type="number" />
            </Form.Group>

            <Form.Group controlId="pitch">
                <Form.Label className="my-1 mr-2">פיטץ'</Form.Label>
                <Form.Control as="select" className="my-1 m-2" custom 
                value={this.props.cabinetPitch} 
                onChange={this.props.cabinetPitchChange}
                >
                    <option value={500/128}>3.9</option>
                    <option value={500/192}>2.6</option>
                    <option value={500/80}>6.2</option>
                    <option value={500/50}>10</option>

                </Form.Control>
            </Form.Group>


            <h6>מסך</h6>
            <Form.Group controlId="cabinetsHor">
                <Form.Label className="me-2">מספר קוביות לאורך</Form.Label>
                <Form.Control  
                 value={this.props.cabinetsHor} 
                 onChange={this.props.cabinetsHorChange}
                 min="1" max="200"
                size="sm" type="range" />
                
                <Form.Control 
                value={this.props.cabinetsHor} 
                onChange={this.props.cabinetsHorChange}
                min="1" max="200"
                size="sm" type="number" />
            </Form.Group>

            <Form.Group controlId="cabinetsVer">
                <Form.Label className="me-2">מספר קוביות לגובה</Form.Label>
                <Form.Control  
                 value={this.props.cabinetsVer} 
                 onChange={this.props.cabinetsVerChange}
                 min="1" max="200"
                size="sm" type="range" />
                
                <Form.Control 
                value={this.props.cabinetsVer} 
                onChange={this.props.cabinetsVerChange}
                min="1" max="200"
                size="sm" type="number" />
            </Form.Group>

            </Form>

          );
    }
}
 
export default UserForm;