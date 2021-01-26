import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class UserForm extends Component {

    render() { 
        const {cabinetWidth, cabinetHeight, cabinetPitch, cabinetsHor, cabinetsVer } = this.props;
        return (
            <Form>
                <h6>קבינט (קוביה)</h6>

                <Form.Group controlId="cabinetPitch" >
                <Form.Label className="m-2">פיטץ'</Form.Label>
                <Form.Control as="select" className="m-1" custom 
                value={cabinetPitch} 
                onChange={this.props.cabinetPitchChange}
                >
                    <option value={500/128}>3.9</option>
                    <option value={500/192}>2.6</option>
                    <option value={600/108}>5.5(קוביה ברוחב 60)</option>
                    <option value={500/80}>6.2</option>
                    <option value={500/50}>10</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="cabinetWidth">
                <Form.Label className="mx-auto">רוחב (ס"מ)</Form.Label>
                <Form.Control  
                 value={cabinetWidth} 
                 onChange={this.props.cabinetWidthChange}
                 min="5" max="200"
                size="sm" type="range" />
                
                <Form.Control 
                value={cabinetWidth} 
                onChange={this.props.cabinetWidthChange}
                min="5" max="200"
                size="sm" type="number" />
            </Form.Group>

            <Form.Group controlId="cabinetHeight">
                <Form.Label className="me-2">גובה (ס"מ)</Form.Label>
                <Form.Control  
                 value={cabinetHeight} 
                 onChange={this.props.cabinetHeightChange}
                 min="5" max="200"
                size="sm" type="range" />
                
                <Form.Control 
                value={cabinetHeight} 
                onChange={this.props.cabinetHeightChange}
                min="5" max="200"
                size="sm" type="number" />
            </Form.Group>


            <h6>מסך</h6>
            <Form.Group controlId="cabinetsHor">
                <Form.Label className="me-2">מספר קוביות לאורך</Form.Label>
                <Form.Control  
                 value={cabinetsHor} 
                 onChange={this.props.cabinetsHorChange}
                 min="1" max="200"
                size="sm" type="range" />
                
                <Form.Control 
                value={cabinetsHor} 
                onChange={this.props.cabinetsHorChange}
                min="1" max="200"
                size="sm" type="number" />
            </Form.Group>

            <Form.Group controlId="cabinetsVer">
                <Form.Label className="me-2">מספר קוביות לגובה</Form.Label>
                <Form.Control  
                 value={cabinetsVer} 
                 onChange={this.props.cabinetsVerChange}
                 min="1" max="200"
                size="sm" type="range" />
                
                <Form.Control 
                value={cabinetsVer} 
                onChange={this.props.cabinetsVerChange}
                min="1" max="200"
                size="sm" type="number" />
            </Form.Group>

            </Form>

          );
    }
}
 
export default UserForm;