import React from 'react'
import NewsSlider from '../../widgets/NewsSlider/slider';
import NewsList from '../../widgets/NewsList/newsList';

const NewsMain = () => {
  return ( <div style={{
    fontSize:0
  }}>
    <NewsSlider type='featured' start={0} amount={3 } settings={{
      dots:false
    }}/>
    <NewsList type='cardMain' loadMore={true} start={3} amount={10} />
    News main
  </div> );
}
 
export default NewsMain;