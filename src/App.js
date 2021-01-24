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


class App extends React.Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Container fluid>
                        <Row>
                            <Col xs={3} sm={2} >
                                <Route exact path={['/ScreenBySize', '/ScreenByAngle', '/Info', '/ContactUs', '/PersonalArea']}>
                                    <AppNavbar />
                                </Route>
                            </Col>
                            <Switch>

                                <Route exact path="/">
                                    <Col >
                                        <LandingPage />
                                    </Col>
                                </Route>
                                <Route exact path="/ScreenBySize">
                                    <Col xs={9} sm={10} >
                                        <ScreenBySize />
                                    </Col>
                                </Route>

                                <Route exact path="/ScreenByAngle">
                                    <Col xs={9} sm={10} >
                                        <ScreenByAngle />
                                    </Col>
                                </Route>

                                <Route exact path="/Info">
                                    <Col xs={9} sm={10} >
                                        <Info />
                                    </Col>
                                </Route>

                                <Route exact path="/ContactUs">
                                    <Col xs={9} sm={10} >
                                        <ContactUs />
                                    </Col>
                                </Route>

                                <Route exact path="/PersonalArea">
                                    <Col xs={9} sm={10} >
                                        <PersonalArea />
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


