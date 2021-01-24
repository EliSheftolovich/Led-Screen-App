import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import UserResult from '../comp/common/UserResult';
import UserForm from '../comp/UserForm';
import UserScreen from '../comp/UserScreen';
import Usertips from '../comp/UserTips';

class ScreenBySize extends Component {

  state = {
    cabinetLength: 50
}

cabinetLengthChange = (e) => {
  this.setState({
      cabinetLength: parseInt(e.target.value)
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
        cabinetLength={this.state.cabinetLength} />
        </Col>

        <Col>
        <UserResult/>
        </Col> 
      </Row>
      <br/>
      <Row>
      <Col>
        <UserScreen
         cabinetsHor={10}
         cabinetsVer={5}
         cabinetLength={this.state.cabinetLength}/>
      </Col> 
      <Col xs={4}>
        <Usertips/>
      </Col> 

      </Row>
    </div>

      );
  }
}
 

export default ScreenBySize;