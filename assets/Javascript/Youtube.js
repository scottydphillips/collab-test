var key ='AIzaSyCTdVNpL7Bqg2E6ERIPsO5dTg3GPIOtwmM'
var url ='https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&maxResults=1&q='
var songName = document.getElementById('song-search');
var artistName = document.getElementById('artist-search');
var song = songName.textContent; 
var artist = artistName.textContent;
console.log(song)
console.log(artist)
var fetchYt = url + song + artist + '&key=' + key;
// ^ These  need to replace spaces with '+' -- might need to research how to replace chars in string with other chars


console.log(fetchYt)
function getYT(requestYT){
 fetch (fetchYt)
    .then(function(res){
       var videoUrl = res.url;
       console.log (videoUrl);
        return res.json();
    });
};

getYT(fetchYt); 
    function addVideo(){
        document.getElementById("youtube-container").innerHTML += '<iframe width="560" height="315" src="videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture></iframe>';
    }
// store video id OR url to a variable (BEFORE this function) DONE

searchBtn.addEventListener('click', getYT());