//TODO
//+ add global variables

// GLOBAL VARIABLES
var selectedTopic = "cats";
var giphyURL = "https://api.giphy.com/v1/gifs/search?api_key=eUuVlEd7l3OZ27FzQGAlgo0TXWlm15Cb&q="+selectedTopic+"&limit=10";

var topics = ["Cats", "Dogs", "Deer", "Rabbits", "Fish", "Snakes", "Lions", "Chickens", "Cows", "Ferrets"];



// FUNCTIONS
function displayTopicButtons() {
   $("#topics").empty();
   for (var i = 0; i < topics.length; i++) {
      var topicName = topics[i];
      var topicButtons = 
      "<a href='#' class='topic-btn'>"+topicName+"</a>";
      
      $("#topics").append(topicButtons);
   }
}  //* End of DisplayTopicButtons

function queryGiphy() {
   $.ajax({
      url: giphyURL,
      method: "GET"
   }).then(function(response) {
      console.log(response.data);      
      for (var i = 0; i < 10; i++) {
         var rated = response.data[i].rating;
         var gify = response.data[i].images.original_still.url;
         console.log('gify: ', gify);

         var ratingP = $("<h4 id='gallery-header'>").text(rated);
         var gifyI = $("<img class='gallery-img' alt='placeholder' src='"+gify+"'>");
         
         var final = $("<div id='gallery-content'>");
         
         final.append(ratingP);
         final.append(gifyI);

         $("#gallery").append(final);
      }
   });
}  //* End of queryGiphy


queryGiphy();

$(document).ready(function() {

// MAIN PROCESS
displayTopicButtons();

});
