var apiKey = '8c4828f1e437b6afe66bd85c55527db1';
var song = '';
var artist = '';

var fetchLyrics = 'https://enigmatic-citadel-24557.herokuapp.com/' + 'https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=' + song + '&q_artist=' + artist + '&apikey=' + apiKey;

function getLyrics(request) {
    fetch (fetchLyrics)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            lyrics.textContent = data.message.body.lyrics.lyrics_body;
        })
}

getAPI(fetchLyrics);