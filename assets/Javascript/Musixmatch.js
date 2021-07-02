// Creating variables to target the HTML elements as well as the API keys
var searchBtn = document.getElementById('search');
var lyricsText = document.getElementById('lyrics-text');
var artistName = document.getElementById('artist-name');
var songName = document.getElementById('song-name');
var albumName = document.getElementById('album-name');
var genre = document.getElementById('genre');
var songDesc = document.getElementById('description');
var songArt = document.getElementById('song-artwork');
var similar = document.getElementById('similar-list');
var searchHistoryContainer = document.querySelector('#recent-searches');
var searchHistory = JSON.parse(localStorage.getItem("history")) || [];
var musixApi = '8c4828f1e437b6afe66bd85c55527db1';
var geniusApi = 'HfA6g6drdIw4BfueT9XFLsHa3oraqePJ0DEm4Lsx78zF5811JRKVurhCr1DZrS1k';
var videoApi = 'AIzaSyDIHvFfJcKOyK90KnTtlsHd5V0pe4-Hrxo'

// Calls the getLyrics function when the search button is clicked
searchBtn.addEventListener('click', getLyrics);


function renderSearchHistory() {
    searchHistoryContainer.innerHTML = '';
    for (var i = searchHistory.length - 1; i >= 0; i--) {
        var btn = document.createElement('button');
        
        btn.setAttribute('type', 'button');
        btn.classList.add('history-btn', 'btn-history');

        btn.setAttribute('data-search', searchHistory[i]);
        btn.textContent = searchHistory[i];
        searchHistoryContainer.append(btn);
    }
}

function appendToHistory(search) {
    if (searchHistory.indexOf(search) !== -1) {
        return;
      }
      searchHistory.push(search);
      localStorage.setItem('history', JSON.stringify(searchHistory));
      renderSearchHistory();
    }

function initSearchHistory() {
    var storedHistory = localStorage.getItem('history');
    if (storedHistory) {
      searchHistory = JSON.parse(storedHistory);
      }
      renderSearchHistory();
    }

// This function makes all of the API calls and displays the data
// from those API calls to the webpage
function getLyrics(event) {

    event.preventDefault();

    similar.innerHTML = "";

    var search = document.getElementById('song-search').value.trim();

    var song = document.getElementById('song-search').value.trim();
    var artist = document.getElementById('artist-search').value.trim();

    var fetchLyrics = 'https://enigmatic-citadel-24557.herokuapp.com/' + 'https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=' + song + '&q_artist=' + artist + '&apikey=' + musixApi;


    fetch (fetchLyrics)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            appendToHistory(search);

            if (data.message.body.length === 0) {
                lyricsText.textContent = "Sorry, can't find the lyrics for this song. Try searching for another one!"
            } else {
                lyricsText.textContent = data.message.body.lyrics.lyrics_body;
            }
        })

    var fetchGenius = 'https://enigmatic-citadel-24557.herokuapp.com/' + 'http://api.genius.com/search?q=' + artist + '&access_token=' + geniusApi;

    fetch (fetchGenius)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            for (i = 0; i < data.response.hits.length; i++) {
                var similarSong = data.response.hits[i].result.title;
                var li = document.createElement('li');
                li.appendChild(document.createTextNode(similarSong));
                similar.appendChild(li);
            }
        })

    var fetchInfo = 'https://enigmatic-citadel-24557.herokuapp.com/' + 'https://theaudiodb.p.rapidapi.com/searchtrack.php?s=' + artist + '&t=' + song;
    
    fetch(fetchInfo, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "2a8483057cmshe7359d410c7efa6p13a464jsn08b4d2f3b99b",
            "x-rapidapi-host": "theaudiodb.p.rapidapi.com"
        }
    })
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                console.log(data);
                songName.textContent = "Song: " + data.track[0].strTrack;
                artistName.textContent = "Artist: " + data.track[0].strArtist;
                albumName.textContent = "Album: " + data.track[0].strAlbum;
                songDesc.textContent = "Description: " + data.track[0].strDescriptionEN;
                songArt.src = data.track[0].strTrackThumb;
                genre.textContent = "Genre: " + data.track[0].strGenre;
            })

    var fetchVideo = 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&maxResults=1&q=' + song + artist + '&key=' + videoApi;

    fetch(fetchVideo)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            var vid = data.items[0].id.videoId;
            document.getElementById('youtube-vid').innerHTML = `    <iframe width="480" height="270" src="https://www.youtube.com/embed/${vid}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>`;
        })

}

initSearchHistory();
