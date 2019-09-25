import React from 'react'
import styles from '../articles.module.css';


const postData = (props) => {
  return (
    <div className={styles.article_post_data}>
      <div>
        Date:<span>{props.data.date}</span>
      </div>
      <div>
        Author:<span>{props.data.author}</span>
      </div>
    </div>
  );
}

export default postData;