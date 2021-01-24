import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Like from '../comp/common/like';
import { getArticles } from '../data/articles';

class Info extends Component {
  state={
    articles: getArticles()
  }

  handleLike = (article) => {
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
    return ( 
    <div>
      <h3>info with Search box</h3>
      
      <Table>
        <thead>
          <tr>
            <th>נושא</th>
            <th></th>
            <th></th>
            <th>קטגוריה</th>
          </tr>
        </thead>
        <tbody>
          {this.state.articles.map(article => (
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
