import React from 'react'
import Image  from '../404.png'

const NotFound = () => {
  return ( <div>
    <div className='not-found__wrapper'>
      <img className='not-found__image' src={Image} alt='This is 404' />
    </div>
  </div> );
}
 
export default NotFound;