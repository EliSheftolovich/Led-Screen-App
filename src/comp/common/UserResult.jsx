import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class UserResult extends Component {


    render() { 

      const {screenLength, screenHigth, screenSize, screenHorRes, screenVerRes, screenResolution, 
        screenRatio, screenDiagonal, ScreenSqm, screenMaxPowerCons, screenAvPowerCons,
         screenWeigth, screenMinView, screenOptView} = this.props.screenTechData


      // console.log(this.props.screenTechData)

      const resultsStyle = {
        direction: "ltr",
        textAlign: "right"
      }
        return (
<React.Fragment>
<h6>נתונים טכניים</h6>

<Table striped bordered hover variant="light">

  <tbody >
    <tr>
      <td>מידות המסך (מטר)</td>
      <td style={resultsStyle}>{screenSize}</td>
    </tr>
    <tr>
      <td>רזולוציה</td>
      <td style={resultsStyle}>{screenResolution}</td>
    </tr>
    <tr>
      <td>יחס תמונה</td>
      <td style={resultsStyle}>{screenRatio.toFixed(3)}</td>
    </tr>
    <tr>
      <td>דיאגונל (אינץ')</td>
      <td style={resultsStyle}>{screenDiagonal.toFixed(1)}</td>
    </tr>
    <tr>
      <td>מ"ר</td>
      <td style={resultsStyle}>{ScreenSqm.toFixed(1)}</td>
    </tr>
    <tr>
      <td>צריכת חשמל מקסימלית (Kw)</td>
      <td style={resultsStyle}>{(screenMaxPowerCons/1000).toFixed(1)}</td>
    </tr>
    <tr>
      <td>צריכת חשמל ממוצעת (Kw)</td>
      <td style={resultsStyle}>{(screenAvPowerCons/1000).toFixed(1)}</td>
    </tr>
    <tr>
      <td>משקל לפי 36 ק"ג למ"ר</td>
      <td style={resultsStyle}>{screenWeigth.toFixed(1)}</td>
    </tr>
    <tr>
      <td>מרחק צפיה מינימלי (מטר)</td>
      <td style={resultsStyle}>{screenMinView.toFixed(1)}</td>
    </tr>
    <tr>
      <td>מרחק צפיה אופטימלי (מטר)</td>
      <td style={resultsStyle}>{screenOptView.toFixed(1)}</td>
    </tr>

  </tbody>
</Table>
</React.Fragment>

          );
    }
}
 
export default UserResult;