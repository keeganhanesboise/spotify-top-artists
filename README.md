# Spotify Top Artists
Spotify Top Artists allows users to log into their Spotify account and learn more about their top 20 artists. Each artist has their own individual page with what genres they fall under, popularity relative to other artists and their top 10 tracks.

# How To Use
## Get Spotify Client ID and Secret

Sign up for a Spotify account and then create/register a new application by following [these](https://developer.spotify.com/documentation/general/guides/authorization/app-settings/) instructions

Make sure to add http://localhost:8888/callback as a Redirect URI in the project settings

Use the generated credentials as the values for the environment variables below

## Set Up Environment

```sh
touch web-api-auth-examples/.env
```
```sh
SPOTIFY_CLIENT_ID={REPLACE WITH SPOTIFY CLIENT ID}
SPOTIFY_SECRET={REPLACE WITH SPOTIFY SECRET}
```

## Install/Run

```sh
# Clone this repository
$ git clone https://github.com/keeganhanesboise/spotify-top-artists.git

# Go into the repository
$ cd spotify-top-artists

# Install dependencies
$ cd client npm install
$ cd ../web-api-auth-examples npm install

# Run the app
$ cd client
$ npm start
$ cd ../web-api-auth-examples/authorization_code
$ node app.js
```

# Usage Examples

* Click "log in" link to get redirected to Spotify login
* Give the application permission to use your Spotify account
* Click on any of your top 20 artists
* Go back to view another artist

## Top 20 Artists:

<img src="imgs\Screenshot 2022-09-22 175248.png"></img>

<br>

## Artist page:
![image](https://user-images.githubusercontent.com/70166916/190526197-e514013b-5a0b-4549-9c60-c0b01d47fb39.png)

<br>

# Credits

This software uses the following:

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
