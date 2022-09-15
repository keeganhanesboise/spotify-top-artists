import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './artistInfo.css';

export default function ArtistInfo() {
    const [artistInfo, setArtistInfo] = useState('');
    const [topTracks, setTopTracks] = useState('');
    
    let params = useParams();
    
    let handleTracks = (tracks) => {
        let tracksArray = [];
        tracks.forEach(track => {
            tracksArray.push(
                <div className='track-container' key={track.name}>
                    <img className='album-art' src={track.album.images[0].url}/>
                    <div className='track-name'>{track.name}</div>
                </div>
            );
        });
        setTopTracks(tracksArray);
    }

    useEffect(() => {
        let access_token = '';
        let artist_id = '';
        let startIndex = 0;
        for(let i = 0; i < params.artistId.length; i++) {
            if (params.artistId[i] === '=') {
                startIndex = i + 1;
                artist_id = params.artistId.substring(i + 1, params.artistId.length);
            }
            if (params.artistId[i] === '&') {
                access_token = params.artistId.substring(startIndex, i);
            }
        }
        axios.get(`https://api.spotify.com/v1/artists/${artist_id}`, {
            headers: {
              'Authorization' : 'Bearer ' + access_token,
              'Content-Type' : 'application/json'
            }
        }).then(res => setArtistInfo(res.data))
        .catch(err => console.log(err));

        axios.get(`https://api.spotify.com/v1/artists/${artist_id}/top-tracks?market=US`, {
            headers: {
              'Authorization' : 'Bearer ' + access_token,
              'Content-Type' : 'application/json'
            }
        }).then(res => handleTracks(res.data.tracks))
        .catch(err => console.log(err));
    }, []);
    
    return (
        <div className='artist-info'>
            <h1>Name: {artistInfo.name}</h1>
            <h2>Genres: </h2>
            {artistInfo.genres}
            <h2>Popularity: </h2>
            {artistInfo.popularity}
            <h2>Top Tracks: </h2>
            <div id='top-tracks-container'>
                {topTracks}
            </div>
        </div>
    )
}