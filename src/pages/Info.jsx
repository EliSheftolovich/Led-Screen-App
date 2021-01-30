import React, { Component } from 'react';
import { Col, Form, Row, Table } from 'react-bootstrap';
import Like from '../comp/common/like';
import { getArticles } from '../data/articles';
import Highlighter from "react-highlight-words";
import './info.css';
import _ from 'lodash';


class Info extends Component {
  state={
    articles: getArticles(),
    searchQuery: "",
    sortColumn: {path: 'title', order: 'asc'}
  }

  handleSearch = e => {
    this.setState({searchQuery: e.target.value})
  }

  handleLike = article => {
    const articles = [...this.state.articles];
    // console.log(articles);
    const index = articles.indexOf(article);
    // console.log(index);
    articles[index] = {...articles[index]};
    // console.log(articles[index]);
    articles[index].liked = !articles[index].liked;
    // console.log(articles[index].liked);
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

  render() { 

    const {articles, searchQuery, sortColumn} =this.state;

    const filteredArticles = (searchQuery.length === 0)
    ?  articles
    :articles.filter(article => (article.title.startsWith(searchQuery))
     || (article.text.includes(searchQuery)));

     const sortedArticles =_.orderBy(filteredArticles, [sortColumn.path], [sortColumn.order]);

    return ( 
    <div>
      <h3>info with Search box</h3>
      
      <Table>
        <thead>
          <tr>
            <th onClick={()=>this.handleSort('title')}>נושא</th>
            <th></th>
            <th>
              <Row>
                <Col lg={4} sm={8}>
                <Form.Control type="text" placeholder="חפש..."
                value={this.state.searchQuery} onChange={this.handleSearch}
                />
                </Col>
              </Row>
            </th>
            <th onClick={()=>this.handleSort('subject')}>קטגוריה</th>
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
        onClick={()=>this.handleLike(article)}/></td>
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

    </div>

      );
  }
}
 

export default Info;
