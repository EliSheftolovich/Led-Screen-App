import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import UserSpec from '../comp/UserSpec';
import uuid from 'react-uuid';


class PersonalArea extends Component {
  constructor(props){
    super(props)
  }

  render() { 
    
    if( ! this.props.activeUser){
      return <Redirect push to="/login" />
  }
  // console.log("inside PersonalArea" + this.props.newSpecs)

  const filteredSpecs = this.props.newSpecs.filter( (specs) =>
     this.props.activeUser.id === specs.userId
);
const specElements = filteredSpecs.map((specs) => {
  return (<UserSpec screenTechData={specs} key={uuid()} removeSpec={this.props.removeSpec}/>);
});

    return ( 
    <div>
      <h3>אזור אישי</h3>
      <Row>
        {specElements}
      </Row>
    </div>

      );
  }
}
 

export default PersonalArea;