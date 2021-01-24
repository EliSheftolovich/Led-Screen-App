import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class UserScreen extends Component {
    constructor(props){
        super(props)
    }
    renderCabinets = () => {
        const res = [];
        const width = (100/this.props.cabinetsHor) + "%";
        const height = (100/this.props.cabinetsVer) + "%";
        for (let i=1; i<=this.props.cabinetsHor; i++) {
            for (let j=1; j<=this.props.cabinetsVer; j++) {
                const cabinet= <span style={{width, height, border: "solid 1px black"}}>{i*j}</span>;
                res.push(cabinet)
            }
        }
        return res;
    }

    render() { 

        let cabinetSize = {
            backgroundColor: "DodgerBlue",
            border: "1px solid black",
            height: "30px",
            width: "30px"
          };

          const userScreenStyle = {
            width: (this.props.cabinetsHor * 30) + "px",
            height: (this.props.cabinetsVer * 30) + "px",
            backgroundColor: "red",
            display: "flex",
            flexWrap: "wrap"
          }

        return (
        <div>
            <div style={cabinetSize}></div>
            <br></br>
            <div>
                <div style={userScreenStyle} className="user-screen">
                {this.renderCabinets()}
                </div>
            </div>
        </div> 
         );
    }
}
 
export default UserScreen;


