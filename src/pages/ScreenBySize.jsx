import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import UserResult from '../comp/common/UserResult';
import UserForm from '../comp/UserForm';
import UserScreen from '../comp/UserScreen';
import Usertips from '../comp/UserTips';

import './ScreenBySize.css';


class ScreenBySize extends Component {

  state = {
    cabinetWidth: 50,
    cabinetHeight: 50,
    cabinetPitch: 500/128,
    cabinetsHor: 10,
    cabinetsVer: 5

};

cabinetWidthChange = (e) => {
  this.setState({
      cabinetWidth: parseInt(e.target.value)
  })
}
cabinetHeightChange = (e) => {
  this.setState({
      cabinetHeight: parseInt(e.target.value)
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
cabinetPitchChange = (e) => {
  if (e.target.value == 600/108) {
    this.setState({
      cabinetPitch: parseFloat(e.target.value),
      cabinetWidth: 60,
      cabinetHeight: 60,
    })
  }
  else {
    this.setState({
      cabinetPitch: parseFloat(e.target.value),
      cabinetWidth: 50,
      cabinetHeight: 50,
    })
  }
}

changeCabinetTo60 = (e) =>{
  this.setState({
    cabinetWidth: 60,
    cabinetHeight: 60
  })
}

  render() { 
    return ( 
    <div>
      <h3>Screen By Size</h3>
      <Row>
        <Col>
        <UserForm 
        cabinetWidthChange={this.cabinetWidthChange} 
        cabinetWidth={this.state.cabinetWidth}
        cabinetHeightChange={this.cabinetHeightChange} 
        cabinetHeight={this.state.cabinetHeight}
        cabinetsVerChange={this.cabinetsVerChange} 
        cabinetsVer={this.state.cabinetsVer}
        cabinetsHorChange={this.cabinetsHorChange} 
        cabinetsHor={this.state.cabinetsHor}
        cabinetPitchChange={this.cabinetPitchChange} 
        cabinetPitch={this.state.cabinetPitch}
        
        />
        </Col>

        <Col>
        <UserResult
         cabinetWidth={this.state.cabinetWidth}
         cabinetHeight={this.state.cabinetHeight}
         cabinetsHor={this.state.cabinetsHor}
         cabinetsVer={this.state.cabinetsVer}
         cabinetPitch={this.state.cabinetPitch}
        
        />
        </Col> 

        <Col xs={4}>
        <Usertips/>
      </Col> 
      </Row>
      <br/>
      <Row>
      <Col>
        <UserScreen
         cabinetWidth={this.state.cabinetWidth}
         cabinetHeight={this.state.cabinetHeight}
         cabinetsHor={this.state.cabinetsHor}
         cabinetsVer={this.state.cabinetsVer}
         cabinetPitch={this.state.cabinetPitch}
         
         />
      </Col> 


      </Row>
    </div>

      );
  }
}
 

export default ScreenBySize;