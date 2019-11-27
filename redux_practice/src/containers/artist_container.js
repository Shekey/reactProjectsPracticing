import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { artistDetail } from '../actions';
import { bindActionCreators } from 'redux';
class ArtistContainer extends Component {
    
  constructor(props) {
    super(props);
    this.props.artistDetail(this.props.match.params.id);
  }
    render(){
        console.log(this.props);
        let artist = this.state.artist;
        return (
            <div className="artist_view">
                <div className="artist_background" style={{
                    background:`url(/images/${artist.cover})`
                }}>
                    <Link to="/">
                        Back home
                    </Link>
                    <div className="name">{artist.name}</div>
                </div>
                <div className="artist_description">
                    <p>{artist.bio}</p>
                    <div className="tags">
                        <div>
                            <strong>Style:</strong> {artist.style}
                        </div>
                    </div>
                </div>
                <div className="artist_album_list">
                    { artist.albums ? 
                        artist.albums.map( item =>(
                        <div key={item.cover} className="albums">
                            <div className="cover" style={{
                                background:`url(/images/albums/${item.cover})`
                            }}>
                            </div>
                        </div>
                    ))
                    :null
                }
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
  return {
    artists: state.artists
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({artistDetail},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ArtistContainer);