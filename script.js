gapi.load("client", loadClient);
  
function loadClient() {
    gapi.client.setApiKey("AIzaSyCTdVNpL7Bqg2E6ERIPsO5dTg3GPIOtwmM");
    return gapi.client.load("https://www.googleapis.com/youtube/v3/search")
        .then(function() { console.log("GAPI client loaded for API"); },
                function(err) { console.error("Error loading GAPI client for API", err); });
}

var ytForm = document.getElementById('yt-form');
var keywordInput = document.getElementById('keyword-input');
var maxResultInput = document.getElementById('maxResult-input');
var orderInput = document.getElementById('order-input');
var videoList = document.getElementById('videoListContainer');

$(document).ready(function() {

var options = {
    part: 'snippet',
    key: 'key', 
    maxResults: 1,
    order: 'viewCount',
    q:'searchString'
};

if (pageToken !='')
    options.pageToken = pageToken;
}

loadVideo();

function loadVideo() {
    $.getJSON(URL, options, function(data){
        
    })

}

});