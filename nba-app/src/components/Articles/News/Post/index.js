import React, { Component } from 'react';
import { URL } from '../../../../config';
import styles from '../../articles.module.css';
import axios from 'axios';
import Header from './header';

class NewsArticle extends Component {
  state = { article:[], team:[] }

  constructor(props) {
    super(props);
    axios.get(`${URL}/articles?id=${this.props.match.params.id}`).then((response) => {
      let article = response.data[0];

      axios.get(`${URL}/teams?id=${article.team}`).then((response) => {
        this.setState({
          article,
          team:response.data
        })
      })
    });
  }
  render() { 
    const article = this.state.article;
    const team = this.state.team;
    return (
      <div className={styles.article_wrapper}>
        <Header teamData={team[0]} date={article.date} author={article.author}/>
        <div className={styles.article_body}>
          <h1>{article.title}</h1>
          <div className={styles.articleImage} style={{
            background:`url('/images/articles/${article.image}')`
          }}></div>
          <div className={styles.article_text}>
            {article.body}
          </div>
        </div>
      </div> );
  }
}
 
export default NewsArticle;