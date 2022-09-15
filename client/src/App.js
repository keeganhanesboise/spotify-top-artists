import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    const params = this.getHashParams();
    console.log(params.access_token);
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

        </div>
      </div>
    );
  }
}

export default App;
