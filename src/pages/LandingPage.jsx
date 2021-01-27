import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './LandingPage.css';

class LandingPage extends Component {
  render() { 

    return ( 
    <div className="landing">

      <h3 >האתר נועד למי שמעוניין לקבל מידע טכני על מסכי לד</h3>

      <a href="/#/ScreenBySize" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">כניסה</a>

    </div>
      );
  }
}

export default LandingPage;