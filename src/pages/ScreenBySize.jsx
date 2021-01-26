import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import UserResult from '../comp/common/UserResult';
import UserForm from '../comp/UserForm';
import UserScreen from '../comp/UserScreen';
import Usertips from '../comp/UserTips';

import './ScreenBySize.css';


class ScreenBySize extends Component {

  render() { 
    
    return ( 
    <div>
      <h3>Screen By Size</h3>
      <Row>
        <Col>
        <UserForm 
    cabinetWidthChange={this.props.cabinetWidthChange} 
    cabinetWidth={this.props.cabinetWidth}
    cabinetHeightChange={this.props.cabinetHeightChange} 
    cabinetHeight={this.props.cabinetHeight}
    cabinetsVerChange={this.props.cabinetsVerChange} 
    cabinetsVer={this.props.cabinetsVer}
    cabinetsHorChange={this.props.cabinetsHorChange} 
    cabinetsHor={this.props.cabinetsHor}
    cabinetPitchChange={this.props.cabinetPitchChange} 
    cabinetPitch={this.props.cabinetPitch}
        />
        </Col>

        <Col>
        <UserResult screenTechData={this.props.screenTechData}/>
        </Col> 

        <Col xs={4}>
        <Usertips screenTechData={this.props.screenTechData}/>
      </Col> 
      </Row>
      <br/>
      <Row>
      <Col>
        <UserScreen 
         cabinetWidth={this.props.cabinetWidth}
         cabinetHeight={this.props.cabinetHeight}
         cabinetsHor={this.props.cabinetsHor}
         cabinetsVer={this.props.cabinetsVer}
         cabinetPitch={this.props.cabinetPitch}
         screenTechData={this.props.screenTechData}
         
         />
      </Col> 


      </Row>
    </div>

      );
  }
}
 

export default ScreenBySize;