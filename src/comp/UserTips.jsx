import React, { Component } from 'react';
import uuid from 'react-uuid'

import { Table } from 'react-bootstrap';

class Usertips extends Component {
    render() { 
      const {screenLength, screenHigth, screenSize, screenHorRes, screenVerRes, screenResolution, 
        screenRatio, screenDiagonal, ScreenSqm, screenMaxPowerCons, screenAvPowerCons,
         screenWeigth, screenMinView, screenOptView} = this.props.screenTechData

         const notifications = [];

         if (screenMaxPowerCons > 72000 ){
          notifications.push(<div>מצריך חיבור מעל  125A תלת פאזי</div>)
        }
        else if (screenMaxPowerCons > 54000){
          notifications.push(<div>מצריך חיבור פעמיים 63A  תלת פאזי</div>)
        }
        else if (screenMaxPowerCons > 36000){
          notifications.push(<div>מצריך חיבור 63A ו32A תלת פאזי</div>)
        }
        else if (screenMaxPowerCons > 18000){
          notifications.push(<div>מצריך חיבור 63A תלת פאזי</div>)
        }
        else if (screenMaxPowerCons > 9000){
          notifications.push(<div>מצריך חיבור 32A תלת פאזי</div>)
        }
        else if (screenMaxPowerCons > 3000){
          notifications.push(<div>מצריך חיבור 16A תלת פאזי</div>)
        }
        else {
          notifications.push(<div>מצריך חיבור 16A חד פאזי</div>)
        }

        if (screenHorRes > 7680 || screenVerRes > 4320 ){
          notifications.push(<div> רזולוציה גבוהה מ 8K, מצריך מערכת ניגון תוכן מסונכרנת מרובת יציאות</div>)
        }
        else if (screenHorRes > 3840 || screenVerRes > 2160){
          notifications.push(<div> רזולוציה גבוהה מ 4K, צריך מערכת ניגון תוכן מסונכרנת עם מספר יציאות </div>)
        } 
        else if (screenHorRes > 1920 || screenVerRes > 1080){
          notifications.push(<div>רזולוציה גבוהה מ full-hd, יתכן וצריך מערכת ניגון תוכן מסונכרנת</div>)
        } 

        if (screenRatio > 1.72 && screenRatio < 1.82 ){
          notifications.push(<div> המסך הוא בתחום יחס תמונה 16:9</div>)
        }
        else if (screenRatio > 1.55 && screenRatio < 1.65 ){
          notifications.push(<div> המסך הוא בתחום יחס תמונה 16:10</div>)
        }
        else if (screenRatio > 1.28 && screenRatio < 1.38 ){
          notifications.push(<div> המסך הוא בתחום יחס תמונה 4:3</div>)
        }

        return (
            <div>
              <h6>תיבת המלצות</h6>
              <Table striped bordered hover variant="light">
                <tbody>
                    {notifications.map(notification => (
                      <tr key={uuid()}>
                        <td>{notification}</td>
                      </tr>))}
                </tbody>
              </Table>
            </div>
          );
    }
}
 
export default Usertips;