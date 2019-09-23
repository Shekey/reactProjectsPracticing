import React from 'react';
import styles from './videosList.module.css';
import Button from '../Buttons/buttons';
import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/cardinfo';

const VideosListTemplate = (props) => {
  return props.data.map((item,i) => {
    return <Link key={i} to={`/videos/${item.id}`}>
        <div className={styles.video_list_item}>
          <div className={styles.left} style={{
            background:`url(/images/videos/${item.image})`
          }}>
          <div></div>
        </div>
        <div className={styles.right}>
        <CardInfo teams={props.teams} team={item.team} date={item.date}/>
          <h2>{item.title}</h2>
        </div>
        </div>
      </Link>
  })
}
 
export default VideosListTemplate;


