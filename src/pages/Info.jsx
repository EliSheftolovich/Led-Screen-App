import React, { Component } from 'react';
import { Col, Form, Row, Table } from 'react-bootstrap';
import Like from '../comp/common/like';
import { getArticles } from '../data/articles';

class Info extends Component {
  state={
    articles: getArticles(),
    searchQuery: ""
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


  render() { 
    const {articles, searchQuery} =this.state;

    const currentArticles = (searchQuery.length === 0)
    ?  articles
    :articles.filter(article => (article.title.startsWith(searchQuery))
     || (article.text.includes(searchQuery)));

    return ( 
    <div>
      <h3>info with Search box</h3>
      
      <Table>
        <thead>
          <tr>
            <th>נושא</th>
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
            <th>קטגוריה</th>
          </tr>
        </thead>
        <tbody>
      {currentArticles.map(article => (
      <tr key={article._id}>
        <td>{article.title}</td>
        <td><Like 
        liked={article.liked} 
        onClick={()=>this.handleLike(article)}/></td>
        <td>{article.text}</td>
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
