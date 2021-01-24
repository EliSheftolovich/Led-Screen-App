import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import UserResult from '../comp/common/UserResult';
import UserForm from '../comp/UserForm';
import UserScreen from '../comp/UserScreen';
import Usertips from '../comp/UserTips';

class ScreenBySize extends Component {

  state = {
    cabinetLength: 50,
    cabinetWidth: 50,
    cabinetPtich: 3.9,
    cabinetsHor: 10,
    cabinetsVer: 5

};

cabinetLengthChange = (e) => {
  this.setState({
      cabinetLength: parseInt(e.target.value)
  })
}
cabinetWidthChange = (e) => {
  this.setState({
      cabinetWidth: parseInt(e.target.value)
  })
}

cabinetsVerChange = (e) => {
  this.setState({
    cabinetsVer: parseInt(e.target.value)
  })
}
cabinetsHorChange = (e) => {
  this.setState({
    cabinetsHor: parseInt(e.target.value)
  })
}

  render() { 
    return ( 
    <div>
      <h3>Screen By Size</h3>
      <Row>
        <Col>
        <UserForm 
        cabinetLengthChange={this.cabinetLengthChange} 
        cabinetLength={this.state.cabinetLength}
        cabinetWidthChange={this.cabinetWidthChange} 
        cabinetWidth={this.state.cabinetWidth}
        cabinetsVerChange={this.cabinetsVerChange} 
        cabinetsVer={this.state.cabinetsVer}
        cabinetsHorChange={this.cabinetsHorChange} 
        cabinetsHor={this.state.cabinetsHor}
        
        />
        </Col>

        <Col>
        <UserResult/>
        </Col> 

        <Col xs={4}>
        <Usertips/>
      </Col> 
      </Row>
      <br/>
      <Row>
      <Col>
        <UserScreen
         cabinetLength={this.state.cabinetLength}
         cabinetWidth={this.state.cabinetWidth}
         cabinetsHor={this.state.cabinetsHor}
         cabinetsVer={this.state.cabinetsVer}
         
         />
      </Col> 


      </Row>
    </div>

      );
  }
}
 

export default ScreenBySize;