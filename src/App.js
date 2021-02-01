import './App.css';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
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

import { getArticles } from './data/articles';

// import specJSON from './data/specs.json';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   let specs;
  //   if(localStorage.getItem('localSpecs')) {
  //     specs = JSON.parse(localStorage.getItem('localSpecs'));
  //   }
  //   else{
  //     specs = specJSON;
  //   }
  // }

    state = {
        cabinetWidth: 50,
        cabinetHeight: 50,
        cabinetPitch: 500/128,
        cabinetsHor: 10,
        cabinetsVer: 5,
        specs: [],
        articles: getArticles(),
        searchQuery: "",
        sortColumn: {path: 'title', order: 'asc'},
        navDisplay: "flex",
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

navDisplayToggle = () => {
  const navDisplay = this.state.navDisplay === "flex" ? "none" : "flex" ;
  this.setState({navDisplay});
};

/// methods for Info Comp :
handleSearch = e => {
  this.setState({searchQuery: e.target.value})
}

handleLike = article => {
  const articles = [...this.state.articles];
  const index = articles.indexOf(article);
  articles[index] = {...articles[index]};
  articles[index].liked = !articles[index].liked;
  this.setState({articles});
}

handleSort = path => {
const sortColumn = {...this.state.sortColumn};
if (sortColumn.path === path)
sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
else {
sortColumn.path = path;
sortColumn.order ="asc";
}
this.setState({sortColumn})
};


//------Info Comp Methods end--------///
  

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
      const {cabinetsHor, cabinetsVer, cabinetHeight, cabinetWidth, cabinetPitch, navDisplay } = this.state;

      const screenTechData = this.computeSpecs();
      
      const mainColSize = (navDisplay === "flex")? "col-10" : "col-12";
  
        return (
            <div >
                <HashRouter>
                    <Container fluid>
                      <Row>
                            <Route exact path={['/ScreenBySize', '/ScreenByAngle', '/Info', '/ContactUs', '/PersonalArea']}>
                                <AppNavbar handleLogout={this.handleLogout} activeUser={this.state.activeUser}
                                navDisplay={this.state.navDisplay}/>
                            </Route>

                          <Switch>
                                <Route exact path="/">
                                        <LandingPage />
                                </Route>
                                <div className={mainColSize} style={{marginRight: "auto"}}>
                                <Route exact path="/ScreenBySize">
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
                                                handleNavDisplay={this.navDisplayToggle} 
                                        />
                                </Route>

                                <Route exact path="/ScreenByAngle">
                                        <ScreenByAngle />
                                </Route>

                                <Route exact path="/Info">
                                        <Info
                                        articles={this.state.articles}
                                        searchQuery={this.state.searchQuery}
                                        sortColumn={this.state.sortColumn}
                                        handleSearch={this.handleSearch}
                                        handleSort={this.handleSort}
                                        handleLike={this.handleLike}
                                        />
                                </Route>

                                <Route exact path="/ContactUs">
                                        <ContactUs />
                                </Route>

                                <Route exact path="/PersonalArea">
                                        <PersonalArea 
                                        activeUser={this.state.activeUser}
                                        newSpecs={this.state.specs} 
                                        removeSpec={this.removeSpec}
                                        articles={this.state.articles}
                                        removeLinkedArticle={this.handleLike}
                                        />
                                </Route>
                                <Route exact path="/login">
                                    <LoginPage handleLogin={this.handleLogin}/>
                                </Route>
                                <Route exact path="/signup">
                                    <SignupPage/>
                                </Route>
                                </div>
                          </Switch>
                      </Row>
                    </Container>
                </HashRouter>

            </div>
        );
    }
}


export default App;
