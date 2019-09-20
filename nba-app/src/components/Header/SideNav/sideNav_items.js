import React from 'react'
import style from './sidenav.module.css';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

const SideNavItems = () => {
  const items = [
    {
      type: style.option,
      text: 'Home',
      icon: 'home',
      link: '/'
    },
    {
      type: style.option,
      text: 'News',
      icon: 'file-alt',
      link: '/news'
    },
    {
      type: style.option,
      text: 'Videos',
      icon: 'play',
      link: '/videos'
    },
    {
      type: style.option,
      text: 'Sign in',
      icon: 'sign-in-alt',
      link: '/sign-in'
    },
    {
      type: style.option,
      text: 'Sign out',
      icon: 'sign-out-alt',
      link: '/sign-out'
    }
  ];

  const showItems = () => {
    return items.map( (item,i) => {
      return (
        <div key={i} className={item.type}>
          <Link to={item.link}><FontAwesome name={item.icon}/>{item.text}</Link>
        </div>
      )
    })
  };
  return ( <div className={style.option}>
    {showItems()}
  </div> );
}
 
export default SideNavItems;