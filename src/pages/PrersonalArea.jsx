import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserSpec from '../comp/UserSpec';

class PersonalArea extends Component {
  render() { 
  //   if( ! this.props.activeUser){
  //     return <Redirect push to="/login" />
  // }
  console.log(this.props.screenTechData)
    return ( 
    <div>
      <h3>אזור אישי</h3>
      <UserSpec screenTechData={this.props.screenTechData}/>
    </div>

      );
  }
}
 

export default PersonalArea;