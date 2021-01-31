import React, { Component } from 'react';
import uuid from 'react-uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight, faMale } from '@fortawesome/free-solid-svg-icons';

import './UserScreen.css';


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
        const {cabinetsHor, cabinetsVer, cabinetHeight, cabinetWidth } = this.props;
        const {screenLength, screenHorRes, screenVerRes} = this.props.screenTechData;

        // const cabinetSize = {
        //     backgroundColor: "DodgerBlue",
        //     border: "1px solid black",
        //     height: cabinetHeight,
        //     width: cabinetWidth
        //   };

          let ratio = 3;
          if (cabinetsHor > 90 || cabinetsVer > 35) {ratio = 5.5}
          else if (cabinetsHor > 80 || cabinetsVer > 30) {ratio = 5}
          else if (cabinetsHor > 70 || cabinetsVer > 25) {ratio = 4.5}
          else if  (cabinetsHor > 60 || cabinetsVer > 20) {ratio = 4}
          else if (cabinetsHor > 50 || cabinetsVer > 15) {ratio = 3.5}

          const userScreenStyle = {
            width: (cabinetsHor * cabinetWidth)/ratio + "px",
            height: (cabinetsVer * cabinetHeight)/ratio + "px",
            backgroundColor: "DodgerBlue",
            display: "flex",
            flexWrap: "wrap",
          }
          const horizontalTextStyle = {
            width: (cabinetsHor * cabinetWidth)/ratio + "px",
            textAlign: "center",
            minWidth: "150px"

          };
          const verticalTextStyle = {
            width: (cabinetsVer * cabinetHeight)/ratio + "px",
            textAlign: "center",
            minWidth: "150px",
            position: "relative",
            right: "40px",
            top: "-30px"
          };

        return (
        <div className="user-screen">
            <div className="screen-ver-wraper" >
                <div className="vertical-text" style={verticalTextStyle}>
                <FontAwesomeIcon icon={faArrowRight} />
                <span className="m-1">{screenVerRes} פיקסלים </span>
                <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                     <div className="screen-hor-wraper" >  
                        <div className="horizontal-text" style={horizontalTextStyle}>
                        <FontAwesomeIcon icon={faArrowRight} />
                        {/* <span className="mx-2">{screenLength} מטר</span> */}
                        <span className="m-1">{screenHorRes} פיקסלים </span>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                        <div style={userScreenStyle} >{this.renderCabinets()}</div>
                      </div>
            </div>
        </div> 
         );
    }
}
 
export default UserScreen;

// The value of the viewBox attribute is a list of four 
// numbers: min-x, min-y, width and height. 
// The numbers separated by whitespace and/or a comma, which specify 
// a rectangle in user space which is mapped to the bounds of the viewport 
// established for the associated SVG element (not the browser viewport).


// resize: "none",
// overflow: "inherit"