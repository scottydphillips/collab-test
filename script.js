$(document).ready(function() {

var key = 'AIzaSyCTdVNpL7Bqg2E6ERIPsO5dTg3GPIOtwmM';
var URL = 'https://www.googleapis.com/youtube/v3.search';

$(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
    }

})

var options = {
    key: key, 

}

});

function loadVids() {
    $.getJSON(URL, options)

}