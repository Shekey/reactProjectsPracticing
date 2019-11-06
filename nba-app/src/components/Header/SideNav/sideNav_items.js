import React from 'react'
import style from './sidenav.module.css';
import FontAwesome from 'react-fontawesome';
import { Link, withRouter } from 'react-router-dom';
import { firebase } from '../../../firebase';

const SideNavItems = (props) => {
  console.log(props);
  const items = [
    {
      type: style.option,
      text: 'Home',
      icon: 'home',
      link: '/',
      login: ''
    },
    {
      type: style.option,
      text: 'News',
      icon: 'file-alt',
      link: '/news',
      login: ''
    },
    {
      type: style.option,
      text: 'Videos',
      icon: 'play',
      link: '/videos',
      login: ''
    },
    {
      type: style.option,
      text: 'Dashboard',
      icon: 'sign-in-alt',
      link: '/dashboard',
      login: true
    },
    {
      type: style.option,
      text: 'Sign in',
      icon: 'sign-in-alt',
      link: '/sign-in',
      login: false
    },
    {
      type: style.option,
      text: 'Sign out',
      icon: 'sign-out-alt',
      link: '/sign-out',
      login: true
    }
  ];
 
  const element = (item,i) => (
    <div key={i} className={item.type}>
    <Link to={item.link}><FontAwesome name={item.icon}/>{item.text}</Link>
    </div>
  )
  const restricted = (item, i) => {
    let template = null;
    
    if(props.user === null && item.login) {
      template = element(item,i);
    }

    if(props.user !== null && !item.login) {
      if(item.link === '/sign-out') { 
        template = (
          <div key={i} className={item.type} onClick={() => {
            firebase.auth().signOut().then( () => {
              props.history.push('/');
            })
          }}>
          <FontAwesome name={item.icon}/>{item.text}
          </div>
        )
      } else {
        template = element(item,i);
      }
    }
    return template;
  }
  const showItems = () => {
    return items.map( (item,i) => {
      return item.login !== '' ? restricted(item,i) :
      element(item,i)
    })
  };
  return ( <div className={style.option}>
    {showItems()}
  </div> );
}
 
export default withRouter(SideNavItems);