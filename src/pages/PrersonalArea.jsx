import React, { Component } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import UserSpec from '../comp/UserSpec';
import uuid from 'react-uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinusCircle } from '@fortawesome/free-solid-svg-icons'


class PersonalArea extends Component {
  constructor(props){
    super(props)
  }

  render() { 
    const {articles, newSpecs, activeUser } = this.props
    
    if( !activeUser){ return <Redirect push to="/login" />}

  // console.log("inside PersonalArea" +newSpecs)

const filteredArticles =  articles.filter(article => !article.liked);
const articleElement = filteredArticles.map (article => (
  <tr key={article._id}>
    <td onClick={()=>this.props.removeLinkedArticle(article)}>
    <FontAwesomeIcon icon={faMinusCircle} style={{cursor:"pointer"}}/>
       </td>
    <td>{article.title}</td>
    <td>{article.text}</td>
  </tr>));

  const filteredSpecs =newSpecs.filter( (specs) =>
    activeUser.id === specs.userId
);
const specElements = filteredSpecs.map((specs) => {
  return (<UserSpec screenTechData={specs} key={uuid()} removeSpec={this.props.removeSpec}/>);
});

    return ( 
      <Col>
        <Container>

      <h3>אזור אישי</h3>
      <Table size="sm" variant="info" >
        <thead>
        <tr>
        <th colSpan="3">ניתן להוסיף כאן ערכים שהתעניינת בהם מהעמוד "הסבר על מסכי לד"</th>
      </tr>
        </thead>
      <tbody>
      {articleElement}
      </tbody>
      </Table>
      <Row>
        {specElements}
      </Row>
      </Container>

    </Col>

      );
  }
}
 

export default PersonalArea;