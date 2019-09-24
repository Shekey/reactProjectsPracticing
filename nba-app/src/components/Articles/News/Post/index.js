import React, { Component } from 'react';
import { URL } from '../../../../config';
import styles from '../../articles.module.css';
import axios from 'axios';

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
    console.log(this.state);
    return ( <div>
      article view
    </div> );
  }
}
 
export default NewsArticle;