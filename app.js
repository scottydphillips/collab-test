$(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            maxResults: 3,
            order: "viewCount"
            q: encodeURIComponent($("#search"))
        });
        request.execute(function(response) {
            var results = response.result;
            $.each(results, function(index, item) {
                $.get("tpl/item.html", function(index,item) {
                    $("#results").append(data);
                });
            })
        });
    });
});

function init() {
    gapi.client.setApiKey("AIzaSyCTdVNpL7Bqg2E6ERIPsO5dTg3GPIOtwmM")
    gapi.cleint.load("youtube", "v3", function(){
     })
}