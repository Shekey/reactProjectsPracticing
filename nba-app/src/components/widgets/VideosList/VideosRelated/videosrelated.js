import React from 'react'
import styles from '../videosList.module.css'
import VideosListTemplate from '../videsListTemplate';

const videosRelated = (props) => {
  return ( <div className={styles.related_video_wrapper}>
      <VideosListTemplate data={props.data} teams={props.teams}/>
  </div> );
}
 
export default videosRelated;