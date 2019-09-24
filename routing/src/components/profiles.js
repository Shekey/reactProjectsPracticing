import React from 'react'
import userHoc from '../hoc/userHoc'


const Profile = (props) => {
  return ( <div>
    This is cool
  </div> );
}

export default userHoc(Profile, 'Hello World');