import React, { Component } from 'react';
import uuid from 'react-uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMale } from '@fortawesome/free-solid-svg-icons';

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
        const {cabinetsHor, cabinetsVer, cabinetHeight, cabinetWidth, cabinetPitch } = this.props;

        const cabinetSize = {
            backgroundColor: "DodgerBlue",
            border: "1px solid black",
            height: cabinetHeight,
            width: cabinetWidth
          };

          const userScreenStyle = {
            width: (cabinetsHor * cabinetWidth)/2 + "px",
            height: (cabinetsVer * cabinetHeight)/2 + "px",
            backgroundColor: "DodgerBlue",
            display: "flex",
            flexWrap: "wrap"
          }

        return (
        <div className="user-screen">
            <div style={cabinetSize}></div>
            <br></br>
            <div className="screen-wraper" >
            {/* <figure> 
                <FontAwesomeIcon icon={faMale} 
                preserveAspectRatio="xMidYMin slice" x="0" y="30" 
                viewBox="0 0 100 100" width="160" height="60"             
                // className="man-icon"
                />
            </figure>  */}
                <div style={userScreenStyle} >
                {this.renderCabinets()}
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