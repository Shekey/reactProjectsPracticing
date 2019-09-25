import React, { Component } from 'react';
import {  CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './newsList.module.css';
import { URL } from '../../../config';
import Button  from '../Buttons/buttons'; 
import CardInfo from '../CardInfo/cardinfo';
class NewsList extends Component {
  state = {
    teams:[],
    items:[],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  constructor(props) {
    super(props);
    this.request(this.state.start, this.state.end);
  }

  request = (start,end) => {
    if(this.state.teams.length < 1) {
      axios.get(`${URL}/teams`).then(response => {
        this.setState({
          teams: response.data
        })
      })
    }
    axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then(response => {
      this.setState({
        items: [...this.state.items, ...response.data],
        start,
        end
      })
    })
  }

   renderNews = (type) => {
     let template = null;
     switch(type){
       case('card'):
          template = this.state.items.map((item, i) => {
            return (
            <CSSTransition classNames={{
              enter:styles.newslist_wrapper,
              enterActive: styles.newslist_wrapper_enter
            }}  timeout={500} key={i}>
            <div>
              <div className={styles.newslist_item}>
                <Link to={`/articles/${item.id}`}>
                  <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
          )});
        break;
        case('card-news'):
      default:
        template = null;
    }
    return template;
   }

   loadMore = () => {
     let end = this.state.end + this.state.amount
     this.request(this.state.end, end);
   }
  render() {
    return ( <div>
      <TransitionGroup component='div' className='list'>
        { this.renderNews(this.props.type) }
      </TransitionGroup>
      <Button
        cta='Load more news'
        type='loadmore'
        loadmore={() => this.loadMore()}
      />
    </div> );
  }
}
 
export default NewsList;