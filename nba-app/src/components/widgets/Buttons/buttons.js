import React from 'react'
import { Link } from 'react-router-dom'
import styles from './buttons.module.css';
const Buttons = (props) => {
  let template = null;
  switch(props.type) {
    case('loadmore'):
      template = (
        <div className={styles.button_wrapper} onClick={props.loadmore}>{props.cta}</div>
      );
      break;
      case('linkTo'):
      template = (
        <Link to={props.linkTo} className={styles.button_wrapper} onClick={props.loadmore}>{props.cta}</Link>
      );
      break;
      default:
      template = null;
  }
  return template;
}
 
export default Buttons;