import React from 'react';
import Songs from '../components/Songs';
import {Link} from 'react-router';



export default class Artist extends React.Component{
  constructor(props){
    super(props);
    // this.state = initialState;
  }

  componentDidMount() {
    const artistId = this.props.params.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);

  }

  render() {
  const artistId = this.props.params.artistId;
  const artist = this.props.artist.name;
  const albums = this.props.artistAlbums;
  const selectAlbum = this.props.selectAlbum;
  const songs = this.props.currentSongList;
  const currentSong = this.props.currentSong;
  const isPlaying = this.props.isPlaying;
  const toggleOne = this.props.toggleOne;

  return (

    <div>
      <h3>{ artist }</h3>
      <ul className="nav nav-tabs">
        <li><Link to={`/artists/${artistId}/albums`} >ALBUMS</Link></li>
        <li><Link to={`/artists/${artistId}/songs`}>SONGS</Link></li>
      </ul>
      {this.props.children ?
          React.cloneElement(this.props.children,
          {
            albums: albums,
            songs: songs,
            currentSong: currentSong,
            isPlaying: isPlaying,
            toggleOne: toggleOne
          })
          : null}

    </div>
  );
  }

}


// <div>
//       <h3>{artist}</h3>
//       <h4>Albums</h4>
//       <div className="row">
//       {
//         albums.map(album => (
//           <div className="col-xs-4" key={ album.id }>
//             <a className="thumbnail" href="#" onClick={() => selectAlbum(album.id)}>
//               <Link to={`/albums/${album.id}`}>
//                 <img src={ album.imageUrl } />

//               <div className="caption">

//                 <h5>
//                   <span>{album.name}</span>
//                 </h5>
//                 <small>{ album.songs.length } songs</small>

//               </div>
//               </Link>
//             </a>
//           </div>
//         ))
//       }
//       </div>
//       <h4>SONGS</h4>
//       <Songs
//         songs={songs}
//         currentSong={currentSong}
//         isPlaying={isPlaying}
//         toggleOne={toggleOne} />
//     </div>


