var searchBtn = document.getElementById('search');
var lyricsModal = document.getElementById('lyrics-modal');
var lyricsText = document.getElementById('lyrics-text');
var searchHistoryContainer = document.querySelector('#recent-searches');
var searchHistory = JSON.parse(localStorage.getItem("history")) || [];
var apiKey = '8c4828f1e437b6afe66bd85c55527db1';

searchBtn.addEventListener('click', getLyrics);
lyricsModal.addEventListener('click', displayLyrics);


function renderSearchHistory() {
    searchHistoryContainer.innerHTML = '';
    for (var i = searchHistory.length - 1; i >= 0; i--) {
        var btn = document.createElement('button');
        
        btn.setAttribute('type', 'button');
        btn.setAttribute('aria-controls', '');
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


function displaySong() {
    console.log('test search button');
}

function getLyrics(event) {

    event.preventDefault();
    var search = document.getElementById('song-search').value.trim();

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
            appendToHistory(search);
            lyricsText.textContent = data.message.body.lyrics.lyrics_body;
        })
}

function displayLyrics() {
    console.log('test modal');
}

initSearchHistory();