
// gets local storage if there is any for the searches and saves them to the variable 'searchHistory'
var searchHistory = JSON.parse(localStorage.getItem("history")) || [];


if (history.length > 0) {
    PLACEHOLDERFUNCTION(history[history.length -1]);
}



// add this to the call to store the search to the history
        .then(function(response){
            var PLACEHOLDERsongName = response.PLACEHOLDER;
            if (history.indexOf(SONGNAME) === -1) {
                history.push(PLACEHOLDERHEADING);
                localStorage.setItem("history", JSON.stringify(searchHistory));
            }
        }


// will need to call this function INSIDE of the .then which also has the other functions in it...        
createButtons();

// this is a rough thing of how the buttons would go into the list
function createButtons() {
    $(".list-group").empty()
    for (var i = 0; i < history.length; i++) {
        $(".list-group").prepend(
          " <li class='list-group-item'>" + history[i] + "</li>"
        );
      }
    }

    $("#add-SONG").on("click", handleSubmit);
  $(".list-group").on("click", ".list-group-item", function () {
    PLACEHOLDERFUNCTION($(this).text());
  