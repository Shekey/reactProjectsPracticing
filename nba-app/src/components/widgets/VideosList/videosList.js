import React, { Component } from 'react';
import styles from './videosList.module.css';
import { firebase, firebaseDB, firebaseLooper, firebaseTeams,firebaseVideos } from '../../../firebase';

import Button from '../Buttons/buttons';
import VideosTemplate from '../VideosList/videsListTemplate';

class VideosList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  constructor(props) {
    super(props);
    this.request(this.state.start, this.state.end);
  }

  renderTitle = () => {
    return this.props.title ? 
    <h3><strong>NBA</strong> Videos</h3>
    : null;
  }

  request = (start,end) => {
    if (this.state.teams.length < 1){
      firebaseVideos.once('value').then((snapshot) => {
        const teams = firebaseLooper(snapshot);
        this.setState({
          teams,
        });
      });
    }

    firebaseVideos.orderByChild('id').startAt(start).endAt(end).once('value').then((snapshot) => {
      const videos = firebaseLooper(snapshot);
      this.setState({
        videos: [...this.state.videos, ...videos],
        start,
        end
      });
    }).catch( e=> {
      console.log(e)
    });
  }
  renderVideos = () => {
    let template = null;
    switch(this.props.type){
      case('card'):
        template = <VideosTemplate data={this.state.videos} teams={this.state.teams} />
      break;
      default:
      template = null;
    }

    return template;
  }

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  }

  renderButton = () => {
    return this.props.loadmore ?
    <Button
      cta='Load More Videos'
      type='loadmore'
      loadmore= {() => this.loadMore()}
    />
    :
    <Button
    cta='Load more videos'
    type='linkTo'
    linkTo='/videos'
  />
  }
  render() { 
    return ( <div className={styles.videoslist}>
      { this.renderTitle() }
      { this.renderVideos() }
      { this.renderButton() }
    </div> );
  }
}
 
export default VideosList;