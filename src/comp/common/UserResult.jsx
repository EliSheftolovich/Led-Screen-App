import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class UserResult extends Component {


    render() { 
      const {cabinetsHor, cabinetsVer, cabinetHeight, cabinetWidth, cabinetPitch } = this.props;

      const screenLength= cabinetsHor*cabinetWidth/100;
      const screenHigth = cabinetsVer*cabinetHeight/100;
      const screenSize = `${screenLength} * ${screenHigth}`;
      const screenHorRes = screenLength * 1000 / cabinetPitch;
      const screenVerRes = screenHigth * 1000 / cabinetPitch;
      const screenResolution = `${screenHorRes} *  ${screenVerRes}`;
      const screenRatio = screenHigth /screenLength;
      const screenDiagonal = Math.pow((Math.pow((screenLength / 0.0254), 2) * Math.pow((screenHigth / 0.0254), 2)), 1/2);
      const ScreenSqm = screenLength*screenHigth;
      const screenMaxPowerCons = ScreenSqm * 500;
      const screenAvPowerCons = ScreenSqm * 200;
      const screenWeigth = ScreenSqm * 36;
      const screenMinView = cabinetPitch * 1.1;
      const screenOptView = cabinetPitch * 1.9;

      const screenTechData = {screenLength, screenHigth, screenSize, screenHorRes, screenVerRes, screenResolution, 
        screenRatio, screenDiagonal, ScreenSqm, screenMaxPowerCons, screenAvPowerCons, screenWeigth, screenMinView, screenOptView}


      // console.log(screenDiagonal)

      const resultsStyle = {
        direction: "ltr",
        textAlign: "right"
      }
        return (
<React.Fragment>
<h6>נתונים טכניים</h6>

<Table striped bordered hover>

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
      <td style={resultsStyle}>{ScreenSqm}</td>
    </tr>
    <tr>
      <td>צריכת חשמל מקסימלית (Kw)</td>
      <td style={resultsStyle}>{screenMaxPowerCons/1000}</td>
    </tr>
    <tr>
      <td>צריכת חשמל ממוצעת (Kw)</td>
      <td style={resultsStyle}>{screenAvPowerCons/1000}</td>
    </tr>
    <tr>
      <td>משקל לפי 36 ק"ג למ"ר</td>
      <td style={resultsStyle}>{screenWeigth}</td>
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