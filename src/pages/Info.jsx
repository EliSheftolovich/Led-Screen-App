import React, { Component } from 'react';
import { Col, Form, Row, Table } from 'react-bootstrap';
import Like from '../comp/common/like';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import Highlighter from "react-highlight-words";
import './info.css';
import _ from 'lodash';


class Info extends Component {
  // state={
  //   articles: getArticles(),
  //   searchQuery: "",
  //   sortColumn: {path: 'title', order: 'asc'}
  // }

  renderSortIcon = (title) => {
    const {sortColumn} = this.props;
    if (title !== sortColumn.path) return null;
    if (sortColumn.order === 'asc') return <FontAwesomeIcon icon={faSortDown} style={{cursor:"pointer"}}/>;
    return <FontAwesomeIcon icon={faSortUp} style={{cursor:"pointer"}}/>;
    }

  render() { 

    const {articles, searchQuery, sortColumn} =this.props;

    const filteredArticles = (searchQuery.length === 0)
    ?  articles
    :articles.filter(article => (article.title.startsWith(searchQuery))
     || (article.text.includes(searchQuery)));

     const sortedArticles =_.orderBy(filteredArticles, [sortColumn.path], [sortColumn.order]);

    return ( 
      <Col >
      <h3>הסברים על מסכי לד</h3>
      
      <Table>
        <thead>
          <tr>
            <th onClick={()=>this.props.handleSort('title')}>נושא
            {this.renderSortIcon('title')}
            </th>
            <th>הקלק</th>
            <th>
              <Row>
                <Col sm={8}>
                <Form.Control type="text" placeholder="חפש..."
                value={searchQuery} onChange={this.props.handleSearch}
                />
                </Col>
              </Row>
            </th>
            <th onClick={()=>this.props.handleSort('subject')}>
            <div style={{display: "flex"}}>
              {this.renderSortIcon('subject')}
            קטגוריה
            </div>
            </th>
          </tr>
        </thead>
        <tbody>
      {sortedArticles.map(article => (
      <tr key={article._id}>
        <td>
        <Highlighter
    highlightClassName="HighlightClass"
    searchWords={[searchQuery]}
    autoEscape={true}
    textToHighlight= {article.title}/>
         </td>
        <td><Like 
        liked={article.liked} 
        onClick={()=>this.props.handleLike(article)}/></td>
        <td>
        <Highlighter
    highlightClassName="HighlightClass"
    searchWords={[searchQuery]}
    autoEscape={true}
    textToHighlight={article.text}/>
        </td>
        <td>{article.subject}</td>
      </tr>
      ))} 
        </tbody>
      </Table>

</Col>
      );
  }
}
 

export default Info;
