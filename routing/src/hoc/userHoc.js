import React from 'react'

const userHoc = (WrapperComponent, arg1) => {
  return (props) => (
    <div>
      {arg1}
      <WrapperComponent {...props}/>
    </div>
    );
}

export default userHoc;