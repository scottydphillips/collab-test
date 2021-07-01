var searchBtn = document.getElementById('search');
var lyricsText = document.getElementById('lyrics-text');

var apiKey = '8c4828f1e437b6afe66bd85c55527db1';
var geniusApi = 'HfA6g6drdIw4BfueT9XFLsHa3oraqePJ0DEm4Lsx78zF5811JRKVurhCr1DZrS1k';

searchBtn.addEventListener('click', getLyrics);

function displaySong() {
    console.log('test search button');
}

function getLyrics(event) {

    event.preventDefault();

    var song = document.getElementById('song-search').value.trim();
    var artist = document.getElementById('artist-search').value.trim();

    console.log(song);
    console.log(artist);

    var fetchLyrics = 'https://enigmatic-citadel-24557.herokuapp.com/' + 'https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=' + song + '&q_artist=' + artist + '&apikey=' + apiKey;


    fetch (fetchLyrics)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);

            if (data.message.body.length === 0) {
                lyricsText.textContent = "Sorry, can't find the lyrics for this song. Try searching for another one!"
            } else {
                lyricsText.textContent = data.message.body.lyrics.lyrics_body;
            }
        })

    var fetchGenius = 'https://enigmatic-citadel-24557.herokuapp.com/' + 'http://api.genius.com/search?q=' + song + '&access_token=' + geniusApi;

    fetch (fetchGenius)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
        })

    var fetchInfo = 'https://enigmatic-citadel-24557.herokuapp.com/' + 'https://shazam.p.rapidapi.com/search?term=' + song;
    
        fetch(fetchInfo, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "shazam.p.rapidapi.com"
            }
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                console.log(data);
            })

}