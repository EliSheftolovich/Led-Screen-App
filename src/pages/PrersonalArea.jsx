import React, { Component } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import UserSpec from '../comp/UserSpec';
import uuid from 'react-uuid';


class PersonalArea extends Component {
  constructor(props){
    super(props)
  }

  render() { 
    const {articles, newSpecs, activeUser } = this.props
    console.log(articles)
    
    if( !activeUser){ return <Redirect push to="/login" />}

  // console.log("inside PersonalArea" +newSpecs)

const filteredArticles =  articles.filter(article => !article.liked);
const articleElement = filteredArticles.map (article => (
  <tr key={article._id}>
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
      <Col xs={10} >
      <h3>אזור אישי</h3>
      <Table size="sm" variant="info">
        <thead>
        <th colSpan="2">
        <td >ניתן להוסיף כאן ערכים שהתעניינת בהם מהעמוד "הסבר על מסכי לד"</td>
      </th>
        </thead>
      <tbody>
      {articleElement}
      </tbody>
      </Table>
      <Row>
        {specElements}
      </Row>
    </Col>

      );
  }
}
 

export default PersonalArea;