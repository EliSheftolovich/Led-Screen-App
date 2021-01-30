import './App.css';
import React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';
import uuid from 'react-uuid';


import LandingPage from './pages/LandingPage';
import Info from './pages/Info';
import ScreenByAngle from './pages/ScreenByAngle';
import ScreenBySize from './pages/ScreenBySize';
import ContactUs from './pages/ContactUs';
import PersonalArea from './pages/PrersonalArea';
import AppNavbar from './comp/AppNavbar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import specJSON from './data/specs.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    // let specs;
    // if(localStorage.getItem('localSpecs')) {
    //   specs = JSON.parse(localStorage.getItem('localSpecs'));
    // }
    // else{
    //   specs = specJSON;
    // }
  }

    state = {
        cabinetWidth: 50,
        cabinetHeight: 50,
        cabinetPitch: 500/128,
        cabinetsHor: 10,
        cabinetsVer: 5,
        specs: [],
        activeUser:{
          "id": 1,
          "fname": "Eli",
          "lname": "Sheftolovich",
          "email": "elishafto@gmail.com",
          "pwd": "123",
          "userId": 1
      }
        // activeUser: null
    };

    // addNewSpec = (specObj)=>{
    //   this.setState({specs: this.state.specs.concat(specObj)});
    //   localStorage.setItem('localSpecs', JSON.stringify(
    //     this.state.specs.concat(specObj)
    //   ))
    // }


    
    removeSpec = (specToRemoveId) => {
      // console.log("removeSpec clicked")
      let newSpecs = [];
      newSpecs = this.state.specs.filter (s => s.id !== specToRemoveId);
      this.setState({specs : newSpecs});
    };

    addSpec = () =>{  
      // console.log("addSpec clicked")
      if (this.state.specs.length > 5){
       alert(" ניתן להוסיף עד שישה מפרטים")
      }
      else if (this.state.activeUser != (null || undefined)) {
        const newSpec = this.computeSpecs();
        newSpec.userId= this.state.activeUser.id;
        newSpec.id= uuid();
        const newSpecArr= [newSpec];
        this.setState({
          specs: this.state.specs.concat(newSpecArr)
         })
      }
      else {
        alert("יש להתחבר כמשתמש רשום  בשביל לגשת לאזור האישי")
      }
      }

      
    handleLogin = (userObj) => {
      this.setState({activeUser: userObj})
    }
    handleLogout = () => {
      this.setState({activeUser: null})
    }

    cabinetWidthChange = (e) => {
      this.setState({
          cabinetWidth: parseInt(e.target.value)
      })
    }
    cabinetHeightChange = (e) => {
      this.setState({
          cabinetHeight: parseInt(e.target.value)
      })
    }
    cabinetsVerChange = (e) => {
      this.setState({
        cabinetsVer: parseInt(e.target.value)
      })
    }
    cabinetsHorChange = (e) => {
      this.setState({
        cabinetsHor: parseInt(e.target.value)
      })
    }
    cabinetPitchChange = (e) => {
      if (e.target.value == 600/108) {
        this.setState({
          cabinetPitch: parseFloat(e.target.value),
          cabinetWidth: 60,
          cabinetHeight: 60,
        })
      }
      else {
        this.setState({
          cabinetPitch: parseFloat(e.target.value),
          cabinetWidth: 50,
          cabinetHeight: 50,
        })
      }
    }

    computeSpecs = () => {
      const {cabinetsHor, cabinetsVer, cabinetHeight, cabinetWidth, cabinetPitch } = this.state;

      const screenLength= cabinetsHor*cabinetWidth/100;  // Meters
      const screenHigth = cabinetsVer*cabinetHeight/100;
      const screenSize = `${screenLength} * ${screenHigth}`;
      const screenHorRes = screenLength * 1000 / cabinetPitch;
      const screenVerRes = screenHigth * 1000 / cabinetPitch;
      const screenResolution = `${screenHorRes} *  ${screenVerRes}`;
      const screenRatio = screenLength / screenHigth;
      const screenDiagonal = Math.sqrt((Math.pow((screenLength / 0.0254), 2) + Math.pow((screenHigth / 0.0254), 2))); // inch
      const ScreenSqm = screenLength*screenHigth;
      const screenMaxPowerCons = ScreenSqm * 500;  // Watt
      const screenAvPowerCons = ScreenSqm * 200;
      const screenWeigth = ScreenSqm * 36;  //kg
      const screenMinView = cabinetPitch * 1.1; //meters
      const screenOptView = cabinetPitch * 1.9;
  
        return {screenLength, screenHigth, screenSize, screenHorRes, screenVerRes, screenResolution, 
          screenRatio, screenDiagonal, ScreenSqm, screenMaxPowerCons, screenAvPowerCons, screenWeigth, screenMinView,
          screenOptView, cabinetPitch}
    }


    render() {
      // console.log(this.state.specs)
      const {cabinetsHor, cabinetsVer, cabinetHeight, cabinetWidth, cabinetPitch } = this.state;

      const screenTechData = this.computeSpecs();

        return (
            <div >
                <HashRouter>
                    <Container fluid>
                        <Row>
                            <Route exact path={['/ScreenBySize', '/ScreenByAngle', '/Info', '/ContactUs', '/PersonalArea']}>
                                <Col xs={2} >
                                <AppNavbar handleLogout={this.handleLogout} activeUser={this.state.activeUser} />
                                </Col>
                            </Route>
                            <Switch>

                                <Route exact path="/">
                                    <Col >
                                        <LandingPage />
                                    </Col>
                                </Route>
                                <Route exact path="/ScreenBySize">
                                    <Col xs={10}>
                                        <ScreenBySize
                                                cabinetWidthChange={this.cabinetWidthChange} 
                                                cabinetWidth={cabinetWidth}
                                                cabinetHeightChange={this.cabinetHeightChange} 
                                                cabinetHeight={cabinetHeight}
                                                cabinetsVerChange={this.cabinetsVerChange} 
                                                cabinetsVer={cabinetsVer}
                                                cabinetsHorChange={this.cabinetsHorChange} 
                                                cabinetsHor={cabinetsHor}
                                                cabinetPitchChange={this.cabinetPitchChange} 
                                                cabinetPitch={cabinetPitch}
                                                screenTechData={screenTechData}
                                                activeUser={this.state.activeUser}
                                                addSpec={this.addSpec}
                                        />
                                    </Col>
                                </Route>

                                <Route exact path="/ScreenByAngle">
                                    <Col xs={10} >
                                        <ScreenByAngle />
                                    </Col>
                                </Route>

                                <Route exact path="/Info">
                                    <Col xs={10} >
                                        <Info />
                                    </Col>
                                </Route>

                                <Route exact path="/ContactUs">
                                    <Col xs={10} >
                                        <ContactUs />
                                    </Col>
                                </Route>

                                <Route exact path="/PersonalArea">
                                    <Col xs={10} >
                                        <PersonalArea 
                                        activeUser={this.state.activeUser}
                                        newSpecs={this.state.specs} 
                                        removeSpec={this.removeSpec}
                                        />
                                    </Col>
                                </Route>
                                <Route exact path="/login">
                                    <Col xs={10} >
                                    <LoginPage handleLogin={this.handleLogin}/>
                                    </Col>
                                </Route>
                                <Route exact path="/signup">
                                    <Col xs={10} >
                                    <SignupPage/>
                                    </Col>
                                </Route>

                            </Switch>
                        </Row>
                    </Container>
                </HashRouter>

            </div>
        );
    }
}


export default App;
