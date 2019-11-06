import React, { Component } from 'react';
import { firebase, firebaseDB, firebaseLooper, firebaseTeams,firebaseVideos } from '../../../../firebase';

import styles from '../../articles.module.css'
import Header from './header';
import VideosRelated from '../../../widgets/VideosList/VideosRelated/videosrelated';

class VideosArticle extends Component {
  state = { article:[], team:[], teams:[],related:[] }

  constructor(props) {
    super(props);
    firebaseDB.ref(`videos/${this.props.match.params.id}`).once('value').then( (snapshot) => {
      let article = snapshot.val();

      firebaseTeams.orderByChild('teamId').equalTo(article.team).once('value').then( (snap) => {
        const team = firebaseLooper(snap);
        this.setState({
          article,
          team
        })
      });
    });

    this.getRelated();
  }

  getRelated = () => {
    firebaseTeams.once('value').then( (snapshot) => {
      const teams = firebaseLooper(snapshot);
      firebaseVideos.orderByChild('team').equalTo(this.state.article.team).once('value').then( (snap) => {
        const related = firebaseLooper(snap);
        this.setState({
          teams,
          related
        });
      });
    });
  }
  render() {
    const article = this.state.article;
    const team = this.state.team;
    return (
    <div>
      <Header teamData={team[0]}/>
      <div className={styles.video_wrapper}>
        <h1>{article.title}</h1>
        <iframe
          title={article.title}
          width="100%" height="300px"
          src={`https://www.youtube.com/embed/${article.url}`}
        ></iframe>
        <VideosRelated teams ={this.state.teams} data={this.state.related}/>
      </div>
    </div>
  );
  }
}

export default VideosArticle;