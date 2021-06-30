var key ='AIzaSyCTdVNpL7Bqg2E6ERIPsO5dTg3GPIOtwmM'
// var options = {
//     part: 'snippet',
//     key: 'key', 
//     maxResults: 1,
//     order: 'viewCount',
// }

var url ='https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&maxResults=1&q='

// Targets the id to pull text from
// var songName = getElementById('song-search');
// var artistName = getElementById('artist-search');
// ^ These ids need to match the form inputs on the main html

// Stores the text to a variable to use later in our fetchYT url
// var song = songName.textcontent; 
// var artist = artistName.textcontent;

// ^ These  need to replace spaces with '+' -- might need to research how to replace chars in string with other chars


// these are test variables that will be commented or deleted later
var song = 'nothing+lasts+forever+'
var artist = 'sam+hunt'





var fetchYt = url + song + artist + '&key=' + key;

console.log(fetchYt)
function getYT(requestYT){
 fetch (fetchYt)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
    $('#youtube-container').append(items.id.videoId)

    })
}


getYT(fetchYt); 
    function addVideo(){
        document.getElementById("youtube-container").innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + 'LX17j8h7K3o' + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
// 'youtube-container would need to be updated to reflect the id of where we want the video to go on the html page
// figure out how to target the video id 
// store video id to a variable (BEFORE this function)

    addVideo();

    // $("#youtube-container").('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + 'LX17j8h7K3o' + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' )

// <iframe width="560" height="315" src="https://www.youtube.com/embed/-vH2eZAM30s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

// item.id.videoId+'