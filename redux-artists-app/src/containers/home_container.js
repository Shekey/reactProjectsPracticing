import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { artistListAll,artistList } from '../actions';
import Search from '../components/search';
import ArtistList from '../components/artistList';
export class HomeContainer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.props.artistListAll();
  }

  getKeywords = (event) => {
    let key = event.target.value;
    this.props.artistList(key);
  }
  render() {
    return (
      <div>
        <Search keywords={this.getKeywords}/>
        <ArtistList artists={this.props.artists.artistList}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    artists: state.artists
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({artistListAll,artistList},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
