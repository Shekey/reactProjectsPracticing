import React from 'react'

const PostItem = (props) => {
  console.log(props.match.params)

  return ( <div>
    {props.match.params.id}  -  {props.match.params.username}
  </div> );
}

export default PostItem;