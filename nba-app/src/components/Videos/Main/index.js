import React from 'react'
import VideosList from '../../widgets/VideosList/videosList'

const VideosMain = () => {
  return ( <div>
    <VideosList type="card" title={false} start={0} amount={10} loadmore={true}/>
  </div> );
}
 
export default VideosMain;