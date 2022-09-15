import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { artists: [] };
    const params = this.getHashParams();
    const access_token = params.access_token;
    if (access_token) {
      this.getTopArtists(access_token);
    }
  }

  setTopArtists(artists, access_token) {
    let artistArray = [];
    artists.map((artist) => {
      artistArray.push(
        <div className='artist-container' key={artist.name}>
          <img src={artist.images[0].url} alt='Top Band/Artist' className='artist-image'></img>
          <div className='artist-name'>{artist.name}</div>
        </div>
      );
    })
    this.setState({artists: artistArray});
  }

  getTopArtists(access_token) {
    axios.get('https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=20', {
      headers: {
        'Authorization' : 'Bearer ' + access_token,
        'Content-Type' : 'application/json'
      }
    }).then(res => this.setTopArtists(res.data.items, access_token));
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.href.substring(23);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  render() {
    return (
      <div className='App'>
        <a href='http://localhost:8888'>Login to Spotify</a>
        <div id="artist-grid">
          {this.state.artists}
        </div>
      </div>
    );
  }
}

export default App;
