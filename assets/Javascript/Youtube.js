// var key ='AIzaSyCTdVNpL7Bqg2E6ERIPsO5dTg3GPIOtwmM'
// var key ='AIzaSyA4-_coMcDHGBCtZo-lAsTusx2Od87Pq90'
var key ='AIzaSyDMLxTEPfEaHTNQDsnhf_JMyNYmurge8tE'
// var apiUrl ='https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&maxResults=1&q='
var songName = document.getElementById('song-search');
var artistName = document.getElementById('artist-search');
var song = songName.textContent; 
var artist = artistName.textContent;
console.log(song)
console.log(artist)
var fetchYt = 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&maxResults=1&q=' + song + artist + '&key=' + key;
var videoUrl = '';

console.log(fetchYt)
function getYT(requestYT){
 fetch (fetchYt)
    .then(function(res){
        console.log(res)
        console.log(res.body)
       videoUrl = res.url;
       console.log (videoUrl);
       return res.json();
    }).finally(addVideo)
} 
 
function addVideo(){

        // document.getElementById("youtube-container").innerHTML = '<iframe width="560" height="315" src="${videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture></iframe>';
        document.getElementById("youtube-container").innerHTML = `<iframe src='${videoUrl}'></iframe>`;
        console.log(document.getElementById("youtube-container").innerHTML)
    }
// store video id OR url to a variable (BEFORE this function) 

searchBtn.addEventListener('click', getYT);
