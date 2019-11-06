import React, { Component } from 'react';
import { URL } from '../../../../config';
import styles from '../../articles.module.css';
import { firebase, firebaseDB, firebaseLooper, firebaseTeams } from '../../../../firebase';
import Header from './header';

class NewsArticle extends Component {
  state = { article:[], team:[] }

  constructor(props) {
    super(props);
    firebaseDB.ref(`articles/${this.props.match.params.id}`).once('value').then( (snapshot) => {
      let article = snapshot.val();

      firebaseTeams.orderByChild('teamId').equalTo(article.team).once('value').then( (snap) => {
        const team = firebaseLooper(snap);
        this.setState({
          article,
          team
        })
      });
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