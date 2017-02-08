import React from 'react';
import Songs from '../components/Songs';
import {Link} from 'react-router';



export default class Album extends React.Component{
  constructor(props){
    super(props);
    // this.state = initialState;
  }

  componentDidMount() {
    const albumId = this.props.params.albumId;
    const selectAlbum = this.props.selectAlbum;

    selectAlbum(albumId);
  }

  render() {

  const album = this.props.album;
  const currentSong = this.props.currentSong;
  const isPlaying = this.props.isPlaying;
  const toggleOne = this.props.toggleOne;

  return (
    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={album.songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne} />
    </div>
  );
  }

}

