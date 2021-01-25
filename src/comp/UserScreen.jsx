import React, { Component } from 'react';
import uuid from 'react-uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMale } from '@fortawesome/free-solid-svg-icons';

class UserScreen extends Component {

    renderCabinets = () => {
        const res = [];
        const width = (100/this.props.cabinetsHor) + "%";
        const height = (100/this.props.cabinetsVer) + "%";
        for (let i=1; i<=this.props.cabinetsHor; i++) {
            for (let j=1; j<=this.props.cabinetsVer; j++) {
                const cabinet= <span key={uuid()} style={{width, height, border: "solid 1px black"}}></span>;
                res.push(cabinet)
            }
        }
        return res;
    }

    render() { 
        const {cabinetsHor, cabinetsVer, cabinetLength, cabinetWidth } = this.props;

        console.log(this.props.cabinetPitch)

        const cabinetSize = {
            backgroundColor: "DodgerBlue",
            border: "1px solid black",
            height: cabinetWidth,
            width: cabinetLength
          };

          const userScreenStyle = {
            width: (cabinetsHor * cabinetLength) + "px",
            height: (cabinetsVer * cabinetWidth) + "px",
            backgroundColor: "DodgerBlue",
            display: "flex",
            flexWrap: "wrap"
          }

          const screenWraper = {
            display: "flex",
            alignItems: "flex-end"
          }

        return (
        <div>
            <div style={cabinetSize}></div>
            <br></br>
            <div style={screenWraper}> 
                <FontAwesomeIcon icon={faMale}/>
                <div style={userScreenStyle} className="user-screen">
                {this.renderCabinets()}
                </div>
            </div>

            

        </div> 
         );
    }
}
 
export default UserScreen;


