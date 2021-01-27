import './App.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Info from './pages/Info';
import ScreenByAngle from './pages/ScreenByAngle';
import ScreenBySize from './pages/ScreenBySize';
import ContactUs from './pages/ContactUs';
import PersonalArea from './pages/PrersonalArea';
import AppNavbar from './comp/AppNavbar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


class App extends React.Component {

    state = {
        cabinetWidth: 50,
        cabinetHeight: 50,
        cabinetPitch: 500/128,
        cabinetsHor: 10,
        cabinetsVer: 5,
        specId: '',
        userId: '',
        activeUser:{
          "id": 1,
          "fname": "Eli",
          "lname": "Sheftolovich",
          "email": "elishafto@gmail.com",
          "pwd": "123",
          "userId": 1
      }
    };

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

    render() {
        const {cabinetsHor, cabinetsVer, cabinetHeight, cabinetWidth, cabinetPitch } = this.state;

        const screenLength= cabinetsHor*cabinetWidth/100;  // Meters
        const screenHigth = cabinetsVer*cabinetHeight/100;
        const screenSize = `${screenLength} * ${screenHigth}`;
        const screenHorRes = screenLength * 1000 / cabinetPitch;
        const screenVerRes = screenHigth * 1000 / cabinetPitch;
        const screenResolution = `${screenHorRes} *  ${screenVerRes}`;
        const screenRatio = screenLength / screenHigth;
        const screenDiagonal = Math.pow((Math.pow((screenLength / 0.0254), 2) * Math.pow((screenHigth / 0.0254), 2)), 1/2); // inch
        const ScreenSqm = screenLength*screenHigth;
        const screenMaxPowerCons = ScreenSqm * 500;  // Watt
        const screenAvPowerCons = ScreenSqm * 200;
        const screenWeigth = ScreenSqm * 36;  //kg
        const screenMinView = cabinetPitch * 1.1; //meters
        const screenOptView = cabinetPitch * 1.9;
    
        const screenTechData = {screenLength, screenHigth, screenSize, screenHorRes, screenVerRes, screenResolution, 
          screenRatio, screenDiagonal, ScreenSqm, screenMaxPowerCons, screenAvPowerCons, screenWeigth, screenMinView,
          screenOptView, cabinetPitch}

        return (
            <div >
                <HashRouter>
                    <Container>
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
                                        <PersonalArea activeUser={this.state.activeUser} screenTechData={screenTechData}/>
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

    // function App() {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn React
    //         </a>
    //       </header>
    //     </div>
    //   );
    // }
